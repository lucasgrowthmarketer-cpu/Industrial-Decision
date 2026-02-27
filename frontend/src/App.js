import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from './components/Sidebar';
import OperatorPanel from './components/OperatorPanel';
import SystemStatus from './pages/SystemStatus';
import COMEXOverview from './pages/COMEXOverview';
import MarketPressure from './pages/MarketPressure';
import DecisionReadiness from './pages/DecisionReadiness';
import DecisionScenarios from './pages/DecisionScenarios';
import ProcessVisibility from './pages/ProcessVisibility';
import ProofBlocks from './pages/ProofBlocks';
import DecisionGates from './pages/DecisionGates';
import SourcesMethod from './pages/SourcesMethod';
import DecisionAmplifiers from './pages/DecisionAmplifiers';
import Team from './pages/Team';
import './App.css';

function AppContent() {
  const { t } = useTranslation();
  
  return (
    <div className="app-container" data-testid="app-container">
      <Sidebar />
      
      <main className="main-canvas">
        <Routes>
          <Route path="/" element={<SystemStatus />} />
          <Route path="/comex-overview" element={<COMEXOverview />} />
          <Route path="/market-pressure" element={<MarketPressure />} />
          <Route path="/decision-readiness" element={<DecisionReadiness />} />
          <Route path="/scenarios" element={<DecisionScenarios />} />
          <Route path="/process" element={<ProcessVisibility />} />
          <Route path="/proof" element={<ProofBlocks />} />
          <Route path="/gates" element={<DecisionGates />} />
          <Route path="/amplifiers" element={<DecisionAmplifiers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sources" element={<SourcesMethod />} />
        </Routes>
      </main>

      <OperatorPanel className="operator-fixed" />

      <footer className="app-footer">
        <div className="footer-operator">
          <div className="footer-operator-title">{t('footer.operatorTitle')}</div>
          <div className="footer-operator-name">{t('footer.operatorName')}</div>
          <div className="footer-operator-subtitle">{t('footer.operatorSubtitle')}</div>
          <div className="footer-operator-contact">
            <a href="mailto:lucas.growthmarketer@gmail.com">lucas.growthmarketer@gmail.com</a>
            <span className="footer-divider">|</span>
            <a href="https://wa.me/33611752581" target="_blank" rel="noopener noreferrer">WhatsApp: +33 6 11 75 25 81</a>
          </div>
        </div>
        <div className="footer-note">
          {t('footer.note')}
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
