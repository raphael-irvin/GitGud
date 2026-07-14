# GitGud Workshop Site

The starter repository for the GitGud Challenge. This is a React + TypeScript +
Tailwind CSS website with a working header, hero, and about section already
built for you — your team's job is to build out the remaining sections.

See [`PROBLEM_STATEMENTS.md`](./PROBLEM_STATEMENTS.md) for your team's task.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

```bash
# 1. Clone the repo
git clone <this-repo-url>
cd gitgud-workshop-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be running at `http://localhost:5173`.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx     ✅ built
│   ├── Hero.tsx       ✅ built
│   ├── About.tsx      ✅ built
│   ├── Agenda.tsx     🚧 problem statement 1
│   ├── Team.tsx       🚧 problem statement 2
│   ├── FAQ.tsx        🚧 problem statement 3
│   ├── Contact.tsx    🚧 problem statement 4
│   └── Footer.tsx     ✅ built
├── App.tsx
├── main.tsx
└── index.css
```

## The GitGud Workflow

Follow this workflow for your challenge — this is exactly what you learned in
Section B:

1. `git clone <repo-url>`
2. `git switch -c <your-team-name>` — create a branch named after your team
3. Build your assigned section in its component file
4. `git add .` then `git commit -m "..."` — commit your work with a clear message
5. `git push origin <your-team-name>`
6. Open a **Pull Request** on GitHub
7. Get a review, then merge 🎉

**Golden Rule: never push directly to `main`. Always use a branch and a Pull Request.**

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local dev server           |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Styling

This project uses Tailwind CSS utility classes directly in components. The
brand color is available as `brand`, `brand-light`, and `brand-dark` (see
`tailwind.config.js`).
