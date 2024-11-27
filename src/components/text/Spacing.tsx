import React from 'react';

interface BaseSpacingItem {
    class: string;
    label: string;
}

interface BoxSpacingItem extends BaseSpacingItem {
    showBox: boolean;
}

interface ContainerSpacingItem extends BaseSpacingItem {
    isContainer: true;
    children: React.ReactNode[];
}

interface SimpleSpacingItem extends BaseSpacingItem {
    showBox?: false;
    isContainer?: false;
}

type SpacingItem = BoxSpacingItem | ContainerSpacingItem | SimpleSpacingItem;

interface SpacingGroup {
    name: string;
    description?: string;
    items: SpacingItem[];
}

const spacingExamples: SpacingGroup[] = [
    {
        name: '外边距 (Margin)',
        items: [
            { class: 'm-4', label: 'm-4 (四周)', showBox: true },
            { class: 'mx-4', label: 'mx-4 (左右)', showBox: true },
            { class: 'my-4', label: 'my-4 (上下)', showBox: true },
            { class: 'mt-4', label: 'mt-4 (上)', showBox: true },
            { class: 'mr-4', label: 'mr-4 (右)', showBox: true },
            { class: 'mb-4', label: 'mb-4 (下)', showBox: true },
            { class: 'ml-4', label: 'ml-4 (左)', showBox: true }
        ]
    },
    {
        name: '内边距 (Padding)',
        items: [
            { class: 'p-4', label: 'p-4 (四周)' },
            { class: 'px-4', label: 'px-4 (左右)' },
            { class: 'py-4', label: 'py-4 (上下)' },
            { class: 'pt-4', label: 'pt-4 (上)' },
            { class: 'pr-4', label: 'pr-4 (右)' },
            { class: 'pb-4', label: 'pb-4 (下)' },
            { class: 'pl-4', label: 'pl-4 (左)' }
        ]
    },
    {
        name: '间距大小',
        items: [
            { class: 'p-0', label: 'p-0 (0px)' },
            { class: 'p-px', label: 'p-px (1px)' },
            { class: 'p-0.5', label: 'p-0.5 (0.125rem)' },
            { class: 'p-1', label: 'p-1 (0.25rem)' },
            { class: 'p-2', label: 'p-2 (0.5rem)' },
            { class: 'p-4', label: 'p-4 (1rem)' },
            { class: 'p-8', label: 'p-8 (2rem)' },
            { class: 'p-16', label: 'p-16 (4rem)' }
        ]
    },
    {
        name: '空间间隔 (Space Between)',
        description: '用于设置子元素之间的间距',
        items: [
            {
                class: 'space-x-4',
                label: 'space-x-4',
                isContainer: true,
                children: [
                    <div key="1" className="w-16 h-16 bg-blue-500"></div>,
                    <div key="2" className="w-16 h-16 bg-blue-500"></div>,
                    <div key="3" className="w-16 h-16 bg-blue-500"></div>
                ]
            },
            {
                class: 'space-y-4',
                label: 'space-y-4',
                isContainer: true,
                children: [
                    <div key="1" className="w-16 h-16 bg-green-500"></div>,
                    <div key="2" className="w-16 h-16 bg-green-500"></div>,
                    <div key="3" className="w-16 h-16 bg-green-500"></div>
                ]
            }
        ]
    }
];

const Spacing: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="prose">
                <h2>间距</h2>
                <p>
                    Tailwind提供了全面的间距控制系统，包括：
                </p>
                <ul>
                    <li>外边距 (margin)：使用m-*类</li>
                    <li>内边距 (padding)：使用p-*类</li>
                    <li>方向控制：t(上)、r(右)、b(下)、l(左)、x(左右)、y(上下)</li>
                    <li>间距大小：从0到16，以及px和小数值</li>
                    <li>空间间隔：使用space-x-*和space-y-*控制子元素间距</li>
                </ul>
            </div>

            <div className="space-y-8">
                {spacingExamples.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h3 className="text-lg font-medium mb-3">{group.name}</h3>
                        {group.description && (
                            <p className="text-gray-600 mb-3">{group.description}</p>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {group.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="relative">
                                    {'isContainer' in item && item.isContainer ? (
                                        <div>
                                            <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                                            <div className={`flex ${item.class === 'space-x-4' ? 'flex-row' : 'flex-col'} ${item.class} bg-gray-100 p-4`}>
                                                {item.children}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="min-h-[100px] bg-gray-100 relative">
                                            {'showBox' in item && item.showBox ? (
                                                <div className={`${item.class} bg-blue-200 w-16 h-16 relative`}>
                                                    <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-sm">
                                                        Box
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={`${item.class} bg-blue-500 text-white text-sm flex items-center justify-center`}>
                                                    Content
                                                </div>
                                            )}
                                            <div className="absolute bottom-2 right-2 text-sm text-gray-600">
                                                {item.label}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="prose">
                <h3>使用说明</h3>
                <ul>
                    <li>外边距：使用m-{'{size}'}或m{'{t|r|b|l|x|y}'}-{'{size}'}</li>
                    <li>内边距：使用p-{'{size}'}或p{'{t|r|b|l|x|y}'}-{'{size}'}</li>
                    <li>负值外边距：在数字前加负号，如-m-4</li>
                    <li>自动外边距：使用m{'{side}'}-auto实现居中等效果</li>
                    <li>响应式：所有间距类都支持响应式前缀</li>
                </ul>
            </div>
        </div>
    );
};

export default Spacing; 