import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../../components/DataPanel';
import Badge from '../../components/Badge';
import KPIWidget from '../../components/KPIWidget';
import { intentClusters, currentMetrics } from '../../data/decisionAmplifiersData';

const VisibilityLayer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const getUrgencyColor = (level) => {
    if (level >= 5) return 'error';
    if (level >= 4) return 'warning';
    return 'info';
  };

  return (
    <DataPanel 
      title={t('decisionAmplifiers.visibilityLayerTitle')} 
      className="mb-6 layer-section visibility-section"
    >
      <div className="layer-explanation">
        <div className="explanation-header">
          <Badge variant="success">L2</Badge>
          <h4 className="explanation-title">{t('decisionAmplifiers.visibilityPrinciple')}</h4>
        </div>
        <p className="explanation-text">
          {t('decisionAmplifiers.visibilityExplanation')}
        </p>
      </div>

      <div className="intent-clusters-section">
        <h4 className="section-subtitle">{t('decisionAmplifiers.intentClustersTitle')}</h4>
        <div className="intent-clusters-grid">
          {intentClusters.map((cluster) => (
            <div key={cluster.id} className="intent-cluster-card" data-testid={`intent-${cluster.id}`}>
              <div className="cluster-header">
                <h5 className="cluster-name">
                  {lang === 'fr' ? cluster.labelFr : cluster.label}
                </h5>
                <Badge variant={getUrgencyColor(cluster.urgencyLevel)}>
                  U{cluster.urgencyLevel}
                </Badge>
              </div>
              
              <div className="cluster-signals">
                <span className="signals-label">{t('decisionAmplifiers.signals')}:</span>
                <ul className="signals-list">
                  {(lang === 'fr' ? cluster.signalsFr : cluster.signals).map((signal, i) => (
                    <li key={i} className="signal-item">{signal}</li>
                  ))}
                </ul>
              </div>
              
              <div className="cluster-risk">
                <span className="risk-label">{t('decisionAmplifiers.decisionRisk')}:</span>
                <span className="risk-value">
                  {lang === 'fr' ? cluster.decisionRiskFr : cluster.decisionRisk}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="visibility-metrics">
        <div className="metric-widget">
          <div className="metric-header">
            <span className="metric-name">{t('decisionAmplifiers.intentCoverageScore')}</span>
          </div>
          <div className="metric-gauge">
            <div 
              className="gauge-fill" 
              style={{ width: `${currentMetrics.IntentCoverage}%` }}
            />
            <span className="gauge-value">{currentMetrics.IntentCoverage}/100</span>
          </div>
          <p className="metric-note">{t('decisionAmplifiers.intentCoverageNote')}</p>
        </div>
      </div>

      <div className="visibility-insight">
        <p className="insight-text">
          {t('decisionAmplifiers.visibilityInsight')}
        </p>
      </div>
    </DataPanel>
  );
};

export default VisibilityLayer;
