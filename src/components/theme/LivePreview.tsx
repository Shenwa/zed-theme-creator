import React, { useState } from "react";
import { type Theme } from "../../types";
import { mockFileTree, mockTabs } from "../../data/mockData";
import TitleBar from "../preview/TitleBar";
import FileTree from "../preview/FileTree";
import TabBar from "../preview/TabBar";
import ContextBar from "../preview/ContextBar";
import CodeEditor from "../preview/CodeEditor";
import StatusBar from "../preview/StatusBar";

interface LivePreviewProps {
  theme: Theme;
  codeString: string;
  language: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({
  theme,
  codeString,
  language,
}) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["src", "components"])
  );

  const toggleFolder = (folderName: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderName)) {
      newExpanded.delete(folderName);
    } else {
      newExpanded.add(folderName);
    }
    setExpandedFolders(newExpanded);
  };

  return (
    <div
      className="h-[300px] sm:h-[400px] lg:h-[calc(100vh-150px)] rounded-md overflow-hidden flex flex-col"
      style={{
        backgroundColor: theme.ui.background,
        border: "1px solid",
        borderColor: theme.ui.border,
      }}
    >
      <TitleBar theme={theme} />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <FileTree
            theme={theme}
            items={mockFileTree}
            expandedFolders={expandedFolders}
            onToggleFolder={toggleFolder}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <TabBar theme={theme} tabs={mockTabs} />
          <ContextBar theme={theme} />

          <CodeEditor
            theme={theme}
            codeString={codeString}
            language={language}
          />

          <StatusBar theme={theme} language={language} />
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
