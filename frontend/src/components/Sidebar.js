import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, Database, Target, FileText, GitBranch, Shield, DoorOpen, BookOpen } from 'lucide-react';

const Sidebar = () => {
  const modules = [
    { path: '/', label: 'System Status', icon: Activity },
    { path: '/market-pressure', label: 'Market Pressure', icon: Database },
    { path: '/decision-readiness', label: 'Decision Readiness', icon: Target },
    { path: '/scenarios', label: 'Decision Scenarios', icon: FileText },
    { path: '/process', label: 'Process Visibility', icon: GitBranch },
    { path: '/proof', label: 'Proof Blocks', icon: Shield },
    { path: '/gates', label: 'Decision Gates', icon: DoorOpen },
    { path: '/sources', label: 'Sources & Method', icon: BookOpen }
  ];

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
            >
              <Icon size={18} className="module-icon" />
              <span className="module-label">{module.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
