import React, { useState, useRef } from 'react';
import { 
    HeroSection, 
    FeatureSection,
    PricingSection,
    TestimonialSection,
    StatisticsSection,
    TeamSection
} from './sections';

interface CodeViewState {
    [key: string]: boolean;
}

interface SectionWrapperProps {
    name: string;
    component: React.ReactNode;
    codeView: CodeViewState;
    toggleCode: (section: string) => void;
    sectionRef: (el: HTMLDivElement | null) => void;
    getFormattedHTML: (element: HTMLDivElement | null) => string;
    currentRef: HTMLDivElement | null;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    name,
    component,
    codeView,
    toggleCode,
    sectionRef,
    getFormattedHTML,
    currentRef
}) => (
    <div className="relative">
        <div ref={sectionRef}>
            {component}
        </div>
        <button 
            onClick={() => toggleCode(name)}
            className="absolute bottom-4 right-4 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
        >
            查看代码
        </button>
        {codeView[name] && (
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
                <div className="overflow-x-auto max-h-[500px]">
                    <pre className="text-gray-300 whitespace-pre font-mono text-sm">
                        {getFormattedHTML(currentRef)}
                    </pre>
                </div>
            </div>
        )}
    </div>
);

const sections = [
    { name: 'hero', component: <HeroSection /> },
    { name: 'feature', component: <FeatureSection /> },
    { name: 'pricing', component: <PricingSection /> },
    { name: 'testimonial', component: <TestimonialSection /> },
    { name: 'statistics', component: <StatisticsSection /> },
    { name: 'team', component: <TeamSection /> }
];

const ComplexPage: React.FC = () => {
    const [codeView, setCodeView] = useState<CodeViewState>({});
    const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const toggleCode = (section: string) => {
        setCodeView(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const getFormattedHTML = (element: HTMLDivElement | null) => {
        if (!element) return '';
        
        let html = element.outerHTML;
        let indent = 0;
        const tab = '    ';
        
        html = html
            .replace(/></g, '>\n<')
            .replace(/\s{2,}/g, ' ')
            .split('\n')
            .map(line => {
                line = line.trim();
                if (!line) return '';
                
                if (line.startsWith('</')) {
                    indent--;
                }
                
                const currentIndent = tab.repeat(Math.max(0, indent));
                
                if (line.endsWith('>') && !line.endsWith('/>') && !line.startsWith('</')) {
                    indent++;
                }
                
                return currentIndent + line;
            })
            .filter(line => line)
            .join('\n');
        
        return html;
    };

    return (
        <div className="min-h-screen space-y-8">
            {sections.map(section => (
                <SectionWrapper
                    key={section.name}
                    name={section.name}
                    component={section.component}
                    codeView={codeView}
                    toggleCode={toggleCode}
                    sectionRef={el => sectionRefs.current[section.name] = el}
                    getFormattedHTML={getFormattedHTML}
                    currentRef={sectionRefs.current[section.name]}
                />
            ))}
        </div>
    );
};

export default ComplexPage; 