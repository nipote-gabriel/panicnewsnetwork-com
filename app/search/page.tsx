import type { Metadata } from "next";
import Link from "next/link";
import { StoryImage } from "@/components/StoryImage";
import { StoryMeta } from "@/components/StoryMeta";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Search | Panic News Network",
};

function searchStories(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return stories.filter((s) =>
    [s.headline, s.dek, s.byline, s.category, ...s.paragraphs]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchStories(q);

  return (
    <main className="mx-auto max-w-6xl">
      <SiteHeader />

      <div className="border-b-4 border-brand-red px-4 py-6">
        <h1 className="text-3xl font-extrabold uppercase tracking-tight">
          Search {q ? <span className="text-neutral-400">&ldquo;{q}&rdquo;</span> : null}
        </h1>
        {q ? (
          <p className="mt-1 text-sm text-neutral-500">
            {results.length} {results.length === 1 ? "result" : "results"}
          </p>
        ) : null}
      </div>

      <section className="px-4 py-6">
        {!q ? (
          <p className="text-neutral-600">Enter a search term above to find a story.</p>
        ) : results.length === 0 ? (
          <p className="text-neutral-600">No stories matched your search. Try another term.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((s) => (
              <Link key={s.slug} href={`/story/${s.slug}`}>
                <StoryImage image={s.image} alt={s.headline} label="Story Image" />
                <StoryMeta category={s.category} date={s.date} />
                <h2 className="mt-1 text-base font-bold leading-snug hover:underline">
                  {s.headline}
                </h2>
                <p className="mt-1 text-sm text-neutral-600">{s.dek}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
