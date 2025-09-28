# Next.js Starter Template

This is a production-ready Next.js starter template with all the essential configurations and components pre-installed. It includes:

- Next.js 15+ with App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Dark mode support
- Pre-configured fonts
- ESLint and Prettier
- Responsive design utilities

## Features

- ✅ Next.js 15+ with Turbopack
- ✅ TypeScript ready
- ✅ Tailwind CSS v4 with custom themes
- ✅ Dark mode support
- ✅ Pre-installed shadcn/ui components (Button)
- ✅ Custom fonts (Salsa, Roboto Condensed)
- ✅ ESLint and Prettier configuration
- ✅ Responsive design
- ✅ Optimized for performance

## Quick Setup

Create a new project using the setup script:

```bash
node setup-new-project.js my-new-project
cd my-new-project
npm install
npm run dev
```

Or manually copy this template to your new project directory.

## Getting Started

1. Create a new Next.js app using this template:
   ```bash
   npx create-next-app@latest my-app --example [template-url]
   ```

2. Or copy this folder and run:
   ```bash
   npm install
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to see your app

## Project Structure

```
.
├── src/                   # Source code
├── public/                # Static assets
├── .gitignore             # Git ignore rules
├── .env.example           # Environment variable examples
├── components.json        # shadcn/ui configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # NPM package configuration
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration

src/
├── app/                   # App Router (Next.js pages and layouts)
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── feature/           # Feature-specific components
│   │   └── sample-feature.tsx  # Example feature component
│   └── ui/                # shadcn/ui components
│       └── button.tsx     # Accessible button component
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
└── style/                 # Global styles
    └── globals.css        # Global CSS styles
```

## Detailed Directory Explanation

### `src/app/`

Contains all pages and layouts using Next.js App Router:
- `layout.tsx`: Root layout wrapping all pages
- `page.tsx`: Home page (route: `/`)

### `src/components/`

Reusable React components organized into two categories:

#### `src/components/ui/`

shadcn/ui components that follow accessibility standards:
- `button.tsx`: Accessible button component with variants

#### `src/components/feature/`

Project-specific components:
- `sample-feature.tsx`: Example component showing best practices

### `src/lib/`

Utility functions and helpers:
- `utils.ts`: Collection of helper functions including:
  - `cn()`: Class name merger using tailwind-merge

### `src/style/`

Global styling files:
- `globals.css`: Tailwind imports, custom CSS variables, and base styles

## Configuration Files

### `next.config.ts`
Next.js configuration file with TypeScript support.

### `tailwind.config.ts`
Tailwind CSS configuration with:
- Path aliases for components
- Plugin configurations
- Dark mode settings

### `tsconfig.json`
TypeScript configuration with:
- Path aliases (`@/*`)
- Strict type checking
- JSX preservation

### `components.json`
shadcn/ui configuration defining:
- Component aliases
- Style preferences
- TypeScript settings

### `postcss.config.mjs`
PostCSS configuration for processing CSS.

### `eslint.config.mjs`
ESLint configuration for code quality and consistency.

## Best Practices

1. **Component Organization**:
   - Place shared UI components in `src/components/ui/`
   - Place feature-specific components in `src/components/feature/`

2. **Page Creation**:
   - Create new pages by adding `[name]/page.tsx` in `src/app/`
   - Add layouts with `layout.tsx` in route directories

3. **Styling**:
   - Use Tailwind classes for most styling
   - Add custom CSS in `src/style/globals.css` when needed
   - Define CSS variables for consistent theming

4. **Utilities**:
   - Add helper functions to `src/lib/utils.ts`
   - Keep utility functions pure and testable

5. **Static Assets**:
   - Place images, icons, and other static files in `public/`
   - Reference them with absolute paths (e.g., `/images/logo.png`)

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run start` - Runs the built app in production mode
- `npm run lint` - Runs ESLint

## Dependencies Included

- next
- react
- react-dom
- typescript
- tailwindcss
- @radix-ui/react-slot
- class-variance-authority
- clsx
- lucide-react
- tailwind-merge

Start building your next application without worrying about basic setup!