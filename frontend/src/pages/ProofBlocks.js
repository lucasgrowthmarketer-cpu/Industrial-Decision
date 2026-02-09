import React from 'react';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { proofBlocks, governanceMetrics } from '../data/proof_blocks';
import { TrendingUp, TrendingDown } from 'lucide-react';

const ProofBlocks = () => {
  return (
    <div className="page-container" data-testid="proof-blocks-page">
      <div className="page-header">
        <h1 className="page-title">Proof Blocks</h1>
        <p className="page-subtitle">Trust is built through operational signals</p>
      </div>

      <DataPanel title="Governance Rule: Metrics Display" className="mb-6">
        <div className="governance-grid">
          <div className="governance-section">
            <h3 className="governance-title">Explicit Figures</h3>
            <p className="governance-desc">Used only for robust, repeatable, discussable KPIs</p>
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
            <h3 className="governance-title">Indexed Metrics</h3>
            <p className="governance-desc">Used when data is sensitive or context-dependent</p>
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
              <h4 className="proof-section-title">Challenge</h4>
              <p className="proof-text">{proof.challenge}</p>
            </div>

            <div className="proof-intervention">
              <h4 className="proof-section-title">Intervention</h4>
              <Badge variant="info">{proof.intervention}</Badge>
            </div>

            <div className="proof-metrics">
              <h4 className="proof-section-title">Operational Impact</h4>
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

      <DataPanel title="Anonymization & Confidentiality Note">
        <p className="reading-text">
          Company names and specific details are anonymized to protect client confidentiality. Metrics represent 
          actual operational outcomes but are presented in ranges or indices where precision would compromise discretion. 
          This approach balances proof credibility with professional confidentiality requirements common in industrial contexts.
        </p>
      </DataPanel>

      <DataPanel title="URI & DRS Index Explanation" className="mt-6">
        <div className="index-explanation">
          <div className="index-item">
            <h4 className="index-title">URI (Uncertainty Reduction Index)</h4>
            <p className="index-text">
              Measures the percentage of visitors completing a full engagement pathway: 
              Scenario → Process → Proof → Decision Gate. Higher URI indicates more effective uncertainty reduction 
              before first contact, enabling confident decision initiation.
            </p>
          </div>
          <div className="index-item">
            <h4 className="index-title">DRS (Decision Readiness Score)</h4>
            <p className="index-text">
              Composite score (0-4) evaluating website architecture across four decision-support dimensions: 
              Scenarios, Process Visibility, Proof Blocks, and Clear Entry Points. Scores ≥3.5 indicate decision-grade architecture.
            </p>
          </div>
        </div>
      </DataPanel>
    </div>
  );
};

export default ProofBlocks;
