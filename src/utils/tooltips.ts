export const tooltips = {
  // 颜色名称
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
  inherit: '继承父元素的颜色值。色值：inherit',

  // 颜色深度刻度
  '50': '最浅的颜色，与白色混合90%。色值：#F9FAFB',
  '100': '非常浅的颜色，与白色混合80%。色值：#F3F4F6',
  '200': '浅色，与白色混合60%。色值：#E5E7EB',
  '300': '中浅色，与白色混合40%。色值：#D1D5DB',
  '400': '浅中色，与白色混合20%。色值：#9F9F9F',
  '500': '基础色，原始颜色',
  '600': '深中色，与黑色混合20%。色值：#4F4F4F',
  '700': '中深色，与黑色混合40%。色值：#3B3F54',
  '800': '深色，与黑色混合60%。色值：#2F303A',
  '900': '最深的颜色，与黑色混合80%。色值：#1A1D23',

  // 颜色格式
  HEX: '十六进制颜色代码，如 #FF0000 表示红色。格式：#RRGGBB，每两位分别代表红、绿、蓝的值（00-FF）',
  RGB: 'RGB颜色格式，使用红(R)、绿(G)、蓝(B)三个颜色通道的值(0-255)来表示颜色，如 rgb(255,0,0) 表示红色',
  RGBA: 'RGB颜色格式的扩展，增加了Alpha通道(0-1)来控制透明度，如 rgba(255,0,0,0.5) 表示半透明的红色',
  HSL: 'HSL颜色格式，使用色相(H, 0-360度)、饱和度(S, 0-100%)和亮度(L, 0-100%)来表示颜色，如 hsl(0,100%,50%) 表示红色',
  HSLA: 'HSL颜色格式的扩展，增加了Alpha通道(0-1)来控制透明度，如 hsla(0,100%,50%,0.5) 表示半透明的红色',

  // 尺寸单位
  px: '像素(pixel)，屏幕上的最小显示单位。在Tailwind中，1px就是一个物理像素',
  rem: '相对单位，相对于根元素(html)的字体大小。在Tailwind中，1rem = 16px（默认）',
  em: '相对单位，相对于当前元素的字体大小。如果当前元素字体大小是16px，那么1em = 16px',
  vh: '视窗高度单位，1vh = 视窗高度的1%。如果浏览器窗口高度是900px，那么1vh = 9px',
  vw: '视窗宽度单位，1vw = 视窗宽度的1%。如果浏览器窗口宽度是1000px，那么1vw = 10px',
  '%': '百分比单位，相对于父元素的对应属性的值',

  // 分数单位
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
  '5/6': '六分之五，等于83.333%',

  // 固定尺寸
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
  '36': '9rem (144px)',

  // Tailwind特殊值
  full: '表示100%。例如：w-full 等于 width: 100%',
  screen: '表示100vw（宽度）或100vh（高度）。例如：w-screen 等于 width: 100vw',
  min: '使用min-content。元素宽度/高度将是内容允许的最小值',
  max: '使用max-content。元素宽度/高度将是内容需要的最大值',
  fit: '使用fit-content。元素宽度/高度将在min-content和max-content之间自动调整',
  auto: '自动计算大小。由浏览器根据内容和上下文自动决定',

  // 字体大小
  xs: '特小号字体，12px',
  sm: '小号字体，14px',
  base: '基础字体大小，16px',
  lg: '大号字体，18px',
  xl: '特大号字体，20px',
  '2xl': '超大号字体，24px',
  '3xl': '超大号字体，30px',
  '4xl': '超大号字体，36px',
  '5xl': '超大号字体，48px',
  '6xl': '超大号字体，60px',

  // 字重
  thin: '最细字重，等于 font-weight: 100',
  extralight: '特细字重，等于 font-weight: 200',
  light: '细字重，等于 font-weight: 300',
  normal: '正常字重，等于 font-weight: 400',
  medium: '中等字重，等于 font-weight: 500',
  semibold: '半粗字重，等于 font-weight: 600',
  bold: '粗字重，等于 font-weight: 700',
  extrabold: '特粗字重，等于 font-weight: 800',
  black: '最粗字重，等于 font-weight: 900',

  // 行高
  leading: {
    none: '行高为1，即无行间距',
    tight: '行高为1.25，较紧凑的行间距',
    snug: '行高为1.375，稍紧凑的行间距',
    normal: '行高为1.5，正常行间距',
    relaxed: '行高为1.625，较宽松的行间距',
    loose: '行高为2，宽松的行间距'
  },

  // 任意值语法的说明
  'text-[20px]': '使用方括号语法可以指定任意的像素值，不受预设值限制。HTML的class属性支持除了空格、引号、>、/、=之外的大多数字符，所以方括号[]、小数点.、百分号%等都是合法的。但是某些字符（如&）可能需要转义才能使用。',
  'font-[600]': '使用方括号语法可以指定任意的字重值。在方括号中可以使用数字、小数点等字符',
  'leading-[2.5]': '使用方括号语法可以指定任意的行高倍数。小数点在class中是合法的',
  'text-[#ff0000]': '使用方括号语法可以直接指定颜色的十六进制值。#号在class中是合法的',
  'text-[rgb(255,0,0)]': '使用方括号语法可以直接指定颜色的RGB值。括号和逗号在class中都是合法的',
  'text-[hsl(0,100%,50%)]': '使用方括号语法可以直接指定颜色的HSL值。百分号在class中是合法的',
  
  // HTML class字符说明
  'class-chars-allowed': '在HTML的class属性中：\n1. 允许使用的特殊字符：\n- 方括号 []\n- 小数点 .\n- 百分号 %\n- 连字符 -\n- 下划线 _\n- 冒号 :\n- 括号 ()\n- 逗号 ,\n- 井号 #\n2. 不允许使用的字符：\n- 空格\n- 引号 \' "\n- 大于号 >\n- 斜杠 /\n- 等号 =\n3. 某些字符需要转义才能使用：\n- & 需要写成 &amp;\n- < 需要写成 &lt;',
  'arbitrary-value-syntax': 'Tailwind的方括号语法[]充分利用了HTML class支持的特殊字符特性，让我们可以在class中直接写入各种复杂的值，比如rgb()、calc()等。这种设计既保持了HTML的合法性，又提供了强大的灵活性。'
};
