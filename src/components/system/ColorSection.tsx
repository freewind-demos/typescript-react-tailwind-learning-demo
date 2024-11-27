import React, { FC } from "react";
import Tooltip from "../common/Tooltip";
import { getValueDescription } from "./getValueDescription";

export const ColorSection: FC = () => {
    const fixedExamples = [
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
    ];
    const arbitraryExamples = [
        {
            group: '任意颜色值（不固定）',
            values: ['[#FF0000]', '[rgb(255,0,0)]', '[hsl(0,100%,50%)]', '[rgba(255,0,0,0.5)]']
        }
    ];
    const category = {
        name: '颜色相关',
        prefix: '通用',
        values: [
            {
                type: 'fixed',
                examples: fixedExamples,
                description: '所有预设颜色值，每种颜色都有50-900共9个深浅度'
            },
            {
                type: 'arbitrary',
                examples: arbitraryExamples,
                description: '可以使用任意有效的 CSS 颜色值，包括：HEX、RGB、RGBA、HSL、HSLA等'
            }
        ],
        arbitraryValueExample: 'text-[#FF0000], bg-[rgb(255,0,0)]'
    };
    return <div key={category.name} className="mb-8 border-b pb-6">
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
                                                            : `${item.bgClass} ${item.textClass}`}`}>
                                                            <Tooltip text={typeof item === 'string'
                                                                ? getValueDescription(item, group.group)
                                                                : `${item.desc}（${getValueDescription(item.name, group.group)}）`}>
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
};