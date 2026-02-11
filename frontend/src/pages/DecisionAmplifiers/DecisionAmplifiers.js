import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../../components/DataPanel';
import Badge from '../../components/Badge';
import ArchitectureMap from './ArchitectureMap';
import VisibilityLayer from './VisibilityLayer';
import TrustLayer from './TrustLayer';
import ActivationLayer from './ActivationLayer';
import SystemCoherenceIndex from './SystemCoherenceIndex';
import { governancePrinciples } from '../../data/decisionAmplifiersData';

const DecisionAmplifiers = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="page-container" data-testid="decision-amplifiers-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          {t('decisionAmplifiers.title')}<br />
          <span className="hero-emphasis">{t('decisionAmplifiers.subtitle')}</span>
        </h1>
        
        <p className="hero-subtitle">
          {t('decisionAmplifiers.heroText1')}<br />
          {t('decisionAmplifiers.heroText2')}
        </p>
      </div>

      {/* System Tags */}
      <DataPanel title={t('decisionAmplifiers.systemArchitecture')} className="mb-6">
        <div className="system-tags amplifier-tags">
          <div className="system-tag">
            <span className="tag-label">{t('decisionAmplifiers.baseLayer')}</span>
            <span className="tag-value">{t('decisionAmplifiers.ownedInfrastructure')}</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">{t('decisionAmplifiers.amplifiers')}</span>
            <span className="tag-value">{t('decisionAmplifiers.amplifiersValue')}</span>
          </div>
          <div className="system-tag">
            <span className="tag-label">{t('decisionAmplifiers.output')}</span>
            <span className="tag-value">{t('decisionAmplifiers.decisionVelocity')}</span>
          </div>
        </div>
      </DataPanel>

      {/* Architecture Map */}
      <ArchitectureMap />

      {/* Visibility Layer */}
      <VisibilityLayer />

      {/* Trust Layer */}
      <TrustLayer />

      {/* Activation Layer */}
      <ActivationLayer />

      {/* System Coherence Index */}
      <SystemCoherenceIndex />

      {/* Governance Principles */}
      <DataPanel title={t('decisionAmplifiers.governanceTitle')} className="mt-6">
        <div className="governance-grid">
          {governancePrinciples.map((principle, index) => (
            <div key={index} className="governance-item">
              <div className="governance-rule">
                <Badge variant="default">{index + 1}</Badge>
                <span className="governance-rule-text">
                  {lang === 'fr' ? principle.ruleFr : principle.rule}
                </span>
              </div>
              <p className="governance-description">
                {lang === 'fr' ? principle.descriptionFr : principle.description}
              </p>
            </div>
          ))}
        </div>
      </DataPanel>

      {/* Final Statement */}
      <DataPanel className="mt-6 conclusion-panel">
        <div className="conclusion-content">
          <p className="conclusion-text">
            {t('decisionAmplifiers.conclusionText')}
          </p>
          <div className="conclusion-cta">
            <Badge variant="warning">{t('decisionAmplifiers.ctaLabel')}</Badge>
            <span className="cta-text">{t('decisionAmplifiers.ctaText')}</span>
          </div>
        </div>
      </DataPanel>
    </div>
  );
};

export default DecisionAmplifiers;
