import React from 'react';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface FontControlProps {
  element: string;
  fontStyle: string;
  fontWeight: string;
  onStyleChange: (element: string, value: string) => void;
  onWeightChange: (element: string, value: string) => void;
}

const FontControl: React.FC<FontControlProps> = ({
  element,
  fontStyle,
  fontWeight,
  onStyleChange,
  onWeightChange,
}) => {
  const fontOptions = ['normal', 'italic', 'underline'];
  const weightOptions = ['normal', 'bold'];

  return (
    <div className="flex items-center space-x-2">
        <Label>Style:</Label>
        <Select value={fontStyle} onValueChange={(value) => onStyleChange(element, value)}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Select style" />
          </SelectTrigger>
          <SelectContent>
            {fontOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Label>Weight:</Label>
        <Select value={fontWeight} onValueChange={(value) => onWeightChange(element, value)}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Select weight" />
          </SelectTrigger>
          <SelectContent>
            {weightOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
  );
};

export default FontControl;
