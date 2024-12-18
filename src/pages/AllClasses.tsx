import React, { useState } from 'react';
import TextColors from '../components/text/TextColors';
import TextSize from '../components/text/TextSize';
import TextWeight from '../components/text/TextWeight';
import ColorCalculation from '../components/text/ColorCalculation';
import PresetValues from '../components/system/PresetValues';
import SpecialSyntax from '../components/system/SpecialSyntax';
import BackgroundColors from '../components/text/BackgroundColors';
import Borders from '../components/text/Borders';
import Spacing from '../components/text/Spacing';
import FlexLayout from '../components/text/FlexLayout';
import GridLayout from '../components/text/GridLayout';
import Alignment from '../components/text/Alignment';

interface Tab {
  id: string;
  label: string;
  component: React.ReactNode;
}

const AllClasses: React.FC = () => {
  const tabs: Tab[] = [
    {
      id: 'presets',
      label: '预设值系统',
      component: <PresetValues />
    },
    {
      id: 'colors',
      label: '文本颜色',
      component: <TextColors />
    },
    {
      id: 'colorCalc',
      label: '颜色计算原理',
      component: <ColorCalculation />
    },
    {
      id: 'sizes',
      label: '文本大小',
      component: <TextSize />
    },
    {
      id: 'weights',
      label: '文本粗细',
      component: <TextWeight />
    },
    {
      id: 'alignment',
      label: '对齐与居中',
      component: <Alignment />
    },
    {
      id: 'backgrounds',
      label: '背景颜色',
      component: <BackgroundColors />
    },
    {
      id: 'borders',
      label: '边框',
      component: <Borders />
    },
    {
      id: 'spacing',
      label: '间距',
      component: <Spacing />
    },
    {
      id: 'flex',
      label: 'Flex布局',
      component: <FlexLayout />
    },
    {
      id: 'grid',
      label: 'Grid布局',
      component: <GridLayout />
    },
    {
      id: 'special-syntax',
      label: '特殊语法',
      component: <SpecialSyntax />
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tabs */}
      <div className="sticky top-0 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-4 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-3 border-b-2 font-medium text-sm transition-colors
                  ${activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default AllClasses;
