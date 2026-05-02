## Interactive Rock Cycle Website

EEPS 110 interactive geology project built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages Deployment

This repo is configured for GitHub Pages static export via `.github/workflows/deploy-gh-pages.yml`.

### One-time repository settings
- In GitHub: `Settings -> Pages`
- Set `Source` to `GitHub Actions`

### Deploy flow
- Push to `main`
- GitHub Action builds with `next build` (`output: "export"`) and deploys `out/`
- Site publishes to your Pages URL automatically

### Base path behavior
- For project repos (`username/repo`), the app auto-uses `/<repo>` as `basePath` in CI.
- For user/org repos (`username.github.io`), it deploys at root `/`.

## Production Build Check

```bash
npm run build
```
