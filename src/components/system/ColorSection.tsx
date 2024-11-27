import React, { FC } from "react";
import Tooltip from "../common/Tooltip";

/**
 * 常见问题解答：
 * 
 * Q1: 为什么 text-[#FF0000] 里允许使用 [] 这样的符号，是html的class允许的吗？
 * A1: [] 是 Tailwind 的特殊语法，称为"任意值语法"(Arbitrary values)，不是标准 HTML class。
 * - Tailwind 在构建时会处理这些特殊语法，转换为标准的 CSS
 * - 允许的字符：字母、数字、%、/、_、-、小数点、括号、逗号、空格
 * - 不允许的字符：引号、反引号、特殊符号（如 @、#（除了颜色值）、!、$等）
 * - 格式规则：property-[value] 
 *   例如：text-[20px]、w-[100%]、bg-[#FF0000]、grid-cols-[repeat(3,1fr)]
 * 
 * Q2: HEX、RGB、RGBA、HSL、HSLA 这些是什么意思？
 * A2: 这些都是 CSS 中表示颜色的不同格式：
 * - HEX：十六进制颜色码，如 #FF0000 表示红色
 *   格式：#RRGGBB，每两位表示红、绿、蓝的值（00-FF）
 * 
 * - RGB：红、绿、蓝三原色值，如 rgb(255,0,0) 表示红色
 *   格式：rgb(R,G,B)，每个值范围 0-255
 * 
 * - RGBA：RGB + 透明度，如 rgba(255,0,0,0.5) 表示半透明红色
 *   格式：rgba(R,G,B,A)，A 是透明度，范围 0-1
 * 
 * - HSL：色相、饱和度、亮度，如 hsl(0,100%,50%) 表示红色
 *   格式：hsl(H,S,L)
 *   H: 色相 0-360 度
 *   S: 饱和度 0-100%
 *   L: 亮度 0-100%
 * 
 * - HSLA：HSL + 透明度，如 hsla(0,100%,50%,0.5) 表示半透明红色
 *   格式：hsla(H,S,L,A)，A 是透明度，范围 0-1
 */

type ColorItem = {
    name: string;
    desc: string;
    textClass: string;
    bgClass: string;
};

type ValueItem = {
    value: string;
    desc: string;
};

type ColorGroup = {
    group: string;
    colors?: ColorItem[];
    values?: ValueItem[];
};

export const ColorSection: FC = () => {
    const fixedExamples = [
        {
            group: '灰度色系（5个）',
            colors: [
                { name: 'slate', desc: '石板灰色系列，一种带有蓝色调的中性灰色 (color: #64748b)', textClass: 'text-slate-500', bgClass: 'bg-slate-100' },
                { name: 'gray', desc: '纯灰色系列，最基础的灰色 (color: #6b7280)', textClass: 'text-gray-500', bgClass: 'bg-gray-100' },
                { name: 'zinc', desc: '锌灰色系列，带有金属质感的冷灰色 (color: #71717a)', textClass: 'text-zinc-500', bgClass: 'bg-zinc-100' },
                { name: 'neutral', desc: '中性灰色系列，完全中性的灰色 (color: #737373)', textClass: 'text-neutral-500', bgClass: 'bg-neutral-100' },
                { name: 'stone', desc: '石灰色系列，带有暖色调的灰色 (color: #78716c)', textClass: 'text-stone-500', bgClass: 'bg-stone-100' }
            ]
        },
        {
            group: '暖色系（4个）',
            colors: [
                { name: 'red', desc: '红色系列，用于错误、警告等需要引起注意的地方 (color: #ef4444)', textClass: 'text-red-500', bgClass: 'bg-red-100' },
                { name: 'orange', desc: '橙色系列，温暖活力的色调 (color: #f97316)', textClass: 'text-orange-500', bgClass: 'bg-orange-100' },
                { name: 'amber', desc: '琥珀色系列，金黄色调 (color: #f59e0b)', textClass: 'text-amber-500', bgClass: 'bg-amber-100' },
                { name: 'yellow', desc: '黄色系列，明亮醒目 (color: #eab308)', textClass: 'text-yellow-500', bgClass: 'bg-yellow-100' }
            ]
        },
        {
            group: '绿色系（4个）',
            colors: [
                { name: 'lime', desc: '青柠色系列，明亮的黄绿色 (color: #84cc16)', textClass: 'text-lime-500', bgClass: 'bg-lime-100' },
                { name: 'green', desc: '绿色系列，代表成功、通过等积极含义 (color: #22c55e)', textClass: 'text-green-500', bgClass: 'bg-green-100' },
                { name: 'emerald', desc: '祖母绿系列，典雅的深绿色 (color: #10b981)', textClass: 'text-emerald-500', bgClass: 'bg-emerald-100' },
                { name: 'teal', desc: '青色系列，介于绿色和蓝色之间 (color: #14b8a6)', textClass: 'text-teal-500', bgClass: 'bg-teal-100' }
            ]
        },
        {
            group: '蓝色系（4个）',
            colors: [
                { name: 'cyan', desc: '青色系列，明亮清新的蓝绿色 (color: #06b6d4)', textClass: 'text-cyan-500', bgClass: 'bg-cyan-100' },
                { name: 'sky', desc: '天蓝色系列，明亮清透的蓝色 (color: #0ea5e9)', textClass: 'text-sky-500', bgClass: 'bg-sky-100' },
                { name: 'blue', desc: '蓝色系列，最基础的蓝色 (color: #3b82f6)', textClass: 'text-blue-500', bgClass: 'bg-blue-100' },
                { name: 'indigo', desc: '靛青色系列，深邃的蓝紫色 (color: #6366f1)', textClass: 'text-indigo-500', bgClass: 'bg-indigo-100' }
            ]
        },
        {
            group: '紫红色系（5个）',
            colors: [
                { name: 'violet', desc: '紫罗兰色系列，优雅的紫色 (color: #8b5cf6)', textClass: 'text-violet-500', bgClass: 'bg-violet-100' },
                { name: 'purple', desc: '紫色系列，典型的紫色 (color: #a855f7)', textClass: 'text-purple-500', bgClass: 'bg-purple-100' },
                { name: 'fuchsia', desc: '洋红色系列，鲜艳的粉紫色 (color: #d946ef)', textClass: 'text-fuchsia-500', bgClass: 'bg-fuchsia-100' },
                { name: 'pink', desc: '粉红色系列，温柔的粉色 (color: #ec4899)', textClass: 'text-pink-500', bgClass: 'bg-pink-100' },
                { name: 'rose', desc: '玫瑰色系列，介于粉红和红色之间 (color: #f43f5e)', textClass: 'text-rose-500', bgClass: 'bg-rose-100' }
            ]
        },
        {
            group: '特殊颜色（5个）',
            colors: [
                { name: 'black', desc: '纯黑色，用于最深的文字和背景 (color: #000000)', textClass: 'text-black', bgClass: 'bg-gray-100' },
                { name: 'white', desc: '纯白色，用于背景和浅色文字 (color: #ffffff)', textClass: 'text-gray-900', bgClass: 'bg-white' },
                { name: 'transparent', desc: '完全透明 (color: transparent)', textClass: 'text-gray-500', bgClass: 'bg-transparent' },
                { name: 'current', desc: '使用当前元素继承的颜色值 (color: currentColor)', textClass: 'text-current', bgClass: 'bg-gray-100' },
                { name: 'inherit', desc: '继承父元素的颜色值 (color: inherit)', textClass: 'text-inherit', bgClass: 'bg-gray-100' }
            ]
        },
        {
            group: '颜色深度刻度（10个）',
            values: [
                { value: '50', desc: '最浅的颜色，与白色混合90% (color: #f8fafc)' },
                { value: '100', desc: '非常浅的颜色，与白色混合80% (color: #f1f5f9)' },
                { value: '200', desc: '浅色，与白色混合60% (color: #e2e8f0)' },
                { value: '300', desc: '中浅色，与白色混合40% (color: #cbd5e1)' },
                { value: '400', desc: '浅中色，与白色混合20% (color: #94a3b8)' },
                { value: '500', desc: '基础色，原始颜色 (color: #64748b)' },
                { value: '600', desc: '深中色，与黑色混合20% (color: #475569)' },
                { value: '700', desc: '中深色，与黑色混合40% (color: #334155)' },
                { value: '800', desc: '深色，与黑色混合60% (color: #1e293b)' },
                { value: '900', desc: '最深的颜色，与黑色混合80% (color: #0f172a)' }
            ]
        }
    ];

    const arbitraryExamples = [
        {
            group: '任意颜色值（不固定）',
            values: [
                { value: '[#FF0000]', desc: 'HEX颜色值示例' },
                { value: '[rgb(255,0,0)]', desc: 'RGB颜色值示例' },
                { value: '[hsl(0,100%,50%)]', desc: 'HSL颜色值示例' },
                { value: '[rgba(255,0,0,0.5)]', desc: 'RGBA颜色值示例，支持透明度' }
            ]
        }
    ];

    return <div className="mb-8 border-b pb-6">
        <h3 className="text-lg font-medium mb-4">颜色相关</h3>

        <div className="space-y-4">
            {/* 预设值部分 */}
            <div className="bg-gray-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-sm text-gray-700">预设值</span>
                </div>
                <div className="space-y-4">
                    {fixedExamples.map((group) => (
                        <div key={group.group} className="space-y-2">
                            <h4 className="font-medium text-gray-900">
                                {group.group}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {(group.values || group.colors)?.map((item: ColorItem | ValueItem) => (
                                    <code key={'value' in item ? item.value : item.name} 
                                        className={`px-2 py-1 rounded border border-gray-200 text-sm font-mono ${
                                            'textClass' in item ? `${item.bgClass} ${item.textClass}` : 'bg-white'
                                        }`}>
                                        <Tooltip text={item.desc}>
                                            {'value' in item ? item.value : item.name}
                                        </Tooltip>
                                    </code>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                所有预设颜色值，每种颜色都有50-900共9个深浅度
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 任意值部分 */}
            <div className="bg-gray-50 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-sm text-gray-700">任意值</span>
                </div>
                <div className="space-y-4">
                    {arbitraryExamples.map((group) => (
                        <div key={group.group} className="space-y-2">
                            <h4 className="font-medium text-gray-900">{group.group}</h4>
                            <div className="flex flex-wrap gap-2">
                                {group.values.map((item) => (
                                    <code key={item.value} className="px-2 py-1 bg-white rounded border border-gray-200 text-sm font-mono">
                                        <Tooltip text={item.desc}>
                                            {item.value}
                                        </Tooltip>
                                    </code>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                可以使用任意有效的 CSS 颜色值，包括：HEX、RGB、RGBA、HSL、HSLA等
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-2 text-sm text-gray-500">
                <span className="font-medium">任意值示例：</span>
                <code className="ml-2 px-2 py-1 bg-gray-100 rounded">
                    text-[#FF0000], bg-[rgb(255,0,0)]
                </code>
            </div>

            {/* 常见问题解答部分 */}
            <div className="bg-blue-50 p-4 rounded">
                <h4 className="font-medium mb-2">常见问题解答</h4>
                
                <div className="space-y-4">
                    <div>
                        <h5 className="font-medium text-sm mb-1">Q1: 为什么 text-[#FF0000] 里允许使用 [] 这样的符号，是html的class允许的吗？</h5>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p>[] 是 Tailwind 的特殊语法，称为"任意值语法"(Arbitrary values)，不是标准 HTML class。</p>
                            <ul className="list-disc list-inside pl-4 space-y-1">
                                <li>Tailwind 在构建时会处理这些特殊语法，转换为标准的 CSS</li>
                                <li>允许的字符：字母、数字、%、/、_、-、小数点、括号、逗号、空格</li>
                                <li>不允许的字符：引号、反引号、特殊符号（如 @、#（除了颜色值）、!、$等）</li>
                                <li>格式规则：property-[value]</li>
                                <li>例如：text-[20px]、w-[100%]、bg-[#FF0000]、grid-cols-[repeat(3,1fr)]</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-medium text-sm mb-1">Q2: HEX、RGB、RGBA、HSL、HSLA 这些是什么意思？</h5>
                        <div className="text-sm text-gray-600 space-y-2">
                            <div>
                                <p className="font-medium">HEX：十六进制颜色码</p>
                                <p>格式：#RRGGBB，每两位表示红、绿、蓝的值（00-FF）</p>
                                <p>例如：#FF0000 表示红色</p>
                            </div>
                            <div>
                                <p className="font-medium">RGB：红、绿、蓝三原色值</p>
                                <p>格式：rgb(R,G,B)，每个值范围 0-255</p>
                                <p>例如：rgb(255,0,0) 表示红色</p>
                            </div>
                            <div>
                                <p className="font-medium">RGBA：RGB + 透明度</p>
                                <p>格式：rgba(R,G,B,A)，A 是透明度，范围 0-1</p>
                                <p>例如：rgba(255,0,0,0.5) 表示半透明红色</p>
                            </div>
                            <div>
                                <p className="font-medium">HSL：色相、饱和度、亮度</p>
                                <p>格式：hsl(H,S,L)</p>
                                <ul className="list-disc list-inside pl-4">
                                    <li>H: 色相 0-360 度</li>
                                    <li>S: 饱和度 0-100%</li>
                                    <li>L: 亮度 0-100%</li>
                                </ul>
                                <p>例如：hsl(0,100%,50%) 表示红色</p>
                            </div>
                            <div>
                                <p className="font-medium">HSLA：HSL + 透明度</p>
                                <p>格式：hsla(H,S,L,A)，A 是透明度，范围 0-1</p>
                                <p>例如：hsla(0,100%,50%,0.5) 表示半透明红色</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};