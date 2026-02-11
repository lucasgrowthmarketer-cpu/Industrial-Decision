import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../../components/DataPanel';
import { layerDefinitions } from '../../data/decisionAmplifiersData';

const ArchitectureMap = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedLayer, setSelectedLayer] = useState(null);

  return (
    <DataPanel title={t('decisionAmplifiers.architectureMapTitle')} className="mb-6">
      <p className="architecture-intro">
        {t('decisionAmplifiers.architectureIntro')}
      </p>
      
      <div className="architecture-map" data-testid="architecture-map">
        {layerDefinitions.map((layer, index) => (
          <div key={layer.id}>
            <div 
              className={`architecture-layer ${selectedLayer === layer.id ? 'selected' : ''}`}
              onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
              style={{ '--layer-color': layer.color }}
              data-testid={`layer-${layer.id}`}
            >
              <div className="layer-indicator" style={{ backgroundColor: layer.color }} />
              <div className="layer-content">
                <div className="layer-header">
                  <h3 className="layer-name">
                    {lang === 'fr' ? layer.nameFr : layer.name}
                  </h3>
                  <span className="layer-level">L{index + 1}</span>
                </div>
                <p className="layer-description">
                  {lang === 'fr' ? layer.descriptionFr : layer.description}
                </p>
                {selectedLayer === layer.id && (
                  <div className="layer-metrics">
                    <span className="metrics-label">{t('decisionAmplifiers.keyMetrics')}:</span>
                    <div className="metrics-tags">
                      {(lang === 'fr' ? layer.metricsFr : layer.metrics).map((metric, i) => (
                        <span key={i} className="metric-tag">{metric}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="layer-expand">
                {selectedLayer === layer.id ? '−' : '+'}
              </div>
            </div>
            {index < layerDefinitions.length - 1 && (
              <div className="layer-connector">
                <svg width="24" height="32" viewBox="0 0 24 32">
                  <line x1="12" y1="0" x2="12" y2="24" stroke="#4a4a4a" strokeWidth="2" strokeDasharray="4,4" />
                  <polygon points="6,24 18,24 12,32" fill="#4a4a4a" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="architecture-note">
        <span className="note-label">{t('decisionAmplifiers.noteLabel')}:</span>
        <span className="note-text">{t('decisionAmplifiers.architectureNote')}</span>
      </div>
    </DataPanel>
  );
};

export default ArchitectureMap;
