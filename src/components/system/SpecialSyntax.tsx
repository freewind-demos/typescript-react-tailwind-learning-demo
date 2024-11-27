import React from 'react';

const SpecialSyntax: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold mb-6">Tailwind 特殊语法说明</h2>

                {/* 任意值语法 */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">1. 任意值语法 []</h3>
                    <div className="space-y-4">
                        <p className="text-gray-600">使用方括号可以指定任意的CSS值：</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">尺寸示例：</p>
                                <div className="space-y-2">
                                    <div className="w-[200px] h-[50px] bg-blue-500 rounded"></div>
                                    <code className="text-sm">w-[200px] h-[50px]</code>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">颜色示例：</p>
                                <div className="space-y-2">
                                    <div className="text-[#FF5733]">自定义颜色文本</div>
                                    <code className="text-sm">text-[#FF5733]</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 悬停和焦点状态 */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">2. 状态修饰符</h3>
                    <div className="space-y-4">
                        <p className="text-gray-600">用于处理不同的交互状态：</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">悬停效果：</p>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-110 transition-all">
                                    悬停我
                                </button>
                                <code className="block text-sm mt-2">hover:bg-blue-600 hover:scale-110</code>
                            </div>
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">焦点效果：</p>
                                <input 
                                    type="text" 
                                    placeholder="点击我" 
                                    className="px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                />
                                <code className="block text-sm mt-2">focus:ring-2 focus:ring-blue-500</code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 响应式设计 */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">3. 响应式前缀</h3>
                    <div className="space-y-4">
                        <p className="text-gray-600">根据屏幕大小应用不同样式：</p>
                        <div className="p-4 bg-gray-50 rounded">
                            <div className="text-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded
                                          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div className="p-2 bg-white/20 rounded">默认</div>
                                <div className="p-2 bg-white/20 rounded">sm:显示</div>
                                <div className="p-2 bg-white/20 rounded">md:显示</div>
                                <div className="p-2 bg-white/20 rounded">lg:显示</div>
                            </div>
                            <code className="block text-sm mt-2">
                                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                            </code>
                        </div>
                    </div>
                </div>

                {/* 组合语法 */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">4. 组合语法</h3>
                    <div className="space-y-4">
                        <p className="text-gray-600">group-hover 和 peer 用于处理组件间的交互：</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">组悬停效果：</p>
                                <div className="group bg-white p-4 rounded border hover:bg-gray-50">
                                    <h4 className="font-medium group-hover:text-blue-500">主标题</h4>
                                    <p className="text-gray-500 group-hover:text-gray-700">悬停整个区域查看效果</p>
                                </div>
                                <code className="block text-sm mt-2">group group-hover:text-blue-500</code>
                            </div>
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">同伴元素效果：</p>
                                <input 
                                    type="text" 
                                    className="peer px-4 py-2 border rounded w-full" 
                                    placeholder="输入内容..."
                                />
                                <p className="mt-1 text-sm text-gray-500 peer-focus:text-blue-500">
                                    输入框获得焦点时我会变色
                                </p>
                                <code className="block text-sm mt-2">peer peer-focus:text-blue-500</code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 暗色模式 */}
                <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">5. 暗色模式</h3>
                    <div className="space-y-4">
                        <p className="text-gray-600">使用 dark: 前缀适配暗色主题：</p>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded border">
                            <h4 className="font-medium text-gray-900 dark:text-white">自适应标题</h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                这段文本会根据系统主题自动调整颜色
                            </p>
                        </div>
                        <code className="block text-sm">
                            bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                        </code>
                    </div>
                </div>

                {/* 重要性标记 */}
                <div>
                    <h3 className="text-lg font-medium mb-4">6. 重要性标记</h3>
                    <div className="space-y-4">
                        <p className="text-gray-600">使用 ! 前缀强制应用样式：</p>
                        <div className="space-y-2">
                            <div className="!mt-8 p-4 bg-gray-50 rounded">
                                强制上边距为2rem (8)
                            </div>
                            <code className="text-sm">!mt-8 (覆盖其他 margin-top 设置)</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialSyntax; 