import React from 'react';
import { colorValues } from '../../utils/colorValues';
import Tooltip from '../common/Tooltip';

type ColorValues = typeof colorValues;
type ColorName = keyof ColorValues;

const getValueDescription = (value: string, group?: string) => {
  if (!group) return '暂无说明';

  // 处理颜色相关
  if (group.includes('颜色')) {
    if (/^\d+$/.test(value)) {
      const colorDepths: Record<string, string> = {
        '50': '最浅的颜色，与白色混合90%。色值：#F9FAFB',
        '100': '非常浅的颜色，与白色混合80%。色值：#F3F4F6',
        '200': '浅色，与白色混合60%。色值：#E5E7EB',
        '300': '中浅色，与白色混合40%。色值：#D1D5DB',
        '400': '浅中色，与白色混合20%。色值：#9F9F9F',
        '500': '基础色，原始颜色',
        '600': '深中色，与黑色混合20%。色值：#4F4F4F',
        '700': '中深色，与黑色混合40%。色值：#3B3F54',
        '800': '深色，与黑色混合60%。色值：#2F303A',
        '900': '最深的颜色，与黑色混合80%。色值：#1A1D23'
      };
      return colorDepths[value] || `与基准色混合，生成的颜色值会根据具体的颜色系列变化`;
    }

    const colorDescriptions: Record<string, string> = {
      slate: '石板灰色系列，一种带有蓝色调的中性灰色。基准色值(500)：#64748B',
      gray: '纯灰色系列，最基础的灰色。基准色值(500)：#6B7280',
      zinc: '锌灰色系列，带有金属质感的冷灰色。基准色值(500)：#71717A',
      neutral: '中性灰色系列，完全中性的灰色。基准色值(500)：#737373',
      stone: '石灰色系列，带有暖色调的灰色。基准色值(500)：#78716C',
      red: '红色系列，用于错误、警告等需要引起注意的地方。基准色值(500)：#EF4444',
      orange: '橙色系列，温暖活力的色调，用于醒目但不过分刺激的地方。基准色值(500)：#F97316',
      amber: '琥珀色系列，金黄色调，介于橙色和黄色之间。基准色值(500)：#F59E0B',
      yellow: '黄色系列，明亮醒目，常用于警告和提示。基准色值(500)：#EAB308',
      lime: '青柠色系列，明亮的黄绿色，富有活力。基准色值(500)：#84CC16',
      green: '绿色系列，代表成功、通过等积极含义。基准色值(500)：#22C55E',
      emerald: '祖母绿系列，典雅的深绿色。基准色值(500)：#10B981',
      teal: '青色系列，介于绿色和蓝色之间的清新色调。基准色值(500)：#14B8A6',
      cyan: '青色系列，明亮清新的蓝绿色。基准色值(500)：#06B6D4',
      sky: '天蓝色系列，明亮清透的蓝色。基准色值(500)：#0EA5E9',
      blue: '蓝色系列，最基础的蓝色，常用于链接和交互元素。基准色值(500)：#3B82F6',
      indigo: '靛青色系列，深邃的蓝紫色。基准色值(500)：#6366F1',
      violet: '紫罗兰色系列，优雅的紫色。基准色值(500)：#8B5CF6',
      purple: '紫色系列，典型的紫色。基准色值(500)：#A855F7',
      fuchsia: '洋红色系列，鲜艳的粉紫色。基准色值(500)：#D946EF',
      pink: '粉红色系列，温柔的粉色。基准色值(500)：#EC4899',
      rose: '玫瑰色系列，介于粉红和红色之间。基准色值(500)：#F43F5E',
      black: '纯黑色，用于最深的文字和背景。色值：#000000',
      white: '纯白色，用于背景和浅色文字。色值：#FFFFFF',
      transparent: '完全透明。色值：transparent',
      current: '使用当前元素继承的颜色值。色值：currentColor',
      inherit: '继承父元素的颜色值。色值：inherit'
    };

    const colorName = value.toLowerCase() === 'black' ? value.toLowerCase() : value.toLowerCase() as ColorName;
    if (colorName in colorValues) {
      const description = colorDescriptions[colorName] || '';
      const values = Object.entries(colorValues[colorName as ColorName])
        .map(([depth, hex]) => `${depth}: ${hex}`)
        .join('\\n');
      return `${description}\\n色值系列：\\n${values}`;
    }
  }

  // 处理尺寸相关
  if (group.includes('基础单位')) {
    const sizeUnits: Record<string, string> = {
      px: '像素(pixel)，屏幕上的最小显示单位。在Tailwind中，1px就是一个物理像素',
      full: '表示100%。例如：w-full 等于 width: 100%',
      screen: '表示100vw（宽度）或100vh（高度）。例如：w-screen 等于 width: 100vw',
      min: '使用min-content。元素宽度/高度将是内容允许的最小值',
      max: '使用max-content。元素宽度/高度将是内容需要的最大值',
      fit: '使用fit-content。元素宽度/高度将在min-content和max-content之间自动调整',
      auto: '自动计算大小。由浏览器根据内容和上下文自动决定'
    };
    return sizeUnits[value] || '暂无说明';
  }

  if (group.includes('相对单位')) {
    const relativeUnits: Record<string, string> = {
      '%': '百分比单位，相对于父元素的对应属性的值',
      vh: '视窗高度单位，1vh = 视窗高度的1%。如果浏览器窗口高度是900px，那么1vh = 9px',
      vw: '视窗宽度单位，1vw = 视窗宽度的1%。如果浏览器窗口宽度是1000px，那么1vw = 10px',
      rem: '相对单位，相对于根元素(html)的字体大小。在Tailwind中，1rem = 16px（默认）',
      em: '相对单位，相对于当前元素的字体大小。如果当前元素字体大小是16px，那么1em = 16px'
    };
    return relativeUnits[value] || '暂无说明';
  }

  if (group.includes('分数单位')) {
    const fractions: Record<string, string> = {
      '1/2': '二分之一，等于50%',
      '1/3': '三分之一，等于33.333%',
      '2/3': '三分之二，等于66.667%',
      '1/4': '四分之一，等于25%',
      '2/4': '四分之二，等于50%',
      '3/4': '四分之三，等于75%',
      '1/5': '五分之一，等于20%',
      '2/5': '五分之二，等于40%',
      '3/5': '五分之三，等于60%',
      '4/5': '五分之四，等于80%',
      '1/6': '六分之一，等于16.667%',
      '5/6': '六分之五，等于83.333%'
    };
    return fractions[value] || '暂无说明';
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
    return sizes[value] || '暂无说明';
  }

  // 处理字体相关
  if (group.includes('字体大小')) {
    const fontSizes: Record<string, string> = {
      xs: '特小号字体，12px',
      sm: '小号字体，14px',
      base: '基础字体大小，16px',
      lg: '大号字体，18px',
      xl: '特大号字体，20px',
      '2xl': '超大号字体，24px',
      '3xl': '超大号字体，30px',
      '4xl': '超大号字体，36px',
      '5xl': '超大号字体，48px',
      '6xl': '超大号字体，60px'
    };
    return fontSizes[value] || '暂无说明';
  }

  if (group.includes('字重')) {
    const fontWeights: Record<string, string> = {
      thin: '最细字重，等于 font-weight: 100',
      extralight: '特细字重，等于 font-weight: 200',
      light: '细字重，等于 font-weight: 300',
      normal: '正常字重，等于 font-weight: 400',
      medium: '中等字重，等于 font-weight: 500',
      semibold: '半粗字重，等于 font-weight: 600',
      bold: '粗字重，等于 font-weight: 700',
      extrabold: '特粗字重，等于 font-weight: 800',
      black: '最粗字重，等于 font-weight: 900'
    };
    return fontWeights[value] || '暂无说明';
  }

  if (group.includes('行高')) {
    const lineHeights: Record<string, string> = {
      none: '行高为1，即无行间距',
      tight: '行高为1.25，较紧凑的行间距',
      snug: '行高为1.375，稍紧凑的行间距',
      normal: '行高为1.5，正常行间距',
      relaxed: '行高为1.625，较宽松的行间距',
      loose: '行高为2，宽松的行间距'
    };
    return lineHeights[value] || '暂无说明';
  }

  return '暂无说明';
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

        {[
          {
            name: '颜色相关',
            prefix: '通用',
            values: [
              {
                type: 'fixed',
                examples: [
                  {
                    group: '灰度色系（5个）',
                    colors: [
                      { name: 'slate', desc: '石板灰', textClass: 'text-slate-500', bgClass: 'bg-slate-100' },
                      { name: 'gray', desc: '灰色', textClass: 'text-gray-500', bgClass: 'bg-gray-100' },
                      { name: 'zinc', desc: '锌灰', textClass: 'text-zinc-500', bgClass: 'bg-zinc-100' },
                      { name: 'neutral', desc: '中性灰', textClass: 'text-neutral-500', bgClass: 'bg-neutral-100' },
                      { name: 'stone', desc: '石灰', textClass: 'text-stone-500', bgClass: 'bg-stone-100' }
                    ]
                  },
                  {
                    group: '暖色系（4个）',
                    colors: [
                      { name: 'red', desc: '红色', textClass: 'text-red-500', bgClass: 'bg-red-100' },
                      { name: 'orange', desc: '橙色', textClass: 'text-orange-500', bgClass: 'bg-orange-100' },
                      { name: 'amber', desc: '琥珀色', textClass: 'text-amber-500', bgClass: 'bg-amber-100' },
                      { name: 'yellow', desc: '黄色', textClass: 'text-yellow-500', bgClass: 'bg-yellow-100' }
                    ]
                  },
                  {
                    group: '绿色系（4个）',
                    colors: [
                      { name: 'lime', desc: '青柠色', textClass: 'text-lime-500', bgClass: 'bg-lime-100' },
                      { name: 'green', desc: '绿色', textClass: 'text-green-500', bgClass: 'bg-green-100' },
                      { name: 'emerald', desc: '祖母绿', textClass: 'text-emerald-500', bgClass: 'bg-emerald-100' },
                      { name: 'teal', desc: '青色', textClass: 'text-teal-500', bgClass: 'bg-teal-100' }
                    ]
                  },
                  {
                    group: '蓝色系（4个）',
                    colors: [
                      { name: 'cyan', desc: '青色', textClass: 'text-cyan-500', bgClass: 'bg-cyan-100' },
                      { name: 'sky', desc: '天蓝色', textClass: 'text-sky-500', bgClass: 'bg-sky-100' },
                      { name: 'blue', desc: '蓝色', textClass: 'text-blue-500', bgClass: 'bg-blue-100' },
                      { name: 'indigo', desc: '靛青色', textClass: 'text-indigo-500', bgClass: 'bg-indigo-100' }
                    ]
                  },
                  {
                    group: '紫红色系（5个）',
                    colors: [
                      { name: 'violet', desc: '紫罗兰', textClass: 'text-violet-500', bgClass: 'bg-violet-100' },
                      { name: 'purple', desc: '紫色', textClass: 'text-purple-500', bgClass: 'bg-purple-100' },
                      { name: 'fuchsia', desc: '洋红', textClass: 'text-fuchsia-500', bgClass: 'bg-fuchsia-100' },
                      { name: 'pink', desc: '粉红', textClass: 'text-pink-500', bgClass: 'bg-pink-100' },
                      { name: 'rose', desc: '玫瑰色', textClass: 'text-rose-500', bgClass: 'bg-rose-100' }
                    ]
                  },
                  {
                    group: '特殊颜色（5个）',
                    colors: [
                      { name: 'black', desc: '黑色', textClass: 'text-black', bgClass: 'bg-gray-100' },
                      { name: 'white', desc: '白色', textClass: 'text-gray-900', bgClass: 'bg-white' },
                      { name: 'transparent', desc: '透明', textClass: 'text-gray-500', bgClass: 'bg-transparent' },
                      { name: 'current', desc: '当前颜色', textClass: 'text-current', bgClass: 'bg-gray-100' },
                      { name: 'inherit', desc: '继承颜色', textClass: 'text-inherit', bgClass: 'bg-gray-100' }
                    ]
                  },
                  {
                    group: '颜色深度刻度（10个）',
                    values: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
                  }
                ],
                description: '所有预设颜色值，每种颜色都有50-900共9个深浅度'
              },
              {
                type: 'arbitrary',
                examples: [
                  {
                    group: '任意颜色值（不固定）',
                    values: ['[#FF0000]', '[rgb(255,0,0)]', '[hsl(0,100%,50%)]', '[rgba(255,0,0,0.5)]']
                  }
                ],
                description: '可以使用任意有效的 CSS 颜色值，包括：HEX、RGB、RGBA、HSL、HSLA等'
              }
            ],
            arbitraryValueExample: 'text-[#FF0000], bg-[rgb(255,0,0)]'
          },
          {
            name: '尺寸相关',
            prefix: '通用',
            values: [
              {
                type: 'fixed',
                examples: [
                  {
                    group: '基础单位（7个）',
                    values: ['px', 'full', 'screen', 'min', 'max', 'fit', 'auto']
                  },
                  {
                    group: '相对单位（4个）',
                    values: ['%', 'vh', 'vw', 'rem']
                  },
                  {
                    group: '分数单位（12个）',
                    values: ['1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6', '5/6']
                  },
                  {
                    group: '固定尺寸（24个）',
                    values: ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36']
                  }
                ],
                description: '所有预设尺寸值，可用于宽度、高度、间距等属性'
              },
              {
                type: 'arbitrary',
                examples: ['[24px]', '[2rem]', '[calc(100%-20px)]'],
                description: '可以使用任意有效的 CSS 尺寸值'
              }
            ],
            arbitraryValueExample: 'w-[100px], h-[calc(100vh-20px)]'
          },
          {
            name: '字体相关',
            prefix: '通用',
            values: [
              {
                type: 'fixed',
                examples: [
                  {
                    group: '字体大小（10个）',
                    values: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
                  },
                  {
                    group: '字重（9个）',
                    values: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']
                  },
                  {
                    group: '行高（10个）',
                    values: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '3', '4', '5', '6']
                  }
                ],
                description: '字体相关的预设值，包括大小、粗细和行高'
              },
              {
                type: 'arbitrary',
                examples: ['text-[20px]', 'font-[600]', 'leading-[2.5]'],
                description: '可以使用任意有效的字体相关值'
              }
            ],
            arbitraryValueExample: 'text-[20px], font-[600]'
          }
        ].map((category) => (
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
                                    <code className={`px-2 py-1 rounded border border-gray-200 text-sm font-mono ${typeof item === 'string'
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
