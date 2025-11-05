/**
 * Mock file tree structure for preview
 */
export interface FileTreeItem {
  name: string;
  type: "file" | "folder";
  expanded?: boolean;
  children?: FileTreeItem[];
}

export const mockFileTree: FileTreeItem[] = [
  {
    name: "src",
    type: "folder",
    expanded: true,
    children: [
      {
        name: "components",
        type: "folder",
        expanded: true,
        children: [
          { name: "Header.tsx", type: "file" },
          { name: "Footer.tsx", type: "file" },
        ],
      },
      {
        name: "utils",
        type: "folder",
        expanded: false,
        children: [{ name: "helpers.ts", type: "file" }],
      },
      { name: "App.tsx", type: "file" },
      { name: "index.tsx", type: "file" },
    ],
  },
  {
    name: "public",
    type: "folder",
    expanded: false,
    children: [{ name: "index.html", type: "file" }],
  },
  { name: "package.json", type: "file" },
  { name: "tsconfig.json", type: "file" },
];

/**
 * Mock tab data for preview
 */
export interface TabItem {
  name: string;
  active: boolean;
}

export const mockTabs: TabItem[] = [
  { name: "App.tsx", active: true },
  { name: "index.tsx", active: false },
  { name: "Header.tsx", active: false },
];
