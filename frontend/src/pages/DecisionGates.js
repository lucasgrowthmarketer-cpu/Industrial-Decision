import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { decisionGates } from '../data/decision_gates';
import { Clock, Mail, CheckCircle } from 'lucide-react';

const DecisionGates = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedGate, setSelectedGate] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    context: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedGate(null);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        context: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="page-container" data-testid="decision-gates-page">
      <div className="page-header">
        <h1 className="page-title">{t('decisionGates.title')}</h1>
        <p className="page-subtitle">{t('decisionGates.subtitle')}</p>
      </div>

      <DataPanel className="mb-6">
        <p className="intro-text">{t('decisionGates.intro')}</p>
      </DataPanel>

      <div className="gates-grid">
        {decisionGates.map((gate) => (
          <div key={gate.id} className="gate-card" data-testid="gate-card">
            <div className="gate-card-header">
              <h3 className="gate-title">{lang === 'fr' ? gate.titleFr : gate.title}</h3>
              <Badge variant={gate.id === 'urgent' ? 'error' : gate.id === 'discreet' ? 'warning' : 'info'}>
                {lang === 'fr' ? gate.badgeFr : gate.badge}
              </Badge>
            </div>

            <p className="gate-description">{lang === 'fr' ? gate.descriptionFr : gate.description}</p>

            <div className="gate-details">
              <div className="gate-detail-item">
                <Clock size={16} className="detail-icon" />
                <div>
                  <span className="detail-label">{t('decisionGates.responseTimeframe')}</span>
                  <span className="detail-value">{lang === 'fr' ? gate.responseTimeframeFr : gate.responseTimeframe}</span>
                </div>
              </div>

              <div className="gate-detail-item">
                <Mail size={16} className="detail-icon" />
                <div>
                  <span className="detail-label">{t('decisionGates.exchangeFormat')}</span>
                  <span className="detail-value">{lang === 'fr' ? gate.exchangeFormatFr : gate.exchangeFormat}</span>
                </div>
              </div>
            </div>

            <div className="gate-section">
              <h4 className="gate-section-title">{t('decisionGates.whatHappensNext')}</h4>
              <ul className="gate-list">
                {(lang === 'fr' ? gate.whatHappensFr : gate.whatHappens).map((item, index) => (
                  <li key={index} className="gate-list-item">
                    <CheckCircle size={14} className="list-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gate-section">
              <h4 className="gate-section-title">{t('decisionGates.idealFor')}</h4>
              <ul className="gate-list small">
                {(lang === 'fr' ? gate.idealForFr : gate.idealFor).map((item, index) => (
                  <li key={index} className="gate-list-item-small">{item}</li>
                ))}
              </ul>
            </div>

            <button
              className="gate-button"
              onClick={() => setSelectedGate(gate)}
              data-testid={`gate-enter-btn-${gate.id}`}
            >
              {t('decisionGates.enterVia')} {lang === 'fr' ? gate.titleFr : gate.title} {t('decisionGates.gate')}
            </button>
          </div>
        ))}
      </div>

      {selectedGate && (
        <div className="gate-modal" data-testid="gate-modal">
          <div className="gate-modal-content">
            <div className="gate-modal-header">
              <h2 className="gate-modal-title">
                {lang === 'fr' ? `Entrée ${selectedGate.titleFr}` : `${selectedGate.title} Entry`}
              </h2>
              <button 
                className="gate-modal-close" 
                onClick={() => setSelectedGate(null)}
                data-testid="gate-modal-close-btn"
              >
                ×
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="gate-form" data-testid="gate-entry-form">
                <div className="form-info">
                  <Badge variant="info">{t('decisionGates.requiredInfo')}</Badge>
                  <ul className="form-info-list">
                    {(lang === 'fr' ? selectedGate.requiredInfoFr : selectedGate.requiredInfo).map((info, index) => (
                      <li key={index}>{info}</li>
                    ))}
                  </ul>
                </div>

                <div className="form-group">
                  <label className="form-label">{lang === 'fr' ? 'Nom' : 'Name'} *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="gate-form-name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{lang === 'fr' ? 'Entreprise' : 'Company'}</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    data-testid="gate-form-company"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    data-testid="gate-form-email"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{lang === 'fr' ? 'Téléphone' : 'Phone'}</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="gate-form-phone"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('decisionGates.contextTimeline')} *</label>
                  <textarea
                    className="form-textarea"
                    value={formData.context}
                    onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                    required
                    rows="3"
                    data-testid="gate-form-context"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('decisionGates.additionalInfo')}</label>
                  <textarea
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="4"
                    data-testid="gate-form-message"
                  />
                </div>

                <div className="form-footer">
                  <p className="form-note">
                    {t('decisionGates.expectedResponse')}: {lang === 'fr' ? selectedGate.responseTimeframeFr : selectedGate.responseTimeframe}
                  </p>
                  <button type="submit" className="form-submit" data-testid="gate-form-submit">
                    {t('decisionGates.submitRequest')} {lang === 'fr' ? selectedGate.titleFr : selectedGate.title}
                  </button>
                </div>
              </form>
            ) : (
              <div className="form-success" data-testid="gate-form-success">
                <CheckCircle size={48} className="success-icon" />
                <h3 className="success-title">{t('decisionGates.requestReceived')}</h3>
                <p className="success-text">
                  {t('decisionGates.requestReceivedText')} {lang === 'fr' ? selectedGate.responseTimeframeFr : selectedGate.responseTimeframe}.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <DataPanel title={t('decisionGates.noGenericForms')}>
        <p className="reading-text">{t('decisionGates.noGenericFormsText')}</p>
      </DataPanel>
    </div>
  );
};

export default DecisionGates;
