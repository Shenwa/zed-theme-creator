import { type Theme } from "../types";

/**
 * Converts font weight from string to numeric value for Zed theme format
 */
export const getFontWeight = (weight: "normal" | "bold"): number | null => {
  if (weight === "bold") return 700;
  if (weight === "normal") return 400;
  return null;
};

/**
 * Converts syntax highlighting object to Zed's format
 */
export const convertSyntaxToZedFormat = (
  syntax: Theme["syntax"]
): Record<string, any> => {
  const result: Record<string, any> = {};

  for (const key in syntax) {
    const style = syntax[key];
    result[key] = {
      color: style.color || null,
      font_style: style.fontStyle !== "normal" ? style.fontStyle : null,
      font_weight: getFontWeight(style.fontWeight),
    };
  }

  return result;
};

/**
 * Generates a complete Zed theme JSON string from Theme object
 */
export const generateZedThemeJSON = (theme: Theme): string => {
  const syntax = convertSyntaxToZedFormat(theme.syntax);

  const zedTheme = {
    name: theme.name,
    author: theme.author,
    themes: [
      {
        name: theme.name,
        appearance: theme.appearance,
        style: {
          // Main UI background and foreground
          background: theme.ui.background,
          foreground: theme.ui.text,

          // Text colors
          text: theme.ui.text,
          "text.muted": theme.ui.textMuted,
          "text.accent": theme.ui.textAccent,

          // Border colors
          border: theme.ui.border,
          "border.focused": theme.ui.borderFocused,
          "border.selected": theme.ui.borderSelected,

          // Editor specific (separate from UI)
          "editor.background": theme.editor.background,
          "editor.foreground": theme.editor.foreground,
          "editor.line_number": theme.editor.lineNumber,
          "editor.active_line_number": theme.editor.activeLineNumber,
          "editor.gutter.background": theme.editor.gutterBackground,
          "editor.active_line.background": theme.editor.selectedLineBackground,

          // Surface colors (use UI background)
          "surface.background": theme.ui.background,
          "elevated_surface.background": theme.ui.background,

          // Panel colors (use UI background)
          "panel.background": theme.ui.background,
          "panel.focused_border": theme.ui.borderFocused,

          // Tab colors
          "tab_bar.background": theme.ui.background,
          "tab.active_background": theme.ui.tabActiveBackground || theme.editor.background,
          "tab.inactive_background": theme.ui.background,

          // Title bar
          "title_bar.background": theme.ui.titleBarBackground,

          // Toolbar/Context bar (breadcrumb)
          "toolbar.background": theme.ui.contextBarBackground,

          // Status bar (use UI background)
          "status_bar.background": theme.ui.background,

          // Element colors
          "element.background": theme.ui.border,
          "element.hover": theme.ui.elementHoverBackground || theme.ui.borderFocused,
          "element.selected": theme.ui.elementSelectedBackground || theme.ui.borderSelected,
          "element.active": theme.ui.elementSelectedBackground || theme.ui.borderSelected,

          // Syntax highlighting
          syntax: syntax,
        },
      },
    ],
  };

  return JSON.stringify(zedTheme, null, 2);
};

/**
 * Generates a safe filename from theme name
 */
export const generateThemeFilename = (themeName: string): string => {
  return `${themeName.toLowerCase().replace(/\s+/g, "-")}.json`;
};
