import Link from "next/link";
import { StoryImage } from "@/components/StoryImage";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { stories } from "@/lib/stories";

const heroStory = stories[0];
const secondaryStories = stories.slice(1, 3);
const gridStories = stories.slice(3, 9);
const sidebarStories = stories.slice(9, 15);

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl">
      <SiteHeader />

      {/* Hero section */}
      <section className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-3">
        <Link href={`/story/${heroStory.slug}`} className="md:col-span-2">
          <StoryImage image={heroStory.image} alt={heroStory.headline} label="Hero Image" />
          <span className="mt-3 inline-block text-xs font-bold uppercase text-brand-red">
            {heroStory.category}
          </span>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight hover:underline">
            {heroStory.headline}
          </h1>
          <p className="mt-2 text-neutral-600">{heroStory.dek}</p>
        </Link>
        <div className="flex flex-col gap-6">
          {secondaryStories.slice(0, 2).map((s) => (
            <Link key={s.slug} href={`/story/${s.slug}`}>
              <StoryImage image={s.image} alt={s.headline} label="Story Image" />
              <span className="mt-2 inline-block text-xs font-bold uppercase text-brand-red">
                {s.category}
              </span>
              <h2 className="mt-1 text-lg font-bold leading-snug hover:underline">
                {s.headline}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      {/* Story grid + sidebar */}
      <section className="grid grid-cols-1 gap-8 border-t border-neutral-200 px-4 py-6 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          {gridStories.map((s) => (
            <Link key={s.slug} href={`/story/${s.slug}`}>
              <StoryImage image={s.image} alt={s.headline} label="Story Image" />
              <span className="mt-2 inline-block text-xs font-bold uppercase text-brand-red">
                {s.category}
              </span>
              <h3 className="mt-1 text-base font-bold leading-snug hover:underline">
                {s.headline}
              </h3>
            </Link>
          ))}
        </div>

        <aside className="border-t border-neutral-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <h2 className="mb-3 border-b-2 border-brand-red pb-1 text-sm font-extrabold uppercase">
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
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
