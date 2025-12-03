import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-bgPaper font-sans text-slate-800 flex flex-col items-center">
      {/* Top Decoration Line */}
      <div className="w-full h-2 bg-primary fixed top-0 z-50"></div>

      {/* Main Container simulating a document/paper */}
      <div className="w-full max-w-5xl bg-white min-h-screen shadow-2xl relative flex flex-col my-0 sm:my-8 sm:rounded-sm overflow-hidden">
        
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b-2 border-primary/10 px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo / Name */}
            <NavLink to="/" className="group">
              <h1 className="text-2xl font-serif font-bold text-primary tracking-tight group-hover:opacity-80 transition-opacity">
                박동성 <span className="text-base font-normal text-slate-500 ml-1">공인중개사</span>
              </h1>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 pb-1 border-b-2 ${
                      isActive
                        ? 'text-primary border-primary'
                        : 'text-slate-500 border-transparent hover:text-primary hover:border-primary/30'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-primary p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fadeIn">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-lg py-2 ${
                      isActive ? 'font-bold text-primary' : 'text-slate-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </header>

        {/* Content Area */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-50 border-t border-slate-200 px-8 py-12 mt-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-primary mb-4">박동성 공인중개사 사무소</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                20년 무사고, 오직 신뢰와 실력으로 증명합니다.<br />
                복잡한 권리 분석부터 대형 빌딩 매매까지 안전하게 중개합니다.
              </p>
              <div className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} Park Dong-seong Real Estate. All rights reserved.
              </div>
            </div>
            
            <div className="flex flex-col space-y-3 md:items-end">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-slate-600 hover:text-secondary transition-colors">
                <Phone size={16} className="mr-2" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-slate-600 hover:text-secondary transition-colors">
                <Mail size={16} className="mr-2" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center text-slate-600">
                <MapPin size={16} className="mr-2" />
                <span className="text-right">{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;