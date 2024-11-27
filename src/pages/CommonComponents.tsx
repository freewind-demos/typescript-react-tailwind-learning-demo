import React, { useState } from 'react';

const CommonComponents: React.FC = () => {
  const [activeSection, setActiveSection] = useState('buttons');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonExamples = [
    {
      title: 'Basic Buttons',
      code: (
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Danger
          </button>
        </div>
      ),
      description: 'Different button styles with hover effects',
    },
    {
      title: 'Button Sizes',
      code: (
        <div className="space-x-4">
          <button className="bg-blue-500 text-white font-bold py-1 px-2 rounded text-sm">
            Small
          </button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Medium
          </button>
          <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded text-lg">
            Large
          </button>
        </div>
      ),
      description: 'Buttons in different sizes',
    },
  ];

  const cardExamples = [
    {
      title: 'Basic Card',
      code: (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      ),
      description: 'Simple card with title and content',
    },
    {
      title: 'Card with Image',
      code: (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="h-48 bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card with Image</div>
            <p className="text-gray-700 text-base">
              A card featuring an image placeholder at the top.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tag2
            </span>
          </div>
        </div>
      ),
      description: 'Card with image placeholder and tags',
    },
  ];

  const formExamples = [
    {
      title: 'Input Fields',
      code: (
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={3}
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
      ),
      description: 'Form input fields with labels',
    },
  ];

  const modalExample = {
    title: 'Modal Dialog',
    code: (
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Open Modal
        </button>
        
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Modal Title</h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">
                    This is a modal dialog. You can close it by clicking the button below.
                  </p>
                </div>
                <div className="items-center px-4 py-3">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ),
    description: 'Interactive modal dialog example',
  };

  const sections = {
    buttons: { title: 'Buttons', examples: buttonExamples },
    cards: { title: 'Cards', examples: cardExamples },
    forms: { title: 'Forms', examples: formExamples },
    modal: { title: 'Modal', examples: [modalExample] },
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Common Components</h1>
        
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
              <div className="p-4 border rounded-lg bg-gray-50">
                {example.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonComponents;
