import React from 'react';

interface TextWeightClass {
  class: string;
  css: string;
  description: string;
  weight: string;
}

const textWeights: TextWeightClass[] = [
  { 
    class: 'font-thin', 
    css: 'font-weight: 100;',
    description: '最细的字体重量，通常用于特殊的设计场景',
    weight: '100'
  },
  { 
    class: 'font-extralight', 
    css: 'font-weight: 200;',
    description: '极细字体，比 thin 稍重一些',
    weight: '200'
  },
  { 
    class: 'font-light', 
    css: 'font-weight: 300;',
    description: '细体，常用于大号标题或装饰性文字',
    weight: '300'
  },
  { 
    class: 'font-normal', 
    css: 'font-weight: 400;',
    description: '标准字重，正文的默认字重',
    weight: '400'
  },
  { 
    class: 'font-medium', 
    css: 'font-weight: 500;',
    description: '中等字重，比正常稍重，用于轻微强调',
    weight: '500'
  },
  { 
    class: 'font-semibold', 
    css: 'font-weight: 600;',
    description: '半粗体，介于正常和粗体之间，常用于子标题',
    weight: '600'
  },
  { 
    class: 'font-bold', 
    css: 'font-weight: 700;',
    description: '粗体，用于重要文字的强调',
    weight: '700'
  },
  { 
    class: 'font-extrabold', 
    css: 'font-weight: 800;',
    description: '特粗体，比标准粗体更重',
    weight: '800'
  },
  { 
    class: 'font-black', 
    css: 'font-weight: 900;',
    description: '最粗的字体重量，用于极度强调',
    weight: '900'
  }
];

const TextWeight: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">字体粗细说明</h2>
        <p className="text-gray-600 text-sm">
          Tailwind 的字体粗细系统使用标准的数值范围（100-900）：
          <ul className="list-disc list-inside mt-2">
            <li>100-300: 细体，适合大号文字</li>
            <li>400: 标准粗细（normal）</li>
            <li>500-600: 中等强调</li>
            <li>700-900: 强调和特殊显示</li>
          </ul>
          <p className="mt-2 text-amber-600">
            注意：并非所有字体都支持全部粗细值。使用某个粗细值时，请确保你的字体支持该值。
          </p>
        </p>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类名</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">预览</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CSS</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">粗细值</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {textWeights.map((weight, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                {weight.class}
              </td>
              <td className="px-6 py-4">
                <div className={`${weight.class} demo-element`}>
                  预览文本
                </div>
              </td>
              <td className="px-6 py-4">
                <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                  {weight.css}
                </code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {weight.description}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                {weight.weight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TextWeight;
