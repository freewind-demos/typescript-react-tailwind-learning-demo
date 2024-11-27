import React from 'react';

const gridExamples = [
    {
        name: '基础网格',
        items: [
            {
                label: 'grid grid-cols-3',
                class: 'grid grid-cols-3 gap-4',
                children: Array(9).fill(0).map((_, i) => (
                    <div key={i} className="h-16 bg-blue-500 flex items-center justify-center text-white">
                        {i + 1}
                    </div>
                ))
            },
            {
                label: 'grid grid-cols-4',
                class: 'grid grid-cols-4 gap-4',
                children: Array(8).fill(0).map((_, i) => (
                    <div key={i} className="h-16 bg-green-500 flex items-center justify-center text-white">
                        {i + 1}
                    </div>
                ))
            }
        ]
    },
    {
        name: '响应式网格',
        items: [
            {
                label: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
                class: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4',
                children: Array(6).fill(0).map((_, i) => (
                    <div key={i} className="h-16 bg-purple-500 flex items-center justify-center text-white">
                        {i + 1}
                    </div>
                ))
            }
        ]
    },
    {
        name: '列跨度',
        items: [
            {
                label: 'col-span-2',
                class: 'grid grid-cols-3 gap-4',
                children: [
                    <div key="1" className="h-16 col-span-2 bg-pink-500 flex items-center justify-center text-white">
                        跨越2列
                    </div>,
                    <div key="2" className="h-16 bg-pink-500 flex items-center justify-center text-white">
                        1列
                    </div>,
                    <div key="3" className="h-16 bg-pink-500 flex items-center justify-center text-white">
                        1列
                    </div>,
                    <div key="4" className="h-16 col-span-2 bg-pink-500 flex items-center justify-center text-white">
                        跨越2列
                    </div>
                ]
            }
        ]
    },
    {
        name: '行跨度',
        items: [
            {
                label: 'row-span-2',
                class: 'grid grid-cols-3 grid-rows-3 gap-4',
                children: [
                    <div key="1" className="row-span-2 bg-indigo-500 flex items-center justify-center text-white">
                        跨越2行
                    </div>,
                    <div key="2" className="h-16 bg-indigo-500 flex items-center justify-center text-white">
                        1
                    </div>,
                    <div key="3" className="h-16 bg-indigo-500 flex items-center justify-center text-white">
                        2
                    </div>,
                    <div key="4" className="h-16 bg-indigo-500 flex items-center justify-center text-white">
                        3
                    </div>,
                    <div key="5" className="h-16 bg-indigo-500 flex items-center justify-center text-white">
                        4
                    </div>
                ]
            }
        ]
    },
    {
        name: '自动网格',
        items: [
            {
                label: 'grid-cols-auto-fit',
                class: 'grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4',
                children: Array(5).fill(0).map((_, i) => (
                    <div key={i} className="h-16 bg-teal-500 flex items-center justify-center text-white">
                        自适应
                    </div>
                ))
            }
        ]
    },
    {
        name: '网格对齐',
        items: [
            {
                label: 'place-items-center',
                class: 'grid grid-cols-3 gap-4 place-items-center h-32',
                children: Array(3).fill(0).map((_, i) => (
                    <div key={i} className="w-16 h-16 bg-yellow-500 flex items-center justify-center text-white">
                        {i + 1}
                    </div>
                ))
            },
            {
                label: 'place-content-center',
                class: 'grid grid-cols-3 gap-4 place-content-center h-32',
                children: Array(3).fill(0).map((_, i) => (
                    <div key={i} className="w-16 h-16 bg-red-500 flex items-center justify-center text-white">
                        {i + 1}
                    </div>
                ))
            }
        ]
    }
];

const GridLayout: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="prose">
                <h2>Grid 布局</h2>
                <p>
                    Tailwind提供了强大的Grid布局系统，包括：
                </p>
                <ul>
                    <li>基础网格：使用grid和grid-cols-{'{n}'}定义列数</li>
                    <li>响应式网格：可以在不同断点使用不同的列数</li>
                    <li>网格跨度：使用col-span-{'{n}'}和row-span-{'{n}'}控制跨度</li>
                    <li>自动网格：使用auto-fit和minmax实现自适应列数</li>
                    <li>网格对齐：使用place-items和place-content控制对齐方式</li>
                </ul>
            </div>

            <div className="space-y-8">
                {gridExamples.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h3 className="text-lg font-medium mb-3">{group.name}</h3>
                        <div className="space-y-6">
                            {group.items.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                                    <div className={`${item.class} bg-gray-100 p-4 rounded-lg`}>
                                        {item.children}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="prose">
                <h3>使用说明</h3>
                <ul>
                    <li>启用网格：使用grid类</li>
                    <li>定义列数：使用grid-cols-{'{n}'}，n可以是1到12</li>
                    <li>定义行数：使用grid-rows-{'{n}'}，n可以是1到6</li>
                    <li>间距控制：使用gap-{'{size}'}设置行列间距</li>
                    <li>列跨度：使用col-span-{'{n}'}，n可以是1到12</li>
                    <li>行跨度：使用row-span-{'{n}'}，n可以是1到6</li>
                    <li>响应式：所有grid类都支持响应式前缀（sm、md、lg、xl）</li>
                </ul>
            </div>
        </div>
    );
};

export default GridLayout; 