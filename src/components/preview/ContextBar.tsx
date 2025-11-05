import React from "react";
import { type Theme } from "../../types";

interface ContextBarProps {
  theme: Theme;
  filePath?: string;
  currentContext?: string;
}

const ContextBar: React.FC<ContextBarProps> = ({
  theme,
  filePath = "src/components/App.tsx",
  currentContext = "function App()",
}) => {
  return (
    <div
      className="flex items-center px-2 sm:px-3 py-1.5 border-b text-xs overflow-x-auto"
      style={{
        backgroundColor: theme.ui.contextBarBackground,
        borderColor: theme.ui.border,
        color: theme.ui.textMuted,
      }}
    >
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <span style={{ color: theme.ui.text }}>{filePath}</span>
        <span style={{ color: theme.ui.textMuted }}>›</span>
        <span style={{ color: theme.ui.textAccent }}>{currentContext}</span>
      </div>
    </div>
  );
};

export default ContextBar;
