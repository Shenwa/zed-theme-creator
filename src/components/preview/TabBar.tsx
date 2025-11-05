import React from "react";
import { type Theme } from "../../types";
import { type TabItem } from "../../data/mockData";

interface TabBarProps {
  theme: Theme;
  tabs: TabItem[];
}

const TabBar: React.FC<TabBarProps> = ({ theme, tabs }) => {
  return (
    <div
      className="flex border-b overflow-x-auto"
      style={{
        backgroundColor: theme.ui.background,
        borderColor: theme.ui.border,
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className="px-2 sm:px-3 py-1.5 text-xs border-r cursor-pointer whitespace-nowrap flex-shrink-0"
          style={{
            backgroundColor: tab.active
              ? (theme.ui.tabActiveBackground || theme.editor.background)
              : theme.ui.background,
            borderRightColor: theme.ui.border,
            borderTopColor: theme.ui.border,
            borderLeftColor: theme.ui.border,
            borderBottomColor: tab.active
              ? (theme.ui.tabActiveBackground || theme.editor.background)
              : theme.ui.border,
            color: tab.active ? theme.ui.textAccent : theme.ui.text,
          }}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default TabBar;
