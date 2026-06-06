# React + TypeScript + Vite Template

A modern React template with TypeScript, Vite, Tailwind CSS v4, and Biome for linting.

## Features

- ⚡️ [Vite](https://vite.dev/) - Next generation frontend tooling
- ⚛️ [React](https://react.dev/) - UI library
- 📘 [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- 🎨 [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS
- 🔧 [Biome](https://biomejs.dev/) - Fast linter and formatter
- 🪝 [simple-git-hooks](https://github.com/toplenordr/simple-git-hooks) - Git hooks
- 📝 [lint-staged](https://github.com/lint-staged/lint-staged) - Run linters on staged files

## Getting Started

1. Update the `name` in `package.json` with your project name
2. Update the `title` in `index.html`
3. Optional: Update the `version` in `package.json`

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run lint check
pnpm check

# Fix lint issues automatically
pnpm check:fix
```

## Project Structure

```
src/
├── main.tsx       # Entry point
├── App.tsx        # Main app component
├── style.css      # Global styles (Tailwind)
└── assets/        # Static assets
```

## Tools

### Vite Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) - Uses [Oxc](https://oxc.rs) for fast React HMR

### Linting & Formatting

This project uses [Biome](https://biomejs.dev/) instead of ESLint/Prettier for better performance:

```bash
# Check files
pnpm check

# Fix issues
pnpm check:fix
```

Configuration is in `biome.json`.

### Git Hooks

Pre-commit hooks are automatically set up via `simple-git-hooks` and `lint-staged`. Before each commit, staged files will be automatically formatted and linted.
