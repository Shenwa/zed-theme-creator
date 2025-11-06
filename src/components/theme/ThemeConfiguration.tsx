import { Eye, FileCode, Palette, Settings, Wand2 } from "lucide-react";
import React, { useState } from "react";
import faviconSvg from "../../../public/favicon.svg";
import { type Theme } from "../../types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ColorPicker from "./ColorPicker";
import FontControl from "./FontControl";
import MagicModePanel from "./MagicModePanel";

interface ThemeConfigurationProps {
  theme: Theme;
  onColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFontStyleChange: (element: string, value: string) => void;
  onFontWeightChange: (element: string, value: string) => void;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLanguageChange: (value: string) => void;
  onMagicGenerate: (colors: {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  }) => void;
  availableLanguages: string[];
}

const ThemeConfiguration: React.FC<ThemeConfigurationProps> = ({
  theme,
  onColorChange,
  onFontStyleChange,
  onFontWeightChange,
  onNameChange,
  onLanguageChange,
  onMagicGenerate,
  availableLanguages,
}) => {
  const [activeTab, setActiveTab] = useState("ui");
  const [isMagicMode, setIsMagicMode] = useState(false);

  return (
    <div className="relative flex h-full w-full lg:w-1/3 flex-col p-3 sm:p-4 border-b lg:border-b-0">
      <div className="flex items-center gap-3 mt-3 mb-8">
        <img
          src={faviconSvg}
          alt="Zed Logo"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <h2 className="text-xl sm:text-2xl font-bold">Zed Theme Creator</h2>
      </div>
      <div className="mb-6">
        <Label htmlFor="themeName" className="flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Theme Name
        </Label>
        <Input
          type="text"
          id="themeName"
          name="name"
          value={theme.name}
          onChange={onNameChange}
          className="mt-1"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="language-select" className="flex items-center gap-2">
          <FileCode className="w-4 h-4" />
          Language preview
        </Label>
        <Select value={theme.language} onValueChange={onLanguageChange}>
          <SelectTrigger id="language-select" className="w-full mt-1">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {availableLanguages.map((lang) => (
              <SelectItem key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Mode Toggle */}
      <div className="mb-8 flex items-center gap-2">
        <Button
          variant={!isMagicMode ? "default" : "outline"}
          size="sm"
          onClick={() => setIsMagicMode(false)}
          className="flex-1 flex items-center justify-center gap-1 text-xs"
        >
          <Settings className="w-3 h-3" />
          Manual
        </Button>
        <Button
          variant={isMagicMode ? "default" : "outline"}
          size="sm"
          onClick={() => setIsMagicMode(true)}
          className="flex-1 flex items-center justify-center gap-1 text-xs"
        >
          <Wand2 className="w-3 h-3" />
          Magic
        </Button>
      </div>

      {isMagicMode ? (
        <ScrollArea className="flex-1">
          <MagicModePanel onGenerate={onMagicGenerate} />
        </ScrollArea>
      ) : (
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col"
        >
          <TabsList className="grid w-full grid-cols-3 text-xs sm:text-sm">
            <TabsTrigger value="ui" className="flex items-center gap-1">
              <Palette className="w-3 h-3" />
              <span className="hidden sm:inline">UI Colors</span>
              <span className="sm:hidden">UI</span>
            </TabsTrigger>
            <TabsTrigger value="editor" className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span className="hidden sm:inline">Editor</span>
              <span className="sm:hidden">Edit</span>
            </TabsTrigger>
            <TabsTrigger value="syntax" className="flex items-center gap-1">
              <FileCode className="w-3 h-3" />
              <span className="hidden sm:inline">Syntax</span>
              <span className="sm:hidden">Syn</span>
            </TabsTrigger>
          </TabsList>
          <ScrollArea className="p-2 sm:p-4 flex-1">
            <TabsContent value="ui" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.keys(theme.ui).map((uiElementName) => (
                  <ColorPicker
                    key={uiElementName}
                    label={
                      uiElementName.charAt(0).toUpperCase() +
                      uiElementName.slice(1)
                    }
                    name={`ui.${uiElementName}`}
                    value={theme.ui[uiElementName]}
                    onChange={onColorChange}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="editor" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {Object.keys(theme.editor).map((editorElementName) => (
                  <ColorPicker
                    key={editorElementName}
                    label={
                      editorElementName.charAt(0).toUpperCase() +
                      editorElementName.slice(1)
                    }
                    name={`editor.${editorElementName}`}
                    value={theme.editor[editorElementName]}
                    onChange={onColorChange}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="syntax" className="mt-0">
              <Accordion type="multiple" className="w-full">
                {Object.keys(theme.syntax).map((element) => (
                  <AccordionItem value={element} key={element}>
                    <AccordionTrigger>
                      {element.charAt(0).toUpperCase() + element.slice(1)}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <ColorPicker
                          label="Color"
                          name={element}
                          value={theme.syntax[element].color}
                          onChange={onColorChange}
                        />
                        <FontControl
                          element={element}
                          fontStyle={theme.syntax[element].fontStyle}
                          fontWeight={theme.syntax[element].fontWeight}
                          onStyleChange={onFontStyleChange}
                          onWeightChange={onFontWeightChange}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      )}
    </div>
  );
};

export default ThemeConfiguration;
