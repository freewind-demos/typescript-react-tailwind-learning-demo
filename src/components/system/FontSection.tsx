import React, { FC } from "react";
import Tooltip from "../common/Tooltip";

type FontItem = {
    value: string;
    desc: string;
};

type FontGroup = {
    group: string;
    values: FontItem[];
};

export const FontSection: FC = () => {
    const fixedExamples: FontGroup[] = [
        {
            group: '字体大小（10个）',
            values: [
                { value: 'xs', desc: '特小号字体，12px' },
                { value: 'sm', desc: '小号字体，14px' },
                { value: 'base', desc: '基础字体大小，16px' },
                { value: 'lg', desc: '大号字体，18px' },
                { value: 'xl', desc: '特大号字体，20px' },
                { value: '2xl', desc: '超大号字体，24px' },
                { value: '3xl', desc: '超大号字体，30px' },
                { value: '4xl', desc: '超大号字体，36px' },
                { value: '5xl', desc: '超大号字体，48px' },
                { value: '6xl', desc: '超大号字体，60px' }
            ]
        },
        {
            group: '字重（9个）',
            values: [
                { value: 'thin', desc: '最细字重，等于 font-weight: 100' },
                { value: 'extralight', desc: '特细字重，等于 font-weight: 200' },
                { value: 'light', desc: '细字重，等于 font-weight: 300' },
                { value: 'normal', desc: '正常字重，等于 font-weight: 400' },
                { value: 'medium', desc: '中等字重，等于 font-weight: 500' },
                { value: 'semibold', desc: '半粗字重，等于 font-weight: 600' },
                { value: 'bold', desc: '粗字重，等于 font-weight: 700' },
                { value: 'extrabold', desc: '特粗字重，等于 font-weight: 800' },
                { value: 'black', desc: '最粗字重，等于 font-weight: 900' }
            ]
        },
        {
            group: '行高（10个）',
            values: [
                { value: 'none', desc: '行高为1，即无行间距' },
                { value: 'tight', desc: '行高为1.25，较紧凑的行间距' },
                { value: 'snug', desc: '行高为1.375，稍紧凑的行间距' },
                { value: 'normal', desc: '行高为1.5，正常行间距' },
                { value: 'relaxed', desc: '行高为1.625，较宽松的行间距' },
                { value: 'loose', desc: '行高为2，宽松的行间距' },
                { value: '3', desc: '行高为.75rem' },
                { value: '4', desc: '行高为1rem' },
                { value: '5', desc: '行高为1.25rem' },
                { value: '6', desc: '行高为1.5rem' }
            ]
        }
    ];

    const arbitraryExamples = [
        { value: 'text-[20px]', desc: '自定义字体大小' },
        { value: 'font-[600]', desc: '自定义字重' },
        { value: 'leading-[2.5]', desc: '自定义行高' }
    ];

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
                        {value.type === 'fixed' ? (
                            <div className="space-y-4">
                                {(value.examples as FontGroup[]).map((group) => (
                                    <div key={group.group} className="space-y-2">
                                        <h4 className="font-medium text-gray-900">
                                            {group.group}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {group.values.map((item) => (
                                                <code key={item.value} className="px-2 py-1 bg-white rounded border border-gray-200 text-sm font-mono">
                                                    <Tooltip text={item.desc}>
                                                        {item.value}
                                                    </Tooltip>
                                                </code>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-2">
                                {(value.examples as { value: string; desc: string }[]).map((item) => (
                                    <code key={item.value} className="px-2 py-1 bg-white rounded border border-gray-200 text-sm font-mono">
                                        <Tooltip text={item.desc}>
                                            {item.value}
                                        </Tooltip>
                                    </code>
                                ))}
                            </div>
                        )}
                        <p className="text-sm text-gray-600 mt-2">{value.description}</p>
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