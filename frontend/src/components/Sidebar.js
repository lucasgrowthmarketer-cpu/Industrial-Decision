import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Database, Target, FileText, GitBranch, Shield, DoorOpen, BookOpen, Layers, Globe } from 'lucide-react';

const Sidebar = () => {
  const [language, setLanguage] = useState('EN');

  const modules = [
    { path: '/', label: 'System Status', icon: Activity },
    { path: '/comex-overview', label: 'COMEX Overview', icon: Layers },
    { path: '/market-pressure', label: 'Market Pressure', icon: Database },
    { path: '/decision-readiness', label: 'Decision Readiness', icon: Target },
    { path: '/scenarios', label: 'Decision Scenarios', icon: FileText },
    { path: '/process', label: 'Process Visibility', icon: GitBranch },
    { path: '/proof', label: 'Proof Blocks', icon: Shield },
    { path: '/gates', label: 'Decision Gates', icon: DoorOpen },
    { path: '/sources', label: 'Sources & Method', icon: BookOpen }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  return (
    <nav className="sidebar" data-testid="main-sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Industrial<br/>Decision<br/>Interface</h1>
        <div className="system-version">v2.1.0</div>
      </div>
      
      <div className="sidebar-modules">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <NavLink
              key={module.path}
              to={module.path}
              className={({ isActive }) => `sidebar-module ${isActive ? 'active' : ''}`}
              data-testid={`nav-${module.label.toLowerCase().replace(/\s+/g, '-')}`}
              end={module.path === '/'}
            >
              <Icon size={18} className="module-icon" />
              <span className="module-label">{module.label}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="sidebar-footer">
        <button 
          className="language-toggle" 
          onClick={toggleLanguage}
          data-testid="language-toggle"
        >
          <Globe size={16} className="language-icon" />
          <span className="language-text">{language}</span>
          <span className="language-divider">/</span>
          <span className="language-text-inactive">{language === 'EN' ? 'FR' : 'EN'}</span>
        </button>
        <div className="language-note">Translation ready</div>
      </div>
    </nav>
  );
};

export default Sidebar;
