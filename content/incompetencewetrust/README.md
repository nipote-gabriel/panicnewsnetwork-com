# In Competence We Trust — Story Archive

This folder is a staging archive for every story from incompetencewetrust.com, kept as plain Markdown files so they're easy to review, diff, and edit by hand before any of them get imported into the live Fast News Network site (`lib/stories.ts`).

This is **not** wired into the site yet — nothing here is imported or rendered by the Next.js app. It's just storage until we decide what gets published and how.

## Format

One file per story, in `stories/`, named `<slug>.md` (lowercase, hyphenated, matching the story's URL slug where possible — e.g. `my-first-story.md`).

Each file is Markdown with YAML frontmatter:

```markdown
---
slug: my-first-story
title: "Original Story Headline"
category: "Category Name"
author: "Byline"
date: "2026-01-15"
image: "https://original-image-url-or-local-path"
excerpt: "One or two sentence summary/dek, if the original had one."
source_url: "https://www.incompetencewetrust.com/path/to/story"
---

Full story body goes here, as Markdown. Preserve paragraph breaks
with blank lines between paragraphs, same as this file.
```

Notes on fields:

- `slug`, `title`, `date` are required. Everything else is optional — leave it out of the frontmatter if the original story doesn't have it (e.g. no image).
- `category` doesn't need to match Fast News Network's existing categories (U.S., World, Politics, etc.) — record whatever category the original site used. We'll map/reconcile categories when we actually import stories into the live site.
- `source_url` should always be filled in — it's how we trace a story back to the original if something looks off during import.
- Keep the body as close to the original text as practical (headings, links, etc. can be simplified to plain Markdown).

See `stories/_TEMPLATE.md` for a copy-pasteable starting point.

## Next step (not done yet)

Once this archive is populated, a separate import step will read selected stories from here, map their fields onto the `Story` type in `lib/stories.ts` (or wherever the site's content lives by then), and publish them on the live site. That's a deliberate second step, not automatic — nothing in `stories/` shows up on the site just by being added here.
