import React, { useState } from 'react';

const LayoutComponents: React.FC = () => {
  const [activeSection, setActiveSection] = useState('flex');

  const flexExamples = [
    {
      title: 'Flex Direction',
      code: (
        <div className="space-y-4">
          <div className="flex flex-row space-x-2 bg-gray-100 p-4">
            <div className="bg-blue-500 text-white p-4">1</div>
            <div className="bg-blue-500 text-white p-4">2</div>
            <div className="bg-blue-500 text-white p-4">3</div>
          </div>
          <div className="flex flex-col space-y-2 bg-gray-100 p-4">
            <div className="bg-green-500 text-white p-4">1</div>
            <div className="bg-green-500 text-white p-4">2</div>
            <div className="bg-green-500 text-white p-4">3</div>
          </div>
        </div>
      ),
      description: 'flex-row and flex-col examples',
    },
    {
      title: 'Justify Content',
      code: (
        <div className="space-y-4">
          <div className="flex justify-start bg-gray-100 p-4">
            <div className="bg-purple-500 text-white p-4 mx-2">1</div>
            <div className="bg-purple-500 text-white p-4 mx-2">2</div>
          </div>
          <div className="flex justify-center bg-gray-100 p-4">
            <div className="bg-purple-500 text-white p-4 mx-2">1</div>
            <div className="bg-purple-500 text-white p-4 mx-2">2</div>
          </div>
          <div className="flex justify-end bg-gray-100 p-4">
            <div className="bg-purple-500 text-white p-4 mx-2">1</div>
            <div className="bg-purple-500 text-white p-4 mx-2">2</div>
          </div>
        </div>
      ),
      description: 'justify-start, justify-center, and justify-end examples',
    },
  ];

  const gridExamples = [
    {
      title: 'Basic Grid',
      code: (
        <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4">
          <div className="bg-indigo-500 text-white p-4">1</div>
          <div className="bg-indigo-500 text-white p-4">2</div>
          <div className="bg-indigo-500 text-white p-4">3</div>
          <div className="bg-indigo-500 text-white p-4">4</div>
          <div className="bg-indigo-500 text-white p-4">5</div>
          <div className="bg-indigo-500 text-white p-4">6</div>
        </div>
      ),
      description: 'Basic 3-column grid with gap',
    },
    {
      title: 'Grid Column Span',
      code: (
        <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4">
          <div className="bg-pink-500 text-white p-4 col-span-2">Span 2</div>
          <div className="bg-pink-500 text-white p-4">1</div>
          <div className="bg-pink-500 text-white p-4">2</div>
          <div className="bg-pink-500 text-white p-4 col-span-2">Span 2</div>
        </div>
      ),
      description: 'Grid items spanning multiple columns',
    },
  ];

  const containerExamples = [
    {
      title: 'Container Widths',
      code: (
        <div className="space-y-4">
          <div className="container mx-auto bg-gray-100 p-4">
            <div className="bg-teal-500 text-white p-4">Default Container</div>
          </div>
          <div className="max-w-md mx-auto bg-gray-100 p-4">
            <div className="bg-teal-500 text-white p-4">max-w-md Container</div>
          </div>
          <div className="max-w-xl mx-auto bg-gray-100 p-4">
            <div className="bg-teal-500 text-white p-4">max-w-xl Container</div>
          </div>
        </div>
      ),
      description: 'Different container width examples',
    },
  ];

  const sections = {
    flex: { title: 'Flexbox', examples: flexExamples },
    grid: { title: 'Grid', examples: gridExamples },
    container: { title: 'Container', examples: containerExamples },
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Layout Components</h1>
        
        <div className="flex space-x-4 mb-6">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-4 py-2 rounded-md ${
                activeSection === key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {sections[activeSection as keyof typeof sections].examples.map((example, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">{example.title}</h2>
              <p className="text-gray-600">{example.description}</p>
              {example.code}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LayoutComponents;
