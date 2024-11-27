import React, { FC } from "react";
import Tooltip from "../common/Tooltip";
import { getValueDescription } from "./getValueDescription";

export const SizeSection: FC = () => {
    const fixedExamples = [
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
    ];
    const arbitraryExamples = ['[24px]', '[2rem]', '[calc(100%-20px)]'];
    const category = {
        name: '尺寸相关',
        prefix: '通用',
        values: [
            {
                type: 'fixed',
                examples: fixedExamples,
                description: '所有预设尺寸值，可用于宽度、高度、间距等属性'
            },
            {
                type: 'arbitrary',
                examples: arbitraryExamples,
                description: '可以使用任意有效的 CSS 尺寸值'
            }
        ],
        arbitraryValueExample: 'w-[100px], h-[calc(100vh-20px)]'
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
    </div>;
};