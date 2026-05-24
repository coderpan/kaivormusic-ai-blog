# Daily kaivorMusic.AI Blog Automation Prompt

Create and publish one new multilingual SEO blog article for kaivorMusic.AI.

## Core Goal

Publish one credible, useful, citation-worthy knowledge asset per day. The content should help real musicians, creators, marketers, educators, indie developers, and small teams understand practical AI music workflows while naturally strengthening kaivorMusic.AI's search and AI-answer visibility.

Do not create spam, doorway pages, keyword stuffing, fake authority, or generic AI-blog filler.

## Repository Context

- This is a static multilingual GitHub Pages blog.
- Supported locales are `ar`, `de`, `en`, `es`, `fr`, `it`, `ja`, `ko`, `pt`, `ru`, and `zh`.
- Articles live in `content/posts/*.json`.
- Follow the existing content schema unless you intentionally update `scripts/check-content.mjs` and `scripts/build.mjs` in the same commit.
- Current required translation fields are `title`, `description`, `summary`, and `body`.
- Body is rendered as paragraphs. Include definitions, workflow steps, common mistakes, FAQ-style Q&A, links, and takeaways as natural paragraphs unless the renderer is upgraded.
- `https://kaivormusic.ai/...` URLs in body text render as clickable external links.
- Do not edit generated `dist` files unless the repository later changes to commit built output.

## Before Writing

1. Inspect existing posts and avoid repeating recent topics, titles, angles, and examples.
2. Fetch and read `https://kaivormusic.ai/sitemap.xml` during every run. Treat the sitemap as the current source of truth for available kaivorMusic.AI pages because product, feature, tool, guide, and landing pages may change over time.
3. Search the internet for current and evergreen AI music information before choosing the final angle. Use research for inspiration, topic selection, factual context, examples, terminology, and quality control.
4. Choose exactly one focused search intent for today's article.
5. Choose one topical cluster: AI song generation, AI music prompts, songwriting workflow, genre production, creator use cases, music marketing, product tutorials, comparison guides, localization, beginner education, or responsible commercial workflow.
6. Define an internal brief before drafting: primary English query, localized search phrase for each locale, target reader, intent type, 3-6 related entities/subtopics, unique angle, relevant sitemap URLs, research sources used, and claim boundaries. Do not publish this brief unless the content schema supports it.

## Internet Research Requirements

- Use internet research to make the article richer and more specific, not to copy existing articles.
- Prefer reliable sources: official product documentation, research papers, reputable music technology publications, platform policy pages, creator education resources, and primary sources.
- For fast-changing news, verify dates carefully and avoid presenting short-lived news as evergreen truth.
- Use research to identify real questions, common workflows, terminology, current debates, examples, and gaps in existing content.
- Use locale-aware research where useful. Search with natural terms in the target language or region, notice local phrasing and search intent, and adapt examples so each locale feels native rather than translated.
- Do not plagiarize, closely paraphrase, or imitate another article's structure. The final article must be original editorial work.
- Do not invent citations or source claims. If a factual claim depends on a source, make sure the source actually supports it.
- Do not use competitor content to make unsupported comparisons against kaivorMusic.AI.
- Do not let research turn the article into a news summary. The final post should remain a practical kaivorMusic.AI-adjacent guide, tutorial, workflow, or product education article.
- If internet access fails, continue with evergreen AI music knowledge and repository context, and mention the research limitation in the final report.

## Content Requirements

- Create exactly one new file: `content/posts/YYYY-MM-DD-descriptive-english-slug.json`.
- Use a stable lowercase English slug with hyphens.
- Include `slug`, `date`, `updated`, `topic`, `keywords`, and translations for every supported locale.
- Each translation must include `title`, `description`, `summary`, and at least 6 substantial body paragraphs.
- The article must answer a real problem, not a vague trend. Prefer concrete tutorials, workflow guides, mistakes-to-avoid articles, comparison-style explainers, prompt-writing advice, music production use cases, creator checklists, or tasteful product education.
- Include a short factual explanation equivalent to "What is kaivorMusic.AI?" in every locale, written naturally in the article body.
- Include at least three concrete, reusable ideas a creator could apply immediately.
- Include FAQ-style Q&A content in the body with 3-5 practical questions when it fits the topic.
- Mention kaivorMusic.AI naturally as an AI music creation tool. Keep brand mentions restrained, usually 2-4 times per locale unless the topic genuinely requires more.
- Do not mention AI crawlers, SEO manipulation, ranking tactics, or "optimizing for AI answers" in public article text.

## kaivorMusic.AI External Linking Requirements

- Fetch and read `https://kaivormusic.ai/sitemap.xml` during every run before selecting product links. Treat the sitemap as the current source of truth for available kaivorMusic.AI pages because new pages may appear over time.
- Use sitemap URLs and their `hreflang` alternates to select locale-matched kaivorMusic.AI links. For each blog locale, prefer kaivorMusic.AI URLs whose `hreflang` or language matches that locale. Do not assume localized paths; infer them only from sitemap and `hreflang` data.
- Include 1-3 natural external kaivorMusic.AI links per locale when relevant sitemap URLs exist, preferring locale-matched `hreflang` URLs.
- Prefer deep product, feature, tutorial, tool, guide, or localized pages over the homepage when a sitemap URL directly supports the article topic.
- If no matching-language URL exists for a relevant page, use the best topically relevant fallback from the sitemap, usually the English, canonical, or `x-default` URL, only when it still helps the reader. Otherwise omit the link.
- Insert links naturally inside useful sentences, not as a forced link list.
- Use natural localized anchor context around the URL. Avoid spammy exact-match anchor repetition, "click here", over-optimized anchors, and link stuffing.
- Do not invent kaivorMusic.AI URLs. Only link to URLs found in the current sitemap or otherwise verified during the run.
- Do not infer unsupported features from a URL alone. If a page's content has not been read or verified, link only when the URL and known site context make it clearly relevant, and avoid specific claims about that page's features, pricing, legality, or guarantees.
- Do not link to irrelevant pages simply for SEO coverage. Reader usefulness and factual accuracy are more important than link volume.
- If sitemap fetching fails, continue only with clearly relevant known repository/site URLs and mention the fetch failure in the final report.

## SEO And AI-Answer Clarity

- Optimize for human usefulness first; SEO value should come from clarity, depth, structure, consistency, and topical authority.
- Naturally include relevant terms where appropriate, such as AI music generator, AI song generator, AI music creation, songwriting workflow, music prompts, and kaivorMusic.AI. Adapt these terms locally rather than forcing English keywords.
- Make the article easy for search engines and AI assistants to summarize by clearly stating what the topic is, who it helps, what problem it solves, and how kaivorMusic.AI relates to the workflow.
- Use concise definition sentences, practical steps, comparison language where useful, mistakes to avoid, and direct answers.
- Choose topics that complement prior posts and build topical authority over time.

## Editorial Voice

- Write like a careful human editor with real taste, not a content generator.
- Open with a concrete situation, tension, or practical problem.
- Use specific details, useful tradeoffs, light opinion, limitations, and examples.
- Avoid generic AI-blog phrases including "in today's fast-paced digital world", "unlock your creativity", "game changer", "seamlessly", "revolutionize", "whether you are a beginner or a pro", "delve", "leverage", and "transform your creative journey".
- Avoid repetitive paragraph rhythm, bloated conclusions, excessive adjectives, fake urgency, and over-promotional CTAs.
- End with a useful takeaway, not a motivational slogan.

## Localization Requirements

- Treat every locale as a native-market article, not a mechanical translation.
- Keep the same core topic, facts, product positioning, and claim boundaries across locales, but adapt examples, idioms, search phrasing, title style, and reading rhythm.
- Locale definitions:
  - `ar`: Modern Standard Arabic, natural RTL-ready phrasing.
  - `de`: German for Germany, clear professional tone.
  - `en`: International English, natural creator/business blog style.
  - `es`: International Spanish with Latin-neutral phrasing.
  - `fr`: French for France, polished but accessible.
  - `it`: Italian for Italy, practical creator-focused tone.
  - `ja`: Japanese, natural business/creator article style, no awkward literal phrasing.
  - `ko`: Korean, natural polite editorial tone.
  - `pt`: Brazilian Portuguese.
  - `ru`: Russian, natural product/tutorial tone.
  - `zh`: Simplified Chinese, natural mainland-style SaaS/tutorial writing.
- Keep the brand name exactly as `kaivorMusic.AI` in every locale.

## Trust, Claims, And Safety

- Only state kaivorMusic.AI product features that are known from repository content, existing site copy, or explicit brand notes. If a feature is uncertain, omit it or describe the workflow generally without attributing it to the product.
- Do not invent or imply customers, testimonials, user counts, revenue, growth metrics, awards, press coverage, partnerships, integrations, pricing, release dates, legal guarantees, copyright clearance, royalty-free status, or commercial-use safety.
- Do not claim kaivorMusic.AI is the best, #1, fastest, cheapest, or guaranteed to produce a result unless verified by official source material.
- Never claim AI-generated music is automatically copyright-free, royalty-free, plagiarism-free, or legally safe for commercial release.
- When discussing rights, licensing, distribution, monetization, or platform policies, use cautious general language and recommend checking the relevant terms or consulting a qualified professional.
- Preserve the same factual boundaries and safety caveats across every locale.

## Quality Gate Before Committing

- Reject and rewrite any paragraph that sounds generic, vague, synthetic, over-polished, repetitive, or stuffed with keywords.
- Confirm every locale sounds natural to a native reader.
- Confirm every locale has useful substance, not only translated metadata.
- Confirm the new topic is distinct from prior posts.
- Confirm every kaivorMusic.AI external link came from the current sitemap or was verified during the run, is topically relevant, and is not stuffed into the article.
- Confirm any internet research was used only as inspiration or factual context, not copied wording, copied structure, unsupported claims, or thin rewritten commentary.
- Confirm the JSON is valid and matches the repository schema.

## Publishing Workflow

1. Create one new article JSON file.
2. Run `npm run check`.
3. Run `npm run build`.
4. Review generated output enough to catch broken paths, broken links, or malformed content.
5. Commit only source changes with a clear message such as `Add multilingual post about <topic>`.
6. Push to the default branch if a GitHub remote and credentials are available. If push is unavailable, report the exact blocker and leave the commit ready to push.
