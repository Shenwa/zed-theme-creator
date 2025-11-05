import React from "react";
import { type Theme } from "../../types";

interface StatusBarProps {
  theme: Theme;
  language: string;
  line?: number;
  column?: number;
  encoding?: string;
  lineEnding?: string;
  indentation?: string;
}

const StatusBar: React.FC<StatusBarProps> = ({
  theme,
  language,
  line = 1,
  column = 1,
  encoding = "UTF-8",
  lineEnding = "LF",
  indentation = "Spaces: 2",
}) => {
  return (
    <div
      className="flex items-center justify-between px-2 sm:px-3 py-1 border-t text-xs overflow-x-auto"
      style={{
        backgroundColor: theme.ui.background,
        borderColor: theme.ui.border,
        color: theme.ui.textMuted,
      }}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <span style={{ color: theme.ui.textAccent }}>●</span>
        <span className="hidden sm:inline">{encoding}</span>
        <span className="hidden sm:inline">{lineEnding}</span>
        <span style={{ color: theme.ui.text }}>{language.toUpperCase()}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span>
          Ln {line}, Col {column}
        </span>
        <span className="hidden sm:inline">{indentation}</span>
      </div>
    </div>
  );
};

export default StatusBar;
