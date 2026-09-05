# Agent notes

This repository is the ZoneBox marketing site. It is not the macOS app.

## Related app

Read product truth from the ZoneBox app checkout, then change this site.

| What | Where |
| --- | --- |
| App checkout | `/Users/wyman/Documents/fancyzone_mac` |
| App GitHub | https://github.com/WymanY/ZoneBox |
| Site GitHub | https://github.com/WymanY/zonebox-site |
| Live site | https://zonebox-site.vercel.app |

Do not edit the app from a website task unless the user explicitly asks. Do not put the site inside `fancyzone_mac`.

## Where to read app content

| Need | App file |
| --- | --- |
| Product name, OS, distribution | `README.md`, `docs/design.md` |
| Welcome-tour copy and first-run flow | `docs/onboarding-design.md` |
| User-visible English / Chinese strings | `ZoneBox/Domain/L10n.swift` |
| Layout editor, snap, divider, workspaces, pin | `docs/*.md` plus the matching `L10n.swift` keys |
| Current download | GitHub Release for `WymanY/ZoneBox` |

Site copy lives in `lib/copy.ts`. Keep it aligned with `L10n.swift` instead of rewriting the product.

## Deploy

Push `main` to the `github` remote. Vercel builds from [WymanY/zonebox-site](https://github.com/WymanY/zonebox-site).

The `origin` remote is the ChatGPT Sites source. Do not use it as the GitHub repo.
