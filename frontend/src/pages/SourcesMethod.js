import React from 'react';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { Database, Target, Activity } from 'lucide-react';

const SourcesMethod = () => {
  return (
    <div className="page-container" data-testid="sources-method-page">
      <div className="page-header">
        <h1 className="page-title">Sources & Method</h1>
        <p className="page-subtitle">Methodology, data sources, and operational notes</p>
      </div>

      <DataPanel title="Data Sources" className="mb-6">
        <div className="sources-grid">
          <div className="source-card">
            <div className="source-header">
              <Database size={24} className="source-icon" />
              <h3 className="source-title">Banque de France</h3>
            </div>
            <p className="source-description">
              Official judicial procedure tracking (Redressement Judiciaire / Liquidation Judiciaire). 
              Focuses on formal court-supervised failures with strict reporting criteria. Conservative methodology 
              emphasizing legal procedures over commercial events.
            </p>
            <Badge variant="info">Judicial Focus</Badge>
          </div>

          <div className="source-card">
            <div className="source-header">
              <Database size={24} className="source-icon" />
              <h3 className="source-title">Altares</h3>
            </div>
            <p className="source-description">
              Comprehensive commercial database tracking all business failures including voluntary liquidations, 
              dissolutions, and judicial procedures. Broader capture methodology including pre-judicial events. 
              More inclusive than Banque de France.
            </p>
            <Badge variant="info">Commercial Scope</Badge>
          </div>
        </div>

        <div className="source-note">
          <Badge variant="warning">Methodological Note</Badge>
          <p className="note-text">
            Variance between Banque de France and Altares reflects methodological differences, not data quality. 
            Both sources provide valid context for different analytical purposes. This interface presents both for transparency.
          </p>
        </div>
      </DataPanel>

      <DataPanel title="Audit Methodology" className="mb-6">
        <div className="methodology-section">
          <div className="method-header">
            <Target size={24} className="method-icon" />
            <h3 className="method-title">Decision Readiness Score (DRS)</h3>
          </div>

          <div className="method-content">
            <p className="method-description">
              Operational audit of 30 OEM and integrator websites serving the French industrial market. 
              Manual evaluation conducted Q4 2024 - Q1 2025 based on publicly accessible pages.
            </p>

            <div className="criteria-grid">
              <div className="criteria-item">
                <h4 className="criteria-title">Scenarios (0-1)</h4>
                <p className="criteria-text">
                  Presence of industry/application pages enabling leader identification with content. 
                  Partial credit for generic use cases lacking industry specificity.
                </p>
              </div>

              <div className="criteria-item">
                <h4 className="criteria-title">Process Visibility (0-1)</h4>
                <p className="criteria-text">
                  Explanation of operational pathways (project, installation, support, training). 
                  Partial credit for incomplete or vague process information.
                </p>
              </div>

              <div className="criteria-item">
                <h4 className="criteria-title">Proof Blocks (0-1)</h4>
                <p className="criteria-text">
                  Testimonials, case studies, or contextualized references. Partial credit for generic endorsements 
                  lacking operational specifics.
                </p>
              </div>

              <div className="criteria-item">
                <h4 className="criteria-title">Clear Entry Points (0-1)</h4>
                <p className="criteria-text">
                  Contextualized contact options (quote, demo, support, emergency). Partial credit for generic forms 
                  or unclear routing.
                </p>
              </div>
            </div>

            <div className="formula-box">
              <p className="formula-text">DRS = Scenarios + Process + Proof + Entry (0-4)</p>
              <p className="formula-note">Scores ≥3.5 indicate decision-grade architecture</p>
            </div>
          </div>
        </div>
      </DataPanel>

      <DataPanel title="Composite Indices" className="mb-6">
        <div className="indices-grid">
          <div className="index-card">
            <div className="index-header">
              <Activity size={24} className="index-icon" />
              <h3 className="index-title">Industrial Pressure Index (IPI)</h3>
            </div>
            <p className="index-description">
              Composite score (0-100) normalizing regional industrial failures, YoY variation, and industrial 
              concentration. Designed to avoid raw number misinterpretation by contextualizing pressure through 
              multiple dimensions. Not predictive—contextual.
            </p>
            <div className="index-formula">
              <code>IPI = normalize(base_failures, 0-60) + clamp(YoY_variation * 2, 0-40)</code>
            </div>
          </div>

          <div className="index-card">
            <div className="index-header">
              <Activity size={24} className="index-icon" />
              <h3 className="index-title">Uncertainty Reduction Index (URI)</h3>
            </div>
            <p className="index-description">
              Measures percentage of visitors completing full decision pathway: Scenario → Process → Proof → Gate. 
              Higher URI indicates more effective pre-contact uncertainty reduction. Typical range: 45-75 for 
              industrial decision contexts.
            </p>
            <div className="index-formula">
              <code>URI = (complete_pathway_visitors / total_qualified_visitors) * 100</code>
            </div>
          </div>
        </div>
      </DataPanel>

      <DataPanel title="Governance & Display Rules">
        <div className="governance-rules">
          <h3 className="rules-title">Metrics Display Protocol</h3>
          
          <div className="rule-section">
            <h4 className="rule-subtitle">Explicit Figures</h4>
            <p className="rule-text">
              Used exclusively for robust, repeatable, committee-discussable KPIs: response times, conversion rates, 
              request volumes, booking rates, processing durations. Requires measurement confidence and stakeholder consensus.
            </p>
          </div>

          <div className="rule-section">
            <h4 className="rule-subtitle">Indexed Metrics</h4>
            <p className="rule-text">
              Applied when data is sensitive, context-dependent, or lacks universal interpretation standards: 
              URI, DRS, IPI, basket complexity, market share proxies. Preserves analytical value while protecting 
              confidential or nuanced information.
            </p>
          </div>

          <div className="rule-box">
            <Badge variant="success">Operational Principle</Badge>
            <p className="rule-note">
              Transparency where precision adds value; indexing where context dependency or confidentiality requires abstraction. 
              Balance credibility with discretion.
            </p>
          </div>
        </div>
      </DataPanel>

      <DataPanel title="Interface Classification">
        <div className="classification-box">
          <Badge variant="warning">Semi-Confidential Tool</Badge>
          <p className="classification-text">
            This interface is a decision intelligence tool shared selectively with industrial leaders, strategic advisors, 
            and operational decision-makers. It is not a public marketing website. Access may be restricted or withdrawn 
            at operator discretion. Information contained herein represents analysis, not legal/financial advice.
          </p>
        </div>
      </DataPanel>
    </div>
  );
};

export default SourcesMethod;
