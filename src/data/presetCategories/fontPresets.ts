import { PresetCategory } from '../../types/presets';

export const fontPresets: PresetCategory = {
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
};
