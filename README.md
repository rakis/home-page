# victornghe.com

The source code for [victornghe.com](https://www.victornghe.com), hosted using [Namecheap](https://www.namecheap.com) and [Netlify](https://www.netlify.com).

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation with zero client-side JavaScript overhead)
- **UI Components**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Modern [Dart Sass](https://sass-lang.com/) (`sass`) with `@use` modules
- **Linting & Type Checking**: ESLint 9 (Flat Config), `@astrojs/check`, and TypeScript compiler

## 🛠️ Development & Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Typecheck and Astro diagnostics
npm run check

# Lint files
npm run lint

# Build production static output (to dist/)
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment

The static output is generated in `dist/`, which is ready to deploy on Netlify.
