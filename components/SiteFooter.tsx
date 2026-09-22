import Image from "next/image";
import Link from "next/link";
import { categories, slugifyCategory } from "@/lib/categories";
import { TvBanner } from "@/components/TvBanner";

export function SiteFooter() {
  return (
    <footer className="mt-6 bg-brand-dark text-sm text-neutral-400">
      <TvBanner />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <Image
            src="/logo.png"
            alt="Panic News Network"
            width={720}
            height={357}
            className="h-14 w-auto"
          />
          <p className="mt-3 max-w-xs text-neutral-400">
            Fake news. Real insight. A subsidiary of Headquarters Comedy.
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
                href="https://www.headquarterscomedy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Headquarters Comedy
              </a>
            </li>
            <li>
              <a
                href="https://www.worldcorpinternational.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                WorldCorp International
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thegarylunashow/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                The Gary Luna Show
              </a>
            </li>
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
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">
            Connect
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="https://www.instagram.com/headquarterscomedy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/headquarters-comedy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/hq_comedy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-neutral-700 px-4 pb-10 pt-4">
        <p>&copy; 2026 Panic News Network. All rights reserved.</p>
      </div>
    </footer>
  );
}
