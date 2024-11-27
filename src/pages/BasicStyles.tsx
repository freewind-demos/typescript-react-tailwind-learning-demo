import React, { useState } from 'react';
import StyleSection from '../components/StyleSection';

const BasicStyles: React.FC = () => {
  const [activeTab, setActiveTab] = useState('colors');

  const colorExamples = [
    { title: 'Text Colors', items: [
      { className: 'text-red-500', description: 'Red Text' },
      { className: 'text-blue-500', description: 'Blue Text' },
      { className: 'text-green-500', description: 'Green Text' },
      { className: 'text-yellow-500', description: 'Yellow Text' },
    ]},
    { title: 'Background Colors', items: [
      { className: 'bg-red-100 p-4', description: 'Light Red Background' },
      { className: 'bg-blue-100 p-4', description: 'Light Blue Background' },
      { className: 'bg-green-100 p-4', description: 'Light Green Background' },
      { className: 'bg-yellow-100 p-4', description: 'Light Yellow Background' },
    ]},
  ];

  const spacingExamples = [
    { title: 'Margin', items: [
      { className: 'm-4 bg-blue-200', description: 'Margin all sides (1rem)' },
      { className: 'mx-4 bg-blue-200', description: 'Margin horizontal (1rem)' },
      { className: 'my-4 bg-blue-200', description: 'Margin vertical (1rem)' },
      { className: 'mt-4 bg-blue-200', description: 'Margin top (1rem)' },
    ]},
    { title: 'Padding', items: [
      { className: 'p-4 bg-green-200', description: 'Padding all sides (1rem)' },
      { className: 'px-4 bg-green-200', description: 'Padding horizontal (1rem)' },
      { className: 'py-4 bg-green-200', description: 'Padding vertical (1rem)' },
      { className: 'pt-4 bg-green-200', description: 'Padding top (1rem)' },
    ]},
  ];

  const typographyExamples = [
    { title: 'Font Size', items: [
      { className: 'text-xs', description: 'Extra Small' },
      { className: 'text-sm', description: 'Small' },
      { className: 'text-base', description: 'Base' },
      { className: 'text-lg', description: 'Large' },
      { className: 'text-xl', description: 'Extra Large' },
      { className: 'text-2xl', description: '2X Large' },
    ]},
    { title: 'Font Weight', items: [
      { className: 'font-light', description: 'Light' },
      { className: 'font-normal', description: 'Normal' },
      { className: 'font-medium', description: 'Medium' },
      { className: 'font-bold', description: 'Bold' },
    ]},
  ];

  const sections = {
    colors: { title: 'Colors', examples: colorExamples },
    spacing: { title: 'Spacing', examples: spacingExamples },
    typography: { title: 'Typography', examples: typographyExamples },
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Basic Tailwind Styles</h1>
        
        <div className="flex space-x-4 mb-6">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-md ${
                activeTab === key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {sections[activeTab as keyof typeof sections].examples.map((section, index) => (
            <StyleSection key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicStyles;
