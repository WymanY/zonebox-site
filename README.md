# ZoneBox site

Product site for ZoneBox. Live at https://zonebox-site.wuyun768.workers.dev.

The previous Vercel URL is still up at https://zonebox-site.vercel.app until it is taken down on purpose.

This repository is the website only. The macOS app lives in a separate checkout:

- App folder: /Users/wyman/Documents/fancyzone_mac

When copy, features, shortcuts, or onboarding change in the app, update this site from those sources instead of inventing new product language.

## Deploy

```bash
npm run deploy
```

This builds with vinext and publishes to Cloudflare Workers. Creem keys live in Wrangler secrets, not in git.
