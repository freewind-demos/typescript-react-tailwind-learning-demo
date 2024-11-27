export const codeExamples = {
    hero: `import React from 'react';

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
                // ... 完整代码
            </div>
        </div>
    );
};

export default HeroSection;`,

    feature: `import React from 'react';

const features = [
    {
        title: '响应式卡片',
        description: '展示响应式设计和hover效果',
        // ... 完整代码
    }
];

const FeatureSection: React.FC = () => {
    return (
        <div className="py-24 bg-gray-900">
            // ... 完整代码
        </div>
    );
};

export default FeatureSection;`,

    pricing: `// PricingSection 完整代码...`,
    testimonial: `// TestimonialSection 完整代码...`,
    statistics: `// StatisticsSection 完整代码...`,
    team: `// TeamSection 完整代码...`
}; 