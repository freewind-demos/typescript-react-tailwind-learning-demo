import React from 'react';

const flexExamples = [
    {
        name: 'Flex 方向',
        items: [
            {
                label: 'flex flex-row',
                class: 'flex flex-row',
                children: [
                    <div key="1" className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">2</div>,
                    <div key="3" className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">3</div>
                ]
            },
            {
                label: 'flex flex-col',
                class: 'flex flex-col',
                children: [
                    <div key="1" className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">2</div>,
                    <div key="3" className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">3</div>
                ]
            }
        ]
    },
    {
        name: '主轴对齐 (Justify Content)',
        items: [
            {
                label: 'justify-start',
                class: 'flex justify-start',
                children: [
                    <div key="1" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">2</div>
                ]
            },
            {
                label: 'justify-center',
                class: 'flex justify-center',
                children: [
                    <div key="1" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">2</div>
                ]
            },
            {
                label: 'justify-end',
                class: 'flex justify-end',
                children: [
                    <div key="1" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">2</div>
                ]
            },
            {
                label: 'justify-between',
                class: 'flex justify-between',
                children: [
                    <div key="1" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-16 bg-purple-500 flex items-center justify-center text-white">2</div>
                ]
            }
        ]
    },
    {
        name: '交叉轴对齐 (Align Items)',
        items: [
            {
                label: 'items-start',
                class: 'flex items-start h-32',
                children: [
                    <div key="1" className="w-16 h-16 bg-pink-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-24 bg-pink-500 flex items-center justify-center text-white">2</div>
                ]
            },
            {
                label: 'items-center',
                class: 'flex items-center h-32',
                children: [
                    <div key="1" className="w-16 h-16 bg-pink-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-24 bg-pink-500 flex items-center justify-center text-white">2</div>
                ]
            },
            {
                label: 'items-end',
                class: 'flex items-end h-32',
                children: [
                    <div key="1" className="w-16 h-16 bg-pink-500 flex items-center justify-center text-white">1</div>,
                    <div key="2" className="w-16 h-24 bg-pink-500 flex items-center justify-center text-white">2</div>
                ]
            }
        ]
    },
    {
        name: '换行 (Flex Wrap)',
        items: [
            {
                label: 'flex-wrap',
                class: 'flex flex-wrap w-48',
                children: Array(5).fill(0).map((_, i) => (
                    <div key={i} className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white m-1">
                        {i + 1}
                    </div>
                ))
            },
            {
                label: 'flex-nowrap',
                class: 'flex flex-nowrap overflow-x-auto w-48',
                children: Array(5).fill(0).map((_, i) => (
                    <div key={i} className="w-16 h-16 bg-indigo-500 flex items-center justify-center text-white m-1 flex-shrink-0">
                        {i + 1}
                    </div>
                ))
            }
        ]
    },
    {
        name: '子元素伸缩 (Grow & Shrink)',
        items: [
            {
                label: 'flex-1 (grow)',
                class: 'flex',
                children: [
                    <div key="1" className="h-16 bg-teal-500 flex items-center justify-center text-white flex-1">flex-1</div>,
                    <div key="2" className="w-16 h-16 bg-teal-500 flex items-center justify-center text-white">固定</div>
                ]
            },
            {
                label: 'flex-initial (no grow)',
                class: 'flex',
                children: [
                    <div key="1" className="h-16 bg-teal-500 flex items-center justify-center text-white flex-initial px-4">initial</div>,
                    <div key="2" className="w-16 h-16 bg-teal-500 flex items-center justify-center text-white">固定</div>
                ]
            }
        ]
    }
];

const FlexLayout: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="prose">
                <h2>Flex 布局</h2>
                <p>
                    Tailwind提供了完整的Flexbox布局系统，包括：
                </p>
                <ul>
                    <li>容器属性：flex、flex-row、flex-col等</li>
                    <li>主轴对齐：justify-start、justify-center等</li>
                    <li>交叉轴对齐：items-start、items-center等</li>
                    <li>换行控制：flex-wrap、flex-nowrap</li>
                    <li>子元素伸缩：flex-1、flex-auto、flex-initial等</li>
                </ul>
            </div>

            <div className="space-y-8">
                {flexExamples.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h3 className="text-lg font-medium mb-3">{group.name}</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {group.items.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                                    <div className={`${item.class} bg-gray-100 p-4 rounded-lg gap-4`}>
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
                    <li>容器设置：使用flex类启用flex布局</li>
                    <li>方向控制：使用flex-row或flex-col设置主轴方向</li>
                    <li>主轴对齐：使用justify-{'{position}'}，position可以是start、center、end、between等</li>
                    <li>交叉轴对齐：使用items-{'{position}'}，position可以是start、center、end等</li>
                    <li>换行控制：使用flex-wrap或flex-nowrap</li>
                    <li>子元素伸缩：使用flex-1、flex-auto、flex-initial等控制子元素如何伸缩</li>
                </ul>
            </div>
        </div>
    );
};

export default FlexLayout; 