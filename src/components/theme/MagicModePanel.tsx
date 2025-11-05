import React, { useState } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import ColorPicker from "./ColorPicker";

interface MagicModePanelProps {
  onGenerate: (colors: {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
  }) => void;
}

const MagicModePanel: React.FC<MagicModePanelProps> = ({ onGenerate }) => {
  const [magicColors, setMagicColors] = useState({
    background: "#1e1e1e",
    primary: "#61afef",
    secondary: "#98c379",
    accent: "#c678dd",
  });

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMagicColors((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerate = () => {
    onGenerate(magicColors);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Wand2 className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Magic Theme Generator</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Choose your base colors and let the magic happen! We'll generate a harmonious theme for you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        <ColorPicker
          label="Background"
          name="background"
          value={magicColors.background}
          onChange={handleColorChange}
        />
        <ColorPicker
          label="Primary Color"
          name="primary"
          value={magicColors.primary}
          onChange={handleColorChange}
        />
        <ColorPicker
          label="Secondary Color"
          name="secondary"
          value={magicColors.secondary}
          onChange={handleColorChange}
        />
        <ColorPicker
          label="Accent Color"
          name="accent"
          value={magicColors.accent}
          onChange={handleColorChange}
        />
      </div>

      <Button
        onClick={handleGenerate}
        className="mt-4 w-full flex items-center justify-center gap-2"
      >
        <Wand2 className="w-4 h-4" />
        Generate Magic Theme
      </Button>
    </div>
  );
};

export default MagicModePanel;
