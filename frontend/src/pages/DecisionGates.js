import React, { useState } from 'react';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { decisionGates } from '../data/decision_gates';
import { Clock, Mail, CheckCircle } from 'lucide-react';

const DecisionGates = () => {
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
        <h1 className="page-title">Decision Gates</h1>
        <p className="page-subtitle">Context-appropriate entry points for industrial leaders</p>
      </div>

      <DataPanel className="mb-6">
        <p className="intro-text">
          Decision gates match entry points to leader readiness and context. No generic contact forms—each gate 
          is architected for specific decision scenarios with appropriate response protocols, timeframes, and information exchange formats.
        </p>
      </DataPanel>

      <div className="gates-grid">
        {decisionGates.map((gate) => (
          <div key={gate.id} className="gate-card" data-testid="gate-card">
            <div className="gate-card-header">
              <h3 className="gate-title">{gate.title}</h3>
              <Badge variant={gate.id === 'urgent' ? 'error' : gate.id === 'discreet' ? 'warning' : 'info'}>
                {gate.badge}
              </Badge>
            </div>

            <p className="gate-description">{gate.description}</p>

            <div className="gate-details">
              <div className="gate-detail-item">
                <Clock size={16} className="detail-icon" />
                <div>
                  <span className="detail-label">Response Timeframe</span>
                  <span className="detail-value">{gate.responseTimeframe}</span>
                </div>
              </div>

              <div className="gate-detail-item">
                <Mail size={16} className="detail-icon" />
                <div>
                  <span className="detail-label">Exchange Format</span>
                  <span className="detail-value">{gate.exchangeFormat}</span>
                </div>
              </div>
            </div>

            <div className="gate-section">
              <h4 className="gate-section-title">What Happens Next</h4>
              <ul className="gate-list">
                {gate.whatHappens.map((item, index) => (
                  <li key={index} className="gate-list-item">
                    <CheckCircle size={14} className="list-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="gate-section">
              <h4 className="gate-section-title">Ideal For</h4>
              <ul className="gate-list small">
                {gate.idealFor.map((item, index) => (
                  <li key={index} className="gate-list-item-small">{item}</li>
                ))}
              </ul>
            </div>

            <button
              className="gate-button"
              onClick={() => setSelectedGate(gate)}
              data-testid={`gate-enter-btn-${gate.id}`}
            >
              Enter via {gate.title} Gate
            </button>
          </div>
        ))}
      </div>

      {selectedGate && (
        <div className="gate-modal" data-testid="gate-modal">
          <div className="gate-modal-content">
            <div className="gate-modal-header">
              <h2 className="gate-modal-title">{selectedGate.title} Entry</h2>
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
                  <Badge variant="info">Required Information</Badge>
                  <ul className="form-info-list">
                    {selectedGate.requiredInfo.map((info, index) => (
                      <li key={index}>{info}</li>
                    ))}
                  </ul>
                </div>

                <div className="form-group">
                  <label className="form-label">Name *</label>
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
                  <label className="form-label">Company</label>
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
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    data-testid="gate-form-phone"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Context / Timeline *</label>
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
                  <label className="form-label">Additional Information</label>
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
                    Expected response: {selectedGate.responseTimeframe}
                  </p>
                  <button type="submit" className="form-submit" data-testid="gate-form-submit">
                    Submit {selectedGate.title} Request
                  </button>
                </div>
              </form>
            ) : (
              <div className="form-success" data-testid="gate-form-success">
                <CheckCircle size={48} className="success-icon" />
                <h3 className="success-title">Request Received</h3>
                <p className="success-text">
                  Your {selectedGate.title.toLowerCase()} request has been received and assigned. 
                  You will receive initial contact within {selectedGate.responseTimeframe}.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <DataPanel title="No Generic Contact Forms">
        <p className="reading-text">
          Traditional websites use universal contact forms that fail to match leader context. Decision gates, by contrast, 
          are architected for specific scenarios with appropriate information requirements, response protocols, and 
          confidentiality handling. This reduces friction, increases trust, and enables leaders to engage at their readiness level.
        </p>
      </DataPanel>
    </div>
  );
};

export default DecisionGates;
