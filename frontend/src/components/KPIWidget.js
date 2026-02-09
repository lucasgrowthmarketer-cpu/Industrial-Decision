import React from 'react';

const KPIWidget = ({ title, value, source, trend, className }) => {
  const widgetClass = className ? `kpi-widget ${className}` : 'kpi-widget';
  const trendClass = trend && trend > 0 ? 'kpi-trend positive' : 'kpi-trend negative';
  
  return (
    <div className={widgetClass} data-testid="kpi-widget">
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        {trend !== undefined && trend !== null && (
          <span className={trendClass}>
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
