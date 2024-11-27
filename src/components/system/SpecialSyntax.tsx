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
                        
                        {/* group 解释部分 */}
                        <div className="bg-yellow-50 p-4 rounded mb-4">
                            <p className="font-medium">group 机制说明：</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mt-2">
                                <li>group 类标记一个父元素</li>
                                <li>group-* 类用在子元素上，表示"当父元素处于某状态时"</li>
                                <li>可用的状态包括：hover、focus、active、disabled 等</li>
                            </ul>
                            <div className="mt-3 bg-white/50 p-3 rounded">
                                <p className="font-medium text-sm text-gray-700">为什么用 "group" 而不是 "parent"？</p>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 mt-1">
                                    <li>group 表示"组"的概念，暗示这是一个整体，更符合组件化思维</li>
                                    <li>parent 过于强调父子关系，而 group 更强调整体性和关联性</li>
                                    <li>group 这个词在 UI 设计中常用，如 Group Box、Button Group 等</li>
                                    <li>parent 可能与 CSS 的 :parent 选择器（如果将来有的话）产生混淆</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded mt-4">
                            <p className="font-medium">Tailwind 中的父子关系术语：</p>
                            <div className="space-y-4 mt-2">
                                {/* group */}
                                <div>
                                    <p className="font-medium text-sm text-gray-700">1. group/group-* （组/组成员）</p>
                                    <p className="text-sm text-gray-600 mt-1">用于父元素状态影响子元素样式</p>
                                    <code className="block text-sm mt-1 bg-white/50 p-2 rounded">
                                        group group-hover:text-blue-500
                                    </code>
                                </div>

                                {/* peer */}
                                <div>
                                    <p className="font-medium text-sm text-gray-700">2. peer/peer-* （同伴/同伴状态）</p>
                                    <p className="text-sm text-gray-600 mt-1">用于兄弟元素之间的状态影响</p>
                                    <code className="block text-sm mt-1 bg-white/50 p-2 rounded">
                                        peer peer-focus:text-blue-500
                                    </code>
                                </div>

                                {/* children */}
                                <div>
                                    <p className="font-medium text-sm text-gray-700">3. space-*（子元素间距）</p>
                                    <p className="text-sm text-gray-600 mt-1">用于控制直接子元素之间的间距</p>
                                    <code className="block text-sm mt-1 bg-white/50 p-2 rounded">
                                        space-y-4 space-x-2
                                    </code>
                                </div>

                                {/* divide */}
                                <div>
                                    <p className="font-medium text-sm text-gray-700">4. divide-*（子元素分隔）</p>
                                    <p className="text-sm text-gray-600 mt-1">用于给直接子元素之间添加分隔线</p>
                                    <code className="block text-sm mt-1 bg-white/50 p-2 rounded">
                                        divide-y divide-gray-200
                                    </code>
                                </div>

                                <div className="text-sm text-gray-600 bg-white/50 p-3 rounded">
                                    <p className="font-medium text-gray-700">注意：</p>
                                    <ul className="list-disc list-inside mt-1 space-y-1">
                                        <li>Tailwind 倾向于使用更具语义化的词汇（如 group、peer、space）</li>
                                        <li>没有直接使用 parent/child 这样的术语</li>
                                        <li>这种设计使得类名更易读，更符合实际用途</li>
                                        <li>同时避免了与可能的 CSS 选择器冲突</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* 卡片示例 */}
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">卡片悬停效果：</p>
                                <div className="group bg-white p-4 rounded border hover:bg-gray-50 transition-all">
                                    <h4 className="font-medium group-hover:text-blue-500">卡片标题</h4>
                                    <p className="text-gray-500 group-hover:text-gray-700">描述文本</p>
                                    <button className="mt-2 px-3 py-1 text-sm border rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        操作按钮
                                    </button>
                                </div>
                                <div className="text-sm mt-2 space-y-1">
                                    <code className="block">group hover:bg-gray-50 {/* 父元素 */}</code>
                                    <code className="block">group-hover:text-blue-500 {/* 子元素 */}</code>
                                    <code className="block">group-hover:opacity-100 {/* 子元素 */}</code>
                                </div>
                            </div>

                            {/* 导航示例 */}
                            <div className="p-4 bg-gray-50 rounded">
                                <p className="font-medium mb-2">导航项悬停效果：</p>
                                <div className="space-y-2">
                                    <a href="#" className="group flex items-center p-2 rounded hover:bg-gray-100">
                                        <div className="w-8 h-8 bg-gray-200 rounded group-hover:bg-blue-500 transition-colors"></div>
                                        <div className="ml-3">
                                            <div className="font-medium group-hover:text-blue-500">导航项</div>
                                            <div className="text-sm text-gray-500 group-hover:text-blue-400">补充说明</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="text-sm mt-2 space-y-1">
                                    <code className="block">group hover:bg-gray-100 {/* 父元素 */}</code>
                                    <code className="block">group-hover:bg-blue-500 {/* 图标 */}</code>
                                    <code className="block">group-hover:text-blue-500 {/* 文本 */}</code>
                                </div>
                            </div>
                        </div>

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