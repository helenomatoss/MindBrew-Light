# MindBrew Light - Landing Page

MindBrew Light is a marketing site for the Dublin light therapy cafe. The codebase is built with React, TypeScript, Tailwind CSS, and shadcn/ui on top of Vite.

## Tech Stack

- React 18 with TypeScript
- Vite for the development/build pipeline
- Tailwind CSS with shadcn/ui component primitives
- ESLint + Prettier for linting and formatting

## Getting Started

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173`. Hot reloading is enabled by default.

## Available Commands

- `npm run dev` - start the Vite development server
- `npm run build` - type-check via project references and emit an optimized production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint on the project sources
- `npm run format` - apply Prettier formatting
- `npm run typecheck` - perform a no-emit TypeScript type check

## Project Structure

- `src/` - application source code
  - `components/` - marketing page sections and UI primitives
  - `pages/` - routed views
  - `lib/` - shared utilities
- `public/` - static assets served as-is

## Styling

Tailwind CSS powers styling via utility classes. The design tokens live in `src/index.css`, while reusable UI primitives reside in `src/components/ui`. Use the `cn` helper from `src/lib/utils.ts` to combine class names safely.

## Deployment

Run `npm run build` to generate the production assets under `dist/`. Deploy the contents of the `dist/` directory to your preferred hosting provider.
