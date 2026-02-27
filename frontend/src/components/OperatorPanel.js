import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Linkedin, User } from 'lucide-react';

const OperatorPanel = ({ className }) => {
  const { t } = useTranslation();
  const panelClass = className ? `operator-panel ${className}` : 'operator-panel';
  
  return (
    <div className={panelClass}>
      <div className="operator-header">
        <div className="status-indicator"></div>
        <span className="operator-label">{t('operator.label')}</span>
      </div>
      
      {/* Lucas Ansel */}
      <div className="operator-content">
        <h3 className="operator-name">Lucas Ansel</h3>
        <p className="operator-title">{t('operator.title')}</p>
        
        <div className="operator-contact">
          <a href="mailto:lucas.growthmarketer@gmail.com" className="contact-item" data-testid="operator-email-link">
            <Mail size={16} />
            <span>lucas.growthmarketer@gmail.com</span>
          </a>
          <a href="https://wa.me/33611752581" className="contact-item" data-testid="operator-whatsapp-link" target="_blank" rel="noopener noreferrer">
            <Phone size={16} />
            <span>+33 6 11 75 25 81</span>
          </a>
          <a href="https://www.linkedin.com/in/lucas-ansel-growth-hacker/" className="contact-item" data-testid="operator-linkedin-link" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
            <span>{t('operator.linkedin')}</span>
          </a>
        </div>
      </div>

      {/* Separator */}
      <div className="operator-separator"></div>

      {/* Ayoub Bouzalmad */}
      <div className="operator-content">
        <h3 className="operator-name">Ayoub Bouzalmad</h3>
        <p className="operator-title">Technical Implementation & Data Systems</p>
        
        <div className="operator-contact">
          <a href="mailto:ayoub.bouzalmad@industrialdecision.com" className="contact-item" data-testid="operator2-email-link">
            <Mail size={16} />
            <span>ayoub.bouzalmad@industrialdecision.com</span>
          </a>
          <a href="https://www.linkedin.com/in/ayoub-bouzalmad/" className="contact-item" data-testid="operator2-linkedin-link" target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
            <span>{t('operator.linkedin')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OperatorPanel;
