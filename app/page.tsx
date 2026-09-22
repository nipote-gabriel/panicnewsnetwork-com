import Link from "next/link";
import { StoryImage } from "@/components/StoryImage";
import { StoryMeta } from "@/components/StoryMeta";
import { AdSlot } from "@/components/AdSlot";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { stories } from "@/lib/stories";

const heroStory = stories[0];
const secondaryStories = stories.slice(1, 3);
const gridStories = stories.slice(3, 9);
const sidebarStories = stories.slice(9, 15);
const featuredStories = stories.slice(15, 19);
const editorsPicks = stories.slice(19, 25);

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <SiteHeader />

      <AdSlot size="leaderboard" bleed className="px-4 py-4" />

      {/* Hero section */}
      <section className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-3">
        <Link href={`/story/${heroStory.slug}`} className="md:col-span-2">
          <StoryImage image={heroStory.image} alt={heroStory.headline} label="Hero Image" />
          <StoryMeta category={heroStory.category} date={heroStory.date} className="mt-3" />
          <h1 className="mt-1 font-display text-3xl leading-tight hover:underline">
            {heroStory.headline}
          </h1>
          <p className="mt-2 text-neutral-600">{heroStory.dek}</p>
        </Link>
        <div className="flex flex-col gap-6">
          {secondaryStories.slice(0, 2).map((s) => (
            <Link key={s.slug} href={`/story/${s.slug}`}>
              <StoryImage image={s.image} alt={s.headline} label="Story Image" />
              <StoryMeta category={s.category} date={s.date} />
              <h2 className="mt-1 font-display text-lg leading-snug hover:underline">
                {s.headline}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      {/* Story grid + sidebar */}
      <section className="grid grid-cols-1 gap-8 border-t border-neutral-200 px-4 py-6 lg:grid-cols-3 lg:items-start">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
          {gridStories.map((s) => (
            <Link key={s.slug} href={`/story/${s.slug}`}>
              <StoryImage image={s.image} alt={s.headline} label="Story Image" />
              <StoryMeta category={s.category} date={s.date} />
              <h3 className="mt-1 font-display text-base leading-snug hover:underline">
                {s.headline}
              </h3>
            </Link>
          ))}
        </div>

        <aside className="border-t border-neutral-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <h2 className="mb-3 border-b-2 border-brand-red pb-1 font-display text-sm uppercase">
            Latest Headlines
          </h2>
          <ul className="flex flex-col gap-3">
            {sidebarStories.map((s) => (
              <li key={s.slug} className="border-b border-neutral-100 pb-3 last:border-b-0">
                <Link
                  href={`/story/${s.slug}`}
                  className="text-sm font-semibold leading-snug hover:text-brand-red"
                >
                  {s.headline}
                </Link>
                <StoryMeta date={s.date} className="mt-1" />
              </li>
            ))}
          </ul>
          <AdSlot size="rectangle" className="mt-6" />
        </aside>
      </section>

      <AdSlot size="leaderboard" bleed className="border-t border-neutral-200 px-4 py-6" />

      {/* Featured Stories */}
      <section className="full-bleed border-t border-neutral-200 bg-neutral-50 py-6">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="mb-4 inline-block bg-brand-red px-3 py-1">
            <h2 className="font-display text-sm uppercase tracking-wide text-white">
              Featured Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredStories.map((s) => (
              <Link key={s.slug} href={`/story/${s.slug}`}>
                <StoryImage image={s.image} alt={s.headline} label="Story Image" />
                <StoryMeta category={s.category} date={s.date} />
                <h3 className="mt-1 font-display text-base leading-snug hover:underline">
                  {s.headline}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="border-t border-neutral-200 px-4 py-6">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-4 flex items-center gap-2 border-b-2 border-brand-red pb-2 font-display text-sm uppercase tracking-wide">
            Editor&rsquo;s Picks
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {editorsPicks.map((s) => (
              <Link key={s.slug} href={`/story/${s.slug}`} className="group">
                <StoryImage
                  image={s.image}
                  alt={s.headline}
                  label="Story Image"
                  className="aspect-square"
                />
                <h3 className="mt-2 font-display text-sm leading-snug group-hover:text-brand-red group-hover:underline">
                  {s.headline}
                </h3>
                <StoryMeta date={s.date} className="mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdSlot size="leaderboard" bleed className="border-t border-neutral-200 px-4 py-6" />

      <SiteFooter />
    </main>
  );
}
