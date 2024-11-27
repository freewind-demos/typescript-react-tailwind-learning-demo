import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BasicStyles from './pages/BasicStyles';
import LayoutComponents from './pages/LayoutComponents';
import CommonComponents from './pages/CommonComponents';
import ResponsiveDesign from './pages/ResponsiveDesign';
import AllClasses from './pages/AllClasses';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-indigo-600">Tailwind Learning</span>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                  <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Basic Styles
                  </Link>
                  <Link to="/layout" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Layout
                  </Link>
                  <Link to="/components" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Components
                  </Link>
                  <Link to="/responsive" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    Responsive
                  </Link>
                  <Link to="/all-classes" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50">
                    All Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<BasicStyles />} />
            <Route path="/layout" element={<LayoutComponents />} />
            <Route path="/components" element={<CommonComponents />} />
            <Route path="/responsive" element={<ResponsiveDesign />} />
            <Route path="/all-classes" element={<AllClasses />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
