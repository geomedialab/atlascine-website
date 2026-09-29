# CLAUDE.md — atlascine.org

Eleventy v3 + Nunjucks site for Atlascine (repo `geomedialab/atlascine-website`, branch `11ty-site`).
Push to `11ty-site` → `.github/workflows/build-and-deploy.yml` builds (`npm run build:prod` → `public/`) and deploys to gh-pages.
Local node is under nvm: `export PATH=~/.nvm/versions/node/v22.23.1/bin:$PATH`.

## Relationship to bum.bike

bum.bike (`~/bum-website`, `ateliers-velo/website`) was forked from this repo and has since gained framework
improvements. The shared "core" (`.eleventy.js`, `src/_data/eleventyComputed.js`, `_includes/`, `_layouts/`,
`src/admin/`) should stay in sync; bum.bike marks framework commits with `@core:` in the message. Design (CSS,
footer, tile gallery look, light/dark mode, map, marquee) and content are per-site and not synced.
Last sync from bum.bike: 2026-09-29 (bum `a28ff74`).

## Bilingual architecture

- EN is default (`defaultLang: en`): `name.md` = EN, `name.fr.md` = FR.
- Permalink: `/{lang}/{folderName}/{titleSlug}/` — URLs come from the title, not the filename.
- Frontmatter `lang`, `translationKey`, `permalink` override computed values.
- Otherwise, when a folder holds exactly `site.languages.length` files, they are paired as translations.
- `site.title` / `site.description` are per-language objects (`site.title[lang]`).
- `redirect:` makes nav/index/gallery links point externally; untranslated pages show in italics in the other language.

## CMS (Sveltia) at /admin/

Config: `src/admin/config.yml`. Auth by GitHub classic PAT (`repo` + `read:user`). Commits straight to `11ty-site`.
- Posts, pages, projects must live in `<slug>/<slug>.md` + `<slug>/<slug>.fr.md` (CMS `path` template).
- `.njk` pages (news listing, atlases gallery) and `src/content/index.*` are not CMS-managed.
- Uploads go to `src/imgs/` (collection-level absolute `media_folder` — required with `path` templates).
- Old top-level post URLs are kept alive by `src/redirects.njk` (meta-refresh stubs).
