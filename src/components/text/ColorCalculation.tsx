import React from 'react';

interface ColorStep {
  scale: number;
  hsl: string;
  rgb: string;
  mix: string;
  explanation: string;
}

// 以红色为例
const redColorSteps: ColorStep[] = [
  {
    scale: 50,
    hsl: 'hsl(0, 86%, 97%)',
    rgb: 'rgb(254, 242, 242)',
    mix: '白色 97% + 基准色 3%',
    explanation: '几乎全是白色，只带一点点红色'
  },
  {
    scale: 100,
    hsl: 'hsl(0, 93%, 94%)',
    rgb: 'rgb(254, 226, 226)',
    mix: '白色 90% + 基准色 10%',
    explanation: '非常浅的红色，适合用作背景'
  },
  {
    scale: 200,
    hsl: 'hsl(0, 96%, 89%)',
    rgb: 'rgb(254, 202, 202)',
    mix: '白色 80% + 基准色 20%',
    explanation: '浅红色，柔和的强调'
  },
  {
    scale: 300,
    hsl: 'hsl(0, 94%, 82%)',
    rgb: 'rgb(252, 165, 165)',
    mix: '白色 65% + 基准色 35%',
    explanation: '中浅红色'
  },
  {
    scale: 400,
    hsl: 'hsl(0, 91%, 71%)',
    rgb: 'rgb(248, 113, 113)',
    mix: '白色 45% + 基准色 55%',
    explanation: '接近基准色，但稍浅'
  },
  {
    scale: 500,
    hsl: 'hsl(0, 84%, 60%)',
    rgb: 'rgb(239, 68, 68)',
    mix: '基准色 100%',
    explanation: '基准红色，标准的红色'
  },
  {
    scale: 600,
    hsl: 'hsl(0, 72%, 51%)',
    rgb: 'rgb(220, 38, 38)',
    mix: '基准色 85% + 黑色 15%',
    explanation: '深红色，带有一些黑色'
  },
  {
    scale: 700,
    hsl: 'hsl(0, 74%, 42%)',
    rgb: 'rgb(185, 28, 28)',
    mix: '基准色 65% + 黑色 35%',
    explanation: '很深的红色'
  },
  {
    scale: 800,
    hsl: 'hsl(0, 70%, 35%)',
    rgb: 'rgb(153, 27, 27)',
    mix: '基准色 45% + 黑色 55%',
    explanation: '非常深的红色'
  },
  {
    scale: 900,
    hsl: 'hsl(0, 63%, 31%)',
    rgb: 'rgb(127, 29, 29)',
    mix: '基准色 30% + 黑色 70%',
    explanation: '最深的红色，接近褐色'
  }
];

const ColorCalculation: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">颜色计算原理</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">计算方式说明</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>颜色计算主要使用 HSL（色相、饱和度、亮度）色彩空间</li>
              <li>基准色（500）是原始定义的颜色</li>
              <li>其他色阶通过与白色或黑色混合得到：
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>50-400：与白色混合，比例逐渐减少</li>
                  <li>600-900：与黑色混合，比例逐渐增加</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">色阶</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">预览</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HSL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RGB</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">混合比例</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {redColorSteps.map((step, index) => (
                  <tr key={step.scale} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {step.scale}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-16 h-8 rounded" style={{ backgroundColor: step.rgb }}></div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                      {step.hsl}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                      {step.rgb}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {step.mix}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {step.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-yellow-50 rounded mt-4">
            <h3 className="font-medium mb-2">重要说明</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>这些混合比例是近似值，实际计算会更复杂</li>
              <li>除了简单混合外，还会调整饱和度来保持颜色的生动度</li>
              <li>深色调（700-900）会略微提高饱和度，以防止颜色看起来太灰暗</li>
              <li>浅色调（50-300）会降低饱和度，使颜色看起来更自然</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorCalculation;
