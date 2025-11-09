# Troubleshooting Guide

## Dev Server Module Loading Error

If you encounter the error:
```
Error: Failed to load chunk server/chunks/ssr/app_layout_tsx_*.js
SyntaxError: Cannot use import statement outside a module
```

### Solution 1: Clear Cache and Restart

```bash
# Stop the dev server (Ctrl+C)
pnpm run clean
pnpm run dev
```

### Solution 2: Use Webpack Instead of Turbopack

If the error persists, use the webpack dev server:

```bash
pnpm run dev:webpack
```

### Solution 3: Complete Clean Reinstall

If the above doesn't work:

```bash
# Remove all caches and node_modules
rm -rf .next node_modules pnpm-lock.yaml
pnpm install
pnpm run dev
```

### Solution 4: Check Node.js Version

Ensure you're using Node.js 18+:

```bash
node --version  # Should be 18.x or higher
```

## Common Issues

### Build Works but Dev Server Fails
- This is usually a Turbopack caching issue
- Use `pnpm run dev:webpack` as a workaround
- Clear `.next` directory: `rm -rf .next`

### Module Import Errors
- Ensure all imports use proper paths (`@/` alias)
- Check that all dependencies are installed: `pnpm install`
- Verify TypeScript configuration in `tsconfig.json`

## Still Having Issues?

1. Check Next.js version: `pnpm list next`
2. Update dependencies: `pnpm update`
3. Check for known issues: https://github.com/vercel/next.js/issues

