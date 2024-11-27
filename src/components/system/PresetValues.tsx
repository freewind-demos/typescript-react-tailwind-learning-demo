import React from 'react';
import { colorValues } from '../../utils/colorValues';
import { ColorSection } from './ColorSection';
import { FontSection } from './FontSection';
import { SizeSection } from './SizeSection';

type ColorValues = typeof colorValues;
export type ColorName = keyof ColorValues;

export const PresetValues: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-6">Tailwind 预设值系统说明</h2>

        <div className="space-y-2 mb-6">
          <p className="text-gray-600">
            Tailwind 的工具类系统包含两种类型的值：
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li className="text-gray-600">
              预设值：Tailwind 内置的一组固定值，例如：text-sm、bg-blue-500
            </li>
            <li className="text-gray-600">
              任意值：使用方括号语法可以指定任意的 CSS 值，例如：w-[100px]、text-[#FF0000]
            </li>
          </ul>
        </div>

        <ColorSection />
        <SizeSection />
        <FontSection />

        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-medium mb-2">重要说明</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>预设值是经过精心设计的，建议优先使用预设值来保持一致性</li>
            <li>任意值提供了更大的灵活性，但要注意避免过度使用</li>
            <li>使用任意值时要考虑响应式设计和主题定制的需求</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresetValues;
