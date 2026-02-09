import React from 'react';
import { Mail, Phone } from 'lucide-react';

const OperatorPanel = ({ className = "" }) => {
  return (
    <div className={`operator-panel ${className}`}>
      <div className="operator-header">
        <div className="status-indicator"></div>
        <span className="operator-label">Operator / Analyst</span>
      </div>
      
      <div className="operator-content">
        <h3 className="operator-name">Lucas Ansel</h3>
        <p className="operator-title">Digital Strategy & Industrial Web Architecture</p>
        
        <div className="operator-contact">
          <a href="mailto:lucas.growthmarketer@gmail.com" className="contact-item" data-testid="operator-email-link">
            <Mail size={16} />
            <span>lucas.growthmarketer@gmail.com</span>
          </a>
          <a href="https://wa.me/33611752581" className="contact-item" data-testid="operator-whatsapp-link" target="_blank" rel="noopener noreferrer">
            <Phone size={16} />
            <span>WhatsApp: +33 6 11 75 25 81</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OperatorPanel;
