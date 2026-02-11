import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../../components/DataPanel';
import Badge from '../../components/Badge';
import { networkMetrics, trustSources, currentMetrics } from '../../data/decisionAmplifiersData';

const TrustLayer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <DataPanel 
      title={t('decisionAmplifiers.trustLayerTitle')} 
      className="mb-6 layer-section trust-section"
    >
      <div className="layer-explanation">
        <div className="explanation-header">
          <Badge variant="info">L3</Badge>
          <h4 className="explanation-title">{t('decisionAmplifiers.trustPrinciple')}</h4>
        </div>
        <p className="explanation-text">
          {t('decisionAmplifiers.trustExplanation')}
        </p>
      </div>

      <div className="network-metrics-section">
        <h4 className="section-subtitle">{t('decisionAmplifiers.networkMetricsTitle')}</h4>
        <div className="network-metrics-grid">
          <div className="network-metric">
            <span className="network-metric-value">{networkMetrics.avgB2BDecisionMakersInfluenced}</span>
            <span className="network-metric-label">{t('decisionAmplifiers.avgDecisionMakers')}</span>
          </div>
          <div className="network-metric">
            <span className="network-metric-value">{networkMetrics.linkedInTouchpointsBeforeContact}</span>
            <span className="network-metric-label">{t('decisionAmplifiers.touchpointsBeforeContact')}</span>
          </div>
          <div className="network-metric">
            <span className="network-metric-value">{networkMetrics.avgTrustBuildingTimeDays}</span>
            <span className="network-metric-label">{t('decisionAmplifiers.trustBuildingDays')}</span>
          </div>
          <div className="network-metric">
            <span className="network-metric-value">{(networkMetrics.executiveContentEngagementRate * 100).toFixed(1)}%</span>
            <span className="network-metric-label">{t('decisionAmplifiers.executiveEngagementRate')}</span>
          </div>
        </div>
      </div>

      <div className="trust-panel">
        <p className="trust-statement">
          {t('decisionAmplifiers.trustStatement')}
        </p>
      </div>

      <div className="trust-sources-section">
        <h4 className="section-subtitle">{t('decisionAmplifiers.referenceSources')}</h4>
        <div className="trust-sources-grid">
          {trustSources.map((source, index) => (
            <div key={index} className="trust-source-card">
              <span className="source-name">{source.name}</span>
              <p className="source-metric">
                {lang === 'fr' ? source.metricFr : source.metric}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="trust-metrics">
        <div className="metric-widget">
          <div className="metric-header">
            <span className="metric-name">{t('decisionAmplifiers.trustSignalStrength')}</span>
          </div>
          <div className="metric-gauge trust-gauge">
            <div 
              className="gauge-fill" 
              style={{ width: `${currentMetrics.TrustSignal}%` }}
            />
            <span className="gauge-value">{currentMetrics.TrustSignal}/100</span>
          </div>
          <p className="metric-note">{t('decisionAmplifiers.trustSignalNote')}</p>
        </div>
      </div>
    </DataPanel>
  );
};

export default TrustLayer;
