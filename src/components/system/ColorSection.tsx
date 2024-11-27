import React, { FC } from "react";
import Tooltip from "../common/Tooltip";

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
                { name: 'slate', desc: '石板灰色系列，一种带有蓝色调的中性灰色。基准色值(500)：#64748B', textClass: 'text-slate-500', bgClass: 'bg-slate-100' },
                { name: 'gray', desc: '纯灰色系列，最基础的灰色。基准色值(500)：#6B7280', textClass: 'text-gray-500', bgClass: 'bg-gray-100' },
                { name: 'zinc', desc: '锌灰色系列，带有金属质感的冷灰色。基准色值(500)：#71717A', textClass: 'text-zinc-500', bgClass: 'bg-zinc-100' },
                { name: 'neutral', desc: '中性灰色系列，完全中性的灰色。基准色值(500)：#737373', textClass: 'text-neutral-500', bgClass: 'bg-neutral-100' },
                { name: 'stone', desc: '石灰色系列，带有暖色调的灰色。基准色值(500)：#78716C', textClass: 'text-stone-500', bgClass: 'bg-stone-100' }
            ]
        },
        {
            group: '暖色系（4个）',
            colors: [
                { name: 'red', desc: '红色系列，用于错误、警告等需要引起注意的地方。基准色值(500)：#EF4444', textClass: 'text-red-500', bgClass: 'bg-red-100' },
                { name: 'orange', desc: '橙色系列，温暖活力的色调，用于醒目但不过分刺激的地方。基准色值(500)：#F97316', textClass: 'text-orange-500', bgClass: 'bg-orange-100' },
                { name: 'amber', desc: '琥珀色系列，金黄色调，介于橙色和黄色之间。基准色值(500)：#F59E0B', textClass: 'text-amber-500', bgClass: 'bg-amber-100' },
                { name: 'yellow', desc: '黄色系列，明亮醒目，常用于警告和提示。基准色值(500)：#EAB308', textClass: 'text-yellow-500', bgClass: 'bg-yellow-100' }
            ]
        },
        {
            group: '绿色系（4个）',
            colors: [
                { name: 'lime', desc: '青柠色系列，明亮的黄绿色，富有活力。基准色值(500)：#84CC16', textClass: 'text-lime-500', bgClass: 'bg-lime-100' },
                { name: 'green', desc: '绿色系列，代表成功、通过等积极含义。基准色值(500)：#22C55E', textClass: 'text-green-500', bgClass: 'bg-green-100' },
                { name: 'emerald', desc: '祖母绿系列，典雅的深绿色。基准色值(500)：#10B981', textClass: 'text-emerald-500', bgClass: 'bg-emerald-100' },
                { name: 'teal', desc: '青色系列，介于绿色和蓝色之间的清新色调。基准色值(500)：#14B8A6', textClass: 'text-teal-500', bgClass: 'bg-teal-100' }
            ]
        },
        {
            group: '蓝色系（4个）',
            colors: [
                { name: 'cyan', desc: '青色系列，明亮清新的蓝绿色。基准色值(500)：#06B6D4', textClass: 'text-cyan-500', bgClass: 'bg-cyan-100' },
                { name: 'sky', desc: '天蓝色系列，明亮清透的蓝色。基准色值(500)：#0EA5E9', textClass: 'text-sky-500', bgClass: 'bg-sky-100' },
                { name: 'blue', desc: '蓝色系列，最基础的蓝色，常用于链接和交互元素。基准色值(500)：#3B82F6', textClass: 'text-blue-500', bgClass: 'bg-blue-100' },
                { name: 'indigo', desc: '靛青色系列，深邃的蓝紫色。基准色值(500)：#6366F1', textClass: 'text-indigo-500', bgClass: 'bg-indigo-100' }
            ]
        },
        {
            group: '紫红色系（5个）',
            colors: [
                { name: 'violet', desc: '紫罗兰色系列，优雅的紫色。基准色值(500)：#8B5CF6', textClass: 'text-violet-500', bgClass: 'bg-violet-100' },
                { name: 'purple', desc: '紫色系列，典型的紫色。基准色值(500)：#A855F7', textClass: 'text-purple-500', bgClass: 'bg-purple-100' },
                { name: 'fuchsia', desc: '洋红色系列，鲜艳的粉紫色。基准色值(500)：#D946EF', textClass: 'text-fuchsia-500', bgClass: 'bg-fuchsia-100' },
                { name: 'pink', desc: '粉红色系列，温柔的粉色。基准色值(500)：#EC4899', textClass: 'text-pink-500', bgClass: 'bg-pink-100' },
                { name: 'rose', desc: '玫瑰色系列，介于粉红和红色之间。基准色值(500)：#F43F5E', textClass: 'text-rose-500', bgClass: 'bg-rose-100' }
            ]
        },
        {
            group: '特殊颜色（5个）',
            colors: [
                { name: 'black', desc: '纯黑色，用于最深的文字和背景。色值：#000000', textClass: 'text-black', bgClass: 'bg-gray-100' },
                { name: 'white', desc: '纯白色，用于背景和浅色文字。色值：#FFFFFF', textClass: 'text-gray-900', bgClass: 'bg-white' },
                { name: 'transparent', desc: '完全透明。色值：transparent', textClass: 'text-gray-500', bgClass: 'bg-transparent' },
                { name: 'current', desc: '使用当前元素继承的颜色值。色值：currentColor', textClass: 'text-current', bgClass: 'bg-gray-100' },
                { name: 'inherit', desc: '继承父元素的颜色值。色值：inherit', textClass: 'text-inherit', bgClass: 'bg-gray-100' }
            ]
        },
        {
            group: '颜色深度刻度（10个）',
            values: [
                { value: '50', desc: '最浅的颜色，与白色混合90%。色值：#F9FAFB' },
                { value: '100', desc: '非常浅的颜色，与白色混合80%。色值：#F3F4F6' },
                { value: '200', desc: '浅色，与白色混合60%。色值：#E5E7EB' },
                { value: '300', desc: '中浅色，与白色混合40%。色值：#D1D5DB' },
                { value: '400', desc: '浅中色，与白色混合20%。色值：#9F9F9F' },
                { value: '500', desc: '基础色，原始颜色' },
                { value: '600', desc: '深中色，与黑色混合20%。色值：#4F4F4F' },
                { value: '700', desc: '中深色，与黑色混合40%。色值：#3B3F54' },
                { value: '800', desc: '深色，与黑色混合60%。色值：#2F303A' },
                { value: '900', desc: '最深的颜色，与黑色混合80%。色值：#1A1D23' }
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
                            <div className={`flex flex-wrap gap-2 ${group.colors ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''}`}>
                                {(group.values || group.colors)?.map((item: ColorItem | ValueItem) => (
                                    <div key={'value' in item ? item.value : item.name} className="flex items-center">
                                        <code className={`px-2 py-1 rounded border border-gray-200 text-sm font-mono ${
                                            'textClass' in item ? `${item.bgClass} ${item.textClass}` : 'bg-white'
                                        }`}>
                                            <Tooltip text={item.desc}>
                                                {'value' in item ? item.value : item.name}
                                            </Tooltip>
                                        </code>
                                        {'textClass' in item && (
                                            <span className={`text-sm ml-2 ${item.textClass}`}>
                                                （{item.desc}）
                                            </span>
                                        )}
                                    </div>
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
        </div>
    </div>
};