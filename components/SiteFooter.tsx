import Image from "next/image";
import Link from "next/link";
import { categories, slugifyCategory } from "@/lib/categories";

export function SiteFooter() {
  return (
    <footer className="mt-6 bg-brand-dark px-4 py-10 text-sm text-neutral-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt="Panic News Network"
            width={720}
            height={357}
            className="h-14 w-auto"
          />
          <p className="mt-3 max-w-xs text-neutral-400">
            Fake news. Real insight. Satire from the team at Headquarters Comedy.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">
            Sections
          </h2>
          <ul className="flex flex-col gap-2">
            {categories.map((c) => (
              <li key={c}>
                <Link href={`/category/${slugifyCategory(c)}`} className="hover:text-white hover:underline">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">
            More
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://headquarterscomedy.beehiiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Newsletter
              </a>
            </li>
            <li>
              <Link href="/search" className="hover:text-white hover:underline">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-neutral-700 pt-4">
        <p>&copy; 2026 Panic News Network. All rights reserved.</p>
      </div>
    </footer>
  );
}
