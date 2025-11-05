import { type Theme } from "../types";

/**
 * Converts a hex color to RGB
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

/**
 * Converts RGB to hex
 */
const rgbToHex = (r: number, g: number, b: number): string => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = Math.round(Math.max(0, Math.min(255, x))).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};

/**
 * Lightens a color by a percentage
 */
const lighten = (hex: string, percent: number): string => {
  const { r, g, b } = hexToRgb(hex);
  const amount = (255 * percent) / 100;
  return rgbToHex(r + amount, g + amount, b + amount);
};

/**
 * Darkens a color by a percentage
 */
const darken = (hex: string, percent: number): string => {
  const { r, g, b } = hexToRgb(hex);
  const amount = (255 * percent) / 100;
  return rgbToHex(r - amount, g - amount, b - amount);
};

/**
 * Adjusts the opacity/brightness of a color
 */
const adjustBrightness = (hex: string, percent: number): string => {
  if (percent > 0) {
    return lighten(hex, percent);
  } else {
    return darken(hex, Math.abs(percent));
  }
};

/**
 * Mixes two colors together
 */
const mixColors = (color1: string, color2: string, weight: number = 0.5): string => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const r = Math.round(rgb1.r * weight + rgb2.r * (1 - weight));
  const g = Math.round(rgb1.g * weight + rgb2.g * (1 - weight));
  const b = Math.round(rgb1.b * weight + rgb2.b * (1 - weight));

  return rgbToHex(r, g, b);
};

/**
 * Determines if a color is light or dark
 */
const isLightColor = (hex: string): boolean => {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
};

/**
 * Generates a harmonious theme from base colors
 */
export const generateMagicTheme = (
  baseTheme: Theme,
  magicColors: {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  }
): Theme => {
  const { background, primary, secondary, accent } = magicColors;
  const isLight = isLightColor(background);

  // Determine appearance based on background
  const appearance = isLight ? "light" : "dark";

  // Generate UI colors
  const ui = {
    background: background,
    foreground: isLight ? darken(background, 80) : lighten(background, 80),
    text: isLight ? darken(background, 80) : lighten(background, 80),
    textMuted: isLight ? darken(background, 40) : lighten(background, 40),
    textAccent: primary,
    border: isLight ? darken(background, 15) : lighten(background, 15),
    borderFocused: primary,
    borderSelected: accent,
    tabActiveBackground: isLight ? darken(background, 5) : lighten(background, 5),
    elementHoverBackground: isLight ? darken(background, 8) : lighten(background, 8),
    elementSelectedBackground: isLight ? darken(background, 12) : lighten(background, 12),
    titleBarBackground: isLight ? darken(background, 3) : lighten(background, 3),
    contextBarBackground: background,
  };

  // Generate editor colors
  const editorBg = isLight ? lighten(background, 3) : darken(background, 3);
  const editor = {
    background: editorBg,
    foreground: ui.text,
    lineNumber: ui.textMuted,
    activeLineNumber: primary,
    gutterBackground: editorBg,
    selectedLineBackground: isLight ? darken(editorBg, 5) : lighten(editorBg, 5),
  };

  // Generate syntax colors with harmonious palette
  const syntax = {
    comment: {
      color: ui.textMuted,
      fontStyle: "italic" as const,
      fontWeight: "normal" as const,
    },
    constant: {
      color: secondary,
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    function: {
      color: primary,
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    keyword: {
      color: accent,
      fontStyle: "normal" as const,
      fontWeight: "bold" as const,
    },
    number: {
      color: secondary,
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    operator: {
      color: mixColors(primary, accent, 0.5),
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    property: {
      color: mixColors(primary, secondary, 0.6),
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    punctuation: {
      color: ui.text,
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    string: {
      color: mixColors(secondary, accent, 0.7),
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    tag: {
      color: accent,
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    type: {
      color: mixColors(accent, primary, 0.5),
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
    variable: {
      color: ui.text,
      fontStyle: "normal" as const,
      fontWeight: "normal" as const,
    },
  };

  return {
    ...baseTheme,
    appearance,
    ui,
    editor,
    syntax,
  };
};
