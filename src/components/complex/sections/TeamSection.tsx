import React from 'react';

const team = [
    {
        name: '张三',
        title: '创始人 & CEO',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        bio: '拥有10年产品设计经验，曾在多家知名科技公司担任产品负责人',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#'
        }
    },
    {
        name: '李四',
        title: '技术总监',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        bio: '全栈开发专家，专注于构建高性能、可扩展的系统架构',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#'
        }
    },
    {
        name: '王五',
        title: '设计主管',
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
        bio: '拥有丰富的用户体验设计经验，致力于创造优秀的产品体验',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#'
        }
    },
    {
        name: '赵六',
        title: '市场总监',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        bio: '在市场营销领域有着深厚的积累，擅长品牌策略和市场拓展',
        social: {
            twitter: '#',
            linkedin: '#',
            github: '#'
        }
    }
];

const TeamSection: React.FC = () => {
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                        认识我们的团队
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        由行业专家组成的核心团队，致力于为您提供最好的服务
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <div key={member.name} className="group relative">
                            {/* 卡片容器 */}
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                                {/* 图片 */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                
                                {/* 渐变遮罩 */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* 社交链接 */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                    <div className="flex justify-center space-x-4">
                                        <a href={member.social.twitter} className="text-white hover:text-blue-400 transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href={member.social.linkedin} className="text-white hover:text-blue-400 transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href={member.social.github} className="text-white hover:text-blue-400 transition-colors">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 文字信息 */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-indigo-600">
                                    {member.title}
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;