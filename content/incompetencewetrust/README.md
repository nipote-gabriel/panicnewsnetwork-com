# In Competence We Trust — Story Archive

This folder is a staging archive for every story from incompetencewetrust.com, kept as plain Markdown files so they're easy to review, diff, and edit by hand.

**Update:** the full story archive (60 stories, imported from the `ICWT_Stories_Clean_Export.csv` WordPress export) is now live on the site — see `lib/stories.ts`. This `content/incompetencewetrust/stories/` folder remains as reference/staging for any future edits or re-imports, but isn't read by the Next.js app directly.

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
- `category` doesn't need to match the live site's category taxonomy (World, Politics, Business, Culture, Health) — record whatever category the original site used. We'll map/reconcile categories when re-importing stories into the live site.
- `source_url` should always be filled in — it's how we trace a story back to the original if something looks off during import.
- Keep the body as close to the original text as practical (headings, links, etc. can be simplified to plain Markdown).

See `stories/_TEMPLATE.md` for a copy-pasteable starting point.

## Next step (not done yet)

Once this archive is populated, a separate import step will read selected stories from here, map their fields onto the `Story` type in `lib/stories.ts` (or wherever the site's content lives by then), and publish them on the live site. That's a deliberate second step, not automatic — nothing in `stories/` shows up on the site just by being added here.
