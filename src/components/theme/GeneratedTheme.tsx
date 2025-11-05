import React from 'react';

interface GeneratedThemeProps {
  themeJson: string;
}

const GeneratedTheme: React.FC<GeneratedThemeProps> = ({ themeJson }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-4">Generated Theme JSON:</h3>
      <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
        <code>
          {themeJson}
        </code>
      </pre>
    </div>
  );
};

export default GeneratedTheme;
