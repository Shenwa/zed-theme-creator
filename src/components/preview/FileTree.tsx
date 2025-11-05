import React, { useState } from "react";
import { type Theme } from "../../types";
import { type FileTreeItem } from "../../data/mockData";

interface FileTreeProps {
  theme: Theme;
  items: FileTreeItem[];
  expandedFolders: Set<string>;
  onToggleFolder: (folderName: string) => void;
}

const FileTree: React.FC<FileTreeProps> = ({
  theme,
  items,
  expandedFolders,
  onToggleFolder,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("App.tsx");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const renderTreeItem = (
    item: FileTreeItem,
    depth: number = 0
  ): React.ReactNode => {
    const isExpanded = expandedFolders.has(item.name);
    const isSelected = selectedItem === item.name;
    const isHovered = hoveredItem === item.name;

    const getItemStyle = () => {
      if (isSelected) {
        return {
          backgroundColor: theme.ui.elementSelectedBackground,
          color: theme.ui.textAccent,
        };
      }
      if (isHovered) {
        return {
          backgroundColor: theme.ui.elementHoverBackground,
          color: theme.ui.text,
        };
      }
      return {
        backgroundColor: "transparent",
        color: theme.ui.text,
      };
    };

    return (
      <div key={item.name}>
        <div
          className="flex items-center px-2 py-0.5 cursor-pointer text-xs transition-colors"
          style={{
            paddingLeft: `${depth * 12 + 8}px`,
            ...getItemStyle(),
          }}
          onClick={() => {
            if (item.type === "folder") {
              onToggleFolder(item.name);
            }
            setSelectedItem(item.name);
          }}
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <span className="mr-1.5">
            {item.type === "folder" ? (isExpanded ? "▼" : "▶") : "📄"}
          </span>
          <span>{item.name}</span>
        </div>
        {item.type === "folder" && isExpanded && item.children && (
          <div>
            {item.children.map((child) => renderTreeItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className="w-48 border-r overflow-y-auto"
      style={{
        backgroundColor: theme.ui.background,
        borderColor: theme.ui.border,
      }}
    >
      <div className="py-2">{items.map((item) => renderTreeItem(item))}</div>
    </div>
  );
};

export default FileTree;
