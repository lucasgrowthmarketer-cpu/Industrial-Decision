import React from 'react';

const DataPanel = ({ title, subtitle, children, className }) => {
  const panelClass = className ? `data-panel ${className}` : 'data-panel';
  
  return (
    <div className={panelClass} data-testid="data-panel">
      {(title || subtitle) && (
        <div className="data-panel-header">
          {title && <h2 className="data-panel-title">{title}</h2>}
          {subtitle && <p className="data-panel-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="data-panel-content">
        {children}
      </div>
    </div>
  );
};

export default DataPanel;
