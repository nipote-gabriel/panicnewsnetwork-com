import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getStoryBySlug, stories } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  return {
    title: `${story.headline} | Panic News Network`,
    description: story.dek,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  const relatedStories = stories
    .filter((s) => s.slug !== story.slug)
    .slice(0, 4);

  return (
    <main className="mx-auto max-w-6xl">
      <SiteHeader />

      <article className="grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="inline-block text-xs font-bold uppercase text-brand-red">
            {story.category}
          </span>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            {story.headline}
          </h1>
          <p className="mt-3 text-lg text-neutral-600">{story.dek}</p>

          <div className="mt-4 flex items-center gap-3 border-y border-neutral-200 py-3 text-sm text-neutral-500">
            <span className="font-semibold text-neutral-700">{story.byline}</span>
            <span>&middot;</span>
            <span>{story.date}</span>
          </div>

          <div className="mt-6">
            <ImagePlaceholder label="Story Image" className="aspect-[16/9]" />
          </div>

          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-neutral-800">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/" className="text-sm font-semibold text-brand-red hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>

        <aside className="border-t border-neutral-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <h2 className="mb-3 border-b-2 border-brand-red pb-1 text-sm font-extrabold uppercase">
            Related Stories
          </h2>
          <ul className="flex flex-col gap-4">
            {relatedStories.map((s) => (
              <li key={s.slug} className="border-b border-neutral-100 pb-4 last:border-b-0">
                <Link href={`/story/${s.slug}`}>
                  <ImagePlaceholder label="Story Image" />
                  <span className="mt-2 inline-block text-xs font-bold uppercase text-brand-red">
                    {s.category}
                  </span>
                  <h3 className="mt-1 text-sm font-bold leading-snug hover:underline">
                    {s.headline}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      <SiteFooter />
    </main>
  );
}
