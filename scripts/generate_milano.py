#!/usr/bin/env python3
"""Generate 20 Milano neighborhood entries and insert into neighborhood-guides.ts"""
import re

# (slug_suffix, name, district, buildingAge, risksList, flavor, ctaVariant)
MILANO = [
    ("centro", "Centro", "Municipio 1", "storico-pre1900",
     ["Tubazioni vetuste centro storico", "Stagnazione condomini d'epoca", "Possibili tracce di piombo"],
     "il cuore storico dentro la cerchia dei Navigli", "metalli-pesanti"),
    ("brera", "Brera", "Municipio 1", "storico-pre1900",
     ["Tubazioni edifici storici", "Piombo possibile in palazzi pre-1960", "Calcare diffuso"],
     "il quartiere d'arte di Milano", "metalli-pesanti"),
    ("porta-romana", "Porta Romana", "Municipio 5", "primo-novecento",
     ["Mix tubazioni storiche e rifatte", "Durezza alta", "Condomini di varie epoche"],
     "l'area tra centro e periferia sud", "kit-analisi"),
    ("porta-venezia", "Porta Venezia", "Municipio 3", "primo-novecento",
     ["Edifici Liberty con impianti datati", "Durezza alta", "Possibile piombo in palazzi storici"],
     "il quartiere Liberty", "metalli-pesanti"),
    ("garibaldi", "Garibaldi", "Municipio 9", "misto",
     ["Mix edifici storici e nuovissimi", "Durezza alta tipica milanese", "Tubazioni recenti nei nuovi grattacieli"],
     "Porta Nuova con la parte storica", "kit-analisi"),
    ("navigli", "Navigli", "Municipio 6", "storico-pre1900",
     ["Edifici storici lungo le vie d'acqua", "Tubazioni datate", "Piombo possibile"],
     "i Navigli storici di Milano", "metalli-pesanti"),
    ("isola", "Isola", "Municipio 9", "misto",
     ["Riqualificazione 2010+", "Mix tubazioni storiche e nuove", "Durezza alta"],
     "il quartiere riqualificato vicino a Porta Nuova", "kit-analisi"),
    ("sempione", "Sempione", "Municipio 8", "primo-novecento",
     ["Edifici Liberty e anni '20", "Tubazioni storiche", "Durezza alta"],
     "l'area attorno al Parco Sempione", "metalli-pesanti"),
    ("citylife", "CityLife", "Municipio 8", "moderno",
     ["Tubazioni nuove (anni 2010+)", "Durezza alta", "Bassi rischi piombo"],
     "il quartiere di nuova costruzione con le Torri", "kit-analisi"),
    ("cinque-giornate", "Cinque Giornate", "Municipio 4", "primo-novecento",
     ["Edifici primi '900", "Durezza alta", "Condomini di varie epoche"],
     "l'area tra centro e Calvairate", "kit-analisi"),
    ("bicocca", "Bicocca", "Municipio 9", "misto",
     ["Riqualificazione ex industriale 2000+", "Durezza alta", "Tubazioni miste"],
     "l'area universitaria a nord", "kit-analisi"),
    ("bovisa", "Bovisa", "Municipio 9", "dopoguerra",
     ["Edifici anni '50-'70", "Durezza alta", "Tubazioni miste in alcune palazzine"],
     "l'ex zona industriale a nord-ovest", "kit-analisi"),
    ("quarto-oggiaro", "Quarto Oggiaro", "Municipio 8", "dopoguerra",
     ["Edifici anni '60-'70", "Tubazioni da manutenzione", "Durezza alta"],
     "l'area popolare a nord-ovest", "kit-analisi"),
    ("affori", "Affori", "Municipio 9", "dopoguerra",
     ["Edifici anni '50-'70", "Durezza alta", "Condomini di periferia nord"],
     "il quartiere a nord di Milano", "kit-analisi"),
    ("greco", "Greco", "Municipio 2", "primo-novecento",
     ["Edifici primi '900 e dopoguerra", "Durezza alta", "Tubazioni miste"],
     "il quartiere residenziale a nord-est", "kit-analisi"),
    ("lambrate", "Lambrate", "Municipio 3", "misto",
     ["Mix industriale-residenziale", "Durezza alta", "Tubazioni varie età"],
     "l'area est tra ferrovia e Lambro", "kit-analisi"),
    ("forlanini", "Forlanini", "Municipio 4", "dopoguerra",
     ["Edifici dopoguerra", "Durezza alta", "Vicinanza area Linate"],
     "la zona vicino all'aeroporto Linate", "kit-analisi"),
    ("baggio", "Baggio", "Municipio 7", "misto",
     ["Mix borgo storico e dopoguerra", "Durezza alta", "Tubazioni miste"],
     "l'ex borgo a ovest", "kit-analisi"),
    ("lorenteggio", "Lorenteggio", "Municipio 6", "dopoguerra",
     ["Edifici anni '60", "Durezza alta", "Condomini popolari"],
     "l'area sud-ovest", "kit-analisi"),
    ("barona", "Barona", "Municipio 6", "dopoguerra",
     ["Edifici anni '60-'70", "Durezza alta", "Tubazioni periferiche"],
     "l'area popolare a sud-ovest", "kit-analisi"),
]


def esc(s):
    """Escape for TS double-quoted string."""
    return s.replace('\\', '\\\\').replace('"', '\\"')


def entry(slug_suffix, name, district, age, risks, flavor, cta):
    slug = f"milano-{slug_suffix}"
    short_title = f"Acqua del rubinetto a {name} (Milano): durezza, piombo, controlli"
    meta = (
        f"Acqua del rubinetto a {name}, Milano ({district}). Gestore MM SpA, "
        f"durezza tipicamente alta, rischi piombo nei palazzi storici. "
        f"Cosa controllare e quando."
    )
    search_kw = [
        f"acqua {slug_suffix.replace('-', ' ')} milano",
        f"acqua rubinetto {slug_suffix.replace('-', ' ')}",
        f"qualita acqua milano {slug_suffix.replace('-', ' ')}",
        f"tubazioni piombo {slug_suffix.replace('-', ' ')}",
        f"durezza acqua milano {slug_suffix.replace('-', ' ')}",
    ]
    search_kw_str = ", ".join([f'"{esc(k)}"' for k in search_kw])
    intro = (
        f"{name} è {flavor}, parte del {district}. "
        f"L'acqua del rubinetto distribuita da MM SpA arriva qui prevalentemente dalla "
        f"falda lombarda, con apporto dalle sorgenti prealpine: il profilo è tipicamente "
        f"a durezza medio-alta (intorno ai 30-45 °F) e con conducibilità elettrica nella "
        f"media milanese. In quartieri come {name} il fattore più importante per la "
        f"qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati "
        f"interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti "
        f"di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare "
        f"metalli. Sapere cosa controllare a {name} aiuta a sfruttare l'acqua del "
        f"rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia."
    )
    risks_str = ", ".join([f'"{esc(r)}"' for r in risks])

    s1_p1 = (
        "Il gestore del servizio idrico integrato di Milano è MM SpA "
        "(Metropolitana Milanese), che cura captazione, adduzione e distribuzione "
        "dell'acqua potabile in città. La rete milanese è alimentata principalmente "
        "dalla falda lombarda profonda e da apporti dalle sorgenti prealpine."
    )
    s1_p2 = (
        f"A {name}, parte del {district}, la rete è caratterizzata da edifici di varia "
        f"epoca: {flavor}. I tratti pubblici a monte del contatore sono soggetti a "
        f"manutenzione periodica, mentre gli impianti interni dei condomini ricadono "
        f"sotto la responsabilità dell'amministratore."
    )

    if age in ("storico-pre1900", "primo-novecento"):
        s2_p1 = (
            "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora "
            "tratti residui di tubazioni in piombo nei collegamenti privati interni: "
            "dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può "
            "contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona "
            "pratica far scorrere alcuni litri prima dell'uso alimentare."
        )
    else:
        s2_p1 = (
            "In quartieri di costruzione più recente come questo, il rischio di tubazioni "
            "in piombo è basso: i materiali principali sono rame, acciaio inox o "
            "polietilene. Resta importante la cura della manutenzione condominiale e la "
            "sostituzione periodica di guarnizioni e filtri."
        )
    s2_p2 = (
        "Caratteristica costante a Milano è la durezza dell'acqua, mediamente alta: ha "
        "effetti soprattutto sugli impianti (calcare in caldaie, boiler, lavastoviglie) "
        "e sul gusto, ma non sulla salute. Se la zona condominiale ha sistemi "
        "centralizzati di acqua calda, è opportuno includere nel monitoraggio i "
        "parametri legati alla legionella, secondo le linee guida del Ministero della "
        "Salute (2015)."
    )

    s3_p1 = (
        f"Per famiglie residenti a {name} consigliamo come pannello minimo: durezza "
        "totale, conducibilità, cloro residuo, microbiologica di base (E. coli, "
        "coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche "
        "piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a "
        "norme tecniche, possibilmente da personale di un laboratorio qualificato."
    )
    s3_p2 = (
        "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al "
        "pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena "
        "ripetere il controllo a distanza di 2-3 mesi."
    )

    s4_p1 = (
        f"Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione "
        f"del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel "
        f"colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o "
        f"acquisto di un immobile a {name}, o semplicemente passare dal consumo di "
        f"acqua in bottiglia a quella del rubinetto per ragioni ambientali."
    )

    if age in ("storico-pre1900", "primo-novecento"):
        faq1_a = (
            "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, "
            "soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 "
            "in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici "
            "idonei."
        )
    else:
        faq1_a = (
            "Negli edifici di questa zona, di costruzione più recente, le tubazioni "
            "in piombo sono molto rare. Il rischio principale è minore rispetto al "
            "centro storico."
        )

    faqs = [
        (f"Le tubazioni in piombo sono ancora presenti a {name}?", faq1_a),
        (f"L'acqua di {name} è dura?",
         "Sì, l'acqua del rubinetto a Milano è generalmente medio-dura/dura (durezza "
         "intorno ai 30-45 gradi francesi), in linea con il profilo della falda "
         "lombarda. È normale, non pericolosa per la salute, ma influisce su "
         "elettrodomestici e gusto."),
        (f"Devo bollire l'acqua del rubinetto a {name}?",
         "No, in condizioni ordinarie l'acqua di MM SpA è potabile e controllata. "
         "Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o "
         "sali per evaporazione, quindi non è una buona strategia preventiva contro "
         "contaminazioni chimiche."),
        ("Dove trovo i referti del gestore?",
         "MM SpA pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, "
         "suddivisi per municipio e zona di distribuzione."),
    ]

    faqs_str = ",\n      ".join(
        [f'{{ q: "{esc(q)}", a: "{esc(a)}" }}' for q, a in faqs]
    )

    cta_context = (
        f"Analisi acqua del rubinetto a {name} (Milano) con un laboratorio qualificato: "
        f"durezza, microbiologica, e — nei palazzi antichi — verifica metalli "
        f"(piombo, rame, nichel)."
    )

    return f"""  {{
    slug: "{slug}",
    citySlug: "milano",
    cityName: "Milano",
    neighborhoodName: "{esc(name)}",
    district: "{esc(district)}",
    shortTitle: "{esc(short_title)}",
    metaDescription: "{esc(meta)}",
    searchKeywords: [{search_kw_str}],
    intro: "{esc(intro)}",
    buildingAge: "{age}",
    typicalRisks: [{risks_str}],
    sections: [
      {{
        heading: "L'acqua a {esc(name)}: contesto urbano e tubazioni",
        paragraphs: [
          "{esc(s1_p1)}",
          "{esc(s1_p2)}"
        ]
      }},
      {{
        heading: "Rischi specifici a {esc(name)}",
        paragraphs: [
          "{esc(s2_p1)}",
          "{esc(s2_p2)}"
        ]
      }},
      {{
        heading: "Cosa controllare a casa a {esc(name)}",
        paragraphs: [
          "{esc(s3_p1)}",
          "{esc(s3_p2)}"
        ]
      }},
      {{
        heading: "Quando fare un'analisi a {esc(name)}",
        paragraphs: [
          "{esc(s4_p1)}"
        ]
      }}
    ],
    faqs: [
      {faqs_str}
    ],
    ctaVariant: "{cta}",
    ctaContext: "{esc(cta_context)}",
  }}"""


def main():
    entries = ",\n".join(entry(*m) for m in MILANO)

    with open('src/lib/neighborhood-guides.ts', 'r', encoding='utf-8') as f:
        text = f.read()

    marker = "];\n\nconst NEIGHBORHOOD_INDEX"
    if marker not in text:
        print("ERROR: marker not found")
        return
    replacement = ",\n" + entries + "\n];\n\nconst NEIGHBORHOOD_INDEX"
    text = text.replace(marker, replacement, 1)
    with open('src/lib/neighborhood-guides.ts', 'w', encoding='utf-8', newline='\n') as f:
        f.write(text)
    print("Milano entries inserted.")

    milano_count = len(re.findall(r'citySlug: "milano"', text))
    roma_count = len(re.findall(r'citySlug: "roma"', text))
    print(f"roma: {roma_count}  milano: {milano_count}")


if __name__ == "__main__":
    main()
