import React from 'react';

interface ColorScale {
  name: string;
  colors: {
    class: string;
    value: string;
    description: string;
  }[];
}

const colorScales: ColorScale[] = [
  {
    name: 'Red',
    colors: [
      { class: 'text-red-50', value: 'rgb(254, 242, 242)', description: '最浅的红色，几乎是白色，适合用作背景' },
      { class: 'text-red-100', value: 'rgb(254, 226, 226)', description: '非常浅的红色' },
      { class: 'text-red-200', value: 'rgb(254, 202, 202)', description: '浅红色' },
      { class: 'text-red-300', value: 'rgb(252, 165, 165)', description: '温和的红色' },
      { class: 'text-red-400', value: 'rgb(248, 113, 113)', description: '中等红色' },
      { class: 'text-red-500', value: 'rgb(239, 68, 68)', description: '标准红色，最常用的红色' },
      { class: 'text-red-600', value: 'rgb(220, 38, 38)', description: '深红色' },
      { class: 'text-red-700', value: 'rgb(185, 28, 28)', description: '很深的红色' },
      { class: 'text-red-800', value: 'rgb(153, 27, 27)', description: '非常深的红色' },
      { class: 'text-red-900', value: 'rgb(127, 29, 29)', description: '最深的红色' }
    ]
  },
  {
    name: 'Blue',
    colors: [
      { class: 'text-blue-50', value: 'rgb(239, 246, 255)', description: '最浅的蓝色，几乎是白色，适合用作背景' },
      { class: 'text-blue-100', value: 'rgb(219, 234, 254)', description: '非常浅的蓝色' },
      { class: 'text-blue-200', value: 'rgb(207, 233, 254)', description: '浅蓝色' },
      { class: 'text-blue-300', value: 'rgb(179, 229, 252)', description: '温和的蓝色' },
      { class: 'text-blue-400', value: 'rgb(147, 197, 253)', description: '中等蓝色' },
      { class: 'text-blue-500', value: 'rgb(87, 163, 255)', description: '标准蓝色，最常用的蓝色' },
      { class: 'text-blue-600', value: 'rgb(63, 148, 255)', description: '深蓝色' },
      { class: 'text-blue-700', value: 'rgb(44, 130, 255)', description: '很深的蓝色' },
      { class: 'text-blue-800', value: 'rgb(33, 118, 255)', description: '非常深的蓝色' },
      { class: 'text-blue-900', value: 'rgb(30, 58, 138)', description: '最深的蓝色' }
    ]
  }
];

const TextColors: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">颜色系统说明</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <p>
            Tailwind CSS 的颜色系统使用 50-900 的数值档位，这源于 Material Design 等主流设计系统的约定：
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>500</strong> 是基准色，代表颜色的标准亮度，通常是品牌定义的主色调</li>
            <li><strong>50-400</strong> 是基准色向白色混合的结果，数字越小越接近白色</li>
            <li><strong>600-900</strong> 是基准色向黑色混合的结果，数字越大越接近黑色</li>
          </ul>
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">为什么使用 50-900 而不是 1-9？</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>提供更大的扩展空间（将来可能在两个值之间添加新的色阶）</li>
              <li>数字具有权重感（900 比 9 更能体现颜色的"重量"）</li>
              <li>与主流设计系统（如 Material Design）保持一致</li>
              <li>便于设计师和开发者之间的沟通</li>
            </ul>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <h3 className="font-medium mb-2">颜色计算方式</h3>
            <p>以 500 为基准，其他色阶是通过算法计算得出：</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>向下（50-400）：逐渐增加亮度，减少饱和度</li>
              <li>向上（600-900）：逐渐降低亮度，保持或增加饱和度</li>
            </ul>
          </div>
        </div>
      </div>

      {colorScales.map((scale) => (
        <div key={scale.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-medium mb-4">{scale.name} 色阶</h3>
          <div className="grid gap-4">
            {scale.colors.map((color) => (
              <div key={color.class} className="flex items-center space-x-4">
                <div className="w-32 font-mono text-sm">{color.class}</div>
                <div className={`${color.class} flex-1`}>预览文本</div>
                <div className="w-32 font-mono text-sm">{color.value}</div>
                <div className="flex-1 text-sm text-gray-600">{color.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextColors;
