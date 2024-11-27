import React from 'react';
import Tooltip from '../common/Tooltip';
import { tooltips } from '../../utils/tooltips';
import { colorValues } from '../../utils/colorValues';
import { presetCategories } from '../../data/presetCategories';
import { ColorGroup, PresetValue, PresetCategory } from '../../types/presets';

const getValueDescription = (value: string, group?: string) => {
  if (!group) return '暂无说明';

  // 处理颜色相关
  if (group.includes('颜色')) {
    if (/^\d+$/.test(value)) {
      return `与基准色混合，生成的颜色值会根据具体的颜色系列变化`;
    }
    const colorName = value.toLowerCase();
    if (colorValues[colorName]) {
      const values = Object.entries(colorValues[colorName])
        .map(([depth, hex]) => `${depth}: ${hex}`)
        .join('\\n');
      return `色值系列：\\n${values}`;
    }
  }

  // 处理尺寸相关
  if (group.includes('基础单位')) {
    const sizeUnits: Record<string, string> = {
      px: '像素单位，1px = 一个物理像素点，在高分辨率屏幕上可能会被缩放',
      full: '100%，常用于width/height，例如：w-full = width: 100%',
      screen: '视窗大小，width: 100vw 或 height: 100vh',
      min: '最小内容尺寸，width/height: min-content',
      max: '最大内容尺寸，width/height: max-content',
      fit: '适应内容尺寸，width/height: fit-content',
      auto: '自动计算尺寸，width/height: auto'
    };
    return sizeUnits[value] || tooltips[value] || '暂无说明';
  }

  if (group.includes('相对单位')) {
    const relativeUnits: Record<string, string> = {
      '%': '相对于父元素的百分比',
      vh: '视窗高度的1%，例如：50vh = 视窗高度的50%',
      vw: '视窗宽度的1%，例如：50vw = 视窗宽度的50%',
      rem: '相对于根元素(html)的字体大小，1rem = 16px（默认）'
    };
    return relativeUnits[value] || tooltips[value] || '暂无说明';
  }

  if (group.includes('分数单位')) {
    const fractions: Record<string, string> = {
      '1/2': '二分之一 = 50%',
      '1/3': '三分之一 ≈ 33.333%',
      '2/3': '三分之二 ≈ 66.667%',
      '1/4': '四分之一 = 25%',
      '2/4': '四分之二 = 50%',
      '3/4': '四分之三 = 75%',
      '1/5': '五分之一 = 20%',
      '2/5': '五分之二 = 40%',
      '3/5': '五分之三 = 60%',
      '4/5': '五分之四 = 80%',
      '1/6': '六分之一 ≈ 16.667%',
      '5/6': '六分之五 ≈ 83.333%'
    };
    return fractions[value] || tooltips[value] || '暂无说明';
  }

  if (group.includes('固定尺寸')) {
    const sizes: Record<string, string> = {
      '0': '0px',
      '0.5': '0.125rem (2px)',
      '1': '0.25rem (4px)',
      '1.5': '0.375rem (6px)',
      '2': '0.5rem (8px)',
      '2.5': '0.625rem (10px)',
      '3': '0.75rem (12px)',
      '3.5': '0.875rem (14px)',
      '4': '1rem (16px)',
      '5': '1.25rem (20px)',
      '6': '1.5rem (24px)',
      '7': '1.75rem (28px)',
      '8': '2rem (32px)',
      '9': '2.25rem (36px)',
      '10': '2.5rem (40px)',
      '11': '2.75rem (44px)',
      '12': '3rem (48px)',
      '14': '3.5rem (56px)',
      '16': '4rem (64px)',
      '20': '5rem (80px)',
      '24': '6rem (96px)',
      '28': '7rem (112px)',
      '32': '8rem (128px)',
      '36': '9rem (144px)'
    };
    return sizes[value] || tooltips[value] || '暂无说明';
  }

  // 处理字体相关
  if (group.includes('字体大小')) {
    const fontSizes: Record<string, string> = {
      xs: '极小字体：0.75rem (12px)',
      sm: '小字体：0.875rem (14px)',
      base: '基础字体：1rem (16px)',
      lg: '大字体：1.125rem (18px)',
      xl: '特大字体：1.25rem (20px)',
      '2xl': '超大字体：1.5rem (24px)',
      '3xl': '超大字体：1.875rem (30px)',
      '4xl': '超大字体：2.25rem (36px)',
      '5xl': '超大字体：3rem (48px)',
      '6xl': '超大字体：3.75rem (60px)'
    };
    return fontSizes[value] || tooltips[value] || '暂无说明';
  }

  if (group.includes('字重')) {
    const fontWeights: Record<string, string> = {
      thin: '最细字重：font-weight: 100',
      extralight: '特细字重：font-weight: 200',
      light: '细字重：font-weight: 300',
      normal: '正常字重：font-weight: 400',
      medium: '中等字重：font-weight: 500',
      semibold: '半粗字重：font-weight: 600',
      bold: '粗字重：font-weight: 700',
      extrabold: '特粗字重：font-weight: 800',
      black: '最粗字重：font-weight: 900'
    };
    return fontWeights[value] || tooltips[value] || '暂无说明';
  }

  if (group.includes('行高')) {
    const lineHeights: Record<string, string> = {
      none: '行高为1，无行间距',
      tight: '行高为1.25，较紧凑',
      snug: '行高为1.375，稍紧凑',
      normal: '行高为1.5，标准行间距',
      relaxed: '行高为1.625，较宽松',
      loose: '行高为2，宽松',
      '3': '行高为.75rem (12px)',
      '4': '行高为1rem (16px)',
      '5': '行高为1.25rem (20px)',
      '6': '行高为1.5rem (24px)'
    };
    return lineHeights[value] || tooltips[value] || '暂无说明';
  }

  return tooltips[value] || '暂无说明';
};

const PresetValues: React.FC = () => {
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

        {presetCategories.map((category) => (
          <div key={category.name} className="mb-8 border-b pb-6">
            <h3 className="text-lg font-medium mb-4">{category.name}</h3>
            
            <div className="space-y-4">
              {category.values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-sm text-gray-700">
                      {value.type === 'fixed' ? '预设值' : '任意值'}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {Array.isArray(value.examples) && value.examples.length > 0 && (
                      typeof value.examples[0] === 'string' ? (
                        <div className="flex flex-wrap gap-2">
                          {(value.examples as string[]).map((example) => (
                            <code key={example} className="px-2 py-1 bg-white rounded border border-gray-200 text-sm font-mono">
                              <Tooltip text={getValueDescription(example, category.name)}>
                                {example}
                              </Tooltip>
                            </code>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {(value.examples as any[]).map((group) => (
                            <div key={group.group} className="space-y-2">
                              <h4 className="font-medium text-gray-900">
                                {group.group}
                              </h4>
                              <div className={`flex flex-wrap gap-2 ${group.colors ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''}`}>
                                {(group.values || group.colors)?.map((item: any) => (
                                  <div key={typeof item === 'string' ? item : item.name} className="flex items-center">
                                    <code className={`px-2 py-1 rounded border border-gray-200 text-sm font-mono ${
                                      typeof item === 'string' 
                                        ? 'bg-white' 
                                        : `${item.bgClass} ${item.textClass}`
                                    }`}>
                                      <Tooltip text={
                                        typeof item === 'string'
                                          ? getValueDescription(item, group.group)
                                          : `${item.desc}（${getValueDescription(item.name, group.group)}）`
                                      }>
                                        {typeof item === 'string' ? item : item.name}
                                      </Tooltip>
                                    </code>
                                    {typeof item !== 'string' && (
                                      <span className={`text-sm ml-2 ${item.textClass}`}>
                                        （{item.desc}）
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                              <p className="text-sm text-gray-600 mt-2">{value.description}</p>
                            </div>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}

              {category.arbitraryValueExample && (
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-medium">任意值示例：</span>
                  <code className="ml-2 px-2 py-1 bg-gray-100 rounded">
                    {category.arbitraryValueExample}
                  </code>
                </div>
              )}
            </div>
          </div>
        ))}

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
