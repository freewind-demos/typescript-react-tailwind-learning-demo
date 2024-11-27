import React, { FC } from "react";
import Tooltip from "../common/Tooltip";
import { getValueDescription } from "./getValueDescription";

export const FontSection: FC = () => {
    const fixedExamples = [
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
    ];
    const arbitraryExamples = ['text-[20px]', 'font-[600]', 'leading-[2.5]'];

    return <div className="mb-8 border-b pb-6">
        <h3 className="text-lg font-medium mb-4">字体相关</h3>

        <div className="space-y-4">
            {[
                {
                    type: 'fixed',
                    examples: fixedExamples,
                    description: '字体相关的预设值，包括大小、粗细和行高'
                },
                {
                    type: 'arbitrary',
                    examples: arbitraryExamples,
                    description: '可以使用任意有效的字体相关值'
                }
            ].map((value, index) => (
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
                                            <Tooltip text={getValueDescription(example, '字体相关')}>
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

            <div className="mt-2 text-sm text-gray-500">
                <span className="font-medium">任意值示例：</span>
                <code className="ml-2 px-2 py-1 bg-gray-100 rounded">
                    text-[20px], font-[600]
                </code>
            </div>
        </div>
    </div>
};