import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
            {/* 背景装饰 */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30"></div>
            </div>

            {/* 主要内容 */}
            <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 
                                 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] 
                                 animate-fade-in-up">
                        Tailwind CSS 高级示例
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-100 mb-10 
                                animate-fade-in-up animation-delay-200">
                        展示 Tailwind CSS 的强大功能，包括响应式设计、动画效果、渐变、滤镜等高级特性
                    </p>
                    
                    {/* 按钮组 */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center 
                                  animate-fade-in-up animation-delay-400">
                        <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold
                                         hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all
                                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                            开始探索
                        </button>
                        <button className="px-8 py-3 bg-indigo-700 text-white rounded-lg font-semibold
                                         hover:bg-indigo-600 transform hover:-translate-y-0.5 transition-all
                                         focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 focus:ring-offset-indigo-600">
                            查看文档
                        </button>
                    </div>

                    {/* 滚动提示 */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2
                                  animate-bounce animation-delay-1000">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* 技术说明 */}
            <div className="absolute bottom-4 left-4 text-xs text-white/70">
                <p>使用的 Tailwind 特性：</p>
                <ul className="list-disc list-inside">
                    <li>渐变背景 (bg-gradient-to-br)</li>
                    <li>自定义动画 (animate-fade-in-up)</li>
                    <li>响应式设计 (sm:, lg:)</li>
                    <li>变换效果 (transform, hover:-translate-y-0.5)</li>
                    <li>自定义阴影 ([text-shadow:_...])</li>
                </ul>
            </div>
        </div>
    );
};

export default HeroSection; 