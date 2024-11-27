import React from 'react';

const features = [
    {
        title: '响应式卡片',
        description: '展示响应式设计和hover效果',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        ),
        bgClass: 'bg-gradient-to-br from-pink-500 to-rose-500'
    },
    {
        title: '动态交互',
        description: '展示复杂的状态变化和动画',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        bgClass: 'bg-gradient-to-br from-blue-500 to-indigo-500'
    },
    {
        title: '高级布局',
        description: '展示Grid和Flex的组合使用',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
        ),
        bgClass: 'bg-gradient-to-br from-green-500 to-emerald-500'
    }
];

const FeatureSection: React.FC = () => {
    return (
        <div className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">
                        特性展示
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div 
                            key={feature.title}
                            className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 
                                     transition-all duration-300 ease-in-out
                                     hover:scale-105 hover:shadow-xl hover:shadow-black/30"
                        >
                            {/* 背景装饰 */}
                            <div className={`absolute -inset-1 ${feature.bgClass} rounded-xl opacity-0 
                                          group-hover:opacity-50 blur transition duration-300
                                          group-hover:blur-xl`}
                            />

                            {/* 内容 */}
                            <div className="relative flex flex-col h-full">
                                <div className={`w-12 h-12 rounded-lg ${feature.bgClass} 
                                              flex items-center justify-center mb-4
                                              group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-2 
                                             group-hover:translate-x-1 transition-transform">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 flex-grow
                                            group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>

                                <div className="mt-4 flex items-center text-gray-400 
                                              group-hover:text-white transition-colors">
                                    <span className="text-sm">了解更多</span>
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 技术说明 */}
                <div className="mt-16 text-sm text-gray-400 border-t border-gray-800 pt-8">
                    <p className="font-medium mb-2">使用的 Tailwind 特性：</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span>组合悬停效果 (group-hover:)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span>渐变和模糊 (blur, bg-gradient-to-br)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            <span>变换动画 (scale, translate)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                            <span>过渡效果 (transition-all)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            <span>响应式网格 (grid-cols-1/2/3)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span>阴影效果 (shadow-xl)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection; 