export interface Theme {
  name: string;
  author: string;
  appearance: 'light' | 'dark';
  language: string;
  ui: {
    background: string;
    text: string;
    textMuted: string;
    textAccent: string;
    border: string;
    borderFocused: string;
    borderSelected: string;
    tabActiveBackground: string;
    elementHoverBackground: string;
    elementSelectedBackground: string;
    titleBarBackground: string;
    contextBarBackground: string;
    [key: string]: string;
  };
  editor: {
    background: string;
    foreground: string;
    lineNumber: string;
    activeLineNumber: string;
    gutterBackground: string;
    selectedLineBackground: string;
    [key: string]: string;
  };
  syntax: {
    [key: string]: {
      color: string;
      fontStyle: 'normal' | 'italic' | 'underline';
      fontWeight: 'normal' | 'bold';
    };
  };
}

export interface CustomStyle {
  [key: string]: React.CSSProperties;
}