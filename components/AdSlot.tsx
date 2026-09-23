import Image from "next/image";

const AD_SIZES = {
  leaderboard: { width: 728, height: 90, fluid: true },
  rectangle: { width: 300, height: 250, fluid: false },
  "half-page": { width: 300, height: 600, fluid: false },
  "mobile-banner": { width: 320, height: 50, fluid: true },
} as const;

export type AdSize = keyof typeof AD_SIZES;

const HQC_URL = "https://www.headquarterscomedy.com";

const ADS: Partial<Record<AdSize, { src: string; width: number; height: number; alt: string }[]>> = {
  leaderboard: [
    { src: "/ads/altman-behr-defense-728x90.jpg", width: 1600, height: 187, alt: "Altman Behr Defense — Superior solutions for a safer tomorrow." },
    { src: "/ads/gorman-pharmaceuticals-728x90.jpg", width: 728, height: 90, alt: "Gorman Pharmaceuticals — The world, addicted." },
    { src: "/ads/dongvape-728x90.jpg", width: 728, height: 90, alt: "DongVape — Suck on this." },
  ],
  rectangle: [
    { src: "/ads/altman-behr-defense-300x250.jpg", width: 700, height: 583, alt: "Altman Behr Defense — Superior solutions for a safer tomorrow." },
    { src: "/ads/dongvape-300x250.jpg", width: 300, height: 250, alt: "DongVape — Suck on this." },
  ],
};

export function AdSlot({
  size = "leaderboard",
  adIndex = 0,
  bleed = false,
  className = "",
}: {
  size?: AdSize;
  adIndex?: number;
  bleed?: boolean;
  className?: string;
}) {
  const { width, height, fluid } = AD_SIZES[size];
  const ads = ADS[size];
  const ad = ads && ads.length > 0 ? ads[adIndex % ads.length] : undefined;

  return (
    <div
      className={`mx-auto flex w-full flex-col items-center gap-1 ${bleed ? "full-bleed" : ""} ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
        Advertisement
      </span>
      {ad ? (
        <a
          href={HQC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center overflow-hidden"
          style={
            fluid
              ? { height }
              : { aspectRatio: `${width} / ${height}`, maxWidth: width }
          }
        >
          <Image
            src={ad.src}
            alt={ad.alt}
            width={ad.width}
            height={ad.height}
            className="h-full w-full object-contain"
          />
        </a>
      ) : (
        <div
          className="flex w-full items-center justify-center border border-dashed border-neutral-300 bg-neutral-100 text-xs font-medium text-neutral-400"
          style={
            fluid
              ? { height }
              : { aspectRatio: `${width} / ${height}`, maxWidth: width }
          }
        >
          {width} &times; {height}
        </div>
      )}
    </div>
  );
}
