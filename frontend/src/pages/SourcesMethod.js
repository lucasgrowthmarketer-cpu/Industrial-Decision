import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { Database, Target, Activity } from 'lucide-react';

const SourcesMethod = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container" data-testid="sources-method-page">
      <div className="page-header">
        <h1 className="page-title">{t('sourcesMethod.title')}</h1>
        <p className="page-subtitle">{t('sourcesMethod.subtitle')}</p>
      </div>

      <DataPanel title={t('sourcesMethod.dataSources')} className="mb-6">
        <div className="sources-grid">
          <div className="source-card">
            <div className="source-header">
              <Database size={24} className="source-icon" />
              <h3 className="source-title">{t('common.banqueDeFrance')}</h3>
            </div>
            <p className="source-description">{t('sourcesMethod.bdfDesc')}</p>
            <Badge variant="info">{t('sourcesMethod.judicialFocus')}</Badge>
          </div>

          <div className="source-card">
            <div className="source-header">
              <Database size={24} className="source-icon" />
              <h3 className="source-title">{t('common.altares')}</h3>
            </div>
            <p className="source-description">{t('sourcesMethod.altaresDesc')}</p>
            <Badge variant="info">{t('sourcesMethod.commercialScope')}</Badge>
          </div>
        </div>

        <div className="source-note">
          <Badge variant="warning">{t('sourcesMethod.methodologicalNote')}</Badge>
          <p className="note-text">{t('sourcesMethod.methodNoteText')}</p>
        </div>
      </DataPanel>

      <DataPanel title={t('sourcesMethod.auditMethodology')} className="mb-6">
        <div className="methodology-section">
          <div className="method-header">
            <Target size={24} className="method-icon" />
            <h3 className="method-title">{t('sourcesMethod.drsMethodology')}</h3>
          </div>

          <div className="method-content">
            <p className="method-description">{t('sourcesMethod.auditDesc')}</p>

            <div className="criteria-grid">
              <div className="criteria-item">
                <h4 className="criteria-title">{t('sourcesMethod.scenariosTitle')}</h4>
                <p className="criteria-text">{t('sourcesMethod.scenariosDesc')}</p>
              </div>

              <div className="criteria-item">
                <h4 className="criteria-title">{t('sourcesMethod.processVisibilityTitle')}</h4>
                <p className="criteria-text">{t('sourcesMethod.processVisibilityDesc')}</p>
              </div>

              <div className="criteria-item">
                <h4 className="criteria-title">{t('sourcesMethod.proofBlocksTitle')}</h4>
                <p className="criteria-text">{t('sourcesMethod.proofBlocksDesc')}</p>
              </div>

              <div className="criteria-item">
                <h4 className="criteria-title">{t('sourcesMethod.clearEntryTitle')}</h4>
                <p className="criteria-text">{t('sourcesMethod.clearEntryDesc')}</p>
              </div>
            </div>

            <div className="formula-box">
              <p className="formula-text">{t('decisionReadiness.drsFormula')}</p>
              <p className="formula-note">{t('sourcesMethod.formulaNote')}</p>
            </div>
          </div>
        </div>
      </DataPanel>

      <DataPanel title={t('sourcesMethod.compositeIndices')} className="mb-6">
        <div className="indices-grid">
          <div className="index-card">
            <div className="index-header">
              <Activity size={24} className="index-icon" />
              <h3 className="index-title">{t('sourcesMethod.ipiTitle')}</h3>
            </div>
            <p className="index-description">{t('sourcesMethod.ipiDesc')}</p>
            <div className="index-formula">
              <code>IPI = normalize(base_failures, 0-60) + clamp(YoY_variation * 2, 0-40)</code>
            </div>
          </div>

          <div className="index-card">
            <div className="index-header">
              <Activity size={24} className="index-icon" />
              <h3 className="index-title">{t('sourcesMethod.uriTitle')}</h3>
            </div>
            <p className="index-description">{t('sourcesMethod.uriDesc')}</p>
            <div className="index-formula">
              <code>URI = (complete_pathway_visitors / total_qualified_visitors) * 100</code>
            </div>
          </div>
        </div>
      </DataPanel>

      <DataPanel title={t('sourcesMethod.governanceRules')}>
        <div className="governance-rules">
          <h3 className="rules-title">{t('sourcesMethod.metricsProtocol')}</h3>
          
          <div className="rule-section">
            <h4 className="rule-subtitle">{t('sourcesMethod.explicitFigures')}</h4>
            <p className="rule-text">{t('sourcesMethod.explicitText')}</p>
          </div>

          <div className="rule-section">
            <h4 className="rule-subtitle">{t('sourcesMethod.indexedMetrics')}</h4>
            <p className="rule-text">{t('sourcesMethod.indexedText')}</p>
          </div>

          <div className="rule-box">
            <Badge variant="success">{t('sourcesMethod.operationalPrinciple')}</Badge>
            <p className="rule-note">{t('sourcesMethod.principleText')}</p>
          </div>
        </div>
      </DataPanel>

      <DataPanel title={t('sourcesMethod.interfaceClassification')}>
        <div className="classification-box">
          <Badge variant="warning">{t('sourcesMethod.semiConfidential')}</Badge>
          <p className="classification-text">{t('sourcesMethod.classificationText')}</p>
        </div>
      </DataPanel>
    </div>
  );
};

export default SourcesMethod;
