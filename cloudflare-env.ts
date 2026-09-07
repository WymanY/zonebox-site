// Keep Wrangler and Miniflare state project-local. Import this before the
// Cloudflare Vite plugin so Wrangler snapshots these paths on load.
process.env.WRANGLER_WRITE_LOGS ??= 'false';
process.env.WRANGLER_LOG_PATH ??= '.wrangler/logs';
process.env.MINIFLARE_REGISTRY_PATH ??= '.wrangler/registry';
