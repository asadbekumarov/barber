# Gentleman's Blade - Barber Shop Website

A modern, responsive barber shop website built with React, TypeScript, and Vite.

## Features

- Responsive design for all devices
- Smooth scrolling navigation
- Service showcase
- Barber profiles
- Customer testimonials
- Contact form
- Modern UI with Tailwind CSS

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment to Vercel

This project is configured for Vercel deployment:

1. **Vercel Configuration**: `vercel.json` handles SPA routing
2. **Base Path**: Set to `/` for proper asset loading
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`

### Deploy Steps:

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect Vite and use correct settings
4. Or manually set:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Troubleshooting 404 Errors:

- Ensure `vercel.json` is present with rewrites
- Check that `base` in `vite.config.ts` is set to `/`
- For SPA routing, all routes should redirect to `index.html`

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- Lucide Icons
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
