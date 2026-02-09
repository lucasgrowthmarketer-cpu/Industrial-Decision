import React from 'react';

const KPIWidget = ({ title, value, source, trend, className = "" }) => {
  return (
    <div className={`kpi-widget ${className}`} data-testid="kpi-widget">
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        {trend && (
          <span className={`kpi-trend ${trend > 0 ? 'positive' : 'negative'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div className="kpi-value">{value}</div>
      {source && <div className="kpi-source">{source}</div>}
    </div>
  );
};

export default KPIWidget;
