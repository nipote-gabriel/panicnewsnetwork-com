import Image from "next/image";
import Link from "next/link";
import { categories, slugifyCategory } from "@/lib/categories";

export function SiteHeader() {
  return (
    <>
      {/* Top utility bar */}
      <div className="flex items-center justify-between bg-brand-dark px-4 py-1.5 text-xs text-neutral-300">
        <span>Wednesday, September 9, 2026</span>
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
        <span className="truncate">
          Placeholder breaking news ticker text — replace with live headline feed.
        </span>
      </div>
    </>
  );
}
