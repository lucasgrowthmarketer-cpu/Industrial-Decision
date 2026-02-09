import React from 'react';
import DataPanel from '../components/DataPanel';
import { decisionScenarios } from '../data/scenarios';
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const DecisionScenarios = () => {
  return (
    <div className="page-container" data-testid="decision-scenarios-page">
      <div className="page-header">
        <h1 className="page-title">Decision Scenarios</h1>
        <p className="page-subtitle">Real situations industrial leaders face</p>
      </div>

      <DataPanel className="mb-6">
        <p className="intro-text">
          Industrial decision-makers operate in specific, often urgent contexts. Understanding these scenarios 
          is essential for architecting websites that function as decision support systems rather than marketing catalogs.
        </p>
      </DataPanel>

      {decisionScenarios.map((scenario) => (
        <DataPanel key={scenario.id} title={scenario.title} subtitle={scenario.context} className="mb-6">
          <div className="scenario-grid">
            <div className="scenario-section">
              <div className="scenario-section-header">
                <CheckCircle size={20} className="section-icon success" />
                <h3 className="scenario-section-title">What Leaders Need</h3>
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
                <h3 className="scenario-section-title">Typical Website Failures</h3>
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
                <h3 className="scenario-section-title">Decision Blockers</h3>
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

      <DataPanel title="Analytical Observation">
        <p className="reading-text">
          These scenarios share common threads: urgency, discretion, risk assessment, and trust requirements. 
          Decision-grade websites address these dimensions systematically, while catalog-oriented sites leave 
          leaders to extract information through supplementary channels—adding friction, time, and uncertainty to 
          already complex decision processes.
        </p>
      </DataPanel>
    </div>
  );
};

export default DecisionScenarios;
