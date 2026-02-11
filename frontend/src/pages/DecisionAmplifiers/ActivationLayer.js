import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../../components/DataPanel';
import Badge from '../../components/Badge';
import { activationLogic, currentMetrics } from '../../data/decisionAmplifiersData';
import { ArrowRight } from 'lucide-react';

const ActivationLayer = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const logicSteps = [
    { key: 'inboundIntent', icon: '1' },
    { key: 'amplification', icon: '2' },
    { key: 'outboundTrigger', icon: '3' },
    { key: 'decisionAcceleration', icon: '4' }
  ];

  return (
    <DataPanel 
      title={t('decisionAmplifiers.activationLayerTitle')} 
      className="mb-6 layer-section activation-section"
    >
      <div className="layer-explanation">
        <div className="explanation-header">
          <Badge variant="warning">L4</Badge>
          <h4 className="explanation-title">{t('decisionAmplifiers.activationPrinciple')}</h4>
        </div>
        <p className="explanation-text">
          {t('decisionAmplifiers.activationExplanation')}
        </p>
      </div>

      <div className="activation-logic-section">
        <h4 className="section-subtitle">{t('decisionAmplifiers.activationLogicTitle')}</h4>
        <div className="logic-chain">
          {logicSteps.map((step, index) => (
            <React.Fragment key={step.key}>
              <div className="logic-step">
                <div className="step-number">{step.icon}</div>
                <div className="step-content">
                  <span className="step-label">
                    {t(`decisionAmplifiers.${step.key}Label`)}
                  </span>
                  <span className="step-value">
                    {lang === 'fr' ? activationLogic[`${step.key}Fr`] : activationLogic[step.key]}
                  </span>
                </div>
              </div>
              {index < logicSteps.length - 1 && (
                <div className="logic-arrow">
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="activation-metrics">
        <div className="metric-widget">
          <div className="metric-header">
            <span className="metric-name">{t('decisionAmplifiers.activationReadiness')}</span>
          </div>
          <div className="metric-gauge activation-gauge">
            <div 
              className="gauge-fill" 
              style={{ width: `${currentMetrics.ActivationReadiness}%` }}
            />
            <span className="gauge-value">{currentMetrics.ActivationReadiness}/100</span>
          </div>
          <p className="metric-note">{t('decisionAmplifiers.activationNote')}</p>
        </div>
      </div>

      <div className="activation-insight">
        <p className="insight-text">
          {t('decisionAmplifiers.activationInsight')}
        </p>
      </div>
    </DataPanel>
  );
};

export default ActivationLayer;
