const AD_SIZES = {
  leaderboard: { width: 728, height: 90 },
  rectangle: { width: 300, height: 250 },
  "half-page": { width: 300, height: 600 },
  "mobile-banner": { width: 320, height: 50 },
} as const;

export type AdSize = keyof typeof AD_SIZES;

export function AdSlot({
  size = "leaderboard",
  className = "",
}: {
  size?: AdSize;
  className?: string;
}) {
  const { width, height } = AD_SIZES[size];
  return (
    <div className={`mx-auto flex w-full flex-col items-center gap-1 ${className}`}>
      <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
        Advertisement
      </span>
      <div
        className="flex w-full items-center justify-center border border-dashed border-neutral-300 bg-neutral-100 text-xs font-medium text-neutral-400"
        style={{ aspectRatio: `${width} / ${height}`, maxWidth: width }}
      >
        {width} &times; {height}
      </div>
    </div>
  );
}
