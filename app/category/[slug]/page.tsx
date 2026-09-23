import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryImage } from "@/components/StoryImage";
import { StoryMeta } from "@/components/StoryMeta";
import { AdSlot } from "@/components/AdSlot";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { categories, categoryBySlug, slugifyCategory } from "@/lib/categories";
import { stories } from "@/lib/stories";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: slugifyCategory(c) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category} | Panic News Network`,
    description: `Latest ${category} stories from Panic News Network.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const categoryStories = stories.filter((s) => s.category === category);

  return (
    <main className="mx-auto max-w-[1440px]">
      <SiteHeader />

      <div className="border-b-4 border-brand-red px-4 py-6">
        <h1 className="font-display text-3xl uppercase tracking-tight">{category}</h1>
      </div>

      <AdSlot size="leaderboard" adIndex={0} bleed className="px-4 py-4" />

      <section className="px-4 py-6">
        {categoryStories.length === 0 ? (
          <p className="text-neutral-600">
            No stories in this category yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoryStories.map((s, i) => (
              <Fragment key={s.slug}>
                <Link href={`/story/${s.slug}`}>
                  <StoryImage image={s.image} alt={s.headline} label="Story Image" />
                  <StoryMeta date={s.date} />
                  <h2 className="mt-1 font-display text-base leading-snug hover:underline">
                    {s.headline}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">{s.dek}</p>
                </Link>
                {i === 5 ? (
                  <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
                    <AdSlot size="leaderboard" adIndex={1} />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
