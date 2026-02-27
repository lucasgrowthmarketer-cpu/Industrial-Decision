import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Activity, Database, Target, FileText, GitBranch, Shield, DoorOpen, BookOpen, Layers, Globe, Zap, Users } from 'lucide-react';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const modules = [
    { path: '/', label: t('sidebar.systemStatus'), icon: Activity },
    { path: '/comex-overview', label: t('sidebar.comexOverview'), icon: Layers },
    { path: '/market-pressure', label: t('sidebar.marketPressure'), icon: Database },
    { path: '/decision-readiness', label: t('sidebar.decisionReadiness'), icon: Target },
    { path: '/scenarios', label: t('sidebar.decisionScenarios'), icon: FileText },
    { path: '/process', label: t('sidebar.processVisibility'), icon: GitBranch },
    { path: '/proof', label: t('sidebar.proofBlocks'), icon: Shield },
    { path: '/gates', label: t('sidebar.decisionGates'), icon: DoorOpen },
    { path: '/amplifiers', label: t('sidebar.decisionAmplifiers'), icon: Zap },
    { path: '/team', label: t('sidebar.team'), icon: Users },
    { path: '/sources', label: t('sidebar.sourcesMethod'), icon: BookOpen }
  ];

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <nav className="sidebar" data-testid="main-sidebar">
      <div className="sidebar-header">
        <img 
          src="https://i.ibb.co/wNCQpWYW/Image-26-02-2026-a-21-05.jpg" 
          alt="Industrial Decision" 
          className="sidebar-logo"
          data-testid="sidebar-logo"
        />
        <div className="system-version">{t('sidebar.version')}</div>
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
          <span className="language-text">{language.toUpperCase()}</span>
          <span className="language-divider">/</span>
          <span className="language-text-inactive">{language === 'en' ? 'FR' : 'EN'}</span>
        </button>
        <div className="language-note">{t('sidebar.translationReady')}</div>
      </div>
    </nav>
  );
};

export default Sidebar;
