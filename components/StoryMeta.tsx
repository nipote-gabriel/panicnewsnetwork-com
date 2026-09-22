export function StoryMeta({
  category,
  date,
  className = "mt-2",
}: {
  category?: string;
  date: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-1.5 text-xs ${className}`}>
      {category ? (
        <>
          <span className="font-bold uppercase text-brand-red">{category}</span>
          <span className="text-neutral-300">&middot;</span>
        </>
      ) : null}
      <span className="text-neutral-400">{date}</span>
    </div>
  );
}
