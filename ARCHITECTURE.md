# Architecture Documentation

## Project Structure

This document outlines the refactored architecture of the Zed Theme Creator application.

## Directory Structure

```
src/
├── components/
│   ├── preview/          # UI components for the live preview
│   │   ├── TitleBar.tsx
│   │   ├── FileTree.tsx
│   │   ├── TabBar.tsx
│   │   ├── CodeEditor.tsx
│   │   └── StatusBar.tsx
│   ├── theme/           # Theme configuration components
│   │   ├── LivePreview.tsx
│   │   ├── ThemeConfiguration.tsx
│   │   ├── ColorPicker.tsx
│   │   └── FontControl.tsx
│   └── ui/              # Reusable UI components
├── data/
│   └── mockData.ts      # Mock data for preview (file tree, tabs)
├── utils/
│   ├── themeGenerator.ts      # Theme generation logic
│   ├── fileDownload.ts        # File download utilities
│   ├── syntaxHighlighting.ts  # Syntax highlighter configuration
│   └── languageRegistry.ts    # Language registration
├── types.ts             # TypeScript type definitions
├── code-examples.ts     # Code examples for preview
└── ThemeCreator.tsx     # Main application component
```

## Business Logic (utils/)

### themeGenerator.ts
Pure functions for generating Zed theme JSON:
- `getFontWeight()` - Converts font weight strings to numeric values
- `convertSyntaxToZedFormat()` - Converts syntax highlighting to Zed's format
- `generateZedThemeJSON()` - Generates complete Zed theme JSON string
- `generateThemeFilename()` - Creates safe filename from theme name

### fileDownload.ts
File download utilities:
- `downloadFile()` - Downloads content as a file with proper cleanup

### syntaxHighlighting.ts
Syntax highlighting configuration:
- `generateCustomStyle()` - Generates custom styles for the syntax highlighter

### languageRegistry.ts
Language registration for syntax highlighting:
- `registerLanguages()` - Registers all supported languages

## Data Layer (data/)

### mockData.ts
Mock data structures:
- `FileTreeItem` - Interface for file tree items
- `mockFileTree` - Mock project structure for preview
- `TabItem` - Interface for tab items
- `mockTabs` - Mock open tabs for preview

## UI Components (components/)

### Preview Components (components/preview/)
Modular components for the Zed UI preview:
- **TitleBar** - Shows project name and path
- **FileTree** - Interactive file explorer sidebar
- **TabBar** - File tabs bar
- **CodeEditor** - Code editor with line numbers and syntax highlighting
- **StatusBar** - Bottom status bar with file info

### Theme Components (components/theme/)
- **LivePreview** - Main preview container, composes all preview components
- **ThemeConfiguration** - Theme configuration panel with color pickers

## Design Principles

### Separation of Concerns
- **Business logic** is separated into pure TypeScript functions in `utils/`
- **UI components** are focused on presentation only
- **Data structures** are defined separately in `data/`

### Reusability
- Each UI component is self-contained and reusable
- Pure functions can be easily tested and reused
- Mock data can be easily replaced with real data

### Type Safety
- All functions and components are fully typed
- Shared types are defined in `types.ts`
- Interfaces are exported from their respective files

### Single Responsibility
- Each file has a single, clear purpose
- Components are small and focused
- Functions do one thing well

## Data Flow

1. **User Input** → ThemeCreator state updates
2. **State Changes** → Triggers memoized computations:
   - `generateZedThemeJSON()` for JSON generation
   - `generateCustomStyle()` for syntax highlighting
3. **Rendering** → Props flow down to child components
4. **Download** → `downloadFile()` utility handles file creation

## Benefits of This Architecture

1. **Testability** - Pure functions are easy to unit test
2. **Maintainability** - Clear separation makes code easy to understand
3. **Scalability** - Easy to add new features or components
4. **Reusability** - Components and functions can be reused
5. **Type Safety** - TypeScript ensures correctness at compile time
6. **Performance** - Memoization prevents unnecessary recalculations
