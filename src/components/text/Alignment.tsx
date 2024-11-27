import React from 'react';

interface AlignmentExample {
    title: string;
    description: string;
    items: {
        label: string;
        containerClass: string;
        contentClass: string;
        content: React.ReactNode;
    }[];
}

const examples: AlignmentExample[] = [
    {
        title: '文本对齐',
        description: '使用text-{position}类控制文本对齐',
        items: [
            {
                label: 'text-left',
                containerClass: 'w-full bg-gray-100 p-4',
                contentClass: 'text-left',
                content: '左对齐文本'
            },
            {
                label: 'text-center',
                containerClass: 'w-full bg-gray-100 p-4',
                contentClass: 'text-center',
                content: '居中文本'
            },
            {
                label: 'text-right',
                containerClass: 'w-full bg-gray-100 p-4',
                contentClass: 'text-right',
                content: '右对齐文本'
            }
        ]
    },
    {
        title: 'Flexbox 水平对齐',
        description: '使用justify-{position}类控制flex容器中的水平对齐',
        items: [
            {
                label: 'justify-start',
                containerClass: 'flex justify-start w-full bg-gray-100 p-4',
                contentClass: 'bg-blue-500 text-white px-4 py-2 rounded',
                content: '左对齐'
            },
            {
                label: 'justify-center',
                containerClass: 'flex justify-center w-full bg-gray-100 p-4',
                contentClass: 'bg-blue-500 text-white px-4 py-2 rounded',
                content: '居中'
            },
            {
                label: 'justify-end',
                containerClass: 'flex justify-end w-full bg-gray-100 p-4',
                contentClass: 'bg-blue-500 text-white px-4 py-2 rounded',
                content: '右对齐'
            }
        ]
    },
    {
        title: 'Flexbox 垂直对齐',
        description: '使用items-{position}类控制flex容器中的垂直对齐',
        items: [
            {
                label: 'items-start',
                containerClass: 'flex items-start w-full bg-gray-100 p-4 h-32',
                contentClass: 'bg-green-500 text-white px-4 py-2 rounded',
                content: '顶部对齐'
            },
            {
                label: 'items-center',
                containerClass: 'flex items-center w-full bg-gray-100 p-4 h-32',
                contentClass: 'bg-green-500 text-white px-4 py-2 rounded',
                content: '垂直居中'
            },
            {
                label: 'items-end',
                containerClass: 'flex items-end w-full bg-gray-100 p-4 h-32',
                contentClass: 'bg-green-500 text-white px-4 py-2 rounded',
                content: '底部对齐'
            }
        ]
    },
    {
        title: '绝对定位居中',
        description: '使用absolute定位和transform实现完美居中',
        items: [
            {
                label: '水平垂直居中',
                containerClass: 'relative w-full bg-gray-100 h-32',
                contentClass: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white px-4 py-2 rounded',
                content: '完美居中'
            }
        ]
    },
    {
        title: 'Margin 自动居中',
        description: '使用margin: auto实现块级元素居中',
        items: [
            {
                label: 'mx-auto',
                containerClass: 'w-full bg-gray-100 p-4',
                contentClass: 'mx-auto w-32 bg-pink-500 text-white px-4 py-2 rounded text-center',
                content: '水平居中'
            }
        ]
    },
    {
        title: 'Grid 布局居中',
        description: '使用Grid的place-items实现居中',
        items: [
            {
                label: 'place-items-center',
                containerClass: 'grid place-items-center w-full bg-gray-100 h-32',
                contentClass: 'bg-indigo-500 text-white px-4 py-2 rounded',
                content: 'Grid居中'
            }
        ]
    }
];

const Alignment: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="prose">
                <h2>对齐与居中</h2>
                <p>
                    Tailwind提供了多种方式来实现元素的对齐和居中，包括：
                </p>
                <ul>
                    <li>文本对齐：使用text-left、text-center、text-right</li>
                    <li>Flexbox对齐：使用justify-*和items-*</li>
                    <li>Grid对齐：使用place-items-*</li>
                    <li>绝对定位：结合transform实现精确居中</li>
                    <li>外边距：使用mx-auto实现水平居中</li>
                </ul>
            </div>

            <div className="space-y-12">
                {examples.map((example, index) => (
                    <div key={index} className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium">{example.title}</h3>
                            <p className="text-gray-600 mt-1">{example.description}</p>
                        </div>
                        <div className="space-y-4">
                            {example.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="space-y-2">
                                    <div className="text-sm text-gray-500">{item.label}</div>
                                    <div className={item.containerClass}>
                                        <div className={item.contentClass}>
                                            {item.content}
                                        </div>
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
                    <li>文本对齐使用text-{'{left|center|right}'}类</li>
                    <li>Flex容器中，使用justify-{'{start|center|end}'}控制主轴对齐</li>
                    <li>Flex容器中，使用items-{'{start|center|end}'}控制交叉轴对齐</li>
                    <li>使用mx-auto可以让定宽块级元素水平居中</li>
                    <li>使用Grid的place-items-center可以轻松实现水平垂直居中</li>
                    <li>对于需要精确控制的场景，可以使用绝对定位配合transform</li>
                </ul>
            </div>
        </div>
    );
};

export default Alignment; 