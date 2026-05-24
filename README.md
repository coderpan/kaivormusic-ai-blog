# kaivorMusic.AI Multilingual SEO Blog

This repository publishes a static, multilingual blog for kaivorMusic.AI.

The site is designed for:

- Search engines and AI crawlers
- Clean static HTML on GitHub Pages
- Daily content publishing
- Localized pages for `ar`, `de`, `en`, `es`, `fr`, `it`, `ja`, `ko`, `pt`, `ru`, and `zh`

## Content model

Each article lives in `content/posts/*.json` and contains one canonical topic translated into every supported language.

Run:

```bash
npm run check
npm run build
```

The generated site is written to `dist/`.

## Publishing

GitHub Pages is configured through `.github/workflows/pages.yml`. After the repository is pushed to GitHub, enable Pages from GitHub Actions in the repository settings.

## Daily automation brief

The daily Codex automation should create one new article JSON file, keep the writing natural and specific, include all supported locales, run checks, build the site, then commit and push or open a PR depending on available repository permissions.
