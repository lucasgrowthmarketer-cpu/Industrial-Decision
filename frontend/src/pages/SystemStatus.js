import React from 'react';
import { useTranslation } from 'react-i18next';
import KPIWidget from '../components/KPIWidget';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { nationalTrendData } from '../data/industrial_pressure';

const SystemStatus = () => {
  const { t } = useTranslation();
  const latest = nationalTrendData[nationalTrendData.length - 1];
  const previous = nationalTrendData[nationalTrendData.length - 2];
  const trend = ((latest.total - previous.total) / previous.total * 100).toFixed(1);

  return (
    <div className="page-container" data-testid="system-status-page">
      <div className="hero-section">
        <h1 className="hero-title">
          {t('systemStatus.title')}<br />
          <span className="hero-emphasis">{t('systemStatus.subtitle')}</span>
        </h1>
        
        <p className="hero-subtitle">
          {t('systemStatus.heroSubtitle1')}<br />
          {t('systemStatus.heroSubtitle2')}
        </p>
      </div>

      <DataPanel title="System Overview" className="mb-6">
        <div className="system-tags">
          <div className="system-tag">
            <span className="tag-label">Market reality</span>
            <span className="tag-value">High-stakes, low-time decisions</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">User state</span>
            <span className="tag-value">Urgency, discretion, uncertainty</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">Website role</span>
            <span className="tag-value">Clarify → Reassure → Trigger action</span>
          </div>
        </div>
      </DataPanel>

      <div className="kpi-grid">
        <KPIWidget
          title="Total Business Failures 2025"
          value={latest.total.toLocaleString()}
          source="Banque de France"
          trend={parseFloat(trend)}
        />
        <KPIWidget
          title="Direct Liquidations (LJ)"
          value={latest.ljDirectes.toLocaleString()}
          source="Banque de France"
          trend={parseFloat((((latest.ljDirectes - previous.ljDirectes) / previous.ljDirectes) * 100).toFixed(1))}
        />
        <KPIWidget
          title="Judicial Restructuring (RJ)"
          value={latest.rjDirectes.toLocaleString()}
          source="Banque de France"
          trend={parseFloat((((latest.rjDirectes - previous.rjDirectes) / previous.rjDirectes) * 100).toFixed(1))}
        />
      </div>

      <DataPanel className="mt-6">
        <div className="info-block">
          <Badge variant="warning">Contextual Indicator</Badge>
          <p className="info-text">
            Judicial pressure indicators – contextual, not predictive. These metrics provide decision-makers 
            with market reality context, not forecasting tools. Industrial failures represent a subset of total 
            business failures, with regional and temporal variations requiring nuanced interpretation.
          </p>
        </div>
      </DataPanel>

      <DataPanel title="Decision Framework" className="mt-6">
        <div className="framework-grid">
          <div className="framework-item">
            <h3 className="framework-title">Clarify</h3>
            <p className="framework-desc">Reduce uncertainty through structured information presentation aligned with actual decision scenarios.</p>
          </div>
          <div className="framework-item">
            <h3 className="framework-title">Reassure</h3>
            <p className="framework-desc">Build trust through proof, process visibility, and credible operational signals—not marketing claims.</p>
          </div>
          <div className="framework-item">
            <h3 className="framework-title">Trigger Action</h3>
            <p className="framework-desc">Enable decision with clear, context-appropriate entry points matching leader readiness and urgency.</p>
          </div>
        </div>
      </DataPanel>
    </div>
  );
};

export default SystemStatus;
