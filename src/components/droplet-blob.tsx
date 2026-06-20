export function DropletBlob() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      {/* Top-left violet blob */}
      <div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(139,92,246,0.55), rgba(139,92,246,0) 70%)',
        }}
      />
      {/* Top-right sky blob */}
      <div
        className="absolute -top-20 right-[-10rem] h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(14,165,233,0.5), rgba(14,165,233,0) 70%)',
        }}
      />
      {/* Bottom-center emerald blob */}
      <div
        className="absolute bottom-[-12rem] left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(16,185,129,0.45), rgba(16,185,129,0) 70%)',
        }}
      />
      {/* Mid-right soft pink/violet accent */}
      <div
        className="absolute top-[40%] right-[-8rem] h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(217,70,239,0.4), rgba(217,70,239,0) 70%)',
        }}
      />
    </div>
  );
}
