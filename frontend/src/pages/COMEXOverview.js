import React from 'react';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { CheckCircle, Database, Globe } from 'lucide-react';

const COMEXOverview = () => {
  const modules = [
    { name: 'System Status', purpose: 'Executive framing of decision context' },
    { name: 'Market Pressure', purpose: 'Industrial stress indicators (judicial proxy)' },
    { name: 'Decision Readiness Benchmark', purpose: 'Audit of industrial websites (DRS)' },
    { name: 'Decision Scenarios', purpose: 'Real operational situations leaders face' },
    { name: 'Process Visibility', purpose: 'End-to-end operational clarity' },
    { name: 'Proof Blocks', purpose: 'Anonymized operational signals' },
    { name: 'Decision Gates', purpose: 'Contextual, low-friction contact entry points' },
    { name: 'Sources & Method', purpose: 'Transparency and governance' }
  ];

  const datasets = [
    {
      category: 'Regional industrial failures (France)',
      details: [
        'Years: 2021–2025',
        'Source logic: Banque de France / Altares (proxy usage explained)',
        '13 regions, full coverage'
      ]
    },
    {
      category: 'OEM / integrator audit dataset',
      details: [
        '30 industrial companies',
        'Manual audit',
        'Decision Readiness Score (DRS)'
      ]
    },
    {
      category: 'Operational case studies',
      details: [
        'Fully anonymized',
        'Explicit KPIs only when robust',
        'Aggregated indices when sensitive'
      ]
    },
    {
      category: 'Process maps & decision flows',
      details: [
        'Based on real industrial operations',
        'Not theoretical models'
      ]
    }
  ];

  const readyItems = [
    'The system is fully navigable end-to-end',
    'All decision modules are operational',
    'Data is embedded, stable, and reproducible',
    'The interface can be used in executive meetings',
    'Can serve as discussion support with partners',
    'Functions as credibility asset in strategic outreach'
  ];

  const nextOptions = [
    'Extend benchmarks to additional OEMs or countries',
    'Add side-by-side comparison between industrial actors',
    'Integrate additional process scenarios',
    'Add internal decision scoring or prioritization tools',
    'Deploy localized language versions'
  ];

  return (
    <div className="page-container" data-testid="comex-overview-page">
      <div className="page-header">
        <h1 className="page-title">COMEX Overview</h1>
        <p className="page-subtitle">Decision Intelligence Summary</p>
      </div>

      <DataPanel className="mb-6">
        <div className="comex-intro">
          <p className="comex-question">
            What does this system prove, concretely, and what is ready to be used now?
          </p>
        </div>
      </DataPanel>

      <DataPanel title="What this system demonstrates" className="mb-6">
        <div className="proof-blocks-comex">
          <div className="proof-block-comex">
            <p className="proof-statement">
              Industrial websites fail not because of traffic, but because they do not reduce uncertainty.
            </p>
          </div>

          <div className="proof-block-comex">
            <p className="proof-statement">
              Decision-makers do not browse — they assess risk, timing, and credibility.
            </p>
          </div>

          <div className="proof-block-comex">
            <p className="proof-statement-title">A decision-grade website must:</p>
            <ul className="proof-list">
              <li>Clarify situations</li>
              <li>Expose process</li>
              <li>Provide operational proof</li>
              <li>Offer clear decision entry points</li>
            </ul>
          </div>

          <div className="proof-block-comex">
            <p className="proof-statement-title">When these elements are present:</p>
            <ul className="proof-list">
              <li>Decision latency decreases</li>
              <li>Lead quality increases</li>
              <li>Human interactions start at a higher level of maturity</li>
            </ul>
          </div>
        </div>

        <div className="executive-takeaway">
          <div className="takeaway-bar"></div>
          <p className="takeaway-text">
            This interface proves that a website can function as a decision support system — not a communication tool.
          </p>
        </div>
      </DataPanel>

      <DataPanel title="Modules delivered in the current system" className="mb-6">
        <div className="modules-grid">
          {modules.map((module, index) => (
            <div key={index} className="module-item-comex" data-testid="module-item">
              <div className="module-check">
                <CheckCircle size={20} className="check-icon" />
              </div>
              <div className="module-info">
                <h3 className="module-name-comex">{module.name}</h3>
                <p className="module-purpose">{module.purpose}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="system-note">
          <Badge variant="info">System Architecture</Badge>
          <p className="note-text-comex">
            All modules are connected and designed to work as a single decision system.
          </p>
        </div>
      </DataPanel>

      <DataPanel title="Datasets embedded in the system" className="mb-6">
        <div className="datasets-grid">
          {datasets.map((dataset, index) => (
            <div key={index} className="dataset-card" data-testid="dataset-card">
              <div className="dataset-header">
                <Database size={20} className="dataset-icon" />
                <h3 className="dataset-category">{dataset.category}</h3>
              </div>
              <ul className="dataset-details">
                {dataset.details.map((detail, idx) => (
                  <li key={idx} className="dataset-detail">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="dataset-statement">
          <Badge variant="success">No External Dependency</Badge>
          <p className="statement-text">
            All datasets are embedded locally. No external APIs or live dependencies.
          </p>
        </div>
      </DataPanel>

      <DataPanel title="What is ready today" className="mb-6">
        <div className="ready-grid">
          {readyItems.map((item, index) => (
            <div key={index} className="ready-item" data-testid="ready-item">
              <CheckCircle size={16} className="ready-check" />
              <span className="ready-text">{item}</span>
            </div>
          ))}
        </div>

        <div className="status-badges">
          <div className="status-badge-comex">
            <span className="status-label">Status</span>
            <span className="status-value">Operational MVP — Decision-grade</span>
          </div>
          <div className="status-badge-comex">
            <span className="status-label">Scope</span>
            <span className="status-value">France / industrial context</span>
          </div>
          <div className="status-badge-comex">
            <span className="status-label">Usage</span>
            <span className="status-value">Selective / semi-confidential</span>
          </div>
        </div>
      </DataPanel>

      <DataPanel title="Optional next steps (non-mandatory)" className="mb-6">
        <div className="options-list">
          {nextOptions.map((option, index) => (
            <div key={index} className="option-item" data-testid="option-item">
              <div className="option-bullet"></div>
              <span className="option-text">{option}</span>
            </div>
          ))}
        </div>

        <div className="options-framing">
          <p className="framing-text">
            These extensions are optional and do not affect the current system's validity.
          </p>
        </div>
      </DataPanel>

      <DataPanel title="Language & localization" className="mb-6">
        <div className="language-info">
          <div className="language-item">
            <Globe size={20} className="language-icon" />
            <div className="language-details">
              <h3 className="language-title">Current configuration</h3>
              <ul className="language-list">
                <li>Interface designed for English-first</li>
                <li>Architecture supports French translation</li>
                <li>Text content structured for clean i18n (no hard-coded strings)</li>
                <li>Future toggle: EN / FR</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="language-recommendation">
          <Badge variant="warning">Recommendation</Badge>
          <p className="recommendation-text">
            French version recommended for domestic COMEX and operational teams.
          </p>
        </div>
      </DataPanel>
    </div>
  );
};

export default COMEXOverview;
