import React, { useState } from 'react';

const plans = [
    {
        name: '基础版',
        price: { monthly: 99, yearly: 990 },
        features: [
            '基础功能使用',
            '5GB 存储空间',
            '每月 10,000 次调用',
            '社区支持'
        ],
        bgClass: 'bg-gradient-to-br from-gray-100 to-gray-200'
    },
    {
        name: '专业版',
        price: { monthly: 199, yearly: 1990 },
        features: [
            '所有基础版功能',
            '50GB 存储空间',
            '每月 100,000 次调用',
            '24/7 在线支持',
            '高级统计功能'
        ],
        bgClass: 'bg-gradient-to-br from-indigo-500 to-purple-600',
        popular: true
    },
    {
        name: '企业版',
        price: { monthly: 399, yearly: 3990 },
        features: [
            '所有专业版功能',
            '不限存储空间',
            '不限调用次数',
            '专属客户经理',
            'API 访问权限',
            '自定义功能开发'
        ],
        bgClass: 'bg-gradient-to-br from-purple-600 to-pink-600'
    }
];

const PricingSection: React.FC = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                        选择适合您的方案
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        我们提供灵活的价格方案，满足不同规模的需求
                    </p>

                    {/* 切换按钮 */}
                    <div className="mt-12 flex justify-center items-center space-x-3">
                        <span className={`text-sm ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>月付</span>
                        <button 
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray-200"
                            role="switch"
                            aria-checked={isYearly}
                        >
                            <span 
                                className={`${
                                    isYearly ? 'translate-x-5' : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                            />
                        </button>
                        <span className={`text-sm ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                            年付
                            <span className="ml-1.5 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                省17%
                            </span>
                        </span>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                    {plans.map((plan) => (
                        <div 
                            key={plan.name}
                            className={`relative rounded-2xl ${
                                plan.popular 
                                    ? 'ring-2 ring-indigo-500 scale-105' 
                                    : ''
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-2 text-sm font-medium text-white text-center transform -translate-y-1/2">
                                    最受欢迎
                                </div>
                            )}

                            <div className={`h-full rounded-2xl ${plan.bgClass} p-8 ${
                                plan.popular ? 'text-white' : 'text-gray-900'
                            }`}>
                                <h3 className="text-xl font-semibold">{plan.name}</h3>
                                <p className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold tracking-tight">
                                        ¥{isYearly ? plan.price.yearly : plan.price.monthly}
                                    </span>
                                    <span className="ml-1 text-sm font-semibold">
                                        /{isYearly ? '年' : '月'}
                                    </span>
                                </p>
                                <ul className="mt-6 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex space-x-3">
                                            <svg
                                                className={`h-5 w-5 flex-shrink-0 ${
                                                    plan.popular ? 'text-white' : 'text-indigo-500'
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`mt-8 w-full rounded-lg py-3 px-4 text-sm font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                        plan.popular
                                            ? 'bg-white text-indigo-600 hover:bg-gray-50 focus:ring-white'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-500'
                                    }`}
                                >
                                    开始使用
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingSection;