# Astro Learn

A modern, responsive online learning platform built with React, Vite, and Tailwind CSS. AstroLearn provides an intuitive interface for discovering and exploring courses across various categories.

🔗 Live Link : https://astro-learn-sigma.vercel.app/

## Features

- 🚀 **Fast Development** — Vite with Hot Module Replacement (HMR)
- 📚 **Course Discovery** — Browse featured courses and explore all available courses
- 🔍 **Course Details** — View detailed information about individual courses
- 🎨 **Modern Design** — Tailwind CSS v4 with custom theme variables
- ⚡ **React 19** — Latest React features with strict mode
- 🛣️ **Client-Side Routing** — React Router v7 with nested layouts
- 📱 **Responsive UI** — Mobile-first design approach
- 🔗 **Icon Library** — React Icons for consistent iconography
- 📝 **Code Quality** — ESLint flat config with React best practices

## Project Structure

```
astrolearn/
├── public/
│   └── courses.json              # Course data
├── src/
│   ├── assets/
│   │   └── Images/               # Avatar, Article, Course images
│   ├── Components/
│   │   ├── Buttons/              # Button components
│   │   ├── Footer/               # Footer layout
│   │   ├── Header/               # Navigation bar
│   │   └── Pages/
│   │       ├── Home/             # Landing page components
│   │       ├── AllCourses/       # Courses listing & details
│   │       ├── ErrorPage/        # 404 error handler
│   │       └── Root/             # Root layout wrapper
│   ├── Routes/
│   │   └── routes.jsx            # Route configuration
│   ├── index.css                 # Global styles & Tailwind config
│   └── main.jsx                  # App entry point
├── index.html                    # HTML template
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint rules
└── README.md                     # This file
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend Framework** | React 19.2 |
| **Build Tool** | Vite 7.2 |
| **Styling** | Tailwind CSS 4.1 with @tailwindcss/vite |
| **Routing** | React Router 7.11 |
| **Icons** | React Icons 5.5 |
| **Linting** | ESLint 9.39 (flat config) |
| **Dev Server** | Vite HMR |

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kasfia-Mostafa/Astro_Learn.git

# Navigate to project directory
cd astrolearn

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (opens on http://localhost:5173)
npm run dev
```

The development server supports HMR for instant feedback on code changes.

### Build & Preview

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Check for linting errors
npm run lint
```

## Routes & Navigation

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page with featured courses, categories, testimonials |
| `/allCourses` | AllCourses | Browse all available courses |
| `/course/:id` | CourseDetails | View detailed information for a specific course |
| `*` | ErrorPage | 404 error fallback |

## Data Loading

Routes use loaders to fetch course data from `public/courses.json` before rendering:

```javascript
loader: () => fetch("/courses.json")
```

## Styling System

### Tailwind CSS v4

Uses the modern `@tailwindcss/vite` plugin (no PostCSS config needed).

### Custom Theme Variables

Defined in `src/index.css`:

```css
@theme {
  --color-bronze: #d4a373;
  --color-papaya: #faedcd;
  --color-cornsilk: #fefae0;
  --color-beige: #e9edc9;
  --color-teagreen: #ccd5ae;

  --font-oxanium: "Oxanium", sans-serif;
  --font-press: "Press Start 2P", system-ui;
}
```

### Custom Fonts

- **Oxanium** (200–800 weight) — Primary font
- **Press Start 2P** — Retro-style accent font

## ESLint Configuration

Flat config extending:
- `@eslint/js` recommended rules
- `eslint-plugin-react-hooks` recommended
- `eslint-plugin-react-refresh` Vite rules

**Custom Rule:** Allows uppercase variable names (constants) to avoid false positives.

## Configuration Files

For detailed configuration information, see [config-overview.txt](config-overview.txt).

## Deployment

### Environment Variables

Currently, no environment variables are required. To add them:

1. Create `.env` file in project root
2. Prefix variables with `VITE_` to expose them to the client

Example:
```env
VITE_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Building for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

**Note:** If deploying to a subpath (e.g., `/astrolearn/`), update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/astrolearn/',
  plugins: [react(), tailwindcss()],
});
```

## Common Issues

### Favicon Not Loading

If the favicon doesn't appear, verify `src/assets/Images/icon_AL.svg` exists, or update the path in `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="./path/to/your/icon.svg" />
```

### Port Already in Use

By default, Vite runs on port `5173`. To use a different port:

```bash
npm run dev -- --port 3000
```

### Course Data Not Loaded

Ensure `public/courses.json` is properly formatted and accessible. Check browser network tab for failed requests.

## Development Tips

- **Hot Reload:** Edit component files and see changes instantly
- **React Dev Tools:** Install the [React DevTools](https://react.devtools.dev/) browser extension
- **Tailwind Intellisense:** Install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) in VS Code
- **ESLint Extension:** Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for real-time linting

## Performance Considerations

- **Lazy Loading:** Consider lazy loading course pages with `React.lazy()` and `Suspense`
- **Image Optimization:** Compress images in `src/assets/` before deployment
- **Code Splitting:** Vite automatically code-splits at route boundaries

## Future Enhancements

- TypeScript integration for type safety
- Authentication & user accounts
- Course progress tracking
- Search & filtering functionality
- Rating & review system
- Responsive mobile navigation

## License

This project is licensed under the MIT License. See LICENSE file for details.

## Author

**Kasfia Mostafa**

- GitHub: [@Kasfia-Mostafa](https://github.com/Kasfia-Mostafa)
- Repository: [Astro_Learn](https://github.com/Kasfia-Mostafa/Astro_Learn)
