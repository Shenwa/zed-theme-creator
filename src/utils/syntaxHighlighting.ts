import { type CustomStyle, type Theme } from "../types";

/**
 * Maps semantic syntax names to highlight.js class names
 * Some semantic names map to multiple highlight.js classes
 *
 * Note: highlight.js uses different class names than Zed's semantic names
 * This mapping bridges between our theme structure and highlight.js output
 */
const SYNTAX_CLASS_MAPPING: Record<string, string[]> = {
  comment: ["comment", "doctag"],
  constant: ["constant", "literal", "boolean"],
  function: ["function", "title function_", "built_in"],
  keyword: ["keyword"],
  number: ["number"],
  operator: ["operator"],
  property: ["property", "attr", "attribute", "meta"],
  punctuation: ["punctuation"],
  string: ["string", "template-tag", "template-variable"],
  tag: ["tag", "selector-tag"],
  type: ["type", "class", "title class_", "title class_ inherited__"],
  variable: ["variable", "variable language_", "variable constant_", "params"],
};

/**
 * Generates custom styles for syntax highlighter from theme
 * Always returns a new object to ensure React detects changes
 */
export const generateCustomStyle = (theme: Theme): CustomStyle => {
  const styles: CustomStyle = {
    hljs: {
      backgroundColor: theme.editor.background,
      color: theme.editor.foreground,
    },
  };

  // Map each semantic syntax key to its corresponding highlight.js classes
  for (const key in theme.syntax) {
    // Create a new style object for each iteration
    const syntaxStyle = {
      color: theme.syntax[key].color,
      fontStyle: theme.syntax[key].fontStyle,
      fontWeight: theme.syntax[key].fontWeight,
    };

    // Get the mapped class names for this semantic key
    let classNames: string[] = [];

    // Try direct mapping first
    const directMapping = SYNTAX_CLASS_MAPPING[key];
    if (directMapping && Array.isArray(directMapping)) {
      classNames = [...directMapping]; // Create a copy to avoid mutations
    } else {
      // For keys like "keyword.control", try the base key "keyword"
      const baseKey = key.split(".")[0];
      const baseMapping = SYNTAX_CLASS_MAPPING[baseKey];
      if (baseMapping && Array.isArray(baseMapping)) {
        classNames = [...baseMapping]; // Create a copy to avoid mutations
      } else {
        // If no mapping found, use the key itself with dots replaced by spaces
        classNames = [key.replace(/\./g, " ")];
      }
    }

    // Apply the same style to all mapped class names
    if (Array.isArray(classNames) && classNames.length > 0) {
      for (const className of classNames) {
        // Create a new style object for each class to ensure immutability
        styles[`hljs-${className}`] = { ...syntaxStyle };
      }
    }
  }

  return styles;
};
