import React, { useState, useEffect, useRef } from 'react';

const stats = [
    {
        label: '活跃用户',
        value: 2000000,
        prefix: '',
        suffix: '+',
        description: '来自全球的用户正在使用我们的产品',
        trend: 28.4,
        color: 'from-blue-500 to-indigo-600'
    },
    {
        label: '正面评价',
        value: 98.6,
        prefix: '',
        suffix: '%',
        description: '用户对我们的服务表示满意',
        trend: 4.2,
        color: 'from-green-500 to-emerald-600'
    },
    {
        label: '年收入',
        value: 480,
        prefix: '¥',
        suffix: 'M',
        description: '2023年总收入',
        trend: 32.7,
        color: 'from-purple-500 to-pink-600'
    },
    {
        label: '服务时长',
        value: 99.99,
        prefix: '',
        suffix: '%',
        description: '系统正常运行时间',
        trend: 0.01,
        color: 'from-orange-500 to-red-600'
    }
];

const StatisticsSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [numbers, setNumbers] = useState(stats.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        stats.forEach((stat, index) => {
            let current = 0;
            const target = stat.value;
            const increment = target / steps;
            let count = 0;

            const timer = setInterval(() => {
                current += increment;
                count++;

                if (count === steps) {
                    current = target;
                    clearInterval(timer);
                }

                setNumbers(prev => {
                    const newNumbers = [...prev];
                    newNumbers[index] = current;
                    return newNumbers;
                });
            }, interval);
        });
    }, [isVisible]);

    return (
        <div ref={sectionRef} className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        数据说明一切
                    </h2>
                    <p className="mt-4 text-xl text-gray-400">
                        看看我们取得的成就
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="relative group"
                        >
                            {/* 背景卡片 */}
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                                style={{
                                    background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                                    '--tw-gradient-from': `var(--tw-${stat.color.split(' ')[0]})`,
                                    '--tw-gradient-to': `var(--tw-${stat.color.split(' ')[1]})`
                                }}
                            />

                            {/* 内容卡片 */}
                            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-lg font-medium text-gray-400">
                                            {stat.label}
                                        </p>
                                        <p className="mt-2 text-4xl font-bold text-white tabular-nums">
                                            {stat.prefix}
                                            {Math.round(numbers[index] * 10) / 10}
                                            {stat.suffix}
                                        </p>
                                    </div>
                                    <div className={`px-2.5 py-1.5 rounded-full text-sm font-medium ${
                                        stat.trend > 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                    }`}>
                                        {stat.trend > 0 ? '↑' : '↓'} {Math.abs(stat.trend)}%
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticsSection;