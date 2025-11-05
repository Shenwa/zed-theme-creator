import { createHighlighter, type Highlighter, type BundledLanguage } from 'shiki';
import { type Theme } from '../types';

let highlighterInstance: Highlighter | null = null;

/**
 * Initialize Shiki highlighter with all supported languages
 * This is called once when the app starts
 */
export const initializeShiki = async (): Promise<Highlighter> => {
  if (highlighterInstance) {
    return highlighterInstance;
  }

  highlighterInstance = await createHighlighter({
    themes: ['dark-plus'], // We'll use a base theme and override with custom colors
    langs: [
      'typescript',
      'tsx',
      'javascript',
      'jsx',
      'python',
      'html',
      'css',
      'rust',
      'go',
      'cpp',
      'java',
      'json',
    ],
  });

  return highlighterInstance;
};

/**
 * Get the Shiki highlighter instance
 */
export const getHighlighter = (): Highlighter | null => {
  return highlighterInstance;
};

/**
 * Convert our theme to Shiki theme format
 */
export const convertThemeToShiki = (theme: Theme) => {
  return {
    name: theme.name,
    type: theme.appearance as 'light' | 'dark',
    colors: {
      'editor.background': theme.editor.background,
      'editor.foreground': theme.editor.foreground,
    },
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: {
          foreground: theme.syntax.comment.color,
          fontStyle: theme.syntax.comment.fontStyle,
        },
      },
      {
        scope: ['constant', 'constant.language', 'constant.numeric'],
        settings: {
          foreground: theme.syntax.constant.color,
          fontStyle: theme.syntax.constant.fontStyle,
        },
      },
      {
        scope: [
          'entity.name.function',
          'support.function',
          'meta.function-call',
          'entity.name.class',
          'support.class',
        ],
        settings: {
          foreground: theme.syntax.function.color,
          fontStyle: theme.syntax.function.fontStyle,
        },
      },
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: {
          foreground: theme.syntax.keyword.color,
          fontStyle: theme.syntax.keyword.fontStyle,
        },
      },
      {
        scope: ['constant.numeric', 'constant.language.boolean'],
        settings: {
          foreground: theme.syntax.number.color,
          fontStyle: theme.syntax.number.fontStyle,
        },
      },
      {
        scope: ['keyword.operator', 'punctuation'],
        settings: {
          foreground: theme.syntax.operator.color,
          fontStyle: theme.syntax.operator.fontStyle,
        },
      },
      {
        scope: [
          'variable.other.property',
          'support.type.property-name',
          'entity.name.tag',
          'meta.object-literal.key',
        ],
        settings: {
          foreground: theme.syntax.property.color,
          fontStyle: theme.syntax.property.fontStyle,
        },
      },
      {
        scope: ['punctuation'],
        settings: {
          foreground: theme.syntax.punctuation.color,
          fontStyle: theme.syntax.punctuation.fontStyle,
        },
      },
      {
        scope: ['string', 'string.quoted'],
        settings: {
          foreground: theme.syntax.string.color,
          fontStyle: theme.syntax.string.fontStyle,
        },
      },
      {
        scope: ['entity.name.tag', 'support.class.component'],
        settings: {
          foreground: theme.syntax.tag.color,
          fontStyle: theme.syntax.tag.fontStyle,
        },
      },
      {
        scope: [
          'entity.name.type',
          'support.type',
          'support.class',
          'entity.other.inherited-class',
        ],
        settings: {
          foreground: theme.syntax.type.color,
          fontStyle: theme.syntax.type.fontStyle,
        },
      },
      {
        scope: [
          'variable',
          'variable.other',
          'variable.parameter',
          'meta.definition.variable',
        ],
        settings: {
          foreground: theme.syntax.variable.color,
          fontStyle: theme.syntax.variable.fontStyle,
        },
      },
    ],
  };
};

/**
 * Highlight code using Shiki
 */
export const highlightCode = async (
  code: string,
  language: BundledLanguage,
  theme: Theme
): Promise<string> => {
  const highlighter = await initializeShiki();
  const shikiTheme = convertThemeToShiki(theme);

  // Load the custom theme
  await highlighter.loadTheme(shikiTheme);

  return highlighter.codeToHtml(code, {
    lang: language,
    theme: shikiTheme,
  });
};
