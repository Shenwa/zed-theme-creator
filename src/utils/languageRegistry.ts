import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

// Import all languages used in code examples (highlight.js versions)
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml"; // for HTML
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import rust from "react-syntax-highlighter/dist/esm/languages/hljs/rust";
import go from "react-syntax-highlighter/dist/esm/languages/hljs/go";
import cpp from "react-syntax-highlighter/dist/esm/languages/hljs/cpp";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";

/**
 * Registers all supported languages with the syntax highlighter
 * This should be called once when the application starts
 */
export const registerLanguages = (): void => {
  SyntaxHighlighter.registerLanguage("typescript", typescript);
  SyntaxHighlighter.registerLanguage("tsx", typescript); // TSX uses TypeScript highlighter
  SyntaxHighlighter.registerLanguage("javascript", javascript);
  SyntaxHighlighter.registerLanguage("python", python);
  SyntaxHighlighter.registerLanguage("html", xml);
  SyntaxHighlighter.registerLanguage("css", css);
  SyntaxHighlighter.registerLanguage("rust", rust);
  SyntaxHighlighter.registerLanguage("go", go);
  SyntaxHighlighter.registerLanguage("cpp", cpp);
  SyntaxHighlighter.registerLanguage("java", java);
  SyntaxHighlighter.registerLanguage("json", json);
};
