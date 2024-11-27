import { PresetCategory } from '../../types/presets';

export const sizePresets: PresetCategory = {
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
};
