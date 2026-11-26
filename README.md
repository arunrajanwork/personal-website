# Learn with Arun Rajan

Source for https://learnwitharunrajan.com, a personal engineering website about distributed systems, cloud infrastructure, and hands-on learning.

## Development

Install Node.js 22 LTS or newer and Git, then run:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to verify the production build.

## Architecture

- Next.js App Router, TypeScript, and Tailwind CSS.
- GitHub is the source of truth for code and content.
- Vercel Hobby hosts the site and builds changes from Git.
- AWS and OCI host independent systems experiments in future milestones.
- Articles and project documentation will use MDX.

See AGENTS.md for project conventions.
