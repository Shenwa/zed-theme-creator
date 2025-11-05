import { type Theme } from "../types";

/**
 * Converts numeric font weight to string format
 */
const parseFontWeight = (weight: number | null | undefined): "normal" | "bold" => {
  if (!weight) return "normal";
  return weight >= 600 ? "bold" : "normal";
};

/**
 * Parses a Zed theme JSON and converts it to our Theme format
 * @param jsonString - The JSON string of a Zed theme
 * @returns Parsed Theme object or null if parsing fails
 */
export const parseZedThemeJSON = (jsonString: string): Theme | null => {
  try {
    const zedTheme = JSON.parse(jsonString);

    // Validate required fields
    if (!zedTheme.themes || !Array.isArray(zedTheme.themes) || zedTheme.themes.length === 0) {
      throw new Error("Invalid theme structure: missing themes array");
    }

    const firstTheme = zedTheme.themes[0];
    const style = firstTheme.style || {};

    // Extract UI colors
    const ui = {
      background: style.background || "#282c34",
      foreground: style.foreground || "#abb2bf",
      text: style.text || "#abb2bf",
      textMuted: style["text.muted"] || "#5c6370",
      textAccent: style["text.accent"] || "#61afef",
      border: style.border || "#3e4451",
      borderFocused: style["border.focused"] || "#528bff",
      borderSelected: style["border.selected"] || "#c678dd",
      tabActiveBackground: style["tab.active_background"] || style["editor.background"] || "#282c34",
      elementHoverBackground: style["element.hover"] || "#2c313c",
      elementSelectedBackground: style["element.selected"] || style["element.active"] || "#3e4451",
      titleBarBackground: style["title_bar.background"] || "#21252b",
      contextBarBackground: style["toolbar.background"] || style.background || "#1e1e1e",
    };

    // Extract editor colors
    const editor = {
      background: style["editor.background"] || style.background || "#282c34",
      foreground: style["editor.foreground"] || style.text || "#abb2bf",
      lineNumber: style["editor.line_number"] || "#5c6370",
      activeLineNumber: style["editor.active_line_number"] || "#61afef",
      gutterBackground: style["editor.gutter.background"] || style["editor.background"] || "#282c34",
      selectedLineBackground: style["editor.active_line.background"] || "#2c313c",
    };

    // Extract syntax highlighting
    const syntaxSource = style.syntax || {};
    const syntax: Theme["syntax"] = {};

    // All syntax elements we support (simplified)
    const allSyntaxElements = [
      "comment",
      "constant",
      "function",
      "keyword",
      "number",
      "operator",
      "property",
      "punctuation",
      "string",
      "tag",
      "type",
      "variable",
    ];

    // Map common Zed theme syntax names to our element names
    const syntaxMapping: Record<string, string> = {
      "function.call": "function",
      "function.definition": "function",
      "constructor.call": "constructor",
      "type.class": "class",
      "type.interface": "interface",
      "type.enum": "enum",
      "type.struct": "struct",
      "variable.special": "variable",
      "variable.other": "variable",
      "keyword.control.conditional": "keyword.control",
      "keyword.control.repeat": "keyword.control",
      "keyword.control.return": "keyword.control",
      "punctuation.special": "punctuation",
    };

    // Helper to find the best matching syntax style
    const findSyntaxStyle = (key: string) => {
      // Try exact match first
      if (syntaxSource[key]) {
        return syntaxSource[key];
      }

      // Try mapped name
      const mappedKey = syntaxMapping[key];
      if (mappedKey && syntaxSource[mappedKey]) {
        return syntaxSource[mappedKey];
      }

      // Try finding a parent key (e.g., "function" for "function.builtin")
      if (key.includes(".")) {
        const baseKey = key.split(".")[0];
        if (syntaxSource[baseKey]) {
          return syntaxSource[baseKey];
        }
      }

      // Try finding any key that starts with our base
      const baseKey = key.split(".")[0];
      for (const sourceKey in syntaxSource) {
        if (sourceKey === baseKey || sourceKey.startsWith(baseKey + ".")) {
          return syntaxSource[sourceKey];
        }
      }

      return null;
    };

    // Default colors for different element types
    const getDefaultColor = (key: string): string => {
      if (key.startsWith("comment")) return "#5c6370";
      if (key.startsWith("keyword")) return "#c678dd";
      if (key.startsWith("string")) return "#98c379";
      if (key === "number" || key === "boolean" || key === "constant") return "#d19a66";
      if (key.startsWith("function")) return "#61afef";
      if (key.startsWith("type") || key === "class" || key === "interface" || key === "enum" || key === "struct") return "#e5c07b";
      if (key === "property" || key.startsWith("variable")) return "#e06c75";
      if (key === "operator") return "#56b6c2";
      if (key.startsWith("tag")) return "#e06c75";
      return ui.text;
    };

    for (const key of allSyntaxElements) {
      const syntaxStyle = findSyntaxStyle(key);

      if (syntaxStyle && syntaxStyle.color) {
        // Element exists in the source theme (or we found a match)
        syntax[key] = {
          color: syntaxStyle.color,
          fontStyle: (syntaxStyle.font_style as "normal" | "italic" | "underline") || "normal",
          fontWeight: parseFontWeight(syntaxStyle.font_weight),
        };
      } else {
        // Element doesn't exist, use default
        syntax[key] = {
          color: getDefaultColor(key),
          fontStyle: "normal",
          fontWeight: "normal",
        };
      }
    }

    // Build the theme object
    const theme: Theme = {
      name: zedTheme.name || firstTheme.name || "Imported Theme",
      author: zedTheme.author || "Unknown",
      appearance: firstTheme.appearance || "dark",
      language: "typescript", // Default to typescript for preview
      ui,
      editor,
      syntax,
    };

    return theme;
  } catch (error) {
    console.error("Failed to parse Zed theme JSON:", error);
    return null;
  }
};

/**
 * Reads a file and returns its content as string
 */
export const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        resolve(result);
      } else {
        reject(new Error("Failed to read file as text"));
      }
    };
    reader.onerror = () => reject(new Error("File reading error"));
    reader.readAsText(file);
  });
};
