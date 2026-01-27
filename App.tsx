
import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ServiceDetail from './pages/ServiceDetail';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Services', icon: 'settings_suggest', path: '/solutions' },
    { label: 'About', icon: 'business', path: '/gallery' },
    { label: 'Support', icon: 'contact_support', path: '/contact' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md left-1/2 -translate-x-1/2 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-primary' : 'text-silver-accent hover:text-primary/70'
            }`}
          >
            <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
            <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  // We only show the main nav on root level pages, not in details
  const showNav = ['/', '/solutions', '/contact', '/gallery'].includes(location.pathname);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
      {showNav && <Navbar />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
