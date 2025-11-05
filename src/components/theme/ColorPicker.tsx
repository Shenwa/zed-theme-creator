import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface ColorPickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type="color"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 h-10"
      />
    </div>
  );
};

export default ColorPicker;
