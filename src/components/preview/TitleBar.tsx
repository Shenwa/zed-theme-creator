import React from "react";
import { type Theme } from "../../types";

interface TitleBarProps {
  theme: Theme;
  projectName?: string;
  projectPath?: string;
}

const TitleBar: React.FC<TitleBarProps> = ({
  theme,
  projectName = "my-zed-project",
  projectPath = "~/projects/my-zed-project",
}) => {
  return (
    <div
      className="flex items-center justify-between px-3 py-2 border-b text-sm"
      style={{
        backgroundColor: theme.ui.titleBarBackground,
        borderColor: theme.ui.border,
        color: theme.ui.text,
      }}
    >
      <div className="flex items-center gap-2">
        <span style={{ color: theme.ui.textAccent, fontWeight: "600" }}>
          {projectName}
        </span>
        <span style={{ color: theme.ui.textMuted }}>•</span>
        <span style={{ color: theme.ui.textMuted, fontSize: "0.75rem" }}>
          {projectPath}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-2 py-0.5 text-xs"
          style={{ color: theme.ui.textMuted }}
        >
          ⚙
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
