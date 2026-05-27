# 🎠 Slider

A **full-screen image slider** built with **React 19**, **TypeScript**, and **Tailwind CSS v4**, bundled with **Vite**. It cycles through beautifully crafted gradient slides with smooth animations, navigation arrows, and dot indicators — all in a clean, reusable component.

---

## ✨ Features

- 🖼️ **Full-screen slides** — each slide occupies 100% of the viewport height
- 🎨 **Gradient backgrounds** — each slide uses a unique Tailwind CSS `bg-gradient-to-br` color palette
- ⏱️ **Auto-play** — slides advance automatically every 5 seconds (configurable via props)
- ◀ ▶ **Navigation arrows** — frosted-glass styled prev/next buttons with hover effects
- 🔵 **Dot indicators** — clickable pagination dots at the bottom; the active dot expands to a pill shape
- 🔄 **Infinite loop** — wraps seamlessly from the last slide back to the first (and vice versa)
- ♿ **Accessible** — all interactive elements include descriptive `aria-label` attributes
- ⚛️ **React 19 + StrictMode** — leverages the latest React release with strict development checks
- 🟦 **TypeScript** — fully typed props and state for safe, predictable development

---

## 🗂️ Project Structure

```
slider/
├── index.html              # HTML entry point
├── vite.config.ts          # Vite + React + Tailwind CSS v4 plugins
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── src/
    ├── main.tsx            # React app bootstrap (StrictMode + createRoot)
    ├── App.tsx             # Root component — defines slide data and renders <Slider>
    ├── Slider.tsx          # Core slider component (logic + UI)
    └── style.css           # Global styles — imports Tailwind CSS v4
```

---

## 🧩 Component: `Slider.tsx`

The `Slider` component is the heart of the project. It accepts the following props:

| Prop       | Type      | Default  | Description                              |
|------------|-----------|----------|------------------------------------------|
| `slides`   | `Slide[]` | required | Array of slide objects to display        |
| `interval` | `number`  | `5000`   | Auto-play interval in milliseconds       |

### `Slide` type

```ts
type Slide = {
  id: number       // Unique identifier for the slide
  bg: string       // Tailwind CSS gradient class (e.g. "from-blue-900 via-purple-900 to-indigo-900")
  title?: string   // Optional text label displayed on the slide
}
```

### Internal mechanics

- **`useState`** tracks the index of the currently visible slide
- **`useCallback`** memoizes the `prev` and `next` navigation functions
- **`useEffect`** sets up and cleans up the `setInterval` auto-play timer
- The slide strip is a **horizontal flex container** translated via inline `transform: translateX(-N%)` for smooth CSS transitions

---

## 🎨 Slides (defined in `App.tsx`)

| # | Title          | Gradient Colors                              |
|---|----------------|----------------------------------------------|
| 1 | Mountain View  | `blue-900 → purple-900 → indigo-900`         |
| 2 | City Lights    | `gray-900 → slate-800 → zinc-900`            |
| 3 | Ocean Sunset   | `orange-600 → rose-800 → purple-900`         |
| 4 | Forest Path    | `green-900 → emerald-800 → teal-900`         |
| 5 | Desert Dunes   | `amber-700 → yellow-800 → orange-900`        |

---

## 🛠️ Tech Stack

| Technology         | Version   | Role                              |
|--------------------|-----------|-----------------------------------|
| React              | ^19.2.6   | UI component library              |
| React DOM          | ^19.2.6   | DOM rendering                     |
| TypeScript         | ~6.0.2    | Static typing                     |
| Vite               | ^8.0.12   | Dev server & bundler              |
| Tailwind CSS       | ^4.3.0    | Utility-first styling             |
| @tailwindcss/vite  | ^4.3.0    | Tailwind v4 Vite plugin           |
| @vitejs/plugin-react | ^6.0.2  | React Fast Refresh via Vite       |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd slider

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

### Build for Production

```bash
npm run build
```

Outputs optimized static files to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to verify the production build.

---

## 📖 Usage Example

You can customize the slider by editing the `slides` array in `App.tsx` or by passing your own data to the `<Slider>` component:

```tsx
import Slider from './Slider'

const mySlides = [
  { id: 1, title: 'Welcome', bg: 'from-cyan-900 via-blue-800 to-indigo-900' },
  { id: 2, title: 'Explore', bg: 'from-rose-800 via-pink-700 to-fuchsia-900' },
]

function App() {
  // Change interval to 3 seconds
  return <Slider slides={mySlides} interval={3000} />
}
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
