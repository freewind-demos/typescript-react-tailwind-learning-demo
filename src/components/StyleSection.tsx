import React from 'react';

interface StyleItem {
  className: string;
  description: string;
}

interface StyleSectionProps {
  title: string;
  items: StyleItem[];
}

const StyleSection: React.FC<StyleSectionProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className={item.className + " inline-block"}>
              {item.description}
            </div>
            <div className="text-sm text-gray-500">
              Class: <code className="bg-gray-100 px-2 py-1 rounded">{item.className}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSection;
