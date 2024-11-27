import React from 'react';

const borderStyles = [
    {
        name: '边框宽度',
        items: [
            { class: 'border-0', label: 'border-0' },
            { class: 'border', label: 'border' },
            { class: 'border-2', label: 'border-2' },
            { class: 'border-4', label: 'border-4' },
            { class: 'border-8', label: 'border-8' }
        ]
    },
    {
        name: '边框颜色',
        items: [
            { class: 'border-2 border-red-500', label: 'border-red-500' },
            { class: 'border-2 border-blue-500', label: 'border-blue-500' },
            { class: 'border-2 border-green-500', label: 'border-green-500' },
            { class: 'border-2 border-yellow-500', label: 'border-yellow-500' },
            { class: 'border-2 border-purple-500', label: 'border-purple-500' }
        ]
    },
    {
        name: '圆角',
        items: [
            { class: 'border-2 rounded-none', label: 'rounded-none' },
            { class: 'border-2 rounded-sm', label: 'rounded-sm' },
            { class: 'border-2 rounded', label: 'rounded' },
            { class: 'border-2 rounded-md', label: 'rounded-md' },
            { class: 'border-2 rounded-lg', label: 'rounded-lg' },
            { class: 'border-2 rounded-xl', label: 'rounded-xl' },
            { class: 'border-2 rounded-2xl', label: 'rounded-2xl' },
            { class: 'border-2 rounded-3xl', label: 'rounded-3xl' },
            { class: 'border-2 rounded-full', label: 'rounded-full' }
        ]
    },
    {
        name: '边框样式',
        items: [
            { class: 'border-2 border-solid', label: 'border-solid' },
            { class: 'border-2 border-dashed', label: 'border-dashed' },
            { class: 'border-2 border-dotted', label: 'border-dotted' },
            { class: 'border-2 border-double', label: 'border-double' },
            { class: 'border-2 border-none', label: 'border-none' }
        ]
    },
    {
        name: '单边边框',
        items: [
            { class: 'border-t-2', label: 'border-t-2' },
            { class: 'border-r-2', label: 'border-r-2' },
            { class: 'border-b-2', label: 'border-b-2' },
            { class: 'border-l-2', label: 'border-l-2' }
        ]
    }
];

const Borders: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="prose">
                <h2>边框样式</h2>
                <p>
                    Tailwind提供了全面的边框样式控制，包括：
                </p>
                <ul>
                    <li>边框宽度：从0到8px的不同宽度</li>
                    <li>边框颜色：支持所有的颜色系统</li>
                    <li>圆角：从none到full的9个等级</li>
                    <li>边框样式：solid、dashed、dotted等</li>
                    <li>单边边框：可以单独控制每一边的边框</li>
                </ul>
            </div>

            <div className="space-y-6">
                {borderStyles.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h3 className="text-lg font-medium mb-3">{group.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {group.items.map((item, itemIndex) => (
                                <div 
                                    key={itemIndex}
                                    className="bg-white p-4"
                                >
                                    <div 
                                        className={`h-16 ${item.class} bg-gray-50 flex items-center justify-center`}
                                    >
                                        {item.label}
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
                    <li>边框宽度：使用border-{'{width}'}，width可以是0、1、2、4、8</li>
                    <li>边框颜色：使用border-{'{color}'}-{'{shade}'}，如border-blue-500</li>
                    <li>圆角：使用rounded-{'{size}'}，size可以是none、sm、md、lg、xl等</li>
                    <li>边框样式：使用border-{'{style}'}，style可以是solid、dashed、dotted等</li>
                    <li>单边边框：使用border-{'{t|r|b|l}'}-{'{width}'}控制单边</li>
                </ul>
            </div>
        </div>
    );
};

export default Borders; 