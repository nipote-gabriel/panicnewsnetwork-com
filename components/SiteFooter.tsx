import Link from "next/link";
import { categories, slugifyCategory } from "@/lib/categories";

export function SiteFooter() {
  return (
    <footer className="mt-6 bg-brand-dark px-4 py-8 text-sm text-neutral-400">
      <div className="mb-4 flex flex-wrap gap-4 text-white">
        {categories.map((c) => (
          <Link key={c} href={`/category/${slugifyCategory(c)}`} className="hover:underline">
            {c}
          </Link>
        ))}
      </div>
      <p>&copy; 2026 Panic News Network. All rights reserved.</p>
    </footer>
  );
}
