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
                { value: 'xs', desc: '特小号字体 (font-size: 12px)' },
                { value: 'sm', desc: '小号字体 (font-size: 14px)' },
                { value: 'base', desc: '基础字体大小 (font-size: 16px)' },
                { value: 'lg', desc: '大号字体 (font-size: 18px)' },
                { value: 'xl', desc: '特大号字体 (font-size: 20px)' },
                { value: '2xl', desc: '超大号字体 (font-size: 24px)' },
                { value: '3xl', desc: '超大号字体 (font-size: 30px)' },
                { value: '4xl', desc: '超大号字体 (font-size: 36px)' },
                { value: '5xl', desc: '超大号字体 (font-size: 48px)' },
                { value: '6xl', desc: '超大号字体 (font-size: 60px)' }
            ]
        },
        {
            group: '字体大小使用示例',
            values: [
                { value: 'text-xs', desc: '辅助文本，如表单提示、版权信息 (font-size: 12px)' },
                { value: 'text-sm', desc: '次要文本，如列表描述、标签文本 (font-size: 14px)' },
                { value: 'text-base', desc: '正文文本，如段落、列表项 (font-size: 16px)' },
                { value: 'text-lg', desc: '重要文本，如卡片标题、导航项 (font-size: 18px)' },
                { value: 'text-xl', desc: '小标题，如区块标题 (font-size: 20px)' },
                { value: 'text-2xl', desc: '中标题，如页面副标题 (font-size: 24px)' },
                { value: 'text-3xl', desc: '大标题，如页面主标题 (font-size: 30px)' },
                { value: 'text-4xl', desc: '超大标题，如着陆页标题 (font-size: 36px)' },
                { value: 'text-5xl', desc: '巨大标题，如营销页大标题 (font-size: 48px)' },
                { value: 'text-6xl', desc: '特大标题，如全屏展示文本 (font-size: 60px)' }
            ]
        },
        {
            group: '字重（9个）',
            values: [
                { value: 'thin', desc: '最细字重 (font-weight: 100)' },
                { value: 'extralight', desc: '特细字重 (font-weight: 200)' },
                { value: 'light', desc: '细字重 (font-weight: 300)' },
                { value: 'normal', desc: '正常字重 (font-weight: 400)' },
                { value: 'medium', desc: '中等字重 (font-weight: 500)' },
                { value: 'semibold', desc: '半粗字重 (font-weight: 600)' },
                { value: 'bold', desc: '粗字重 (font-weight: 700)' },
                { value: 'extrabold', desc: '特粗字重 (font-weight: 800)' },
                { value: 'black', desc: '最粗字重 (font-weight: 900)' }
            ]
        },
        {
            group: '字重使用示例',
            values: [
                { value: 'font-thin', desc: '装饰性文本，如艺术字 (font-weight: 100)' },
                { value: 'font-light', desc: '次要文本，如辅助说明 (font-weight: 300)' },
                { value: 'font-normal', desc: '正文文本，如段落内容 (font-weight: 400)' },
                { value: 'font-medium', desc: '强调文本，如导航项 (font-weight: 500)' },
                { value: 'font-semibold', desc: '重要文本，如按钮文字 (font-weight: 600)' },
                { value: 'font-bold', desc: '标题文本，如卡片标题 (font-weight: 700)' },
                { value: 'font-extrabold', desc: '主标题，如页面标题 (font-weight: 800)' },
                { value: 'font-black', desc: '特殊强调，如促销文字 (font-weight: 900)' }
            ]
        },
        {
            group: '行高（10个）',
            values: [
                { value: 'none', desc: '无行间距 (line-height: 1)' },
                { value: 'tight', desc: '较紧凑的行间距 (line-height: 1.25)' },
                { value: 'snug', desc: '稍紧凑的行间距 (line-height: 1.375)' },
                { value: 'normal', desc: '正常行间距 (line-height: 1.5)' },
                { value: 'relaxed', desc: '较宽松的行间距 (line-height: 1.625)' },
                { value: 'loose', desc: '宽松的行间距 (line-height: 2)' },
                { value: '3', desc: '特小行高 (line-height: 0.75rem)' },
                { value: '4', desc: '小行高 (line-height: 1rem)' },
                { value: '5', desc: '中等行高 (line-height: 1.25rem)' },
                { value: '6', desc: '大行高 (line-height: 1.5rem)' }
            ]
        },
        {
            group: '行高使用示例',
            values: [
                { value: 'leading-none', desc: '单行文本，如按钮文字 (line-height: 1)' },
                { value: 'leading-tight', desc: '紧凑标题，如卡片标题 (line-height: 1.25)' },
                { value: 'leading-snug', desc: '短段落，如列表描述 (line-height: 1.375)' },
                { value: 'leading-normal', desc: '普通段落，如文章内容 (line-height: 1.5)' },
                { value: 'leading-relaxed', desc: '易读文本，如博客文章 (line-height: 1.625)' },
                { value: 'leading-loose', desc: '宽松文本，如引用块 (line-height: 2)' },
                { value: 'leading-3', desc: '特小行高，用于特殊排版 (line-height: 0.75rem)' },
                { value: 'leading-4', desc: '小行高，用于紧凑列表 (line-height: 1rem)' },
                { value: 'leading-5', desc: '中等行高，用于普通文本 (line-height: 1.25rem)' },
                { value: 'leading-6', desc: '大行高，用于大段落 (line-height: 1.5rem)' }
            ]
        },
        {
            group: '常见组合示例',
            values: [
                { value: 'text-sm font-medium', desc: '小号中等粗细，如表格表头 (font-size: 14px; font-weight: 500)' },
                { value: 'text-lg font-semibold', desc: '大号半粗，如卡片标题 (font-size: 18px; font-weight: 600)' },
                { value: 'text-xl font-bold', desc: '特大号粗体，如区块标题 (font-size: 20px; font-weight: 700)' },
                { value: 'text-base leading-relaxed', desc: '正文大小宽松行高，如文章段落 (font-size: 16px; line-height: 1.625)' },
                { value: 'text-2xl font-bold leading-tight', desc: '大标题紧凑行高，如页面标题 (font-size: 24px; font-weight: 700; line-height: 1.25)' },
                { value: 'text-xs font-medium leading-none', desc: '小号标签，如状态标签 (font-size: 12px; font-weight: 500; line-height: 1)' },
                { value: 'text-4xl font-black leading-none', desc: '超大粗体，如品牌名称 (font-size: 36px; font-weight: 900; line-height: 1)' },
                { value: 'text-sm font-normal leading-loose', desc: '小号宽松，如备注文本 (font-size: 14px; font-weight: 400; line-height: 2)' }
            ]
        }
    ];

    const arbitraryExamples = [
        { value: 'text-[20px]', desc: '自定义字体大小 (font-size: 20px)' },
        { value: 'font-[600]', desc: '自定义字重 (font-weight: 600)' },
        { value: 'leading-[2.5]', desc: '自定义行高 (line-height: 2.5)' }
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