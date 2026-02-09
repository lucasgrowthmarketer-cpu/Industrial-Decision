import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import { decisionScenarios } from '../data/scenarios';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const DecisionScenarios = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container" data-testid="decision-scenarios-page">
      <div className="page-header">
        <h1 className="page-title">{t('decisionScenarios.title')}</h1>
        <p className="page-subtitle">{t('decisionScenarios.subtitle')}</p>
      </div>

      <DataPanel className="mb-6">
        <p className="intro-text">{t('decisionScenarios.intro')}</p>
      </DataPanel>

      {decisionScenarios.map((scenario) => (
        <DataPanel key={scenario.id} title={scenario.title} subtitle={scenario.context} className="mb-6">
          <div className="scenario-grid">
            <div className="scenario-section">
              <div className="scenario-section-header">
                <CheckCircle size={20} className="section-icon success" />
                <h3 className="scenario-section-title">{t('decisionScenarios.whatLeadersNeed')}</h3>
              </div>
              <ul className="scenario-list">
                {scenario.leaderNeeds.map((need, index) => (
                  <li key={index} className="scenario-list-item">{need}</li>
                ))}
              </ul>
            </div>

            <div className="scenario-section">
              <div className="scenario-section-header">
                <XCircle size={20} className="section-icon error" />
                <h3 className="scenario-section-title">{t('decisionScenarios.typicalFailures')}</h3>
              </div>
              <ul className="scenario-list">
                {scenario.typicalFailures.map((failure, index) => (
                  <li key={index} className="scenario-list-item">{failure}</li>
                ))}
              </ul>
            </div>

            <div className="scenario-section">
              <div className="scenario-section-header">
                <AlertCircle size={20} className="section-icon warning" />
                <h3 className="scenario-section-title">{t('decisionScenarios.decisionBlockers')}</h3>
              </div>
              <ul className="scenario-list">
                {scenario.decisionBlockers.map((blocker, index) => (
                  <li key={index} className="scenario-list-item">{blocker}</li>
                ))}
              </ul>
            </div>
          </div>
        </DataPanel>
      ))}

      <DataPanel title={t('decisionScenarios.analyticalObservation')}>
        <p className="reading-text">{t('decisionScenarios.observationText')}</p>
      </DataPanel>
    </div>
  );
};

export default DecisionScenarios;
