import React, { FC } from "react";
import Tooltip from "../common/Tooltip";

type SizeItem = {
    value: string;
    desc: string;
};

type SizeGroup = {
    group: string;
    values: SizeItem[];
};

export const SizeSection: FC = () => {
    const fixedExamples: SizeGroup[] = [
        {
            group: '基础单位（7个）',
            values: [
                { value: 'px', desc: '像素(pixel)，屏幕上的最小显示单位。在Tailwind中，1px就是一个物理像素' },
                { value: 'full', desc: '表示100%。例如：w-full 等于 width: 100%' },
                { value: 'screen', desc: '表示100vw（宽度）或100vh（高度）。例如：w-screen 等于 width: 100vw' },
                { value: 'min', desc: '使用min-content。元素宽度/高度将是内容允许的最小值' },
                { value: 'max', desc: '使用max-content。元素宽度/高度将是内容需要的最大值' },
                { value: 'fit', desc: '使用fit-content。元素宽度/高度将在min-content和max-content之间自动调整' },
                { value: 'auto', desc: '自动计算大小。由浏览器根据内容和上下文自动决定' }
            ]
        },
        {
            group: '基础单位使用示例',
            values: [
                { value: 'w-px', desc: '1像素宽的线条，常用于分割线' },
                { value: 'w-full', desc: '占满整个容器宽度，如全宽按钮' },
                { value: 'h-screen', desc: '全屏高度，如登录页面' },
                { value: 'w-min', desc: '宽度收缩到内容最小值，如自适应按钮' },
                { value: 'w-max', desc: '宽度扩展到内容最大值，如下拉菜单' },
                { value: 'w-fit', desc: '宽度自适应内容，如标签' },
                { value: 'h-auto', desc: '高度自动，如文章内容' }
            ]
        },
        {
            group: '相对单位（4个）',
            values: [
                { value: '%', desc: '百分比单位，相对于父元素的对应属性的值' },
                { value: 'vh', desc: '视窗高度单位，1vh = 视窗高度的1%' },
                { value: 'vw', desc: '视窗宽度单位，1vw = 视窗宽度的1%' },
                { value: 'rem', desc: '相对单位，相对于根元素(html)的字体大小。在Tailwind中，1rem = 16px（默认）' }
            ]
        },
        {
            group: '相对单位使用示例',
            values: [
                { value: 'w-[50%]', desc: '宽度占父元素的一半，如两列布局' },
                { value: 'h-[50vh]', desc: '高度占视窗一半，如分屏布局' },
                { value: 'w-[50vw]', desc: '宽度占视窗一半，如侧边栏' },
                { value: 'p-[1rem]', desc: '16px的内边距，如卡片内间距' }
            ]
        },
        {
            group: '分数单位（12个）',
            values: [
                { value: '1/2', desc: '二分之一，等于50%' },
                { value: '1/3', desc: '三分之一，等于33.333%' },
                { value: '2/3', desc: '三分之二，等于66.667%' },
                { value: '1/4', desc: '四分之一，等于25%' },
                { value: '2/4', desc: '四分之二，等于50%' },
                { value: '3/4', desc: '四分之三，等于75%' },
                { value: '1/5', desc: '五分之一，等于20%' },
                { value: '2/5', desc: '五分之二，等于40%' },
                { value: '3/5', desc: '五分之三，等于60%' },
                { value: '4/5', desc: '五分之四，等于80%' },
                { value: '1/6', desc: '六分之一，等于16.667%' },
                { value: '5/6', desc: '六分之五，等于83.333%' }
            ]
        },
        {
            group: '分数单位使用示例',
            values: [
                { value: 'w-1/2', desc: '两列等宽布局' },
                { value: 'w-1/3', desc: '三列等宽布局' },
                { value: 'w-2/3', desc: '主内容区占2/3宽度' },
                { value: 'w-1/4', desc: '四列等宽布局' },
                { value: 'w-3/4', desc: '主内容区占3/4宽度' }
            ]
        },
        {
            group: '固定尺寸（24个）',
            values: [
                { value: '0', desc: '0px' },
                { value: '0.5', desc: '0.125rem (2px)' },
                { value: '1', desc: '0.25rem (4px)' },
                { value: '1.5', desc: '0.375rem (6px)' },
                { value: '2', desc: '0.5rem (8px)' },
                { value: '2.5', desc: '0.625rem (10px)' },
                { value: '3', desc: '0.75rem (12px)' },
                { value: '3.5', desc: '0.875rem (14px)' },
                { value: '4', desc: '1rem (16px)' },
                { value: '5', desc: '1.25rem (20px)' },
                { value: '6', desc: '1.5rem (24px)' },
                { value: '7', desc: '1.75rem (28px)' },
                { value: '8', desc: '2rem (32px)' },
                { value: '9', desc: '2.25rem (36px)' },
                { value: '10', desc: '2.5rem (40px)' },
                { value: '11', desc: '2.75rem (44px)' },
                { value: '12', desc: '3rem (48px)' },
                { value: '14', desc: '3.5rem (56px)' },
                { value: '16', desc: '4rem (64px)' },
                { value: '20', desc: '5rem (80px)' },
                { value: '24', desc: '6rem (96px)' },
                { value: '28', desc: '7rem (112px)' },
                { value: '32', desc: '8rem (128px)' },
                { value: '36', desc: '9rem (144px)' }
            ]
        },
        {
            group: '固定尺寸使用示例',
            values: [
                { value: 'p-4', desc: '16px内边距，常用于容器内间距' },
                { value: 'px-4', desc: '左右16px内边距，常用于按钮' },
                { value: 'py-6', desc: '上下24px内边距，常用于区块间距' },
                { value: 'pt-2', desc: '顶部8px内边距' },
                { value: 'pb-8', desc: '底部32px内边距' },

                { value: 'm-2', desc: '8px外边距，常用于元素间距' },
                { value: 'mx-4', desc: '左右16px外边距' },
                { value: 'my-6', desc: '上下24px外边距' },
                { value: 'mt-4', desc: '顶部16px外边距' },
                { value: 'mb-8', desc: '底部32px外边距' },
                { value: '-mt-2', desc: '顶部-8px外边距，用于元素上移' },

                { value: 'w-12', desc: '48px宽度，常用于图标按钮' },
                { value: 'w-24', desc: '96px宽度，常用于小图标' },
                { value: 'w-32', desc: '128px宽度，常用于头像' },
                { value: 'w-48', desc: '192px宽度，常用于侧边栏' },
                { value: 'max-w-xs', desc: '最大宽度320px，常用于小卡片' },
                { value: 'max-w-md', desc: '最大宽度448px，常用于表单' },

                { value: 'h-8', desc: '32px高度，常用于小按钮' },
                { value: 'h-12', desc: '48px高度，常用于标准按钮' },
                { value: 'h-16', desc: '64px高度，常用于大按钮' },
                { value: 'min-h-[300px]', desc: '最小高度300px' },

                { value: 'gap-2', desc: '8px间隔，常用于紧凑布局' },
                { value: 'gap-4', desc: '16px间隔，常用于标准布局' },
                { value: 'gap-6', desc: '24px间隔，常用于宽松布局' },
                { value: 'space-y-4', desc: '垂直间距16px' },
                { value: 'space-x-6', desc: '水平间距24px' },

                { value: 'top-0', desc: '顶部对齐' },
                { value: 'left-4', desc: '左侧16px偏移' },
                { value: 'right-8', desc: '右侧32px偏移' },
                { value: 'bottom-4', desc: '底部16px偏移' },
                { value: 'inset-0', desc: '四周0偏移，常用于覆盖父元素' },

                { value: 'rounded-sm', desc: '2px圆角' },
                { value: 'rounded', desc: '4px标准圆角' },
                { value: 'rounded-md', desc: '6px圆角' },
                { value: 'rounded-lg', desc: '8px大圆角' },
                { value: 'rounded-full', desc: '完全圆角' }
            ]
        },
        {
            group: '常见组合示例',
            values: [
                { value: 'w-full h-screen', desc: '全屏容器，如着陆页' },
                { value: 'w-[80%] mx-auto', desc: '居中的80%宽度容器，如文章内容' },
                { value: 'w-fit mx-auto', desc: '居中的自适应宽度容器，如弹窗' },
                { value: 'h-[calc(100vh-60px)]', desc: '全屏高度减去头部，如应用主界面' },
                { value: 'max-w-[800px]', desc: '最大宽度800px，如文章阅读区域' },
                { value: 'min-h-screen p-4', desc: '最小全屏高度带内边距，如页面布局' }
            ]
        }
    ];

    const arbitraryExamples = [
        { value: '[24px]', desc: '24像素' },
        { value: '[2rem]', desc: '2个根元素字体大小' },
        { value: '[calc(100%-20px)]', desc: '计算值：100%减去20像素' }
    ];

    return <div className="mb-8 border-b pb-6">
        <h3 className="text-lg font-medium mb-4">尺寸相关</h3>

        <div className="space-y-4">
            {[
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
                                {(value.examples as SizeGroup[]).map((group) => (
                                    <div key={group.group} className="space-y-2">
                                        <h4 className="font-medium text-gray-900">
                                            {group.group}
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
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
                    w-[100px], h-[calc(100vh-20px)]
                </code>
            </div>
        </div>
    </div>;
};