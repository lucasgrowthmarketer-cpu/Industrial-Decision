import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { Clock, Mail, CheckCircle, Shield, Compass, AlertTriangle, Anchor, Send } from 'lucide-react';

const decisionGates = [
  {
    id: 'discreet',
    icon: Shield,
    title: 'Discreet Gate',
    titleFr: 'Porte Discrète',
    subtitle: 'Confidential strategic assessment',
    subtitleFr: 'Évaluation stratégique confidentielle',
    description: 'For leaders evaluating sensitive industrial decisions.',
    descriptionFr: 'Pour les dirigeants évaluant des décisions industrielles sensibles.',
    responseTime: '48–72 hours',
    responseTimeFr: '48–72 heures',
    exchangeFormat: 'Secure email or private call',
    exchangeFormatFr: 'Email sécurisé ou appel privé',
    bestFor: [
      'Evaluating a potential machine tool investment',
      'Confidential strategic review',
      'Preliminary board-level positioning'
    ],
    bestForFr: [
      'Évaluation d\'un investissement potentiel en machine-outil',
      'Revue stratégique confidentielle',
      'Positionnement préliminaire au niveau du conseil'
    ],
    whatYouReceive: [
      'Initial structured assessment',
      'Confidential handling protocol',
      'No obligation or engagement requirement'
    ],
    whatYouReceiveFr: [
      'Évaluation structurée initiale',
      'Protocole de traitement confidentiel',
      'Aucune obligation ni exigence d\'engagement'
    ],
    variant: 'warning'
  },
  {
    id: 'exploratory',
    icon: Compass,
    title: 'Exploratory Gate',
    titleFr: 'Porte Exploratoire',
    subtitle: 'Structured feasibility & options review',
    subtitleFr: 'Revue structurée de faisabilité et options',
    description: 'For leaders needing clarity before internal commitment.',
    descriptionFr: 'Pour les dirigeants ayant besoin de clarté avant engagement interne.',
    responseTime: '3–5 business days',
    responseTimeFr: '3–5 jours ouvrés',
    exchangeFormat: 'Video session or structured documentation',
    exchangeFormatFr: 'Session vidéo ou documentation structurée',
    bestFor: [
      'Comparing industrial strategies',
      'Assessing workshop evolution scenarios',
      'Building internal decision cases'
    ],
    bestForFr: [
      'Comparaison de stratégies industrielles',
      'Évaluation de scénarios d\'évolution d\'atelier',
      'Construction de dossiers de décision internes'
    ],
    whatYouReceive: [
      'Structured options overview',
      'Process & timeline clarity',
      'Scenario modeling support'
    ],
    whatYouReceiveFr: [
      'Vue d\'ensemble structurée des options',
      'Clarté sur le processus et les délais',
      'Support de modélisation de scénarios'
    ],
    variant: 'info'
  },
  {
    id: 'urgent',
    icon: AlertTriangle,
    title: 'Urgent Gate',
    titleFr: 'Porte Urgente',
    subtitle: 'Time-critical industrial response',
    subtitleFr: 'Réponse industrielle critique en temps',
    description: 'For situations where delay increases risk.',
    descriptionFr: 'Pour les situations où le retard augmente le risque.',
    responseTime: '12–24h initial contact',
    responseTimeFr: 'Contact initial sous 12–24h',
    exchangeFormat: 'Direct call + rapid documentation',
    exchangeFormatFr: 'Appel direct + documentation rapide',
    bestFor: [
      'Critical operational disruption',
      'Investment deadlines',
      'Financial or restructuring pressure'
    ],
    bestForFr: [
      'Perturbation opérationnelle critique',
      'Échéances d\'investissement',
      'Pression financière ou de restructuration'
    ],
    whatYouReceive: [
      'Immediate situation triage',
      'Rapid assessment pathway',
      'Accelerated execution framework'
    ],
    whatYouReceiveFr: [
      'Triage immédiat de la situation',
      'Parcours d\'évaluation rapide',
      'Cadre d\'exécution accéléré'
    ],
    variant: 'error'
  },
  {
    id: 'postcrisis',
    icon: Anchor,
    title: 'Post-Crisis Gate',
    titleFr: 'Porte Post-Crise',
    subtitle: 'Stabilization & structured recovery',
    subtitleFr: 'Stabilisation et récupération structurée',
    description: 'For industrial environments requiring restructuring clarity.',
    descriptionFr: 'Pour les environnements industriels nécessitant une clarté de restructuration.',
    responseTime: '2–3 business days',
    responseTimeFr: '2–3 jours ouvrés',
    exchangeFormat: 'Strategic session + structured documentation',
    exchangeFormatFr: 'Session stratégique + documentation structurée',
    bestFor: [
      'Post-restructuring asset review',
      'Operational recovery planning',
      'Portfolio rationalization'
    ],
    bestForFr: [
      'Revue des actifs post-restructuration',
      'Planification de la récupération opérationnelle',
      'Rationalisation du portefeuille'
    ],
    whatYouReceive: [
      'Comprehensive environment assessment',
      'Multi-scenario planning',
      'Phased stabilization roadmap'
    ],
    whatYouReceiveFr: [
      'Évaluation complète de l\'environnement',
      'Planification multi-scénarios',
      'Feuille de route de stabilisation par phases'
    ],
    variant: 'success'
  }
];

// ── Initial form state factory ────────────────────────────────────────────────
const emptyForm = () => ({
  name: '',
  company: '',
  email: '',
  context: '',
  preferred_contact: 'email',
  website: '',        // honeypot — hidden, must stay empty
});

// ── GateCard ──────────────────────────────────────────────────────────────────
const GateCard = ({ gate, lang, onEnter }) => {
  const Icon = gate.icon;
  const title = lang === 'fr' ? gate.titleFr : gate.title;
  const subtitle = lang === 'fr' ? gate.subtitleFr : gate.subtitle;
  const description = lang === 'fr' ? gate.descriptionFr : gate.description;
  const responseTime = lang === 'fr' ? gate.responseTimeFr : gate.responseTime;
  const exchangeFormat = lang === 'fr' ? gate.exchangeFormatFr : gate.exchangeFormat;
  const bestFor = lang === 'fr' ? gate.bestForFr : gate.bestFor;
  const whatYouReceive = lang === 'fr' ? gate.whatYouReceiveFr : gate.whatYouReceive;

  return (
    <div className="gate-card" data-testid={`gate-card-${gate.id}`}>
      <div className="gate-card-header">
        <div className="gate-icon-wrapper">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="gate-title">{title}</h3>
          <Badge variant={gate.variant}>{subtitle}</Badge>
        </div>
      </div>

      <p className="gate-description">{description}</p>

      <div className="gate-details">
        <div className="gate-detail-item">
          <Clock size={16} className="detail-icon" />
          <div>
            <span className="detail-label">{lang === 'fr' ? 'Délai de réponse' : 'Response timeframe'}</span>
            <span className="detail-value">{responseTime}</span>
          </div>
        </div>

        <div className="gate-detail-item">
          <Mail size={16} className="detail-icon" />
          <div>
            <span className="detail-label">{lang === 'fr' ? 'Format d\'échange' : 'Exchange format'}</span>
            <span className="detail-value">{exchangeFormat}</span>
          </div>
        </div>
      </div>

      <div className="gate-section">
        <h4 className="gate-section-title">{lang === 'fr' ? 'Idéal pour' : 'Best suited for'}</h4>
        <ul className="gate-list">
          {bestFor.map((item, index) => (
            <li key={index} className="gate-list-item">
              <CheckCircle size={14} className="list-check" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="gate-section">
        <h4 className="gate-section-title">{lang === 'fr' ? 'Ce que vous recevez' : 'What you receive'}</h4>
        <ul className="gate-list small">
          {whatYouReceive.map((item, index) => (
            <li key={index} className="gate-list-item-small">{item}</li>
          ))}
        </ul>
      </div>

      <button
        className="gate-button"
        onClick={() => onEnter(gate)}
        data-testid={`gate-enter-btn-${gate.id}`}
      >
        → {lang === 'fr' ? `Entrer via ${gate.titleFr}` : `Enter via ${gate.title}`}
      </button>
    </div>
  );
};

// ── DecisionGates page ────────────────────────────────────────────────────────
const DecisionGates = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [selectedGate, setSelectedGate] = useState(null);
  const [formData, setFormData] = useState(emptyForm());
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Single unified submit handler.
   * @param {Event}       e         - form submit event
   * @param {string|null} gateId    - gate id for modal forms; null for the introduction form
   */
  const handleSubmit = async (e, gateId = null) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';

      const payload = {
        ...formData,
        // gate_type: explicit gate id, or 'introduction' for the bottom form
        gate_type: gateId || 'introduction',
      };

      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // 429 = rate-limited
      if (response.status === 429) {
        setError(
          lang === 'fr'
            ? 'Trop de tentatives. Veuillez patienter avant de réessayer.'
            : 'Too many attempts. Please wait before trying again.'
        );
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setSubmitted(true);

      // Auto-reset after 4s: close modal (if open) and clear form
      setTimeout(() => {
        setSubmitted(false);
        setSelectedGate(null);
        setFormData(emptyForm());
      }, 4000);

    } catch (err) {
      setError(
        lang === 'fr'
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'An error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container" data-testid="decision-gates-page">
      <div className="page-header">
        <h1 className="page-title">{t('decisionGates.title')}</h1>
        <p className="page-subtitle">{t('decisionGates.subtitle')}</p>
      </div>

      <DataPanel className="mb-6">
        <div className="gates-intro">
          <p className="intro-text" style={{ marginBottom: 'var(--spacing-lg)' }}>
            {lang === 'fr'
              ? 'Les décisions industrielles ne se prennent pas dans les mêmes conditions.'
              : 'Industrial decisions do not happen in the same conditions.'}
          </p>
          <div className="intro-points">
            <p className="intro-point">{lang === 'fr' ? 'Certaines nécessitent de la discrétion.' : 'Some require discretion.'}</p>
            <p className="intro-point">{lang === 'fr' ? 'Certaines nécessitent de l\'exploration.' : 'Some require exploration.'}</p>
            <p className="intro-point">{lang === 'fr' ? 'Certaines nécessitent de la rapidité.' : 'Some require speed.'}</p>
            <p className="intro-point">{lang === 'fr' ? 'Certaines nécessitent de la stabilisation.' : 'Some require stabilization.'}</p>
          </div>
          <p className="info-text" style={{ marginTop: 'var(--spacing-lg)' }}>
            {lang === 'fr'
              ? 'Nous n\'utilisons pas de formulaires de contact génériques. Chaque point d\'entrée est aligné avec votre contexte décisionnel.'
              : 'We do not use generic contact forms. Each entry point is aligned with your decision context.'}
          </p>
        </div>
      </DataPanel>

      <div className="gates-grid">
        {decisionGates.map((gate) => (
          <GateCard
            key={gate.id}
            gate={gate}
            lang={lang}
            onEnter={setSelectedGate}
          />
        ))}
      </div>

      {/* ── Gate Modal ──────────────────────────────────────────────────────── */}
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
              <form
                onSubmit={(e) => handleSubmit(e, selectedGate.id)}
                className="gate-form"
                data-testid="gate-entry-form"
              >
                {error && (
                  <div className="form-error">
                    <Badge variant="error">{error}</Badge>
                  </div>
                )}

                {/* Honeypot — hidden from real users, traps bots */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="gate-website">Website</label>
                  <input
                    id="gate-website"
                    type="text"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
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
                  <label className="form-label">{lang === 'fr' ? 'Contexte décisionnel (1 phrase)' : 'Decision context (1 phrase)'} *</label>
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
                  <label className="form-label">{lang === 'fr' ? 'Méthode de contact préférée' : 'Preferred contact method'}</label>
                  <select
                    className="filter-select"
                    value={formData.preferred_contact}
                    onChange={(e) => setFormData({ ...formData, preferred_contact: e.target.value })}
                    data-testid="gate-form-contact-method"
                  >
                    <option value="email">Email</option>
                    <option value="phone">{lang === 'fr' ? 'Téléphone' : 'Phone'}</option>
                    <option value="video">{lang === 'fr' ? 'Vidéo' : 'Video call'}</option>
                  </select>
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className="form-submit"
                    disabled={loading}
                    data-testid="gate-form-submit"
                  >
                    {loading
                      ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...')
                      : (lang === 'fr' ? 'Soumettre la demande' : 'Submit Request')}
                  </button>
                </div>
              </form>
            ) : (
              <div className="form-success" data-testid="gate-form-success">
                <CheckCircle size={48} className="success-icon" />
                <h3 className="success-title">{t('decisionGates.requestReceived')}</h3>
                <p className="success-text">
                  {t('decisionGates.requestReceivedText')} {lang === 'fr' ? selectedGate.responseTimeFr : selectedGate.responseTime}.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Introduction Form (bottom) ──────────────────────────────────────── */}
      <div className="contact-form-section" data-testid="introduction-form-section">
        <div className="contact-form-header">
          <h2 className="contact-form-title">
            {lang === 'fr'
              ? 'Vous ne savez pas quelle porte correspond à votre situation ?'
              : 'Not sure which gate fits your situation?'}
          </h2>
          <p className="contact-form-subtitle">
            {lang === 'fr'
              ? 'Demandez une introduction structurée directe.'
              : 'Request a direct structured introduction.'}
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={(e) => handleSubmit(e, null)}
            className="contact-form"
            data-testid="introduction-form"
          >
            {error && (
              <div className="form-group full-width">
                <Badge variant="error">{error}</Badge>
              </div>
            )}

            {/* Honeypot — hidden from real users, traps bots */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="intro-website">Website</label>
              <input
                id="intro-website"
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{lang === 'fr' ? 'Nom' : 'Name'} *</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                data-testid="intro-form-name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{lang === 'fr' ? 'Entreprise' : 'Company'}</label>
              <input
                type="text"
                className="form-input"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                data-testid="intro-form-company"
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
                data-testid="intro-form-email"
              />
            </div>

            <div className="form-group">
              <label className="form-label">{lang === 'fr' ? 'Méthode de contact préférée' : 'Preferred contact method'}</label>
              <select
                className="filter-select"
                value={formData.preferred_contact}
                onChange={(e) => setFormData({ ...formData, preferred_contact: e.target.value })}
                data-testid="intro-form-contact-method"
              >
                <option value="email">Email</option>
                <option value="phone">{lang === 'fr' ? 'Téléphone' : 'Phone'}</option>
                <option value="video">{lang === 'fr' ? 'Vidéo' : 'Video call'}</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label className="form-label">{lang === 'fr' ? 'Contexte décisionnel (1 phrase)' : 'Decision context (1 phrase)'} *</label>
              <textarea
                className="form-textarea"
                value={formData.context}
                onChange={(e) => setFormData({ ...formData, context: e.target.value })}
                required
                rows="2"
                placeholder={lang === 'fr'
                  ? 'Décrivez brièvement votre situation...'
                  : 'Briefly describe your situation...'}
                data-testid="intro-form-context"
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={loading}
              data-testid="intro-form-submit"
            >
              <Send size={16} style={{ marginRight: '8px' }} />
              {loading
                ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...')
                : (lang === 'fr' ? 'Demander une Introduction' : 'Request Introduction')}
            </button>
          </form>
        ) : (
          <div className="form-success" data-testid="intro-form-success">
            <CheckCircle size={48} className="success-icon" />
            <h3 className="success-title">{lang === 'fr' ? 'Demande Reçue' : 'Request Received'}</h3>
            <p className="success-text">
              {lang === 'fr'
                ? 'Votre demande a été reçue. Nous vous contacterons sous peu.'
                : 'Your request has been received. We will contact you shortly.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionGates;
