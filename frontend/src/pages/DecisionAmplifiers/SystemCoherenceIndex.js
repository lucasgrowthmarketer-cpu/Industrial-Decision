import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../../components/DataPanel';
import Badge from '../../components/Badge';
import { 
  currentMetrics, 
  calculateSCI, 
  indexDefinitions,
  fragmentationRisks 
} from '../../data/decisionAmplifiersData';

const SystemCoherenceIndex = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  
  const sciValue = calculateSCI(currentMetrics);
  
  const getScoreColor = (score) => {
    if (score >= 75) return '#5fa05f';
    if (score >= 50) return '#d9a041';
    return '#c45454';
  };

  const metrics = [
    { key: 'DRS', value: currentMetrics.DRS, weight: indexDefinitions.DRS.weight },
    { key: 'URI', value: currentMetrics.URI, weight: indexDefinitions.URI.weight },
    { key: 'IntentCoverage', value: currentMetrics.IntentCoverage, weight: indexDefinitions.IntentCoverage.weight },
    { key: 'TrustSignal', value: currentMetrics.TrustSignal, weight: indexDefinitions.TrustSignal.weight },
    { key: 'ActivationReadiness', value: currentMetrics.ActivationReadiness, weight: indexDefinitions.ActivationReadiness.weight }
  ];

  return (
    <DataPanel 
      title={t('decisionAmplifiers.sciTitle')} 
      className="mb-6 sci-section"
    >
      <div className="sci-header">
        <p className="sci-description">
          {lang === 'fr' ? indexDefinitions.SCI.descriptionFr : indexDefinitions.SCI.description}
        </p>
      </div>

      <div className="sci-gauge-container" data-testid="sci-gauge">
        <div className="sci-gauge">
          <svg viewBox="0 0 200 120" className="gauge-svg">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#3a3a3a"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Value arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke={getScoreColor(sciValue)}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${(sciValue / 100) * 251.2} 251.2`}
            />
          </svg>
          <div className="sci-value">
            <span className="sci-number" style={{ color: getScoreColor(sciValue) }}>{sciValue}</span>
            <span className="sci-max">/100</span>
          </div>
        </div>
        <div className="sci-label">
          {lang === 'fr' ? indexDefinitions.SCI.nameFr : indexDefinitions.SCI.name}
        </div>
      </div>

      <div className="sci-components">
        <h4 className="section-subtitle">{t('decisionAmplifiers.sciComponents')}</h4>
        <div className="components-grid">
          {metrics.map((metric) => (
            <div key={metric.key} className="component-item">
              <div className="component-header">
                <span className="component-name">
                  {lang === 'fr' ? indexDefinitions[metric.key].nameFr : indexDefinitions[metric.key].name}
                </span>
                <Badge variant="default">{(metric.weight * 100)}%</Badge>
              </div>
              <div className="component-bar">
                <div 
                  className="component-fill" 
                  style={{ 
                    width: `${metric.value}%`,
                    backgroundColor: getScoreColor(metric.value)
                  }}
                />
              </div>
              <span className="component-value">{metric.value}/100</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sci-interpretation">
        <h4 className="section-subtitle">{t('decisionAmplifiers.interpretationTitle')}</h4>
        <div className="interpretation-grid">
          <div className="interpretation-item negative">
            <span className="interpretation-label">{t('decisionAmplifiers.lowSCI')}</span>
            <p className="interpretation-text">{t('decisionAmplifiers.lowSCIEffect')}</p>
          </div>
          <div className="interpretation-item positive">
            <span className="interpretation-label">{t('decisionAmplifiers.highSCI')}</span>
            <p className="interpretation-text">{t('decisionAmplifiers.highSCIEffect')}</p>
          </div>
        </div>
      </div>

      <div className="fragmentation-risks">
        <h4 className="section-subtitle">{t('decisionAmplifiers.fragmentationRisks')}</h4>
        <div className="risks-grid">
          {fragmentationRisks.map((risk, index) => (
            <div key={index} className="risk-item">
              <span className="risk-area">
                {lang === 'fr' ? risk.areaFr : risk.area}
              </span>
              <span className="risk-impact">
                {lang === 'fr' ? risk.impactFr : risk.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="sci-insight">
        <p className="insight-text">
          {t('decisionAmplifiers.sciInsight')}
        </p>
      </div>
    </DataPanel>
  );
};

export default SystemCoherenceIndex;
