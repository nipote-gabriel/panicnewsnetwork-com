import Image from "next/image";

export function TvBanner() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24">
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* logo, flickering like a CRT signal */}
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="tv-flicker relative">
          <Image
            src="/brand/pnn-tv-banner.jpg"
            alt="Panic News Network"
            width={1536}
            height={1024}
            className="w-full select-none"
            priority={false}
          />
        </div>

        {/* rgb glitch ghost */}
        <div
          className="tv-glitch-layer pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            backgroundImage: "url(/brand/pnn-tv-banner.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "hue-rotate(90deg) saturate(3)",
          }}
        />
      </div>

      {/* scanlines */}
      <div className="tv-scanlines pointer-events-none absolute inset-0 z-10 opacity-60 mix-blend-overlay" />

      {/* static noise */}
      <div className="tv-noise pointer-events-none absolute inset-0 z-10 opacity-[0.05] mix-blend-overlay" />

      {/* top/bottom scan-frame bars for a broadcast-monitor feel */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-white/10" />
    </section>
  );
}
