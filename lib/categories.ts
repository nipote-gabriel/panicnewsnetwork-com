export const categories = ["World", "Politics", "Business", "Culture", "Health"];

export function slugifyCategory(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function categoryBySlug(slug: string): string | undefined {
  return categories.find((c) => slugifyCategory(c) === slug);
}
