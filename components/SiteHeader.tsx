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
      <div className="full-bleed bg-black">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-1.5 text-xs text-neutral-300">
          <CurrentDate />
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
      </div>

      {/* Header / logo */}
      <header className="full-bleed bg-black px-4 py-4">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Panic News Network"
                width={485}
                height={296}
                priority
                className="h-16 w-auto sm:h-20"
              />
            </Link>
            <a
              href="https://www.headquarterscomedy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-red hover:underline sm:inline-flex"
            >
              <span className="live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
              A subsidiary of Headquarters Comedy
            </a>
          </div>
          <form action="/search" method="GET" className="flex shrink-0 items-center gap-2">
            <input
              type="search"
              name="q"
              placeholder="Search…"
              aria-label="Search stories"
              className="w-24 min-w-0 rounded border border-neutral-300 px-2 py-1 text-sm text-neutral-800 focus:w-40 focus:border-brand-red focus:outline-none sm:w-32 sm:focus:w-48"
            />
            <button
              type="submit"
              className="shrink-0 rounded bg-brand-red px-3 py-1 text-sm font-semibold text-white hover:bg-red-700"
            >
              Search
            </button>
          </form>
        </div>
        <a
          href="https://www.headquarterscomedy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-red hover:underline sm:hidden"
        >
          <span className="live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
          A subsidiary of Headquarters Comedy
        </a>
      </header>

      {/* Category nav */}
      <nav className="full-bleed overflow-x-auto bg-brand-red">
        <ul className="mx-auto flex min-w-max max-w-[1440px] gap-6 px-4 py-2 text-sm font-semibold uppercase text-white">
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
      <div className="full-bleed bg-brand-dark">
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-4 py-2 text-sm text-white">
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
      </div>
    </>
  );
}
