import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { processFlows } from '../data/process_flows';
import { ChevronRight } from 'lucide-react';

const ProcessVisibility = () => {
  const { t } = useTranslation();
  const [selectedProcess, setSelectedProcess] = useState(processFlows[0]);

  return (
    <div className="page-container" data-testid="process-visibility-page">
      <div className="page-header">
        <h1 className="page-title">{t('processVisibility.title')}</h1>
        <p className="page-subtitle">{t('processVisibility.subtitle')}</p>
      </div>

      <DataPanel className="mb-6">
        <div className="process-selector">
          {processFlows.map((process) => (
            <button
              key={process.id}
              className={`process-tab ${selectedProcess.id === process.id ? 'active' : ''}`}
              onClick={() => setSelectedProcess(process)}
              data-testid={`process-tab-${process.id}`}
            >
              {process.title}
            </button>
          ))}
        </div>
      </DataPanel>

      <DataPanel 
        title={selectedProcess.title} 
        subtitle={selectedProcess.subtitle}
        className="mb-6"
      >
        <p className="process-description">{selectedProcess.description}</p>
      </DataPanel>

      <div className="process-flow">
        {selectedProcess.stages.map((stage, index) => (
          <div key={stage.id} className="process-stage" data-testid="process-stage">
            <div className="stage-header">
              <div className="stage-number">{index + 1}</div>
              <h3 className="stage-name">{stage.name}</h3>
              <Badge variant="info">{stage.timeframe}</Badge>
            </div>

            <div className="stage-content">
              <div className="stage-section">
                <h4 className="stage-section-title">{t('processVisibility.inputs')}</h4>
                <ul className="stage-list">
                  {stage.inputs.map((input, idx) => (
                    <li key={idx} className="stage-list-item">
                      <ChevronRight size={14} className="list-icon" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stage-section">
                <h4 className="stage-section-title">{t('processVisibility.outputs')}</h4>
                <ul className="stage-list">
                  {stage.outputs.map((output, idx) => (
                    <li key={idx} className="stage-list-item">
                      <ChevronRight size={14} className="list-icon" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stage-section">
                <h4 className="stage-section-title">{t('processVisibility.commitments')}</h4>
                <ul className="stage-list">
                  {stage.commitments.map((commitment, idx) => (
                    <li key={idx} className="stage-list-item commitment">
                      <ChevronRight size={14} className="list-icon" />
                      {commitment}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="stage-section">
                <h4 className="stage-section-title">{t('processVisibility.risks')}</h4>
                <ul className="stage-list">
                  {stage.risks.map((risk, idx) => (
                    <li key={idx} className="stage-list-item risk">
                      <ChevronRight size={14} className="list-icon" />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {index < selectedProcess.stages.length - 1 && (
              <div className="stage-connector"></div>
            )}
          </div>
        ))}
      </div>

      <DataPanel title={t('processVisibility.decisionGatesApplicability')} className="mt-6">
        <div className="gates-applicability">
          {selectedProcess.decisionGates.map((gate) => (
            <div key={gate.gate} className="gate-item">
              <Badge variant="success">{gate.gate}</Badge>
              <span className="gate-stages">
                {t('processVisibility.applicableTo')}: {gate.applicableStages.map(s => s.replace('stage', 'Stage ')).join(', ')}
              </span>
            </div>
          ))}
        </div>
      </DataPanel>

      <DataPanel title={t('processVisibility.processTransparency')}>
        <p className="reading-text">{t('processVisibility.transparencyText')}</p>
      </DataPanel>
    </div>
  );
};

export default ProcessVisibility;
