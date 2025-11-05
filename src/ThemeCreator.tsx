import { Eye, FileJson } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { codeExamples } from "./code-examples";
import LivePreview from "./components/theme/LivePreview";
import ThemeConfiguration from "./components/theme/ThemeConfiguration";
import { Button } from "./components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import { ScrollArea } from "./components/ui/scroll-area";
import { type Theme } from "./types";
import { downloadFile } from "./utils/fileDownload";
import { generateMagicTheme } from "./utils/magicThemeGenerator";
import { initializeShiki } from "./utils/shikiHighlighter";
import {
  generateThemeFilename,
  generateZedThemeJSON,
} from "./utils/themeGenerator";
import { parseZedThemeJSON, readFileAsText } from "./utils/themeParser";

const ThemeCreator: React.FC = () => {
  // Initialize Shiki on component mount
  useEffect(() => {
    initializeShiki();
  }, []);

  const [themeVersion, setThemeVersion] = useState(0);
  const [theme, setTheme] = useState<Theme>({
    name: "My Zed Theme",
    author: "Zed Theme Creator",
    appearance: "dark",
    language: "typescript", // Default language
    ui: {
      background: "#1e1e1e",
      text: "#abb2bf",
      textMuted: "#5c6370",
      textAccent: "#61afef",
      border: "#3e4451",
      borderFocused: "#528bff",
      borderSelected: "#c678dd",
      tabActiveBackground: "#282c34",
      elementHoverBackground: "#2c313c",
      elementSelectedBackground: "#3e4451",
      titleBarBackground: "#21252b",
      contextBarBackground: "#1e1e1e",
    },
    editor: {
      background: "#282c34",
      foreground: "#abb2bf",
      lineNumber: "#5c6370",
      activeLineNumber: "#61afef",
      gutterBackground: "#282c34",
      selectedLineBackground: "#2c313c",
    },
    syntax: {
      comment: { color: "#5c6370", fontStyle: "normal", fontWeight: "normal" },
      constant: { color: "#d19a66", fontStyle: "normal", fontWeight: "normal" },
      function: { color: "#61afef", fontStyle: "normal", fontWeight: "normal" },
      keyword: { color: "#c678dd", fontStyle: "normal", fontWeight: "normal" },
      number: { color: "#d19a66", fontStyle: "normal", fontWeight: "normal" },
      operator: { color: "#56b6c2", fontStyle: "normal", fontWeight: "normal" },
      property: { color: "#e06c75", fontStyle: "normal", fontWeight: "normal" },
      punctuation: {
        color: "#abb2bf",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      string: { color: "#98c379", fontStyle: "normal", fontWeight: "normal" },
      tag: { color: "#e06c75", fontStyle: "normal", fontWeight: "normal" },
      type: { color: "#e5c07b", fontStyle: "normal", fontWeight: "normal" },
      variable: { color: "#abb2bf", fontStyle: "normal", fontWeight: "normal" },
    },
  });

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const [category, key] = name.split(".");

      if (category === "ui") {
        setTheme((prevTheme) => ({
          ...prevTheme,
          ui: {
            ...prevTheme.ui,
            [key]: value,
          },
        }));
      } else if (category === "editor") {
        setTheme((prevTheme) => ({
          ...prevTheme,
          editor: {
            ...prevTheme.editor,
            [key]: value,
          },
        }));
      } else {
        setTheme((prevTheme) => ({
          ...prevTheme,
          syntax: {
            ...prevTheme.syntax,
            [name]: {
              ...prevTheme.syntax[name],
              color: value,
            },
          },
        }));
      }
    },
    [],
  );

  const handleFontStyleChange = useCallback(
    (element: string, value: string) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        syntax: {
          ...prevTheme.syntax,
          [element]: {
            ...prevTheme.syntax[element],
            fontStyle: value as "normal" | "italic" | "underline",
          },
        },
      }));
    },
    [],
  );

  const handleFontWeightChange = useCallback(
    (element: string, value: string) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        syntax: {
          ...prevTheme.syntax,
          [element]: {
            ...prevTheme.syntax[element],
            fontWeight: value as "normal" | "bold",
          },
        },
      }));
    },
    [],
  );

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        name: e.target.value,
      }));
    },
    [],
  );

  const handleLanguageChange = useCallback((value: string) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      language: value,
    }));
  }, []);

  const handleMagicGenerate = useCallback(
    (colors: {
      background: string;
      primary: string;
      secondary: string;
      accent: string;
    }) => {
      const magicTheme = generateMagicTheme(theme, colors);
      setTheme(magicTheme);
      setThemeVersion((v) => v + 1); // Force re-render
    },
    [theme],
  );

  const generateZedTheme = useMemo(() => {
    return generateZedThemeJSON(theme);
  }, [theme]);

  const currentCodeString = useMemo(() => {
    return codeExamples[theme.language] || codeExamples.typescript;
  }, [theme.language]);

  const handleDownloadJson = useCallback(() => {
    const filename = generateThemeFilename(theme.name);
    downloadFile(generateZedTheme, filename);
  }, [generateZedTheme, theme.name]);

  const handleUploadJson = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      try {
        const content = await readFileAsText(file);
        const parsedTheme = parseZedThemeJSON(content);

        if (parsedTheme) {
          setTheme(parsedTheme);
          setThemeVersion((v) => v + 1); // Force re-render
        } else {
          alert(
            "Failed to parse theme file. Please check if it's a valid Zed theme JSON.",
          );
        }
      } catch (error) {
        console.error("Error reading file:", error);
        alert("Error reading file. Please try again.");
      }

      // Reset the input so the same file can be uploaded again
      event.target.value = "";
    },
    [],
  );

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <ThemeConfiguration
        theme={theme}
        onColorChange={handleColorChange}
        onFontStyleChange={handleFontStyleChange}
        onFontWeightChange={handleFontWeightChange}
        onNameChange={handleNameChange}
        onDownloadJson={handleDownloadJson}
        onUploadJson={handleUploadJson}
        onLanguageChange={handleLanguageChange}
        onMagicGenerate={handleMagicGenerate}
        availableLanguages={Object.keys(codeExamples)}
      />
      <div className="flex-1 p-3 sm:p-4 flex flex-col min-w-0 border-border border-t md:border-t-0 md:border-l">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            <h2 className="text-xl sm:text-2xl font-bold">Live Preview</h2>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-sm"
              >
                <FileJson className="w-4 h-4" />
                View JSON
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[90vw] sm:w-[500px] h-[300px] sm:h-[400px]">
              <ScrollArea className="h-full w-full rounded-md border p-2 sm:p-4">
                <pre className="text-xs sm:text-sm">{generateZedTheme}</pre>
              </ScrollArea>
            </PopoverContent>
          </Popover>
        </div>
        <ScrollArea className="flex-1 rounded-md p-2 sm:p-4">
          <LivePreview
            key={themeVersion}
            theme={theme}
            codeString={currentCodeString}
            language={theme.language}
          />
        </ScrollArea>
      </div>
    </div>
  );
};

export default ThemeCreator;
