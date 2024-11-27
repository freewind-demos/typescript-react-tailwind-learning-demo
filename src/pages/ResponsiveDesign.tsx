import React, { useState } from 'react';

const ResponsiveDesign: React.FC = () => {
  const [activeSection, setActiveSection] = useState('breakpoints');

  const breakpointExamples = [
    {
      title: 'Responsive Text Size',
      code: (
        <div className="space-y-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            This text changes size at different breakpoints
          </p>
          <div className="text-gray-500 text-xs">
            Resize your window to see the changes:
            <ul className="list-disc list-inside">
              <li>Default (mobile): text-sm</li>
              <li>sm (640px+): text-base</li>
              <li>md (768px+): text-lg</li>
              <li>lg (1024px+): text-xl</li>
              <li>xl (1280px+): text-2xl</li>
            </ul>
          </div>
        </div>
      ),
      description: 'Text that adapts to different screen sizes',
    },
    {
      title: 'Responsive Layout',
      code: (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-blue-500 text-white p-4 rounded">
              Item {item}
            </div>
          ))}
        </div>
      ),
      description: 'Grid that changes columns at different breakpoints',
    },
  ];

  const containerExamples = [
    {
      title: 'Responsive Container',
      code: (
        <div className="container mx-auto bg-gray-200 p-4">
          <div className="bg-blue-500 text-white p-4 rounded">
            This container adapts its max-width at different breakpoints
          </div>
          <div className="text-gray-500 text-xs mt-4">
            Container max-widths:
            <ul className="list-disc list-inside">
              <li>sm: 640px</li>
              <li>md: 768px</li>
              <li>lg: 1024px</li>
              <li>xl: 1280px</li>
              <li>2xl: 1536px</li>
            </ul>
          </div>
        </div>
      ),
      description: 'Container with responsive max-width',
    },
  ];

  const hidingExamples = [
    {
      title: 'Responsive Visibility',
      code: (
        <div className="space-y-4">
          <div className="hidden sm:block bg-green-500 text-white p-4 rounded">
            Only visible on sm screens and up
          </div>
          <div className="block sm:hidden bg-red-500 text-white p-4 rounded">
            Only visible on mobile (below sm)
          </div>
          <div className="hidden md:block lg:hidden bg-yellow-500 text-white p-4 rounded">
            Only visible between md and lg breakpoints
          </div>
        </div>
      ),
      description: 'Elements that show/hide based on screen size',
    },
  ];

  const paddingExamples = [
    {
      title: 'Responsive Spacing',
      code: (
        <div className="bg-purple-500 text-white rounded">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10">
            This box has different padding at each breakpoint
          </div>
          <div className="text-xs p-4">
            Padding sizes:
            <ul className="list-disc list-inside">
              <li>Default: p-4 (1rem)</li>
              <li>sm: p-6 (1.5rem)</li>
              <li>md: p-8 (2rem)</li>
              <li>lg: p-10 (2.5rem)</li>
            </ul>
          </div>
        </div>
      ),
      description: 'Padding that changes at different breakpoints',
    },
  ];

  const sections = {
    breakpoints: { title: 'Breakpoints', examples: breakpointExamples },
    containers: { title: 'Containers', examples: containerExamples },
    hiding: { title: 'Hiding/Showing', examples: hidingExamples },
    spacing: { title: 'Spacing', examples: paddingExamples },
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Responsive Design</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
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
              <div className="p-4 border rounded-lg bg-gray-50">
                {example.code}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Tailwind Breakpoints</h3>
          <p className="text-yellow-700">
            Resize your browser window to see how the components adapt to different screen sizes.
            Default breakpoints are:
          </p>
          <ul className="list-disc list-inside text-yellow-700 mt-2">
            <li>sm: 640px</li>
            <li>md: 768px</li>
            <li>lg: 1024px</li>
            <li>xl: 1280px</li>
            <li>2xl: 1536px</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDesign;
