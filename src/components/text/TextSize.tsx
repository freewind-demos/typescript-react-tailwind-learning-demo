import React from 'react';

interface TextSizeClass {
  class: string;
  css: string;
  description: string;
  scale?: string;  // 相对于默认字体的比例
}

const textSizes: TextSizeClass[] = [
  { 
    class: 'text-xs', 
    css: 'font-size: 0.75rem; line-height: 1rem;',
    description: '特小号字体，适用于辅助说明、注释等次要信息',
    scale: '12px'
  },
  { 
    class: 'text-sm', 
    css: 'font-size: 0.875rem; line-height: 1.25rem;',
    description: '小号字体，适用于次要内容、标签等',
    scale: '14px'
  },
  { 
    class: 'text-base', 
    css: 'font-size: 1rem; line-height: 1.5rem;',
    description: '基础字体大小，适用于正文内容',
    scale: '16px'
  },
  { 
    class: 'text-lg', 
    css: 'font-size: 1.125rem; line-height: 1.75rem;',
    description: '大号字体，适用于重要内容、小标题',
    scale: '18px'
  },
  { 
    class: 'text-xl', 
    css: 'font-size: 1.25rem; line-height: 1.75rem;',
    description: '特大号字体，适用于次级标题',
    scale: '20px'
  },
  { 
    class: 'text-2xl', 
    css: 'font-size: 1.5rem; line-height: 2rem;',
    description: '2倍大小字体，适用于主标题',
    scale: '24px'
  },
  { 
    class: 'text-3xl', 
    css: 'font-size: 1.875rem; line-height: 2.25rem;',
    description: '3倍大小字体，适用于大标题',
    scale: '30px'
  },
  { 
    class: 'text-4xl', 
    css: 'font-size: 2.25rem; line-height: 2.5rem;',
    description: '4倍大小字体，适用于主要标题',
    scale: '36px'
  },
  { 
    class: 'text-5xl', 
    css: 'font-size: 3rem; line-height: 1;',
    description: '5倍大小字体，适用于超大标题',
    scale: '48px'
  },
  { 
    class: 'text-6xl', 
    css: 'font-size: 3.75rem; line-height: 1;',
    description: '6倍大小字体，适用于巨大标题',
    scale: '60px'
  }
];

const TextSize: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">字体大小说明</h2>
        <p className="text-gray-600 text-sm">
          Tailwind 的字体大小系统基于 rem 单位，1rem = 16px（浏览器默认字体大小）：
          <ul className="list-disc list-inside mt-2">
            <li>text-base 是基准大小（16px）</li>
            <li>小于 base 的尺寸用于辅助信息</li>
            <li>大于 base 的尺寸用于标题体系</li>
            <li>每个尺寸都设置了合适的行高（line-height）</li>
          </ul>
        </p>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类名</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">预览</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CSS</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">像素值</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {textSizes.map((size, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                {size.class}
              </td>
              <td className="px-6 py-4">
                <div className={`${size.class} demo-element`}>
                  预览文本
                </div>
              </td>
              <td className="px-6 py-4">
                <code className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                  {size.css}
                </code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {size.description}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                {size.scale}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TextSize;
