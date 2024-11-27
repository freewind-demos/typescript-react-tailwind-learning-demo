import { PresetCategory } from '../../types/presets';

export const colorPresets: PresetCategory = {
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
};
