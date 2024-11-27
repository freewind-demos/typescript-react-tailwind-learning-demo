import React from 'react';

const colors = [
    {
        name: '基础颜色',
        items: [
            { class: 'bg-black', text: 'text-white', label: 'bg-black' },
            { class: 'bg-white', text: 'text-black', label: 'bg-white' },
            { class: 'bg-transparent', text: 'text-black border border-gray-300', label: 'bg-transparent' }
        ]
    },
    {
        name: '灰度',
        items: [
            { class: 'bg-gray-50', text: 'text-black', label: 'bg-gray-50' },
            { class: 'bg-gray-100', text: 'text-black', label: 'bg-gray-100' },
            { class: 'bg-gray-200', text: 'text-black', label: 'bg-gray-200' },
            { class: 'bg-gray-300', text: 'text-black', label: 'bg-gray-300' },
            { class: 'bg-gray-400', text: 'text-black', label: 'bg-gray-400' },
            { class: 'bg-gray-500', text: 'text-white', label: 'bg-gray-500' },
            { class: 'bg-gray-600', text: 'text-white', label: 'bg-gray-600' },
            { class: 'bg-gray-700', text: 'text-white', label: 'bg-gray-700' },
            { class: 'bg-gray-800', text: 'text-white', label: 'bg-gray-800' },
            { class: 'bg-gray-900', text: 'text-white', label: 'bg-gray-900' }
        ]
    },
    {
        name: '主题色',
        items: [
            { class: 'bg-red-500', text: 'text-white', label: 'bg-red-500' },
            { class: 'bg-yellow-500', text: 'text-black', label: 'bg-yellow-500' },
            { class: 'bg-green-500', text: 'text-white', label: 'bg-green-500' },
            { class: 'bg-blue-500', text: 'text-white', label: 'bg-blue-500' },
            { class: 'bg-indigo-500', text: 'text-white', label: 'bg-indigo-500' },
            { class: 'bg-purple-500', text: 'text-white', label: 'bg-purple-500' },
            { class: 'bg-pink-500', text: 'text-white', label: 'bg-pink-500' }
        ]
    },
    {
        name: '渐变',
        items: [
            { class: 'bg-gradient-to-r from-cyan-500 to-blue-500', text: 'text-white', label: 'gradient cyan->blue' },
            { class: 'bg-gradient-to-r from-purple-500 to-pink-500', text: 'text-white', label: 'gradient purple->pink' },
            { class: 'bg-gradient-to-r from-yellow-500 to-red-500', text: 'text-white', label: 'gradient yellow->red' }
        ]
    }
];

const BackgroundColors: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="prose">
                <h2>背景颜色</h2>
                <p>
                    Tailwind提供了丰富的背景颜色选项，包括：
                </p>
                <ul>
                    <li>基础颜色：black、white、transparent</li>
                    <li>灰度：从50到900的10个等级</li>
                    <li>主题色：red、yellow、green等，每种颜色都有50-900的色阶</li>
                    <li>渐变：使用from-{'{'}color{'}'}和to-{'{'}color{'}'}组合</li>
                </ul>
            </div>

            <div className="space-y-6">
                {colors.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <h3 className="text-lg font-medium mb-3">{group.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {group.items.map((item, itemIndex) => (
                                <div 
                                    key={itemIndex}
                                    className={`p-4 rounded-lg ${item.class} ${item.text} flex items-center justify-center h-16`}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="prose">
                <h3>使用说明</h3>
                <ul>
                    <li>使用bg-{'{color}'}-{'{shade}'}格式设置背景色</li>
                    <li>shade从50到900，数字越大颜色越深</li>
                    <li>对于渐变，需要同时使用bg-gradient-to-{'{direction}'}和from-/to-类</li>
                    <li>direction可以是：r（右）、l（左）、t（上）、b（下）、tr（右上）等</li>
                </ul>
            </div>
        </div>
    );
};

export default BackgroundColors; 