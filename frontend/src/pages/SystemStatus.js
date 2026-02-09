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

      <DataPanel title={t('systemStatus.systemOverview')} className="mb-6">
        <div className="system-tags">
          <div className="system-tag">
            <span className="tag-label">{t('systemStatus.marketReality')}</span>
            <span className="tag-value">{t('systemStatus.marketRealityValue')}</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">{t('systemStatus.userState')}</span>
            <span className="tag-value">{t('systemStatus.userStateValue')}</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">{t('systemStatus.websiteRole')}</span>
            <span className="tag-value">{t('systemStatus.websiteRoleValue')}</span>
          </div>
        </div>
      </DataPanel>

      <div className="kpi-grid">
        <KPIWidget
          title={t('systemStatus.totalFailures')}
          value={latest.total.toLocaleString()}
          source={t('common.banqueDeFrance')}
          trend={parseFloat(trend)}
        />
        <KPIWidget
          title={t('systemStatus.directLiquidations')}
          value={latest.ljDirectes.toLocaleString()}
          source={t('common.banqueDeFrance')}
          trend={parseFloat((((latest.ljDirectes - previous.ljDirectes) / previous.ljDirectes) * 100).toFixed(1))}
        />
        <KPIWidget
          title={t('systemStatus.judicialRestructuring')}
          value={latest.rjDirectes.toLocaleString()}
          source={t('common.banqueDeFrance')}
          trend={parseFloat((((latest.rjDirectes - previous.rjDirectes) / previous.rjDirectes) * 100).toFixed(1))}
        />
      </div>

      <DataPanel className="mt-6">
        <div className="info-block">
          <Badge variant="warning">{t('systemStatus.contextualIndicator')}</Badge>
          <p className="info-text">
            {t('systemStatus.indicatorText')}
          </p>
        </div>
      </DataPanel>

      <DataPanel title={t('systemStatus.decisionFramework')} className="mt-6">
        <div className="framework-grid">
          <div className="framework-item">
            <h3 className="framework-title">{t('systemStatus.clarify')}</h3>
            <p className="framework-desc">{t('systemStatus.clarifyDesc')}</p>
          </div>
          <div className="framework-item">
            <h3 className="framework-title">{t('systemStatus.reassure')}</h3>
            <p className="framework-desc">{t('systemStatus.reassureDesc')}</p>
          </div>
          <div className="framework-item">
            <h3 className="framework-title">{t('systemStatus.triggerAction')}</h3>
            <p className="framework-desc">{t('systemStatus.triggerActionDesc')}</p>
          </div>
        </div>
      </DataPanel>
    </div>
  );
};

export default SystemStatus;
