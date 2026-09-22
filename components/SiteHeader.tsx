import Image from "next/image";
import Link from "next/link";
import { categories, slugifyCategory } from "@/lib/categories";
import { CurrentDate } from "@/components/CurrentDate";
import { stories } from "@/lib/stories";

const tickerStories = stories.slice(0, 8);

export function SiteHeader() {
  return (
    <>
      {/* Top utility bar */}
      <div className="flex items-center justify-between bg-brand-dark px-4 py-1.5 text-xs text-neutral-300">
        <div className="flex items-center gap-2">
          <CurrentDate />
          <span className="hidden text-neutral-600 sm:inline">&middot;</span>
          <a
            href="https://www.headquarterscomedy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden hover:underline sm:inline"
          >
            A subsidiary of Headquarters Comedy
          </a>
        </div>
        <div className="flex gap-4">
          <button type="button" className="hover:underline">
            Shop
          </button>
          <a
            href="https://headquarterscomedy.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Newsletter
          </a>
        </div>
      </div>

      {/* Header / logo */}
      <header className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Panic News Network"
            width={720}
            height={357}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </Link>
        <form action="/search" method="GET" className="flex items-center gap-2">
          <input
            type="search"
            name="q"
            placeholder="Search…"
            aria-label="Search stories"
            className="w-32 rounded border border-neutral-300 px-2 py-1 text-sm text-neutral-800 focus:w-48 focus:border-brand-red focus:outline-none sm:w-48"
          />
          <button
            type="submit"
            className="rounded bg-brand-red px-3 py-1 text-sm font-semibold text-white hover:bg-red-700"
          >
            Search
          </button>
        </form>
      </header>

      {/* Category nav */}
      <nav className="overflow-x-auto bg-brand-red">
        <ul className="flex min-w-max gap-6 px-4 py-2 text-sm font-semibold uppercase text-white">
          {categories.map((c) => (
            <li key={c} className="whitespace-nowrap">
              <Link href={`/category/${slugifyCategory(c)}`} className="hover:underline">
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Breaking news ticker */}
      <div className="flex items-center gap-3 bg-brand-dark px-4 py-2 text-sm text-white">
        <span className="shrink-0 rounded bg-brand-red px-2 py-0.5 text-xs font-bold uppercase">
          Breaking
        </span>
        <div className="ticker-viewport min-w-0 flex-1 overflow-hidden">
          <div className="ticker-track flex w-max items-center gap-10 whitespace-nowrap">
            {[0, 1].map((rep) => (
              <div key={rep} className="flex items-center gap-10">
                {tickerStories.map((s) => (
                  <Link
                    key={`${rep}-${s.slug}`}
                    href={`/story/${s.slug}`}
                    className="flex items-center gap-2 hover:underline"
                  >
                    <span className="text-brand-red">&bull;</span>
                    {s.headline}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
