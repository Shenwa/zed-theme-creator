# Zed Theme Creator

A powerful web-based visual theme editor for the [Zed code editor](https://zed.dev/). Create, customize, and export beautiful color themes with a real-time live preview.

**Try it now:** https://shenwa.github.io/zed-theme-creator/

![Zed Theme Creator](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)

## Features

### Visual Theme Editing
- **Live Preview**: See your theme changes in real-time with a fully simulated Zed editor interface
- **Comprehensive Customization**: Configure every aspect of your theme:
  - UI elements (backgrounds, borders, hover states, selections)
  - Editor colors (line numbers, gutters, active lines)
  - Syntax highlighting (comments, keywords, strings, functions, and more)
- **Font Styling**: Control font weight and style (italic, bold, underline) for each syntax element

### Multi-Language Support
Preview your theme across multiple programming languages:
- TypeScript/JavaScript
- Python
- Rust
- Go
- HTML/CSS
- And more...

### Theme Management
- **Export**: Download your theme as a properly formatted JSON file ready for Zed
- **Import**: Load and edit existing Zed theme files
- **Magic Theme Generator**: Create complete themes from just 4 base colors (background, primary, secondary, accent)
- **JSON Preview**: View the generated theme JSON in real-time

### Modern UI
- Responsive design that works on desktop and mobile
- Dark mode interface
- Smooth animations with Framer Motion
- Accessible UI components powered by Radix UI

## Technology Stack

### Core Framework
- **React 19** - UI framework with the latest concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server

### Key Libraries
- **[Shiki](https://shiki.style/)** - Advanced syntax highlighting with TextMate grammar support
- **[Radix UI](https://www.radix-ui.com/)** - Accessible, unstyled UI primitives
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon set

### UI Components
- Radix UI Accordion, Tabs, Select, Popover, and more
- Custom components built with class-variance-authority for type-safe variants

## Getting Started

### Prerequisites
- Node.js (version 16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/zed-theme-creator.git
cd zed-theme-creator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Usage

1. **Configure your theme**: Use the left panel to customize colors, name your theme, and select font styles
2. **Preview in real-time**: The right panel shows a live preview with actual syntax highlighting
3. **Switch languages**: Change the preview language to see how your theme looks across different syntaxes
4. **Use Magic Generator** (optional): Start with 4 base colors and let the tool generate a complete theme
5. **Export**: Click "Download JSON" to save your theme file
6. **Install in Zed**: Copy the generated JSON to your Zed themes directory

### Installing Your Theme in Zed

After exporting your theme:

1. Locate your Zed themes directory:
   - macOS/Linux: `~/.config/zed/themes/`
   - Windows: `%APPDATA%\Zed\themes\`

2. Copy your exported JSON file to this directory

3. Restart Zed or reload your configuration

4. Select your theme in Zed's settings

## Project Structure

```
src/
├── components/
│   ├── preview/          # Zed UI preview components
│   ├── theme/           # Theme configuration components
│   └── ui/              # Reusable UI components
├── data/                # Mock data for preview
├── utils/               # Business logic and utilities
├── types.ts             # TypeScript definitions
├── code-examples.ts     # Sample code for previews
└── ThemeCreator.tsx     # Main application component
```

For detailed architecture documentation, see [ARCHITECTURE.md](ARCHITECTURE.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Shiki](https://shiki.style/) for accurate syntax highlighting
- UI components from [Radix UI](https://www.radix-ui.com/)
- Inspired by the amazing [Zed editor](https://zed.dev/)

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/zed-theme-creator/issues) on GitHub.
