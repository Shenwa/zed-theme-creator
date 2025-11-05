import React, { useEffect, useState } from "react";
import { type Theme } from "../../types";
import { highlightCode } from "../../utils/shikiHighlighter";
import { type BundledLanguage } from "shiki";

interface CodeEditorProps {
  theme: Theme;
  codeString: string;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  theme,
  codeString,
  language,
}) => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlight = async () => {
      setIsLoading(true);
      try {
        const html = await highlightCode(
          codeString,
          language as BundledLanguage,
          theme
        );
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        // Fallback to plain text
        setHighlightedCode(`<pre>${codeString}</pre>`);
      } finally {
        setIsLoading(false);
      }
    };

    highlight();
  }, [codeString, language, theme]);

  return (
    <div
      className="flex-1 flex overflow-hidden"
      style={{
        backgroundColor: theme.editor.background,
      }}
    >
      {/* Line Numbers */}
      <div
        className="text-right pr-3 py-3 text-xs font-mono select-none"
        style={{
          backgroundColor: theme.editor.gutterBackground,
          color: theme.editor.lineNumber,
          minWidth: "3rem",
        }}
      >
        {codeString.split("\n").map((_, i) => (
          <div
            key={i}
            style={{
              color:
                i === 0
                  ? theme.editor.activeLineNumber
                  : theme.editor.lineNumber,
              lineHeight: "1.5",
              backgroundColor: i === 0 ? theme.editor.selectedLineBackground : "transparent",
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Code Content */}
      <div className="flex-1 overflow-auto py-3 relative">
        {isLoading ? (
          <div style={{ color: theme.ui.textMuted }} className="text-xs">
            Loading syntax highlighter...
          </div>
        ) : (
          <div className="relative">
            {/* Selected line background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1.5em",
                backgroundColor: theme.editor.selectedLineBackground,
                pointerEvents: "none",
              }}
            />
            <div
              className="shiki-code-wrapper text-xs relative"
              style={{
                lineHeight: "1.5",
              }}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
