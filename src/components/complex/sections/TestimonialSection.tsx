import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        content: "这是我用过的最好的产品，界面简洁，功能强大，完全改变了我的工作方式。",
        author: "张三",
        title: "产品设计师",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5
    },
    {
        content: "客户支持非常及时，帮我解决了很多问题。整个团队都非常专业。",
        author: "李四",
        title: "技术总监",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 5
    },
    {
        content: "使用这个产品后，我们团队的效率提高了至少30%。性价比很高。",
        author: "王五",
        title: "项目经理",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 4
    }
];

const TestimonialSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const handleDotClick = (index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <div className="py-24 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                        用户评价
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        听听他们怎么说
                    </p>
                </div>

                <div className="mt-16 relative">
                    {/* 卡片容器 */}
                    <div className="relative h-[400px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                                    index === activeIndex
                                        ? 'opacity-100 translate-x-0'
                                        : index < activeIndex
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                }`}
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full">
                                    {/* 评分 */}
                                    <div className="flex mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${
                                                    i < testimonial.rating
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300'
                                                }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* 评价内容 */}
                                    <blockquote className="text-2xl font-medium text-gray-900 mb-8">
                                        "{testimonial.content}"
                                    </blockquote>

                                    {/* 作者信息 */}
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div className="ml-4">
                                            <div className="font-medium text-gray-900">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-gray-500">
                                                {testimonial.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 导航点 */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === activeIndex
                                        ? 'bg-indigo-600 w-6'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* 左右箭头 */}
                    <button
                        onClick={() => handleDotClick((activeIndex - 1 + testimonials.length) % testimonials.length)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:translate-x-0 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => handleDotClick((activeIndex + 1) % testimonials.length)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-0 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;