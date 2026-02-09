import React from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { CheckCircle, Database, Globe } from 'lucide-react';

const COMEXOverview = () => {
  const { t } = useTranslation();

  const modules = [
    { name: t('comexOverview.moduleSystemStatus'), purpose: t('comexOverview.moduleSystemStatusDesc') },
    { name: t('comexOverview.moduleMarketPressure'), purpose: t('comexOverview.moduleMarketPressureDesc') },
    { name: t('comexOverview.moduleDecisionReadiness'), purpose: t('comexOverview.moduleDecisionReadinessDesc') },
    { name: t('comexOverview.moduleDecisionScenarios'), purpose: t('comexOverview.moduleDecisionScenariosDesc') },
    { name: t('comexOverview.moduleProcessVisibility'), purpose: t('comexOverview.moduleProcessVisibilityDesc') },
    { name: t('comexOverview.moduleProofBlocks'), purpose: t('comexOverview.moduleProofBlocksDesc') },
    { name: t('comexOverview.moduleDecisionGates'), purpose: t('comexOverview.moduleDecisionGatesDesc') },
    { name: t('comexOverview.moduleSourcesMethod'), purpose: t('comexOverview.moduleSourcesMethodDesc') }
  ];

  const datasets = [
    {
      category: t('comexOverview.dataset1Title'),
      details: [
        t('comexOverview.dataset1Detail1'),
        t('comexOverview.dataset1Detail2'),
        t('comexOverview.dataset1Detail3')
      ]
    },
    {
      category: t('comexOverview.dataset2Title'),
      details: [
        t('comexOverview.dataset2Detail1'),
        t('comexOverview.dataset2Detail2'),
        t('comexOverview.dataset2Detail3')
      ]
    },
    {
      category: t('comexOverview.dataset3Title'),
      details: [
        t('comexOverview.dataset3Detail1'),
        t('comexOverview.dataset3Detail2'),
        t('comexOverview.dataset3Detail3')
      ]
    },
    {
      category: t('comexOverview.dataset4Title'),
      details: [
        t('comexOverview.dataset4Detail1'),
        t('comexOverview.dataset4Detail2')
      ]
    }
  ];

  const readyItems = [
    t('comexOverview.ready1'),
    t('comexOverview.ready2'),
    t('comexOverview.ready3'),
    t('comexOverview.ready4'),
    t('comexOverview.ready5'),
    t('comexOverview.ready6')
  ];

  const nextOptions = [
    t('comexOverview.option1'),
    t('comexOverview.option2'),
    t('comexOverview.option3'),
    t('comexOverview.option4'),
    t('comexOverview.option5')
  ];

  return (
    <div className="page-container" data-testid="comex-overview-page">
      <div className="page-header">
        <h1 className="page-title">{t('comexOverview.title')}</h1>
        <p className="page-subtitle">{t('comexOverview.subtitle')}</p>
      </div>

      <DataPanel className="mb-6">
        <div className="comex-intro">
          <p className="comex-question">
            {t('comexOverview.question')}
          </p>
        </div>
      </DataPanel>

      <DataPanel title={t('comexOverview.whatDemonstrates')} className="mb-6">
        <div className="proof-blocks-comex">
          <div className="proof-block-comex">
            <p className="proof-statement">{t('comexOverview.proof1')}</p>
          </div>

          <div className="proof-block-comex">
            <p className="proof-statement">{t('comexOverview.proof2')}</p>
          </div>

          <div className="proof-block-comex">
            <p className="proof-statement-title">{t('comexOverview.proofTitle1')}</p>
            <ul className="proof-list">
              <li>{t('comexOverview.proofItem1')}</li>
              <li>{t('comexOverview.proofItem2')}</li>
              <li>{t('comexOverview.proofItem3')}</li>
              <li>{t('comexOverview.proofItem4')}</li>
            </ul>
          </div>

          <div className="proof-block-comex">
            <p className="proof-statement-title">{t('comexOverview.proofTitle2')}</p>
            <ul className="proof-list">
              <li>{t('comexOverview.proofItem5')}</li>
              <li>{t('comexOverview.proofItem6')}</li>
              <li>{t('comexOverview.proofItem7')}</li>
            </ul>
          </div>
        </div>

        <div className="executive-takeaway">
          <div className="takeaway-bar"></div>
          <p className="takeaway-text">{t('comexOverview.takeaway')}</p>
        </div>
      </DataPanel>

      <DataPanel title={t('comexOverview.modulesDelivered')} className="mb-6">
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
          <Badge variant="info">{t('comexOverview.systemArchitecture')}</Badge>
          <p className="note-text-comex">{t('comexOverview.allModulesConnected')}</p>
        </div>
      </DataPanel>

      <DataPanel title={t('comexOverview.datasetsEmbedded')} className="mb-6">
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
          <Badge variant="success">{t('comexOverview.noExternalDependency')}</Badge>
          <p className="statement-text">{t('comexOverview.allDatasetsLocal')}</p>
        </div>
      </DataPanel>

      <DataPanel title={t('comexOverview.whatIsReady')} className="mb-6">
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
            <span className="status-label">{t('comexOverview.statusLabel')}</span>
            <span className="status-value">{t('comexOverview.statusValue')}</span>
          </div>
          <div className="status-badge-comex">
            <span className="status-label">{t('comexOverview.scopeLabel')}</span>
            <span className="status-value">{t('comexOverview.scopeValue')}</span>
          </div>
          <div className="status-badge-comex">
            <span className="status-label">{t('comexOverview.usageLabel')}</span>
            <span className="status-value">{t('comexOverview.usageValue')}</span>
          </div>
        </div>
      </DataPanel>

      <DataPanel title={t('comexOverview.optionalNextSteps')} className="mb-6">
        <div className="options-list">
          {nextOptions.map((option, index) => (
            <div key={index} className="option-item" data-testid="option-item">
              <div className="option-bullet"></div>
              <span className="option-text">{option}</span>
            </div>
          ))}
        </div>

        <div className="options-framing">
          <p className="framing-text">{t('comexOverview.optionsFraming')}</p>
        </div>
      </DataPanel>

      <DataPanel title={t('comexOverview.languageLocalization')} className="mb-6">
        <div className="language-info">
          <div className="language-item">
            <Globe size={20} className="language-icon" />
            <div className="language-details">
              <h3 className="language-title">{t('comexOverview.currentConfiguration')}</h3>
              <ul className="language-list">
                <li>{t('comexOverview.langConfig1')}</li>
                <li>{t('comexOverview.langConfig2')}</li>
                <li>{t('comexOverview.langConfig3')}</li>
                <li>{t('comexOverview.langConfig4')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="language-recommendation">
          <Badge variant="warning">{t('comexOverview.recommendation')}</Badge>
          <p className="recommendation-text">{t('comexOverview.recommendationText')}</p>
        </div>
      </DataPanel>
    </div>
  );
};

export default COMEXOverview;
