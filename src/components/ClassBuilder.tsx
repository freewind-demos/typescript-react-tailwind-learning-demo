import React, { useState } from 'react';

interface ClassOption {
  prefix: string;
  options: {
    values: string[];
    defaultValue?: string;
  }[];
}

const classOptions: Record<string, ClassOption> = {
  text: {
    prefix: 'text',
    options: [
      {
        values: ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gray', 'black', 'white'],
        defaultValue: 'black'
      },
      {
        values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        defaultValue: '500'
      }
    ]
  },
  background: {
    prefix: 'bg',
    options: [
      {
        values: ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gray', 'black', 'white'],
        defaultValue: 'white'
      },
      {
        values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        defaultValue: '500'
      }
    ]
  },
  padding: {
    prefix: 'p',
    options: [
      {
        values: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'],
        defaultValue: '4'
      }
    ]
  },
  margin: {
    prefix: 'm',
    options: [
      {
        values: ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'],
        defaultValue: '4'
      }
    ]
  },
  border: {
    prefix: 'border',
    options: [
      {
        values: ['0', '1', '2', '4', '8'],
        defaultValue: '1'
      },
      {
        values: ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'gray', 'black', 'white'],
        defaultValue: 'gray'
      },
      {
        values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
        defaultValue: '200'
      }
    ]
  },
  rounded: {
    prefix: 'rounded',
    options: [
      {
        values: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
        defaultValue: 'md'
      }
    ]
  },
  shadow: {
    prefix: 'shadow',
    options: [
      {
        values: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'],
        defaultValue: 'md'
      }
    ]
  },
  fontSize: {
    prefix: 'text',
    options: [
      {
        values: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
        defaultValue: 'base'
      }
    ]
  }
};

const ClassBuilder: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('text');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [customText, setCustomText] = useState('Preview Text');

  // Initialize default values for each type
  React.useEffect(() => {
    const option = classOptions[selectedType];
    if (option) {
      setSelectedValues(option.options.map(opt => opt.defaultValue || opt.values[0]));
    }
  }, [selectedType]);

  const generateClass = () => {
    const option = classOptions[selectedType];
    if (!option) return '';

    if (selectedType === 'border') {
      return `${option.prefix}-${selectedValues[0]} ${option.prefix}-${selectedValues[1]}-${selectedValues[2]}`;
    }
    
    if (selectedValues.length === 1) {
      return `${option.prefix}-${selectedValues[0]}`;
    }
    
    return `${option.prefix}-${selectedValues[0]}-${selectedValues[1]}`;
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Tailwind Class Builder</h2>
      
      <div className="space-y-6">
        {/* Selectors Row */}
        <div className="flex flex-wrap gap-4">
          {/* Type Selector */}
          <div className="flex-1 min-w-[150px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {Object.keys(classOptions).map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Value Selectors */}
          {classOptions[selectedType]?.options.map((option, index) => (
            <div key={index} className="flex-1 min-w-[150px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {index === 0 ? 'Value' : 'Shade'}
              </label>
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedValues[index] || option.values[0]}
                onChange={(e) => {
                  const newValues = [...selectedValues];
                  newValues[index] = e.target.value;
                  setSelectedValues(newValues);
                }}
              >
                {option.values.map(value => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Custom Text Input */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Custom Text
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
          </div>
        </div>

        {/* Preview and Generated Class */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Preview */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Preview</h3>
            <div className="p-4 bg-gray-50 rounded-md">
              <div className={generateClass()}>
                {customText}
              </div>
            </div>
          </div>

          {/* Generated Class */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Generated Class</h3>
            <div className="flex items-center space-x-2">
              <code className="flex-1 block bg-gray-100 px-3 py-2 rounded-md">
                {generateClass()}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(generateClass())}
                className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassBuilder;
