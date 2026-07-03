/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: false,
  },
  // Le guide città vivono su /citta/[citta] (in Next un segmento è dinamico
  // solo se è interamente [param]), ma l'URL pubblico e canonico resta
  // /acqua-di-{citta}: il rewrite serve la pagina, il redirect evita che la
  // stessa pagina esista a due URL.
  async rewrites() {
    return [
      {
        source: '/acqua-di-:citta',
        destination: '/citta/:citta',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/citta/:citta',
        destination: '/acqua-di-:citta',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
