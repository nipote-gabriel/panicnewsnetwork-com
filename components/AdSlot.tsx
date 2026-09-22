const AD_SIZES = {
  leaderboard: { width: 728, height: 90, fluid: true },
  rectangle: { width: 300, height: 250, fluid: false },
  "half-page": { width: 300, height: 600, fluid: false },
  "mobile-banner": { width: 320, height: 50, fluid: true },
} as const;

export type AdSize = keyof typeof AD_SIZES;

export function AdSlot({
  size = "leaderboard",
  bleed = false,
  className = "",
}: {
  size?: AdSize;
  bleed?: boolean;
  className?: string;
}) {
  const { width, height, fluid } = AD_SIZES[size];
  return (
    <div
      className={`mx-auto flex w-full flex-col items-center gap-1 ${bleed ? "full-bleed" : ""} ${className}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
        Advertisement
      </span>
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
    </div>
  );
}
