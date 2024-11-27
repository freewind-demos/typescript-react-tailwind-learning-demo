import React, { useState } from 'react';

interface TooltipProps {
  text: string | { [key: string]: string };
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipText = typeof text === 'string' ? text : Object.values(text).join('\\n');

  return (
    <div className="relative inline-block">
      <div
        className="inline-block border-b border-dotted border-gray-400 cursor-help"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 w-64 p-2 mt-1 text-sm text-white bg-gray-800 rounded shadow-lg -left-4">
          {tooltipText.split('\\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          <div className="absolute w-2 h-2 bg-gray-800 transform rotate-45 -top-1 left-6"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
