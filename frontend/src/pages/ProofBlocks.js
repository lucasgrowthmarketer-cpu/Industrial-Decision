import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { proofBlocks, governanceMetrics } from '../data/proof_blocks';
import { TrendingUp, TrendingDown } from 'lucide-react';

const ProofBlocks = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container" data-testid="proof-blocks-page">
      <div className="page-header">
        <h1 className="page-title">{t('proofBlocks.title')}</h1>
        <p className="page-subtitle">{t('proofBlocks.subtitle')}</p>
      </div>

      <DataPanel title={t('proofBlocks.governanceRule')} className="mb-6">
        <div className="governance-grid">
          <div className="governance-section">
            <h3 className="governance-title">{t('proofBlocks.explicitFigures')}</h3>
            <p className="governance-desc">{t('proofBlocks.explicitDesc')}</p>
            <ul className="governance-list">
              {governanceMetrics.explicit.map((metric, index) => (
                <li key={index} className="governance-item">
                  <Badge variant="success">Explicit</Badge>
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div className="governance-section">
            <h3 className="governance-title">{t('proofBlocks.indexedMetrics')}</h3>
            <p className="governance-desc">{t('proofBlocks.indexedDesc')}</p>
            <ul className="governance-list">
              {governanceMetrics.indexed.map((metric, index) => (
                <li key={index} className="governance-item">
                  <Badge variant="warning">Index</Badge>
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DataPanel>

      <div className="proof-blocks-grid">
        {proofBlocks.map((proof) => (
          <DataPanel key={proof.id} className="mb-6 proof-block" data-testid="proof-block-card">
            <div className="proof-header">
              <div>
                <h3 className="proof-company">{proof.company}</h3>
                <p className="proof-meta">{proof.sector} • {proof.region} • {proof.timeframe}</p>
              </div>
            </div>

            <div className="proof-challenge">
              <h4 className="proof-section-title">{t('proofBlocks.challenge')}</h4>
              <p className="proof-text">{proof.challenge}</p>
            </div>

            <div className="proof-intervention">
              <h4 className="proof-section-title">{t('proofBlocks.intervention')}</h4>
              <Badge variant="info">{proof.intervention}</Badge>
            </div>

            <div className="proof-metrics">
              <h4 className="proof-section-title">{t('proofBlocks.operationalImpact')}</h4>
              <div className="metrics-grid">
                {proof.metrics.map((metric, index) => (
                  <div key={index} className="metric-card" data-testid="proof-metric">
                    <span className="metric-label">{metric.label}</span>
                    <div className="metric-value-group">
                      {metric.before && (
                        <span className="metric-before">{metric.before}</span>
                      )}
                      {metric.after && (
                        <>
                          <span className="metric-arrow">→</span>
                          <span className="metric-after">{metric.after}</span>
                        </>
                      )}
                      {metric.improvement && (
                        <span className={`metric-improvement ${metric.improvement.startsWith('-') && !metric.label.includes('Drop') && !metric.label.includes('Loss') ? 'positive' : metric.improvement.startsWith('+') ? 'positive' : ''}`}>
                          {metric.improvement.startsWith('-') && (metric.label.includes('Drop') || metric.label.includes('Loss') || metric.label.includes('Time') || metric.label.includes('Reduction')) ? (
                            <TrendingDown size={14} />
                          ) : metric.improvement.startsWith('+') ? (
                            <TrendingUp size={14} />
                          ) : null}
                          {metric.improvement}
                        </span>
                      )}
                      {metric.value && (
                        <span className="metric-index">
                          <Badge variant="warning">Index: {metric.value}</Badge>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DataPanel>
        ))}
      </div>

      <DataPanel title={t('proofBlocks.anonymizationNote')}>
        <p className="reading-text">{t('proofBlocks.anonymizationText')}</p>
      </DataPanel>

      <DataPanel title={t('proofBlocks.indexExplanation')} className="mt-6">
        <div className="index-explanation">
          <div className="index-item">
            <h4 className="index-title">{t('proofBlocks.uriTitle')}</h4>
            <p className="index-text">{t('proofBlocks.uriDesc')}</p>
          </div>
          <div className="index-item">
            <h4 className="index-title">{t('proofBlocks.drsTitle')}</h4>
            <p className="index-text">{t('proofBlocks.drsDesc')}</p>
          </div>
        </div>
      </DataPanel>
    </div>
  );
};

export default ProofBlocks;
