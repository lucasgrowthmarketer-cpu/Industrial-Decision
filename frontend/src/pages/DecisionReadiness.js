import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { oemAuditData } from '../data/oem_audit';
import { Filter } from 'lucide-react';

const DecisionReadiness = () => {
  const { t } = useTranslation();
  const [typeFilter, setTypeFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('all');
  const [drsFilter, setDrsFilter] = useState('all');

  const filteredData = useMemo(() => {
    return oemAuditData.filter(company => {
      if (typeFilter !== 'all' && company.type !== typeFilter) return false;
      if (countryFilter !== 'all' && company.country !== countryFilter) return false;
      if (drsFilter !== 'all' && company.drs !== parseInt(drsFilter)) return false;
      return true;
    });
  }, [typeFilter, countryFilter, drsFilter]);

  const countries = [...new Set(oemAuditData.map(c => c.country))].sort();
  const drsScores = [2, 3, 4];

  const averageDRS = (filteredData.reduce((sum, c) => sum + c.drs, 0) / filteredData.length).toFixed(2);

  const getStatusBadge = (value) => {
    if (value === 'Yes') return <Badge variant="success">{t('decisionReadiness.yes')}</Badge>;
    if (value === 'Partial') return <Badge variant="warning">{t('decisionReadiness.partial')}</Badge>;
    return <Badge variant="error">{t('decisionReadiness.no')}</Badge>;
  };

  const getDRSColor = (score) => {
    if (score === 4) return 'drs-excellent';
    if (score === 3) return 'drs-good';
    return 'drs-needs-improvement';
  };

  return (
    <div className="page-container" data-testid="decision-readiness-page">
      <div className="page-header">
        <h1 className="page-title">{t('decisionReadiness.title')}</h1>
        <p className="page-subtitle">{t('decisionReadiness.subtitle')}</p>
      </div>

      <DataPanel title={t('decisionReadiness.drsTitle')} className="mb-6">
        <div className="drs-formula">
          <p className="formula-text">
            <strong>{t('decisionReadiness.drsFormula')}</strong>
          </p>
          <p className="formula-desc">
            {t('decisionReadiness.drsDesc')}
          </p>
        </div>
        <div className="drs-stats">
          <div className="stat-item">
            <span className="stat-label">{t('decisionReadiness.averageDRS')}</span>
            <span className="stat-value">{averageDRS}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">{t('decisionReadiness.companiesAudited')}</span>
            <span className="stat-value">{filteredData.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">{t('decisionReadiness.scoreDecisionGrade')}</span>
            <span className="stat-value">{filteredData.filter(c => c.drs === 4).length}</span>
          </div>
        </div>
      </DataPanel>

      <DataPanel title={t('decisionReadiness.auditResults')} className="mb-6">
        <div className="filters-bar" data-testid="audit-filters">
          <div className="filter-group">
            <Filter size={16} />
            <label className="filter-label">{t('decisionReadiness.type')}:</label>
            <select 
              value={typeFilter} 
              onChange={(e) => setTypeFilter(e.target.value)}
              className="filter-select"
              data-testid="type-filter"
            >
              <option value="all">{t('decisionReadiness.all')}</option>
              <option value="OEM">{t('decisionReadiness.oem')}</option>
              <option value="Integrator">{t('decisionReadiness.integrator')}</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">{t('decisionReadiness.country')}:</label>
            <select 
              value={countryFilter} 
              onChange={(e) => setCountryFilter(e.target.value)}
              className="filter-select"
              data-testid="country-filter"
            >
              <option value="all">{t('decisionReadiness.all')}</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">DRS:</label>
            <select 
              value={drsFilter} 
              onChange={(e) => setDrsFilter(e.target.value)}
              className="filter-select"
              data-testid="drs-filter"
            >
              <option value="all">{t('decisionReadiness.all')}</option>
              {drsScores.map(score => (
                <option key={score} value={score}>{score}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="audit-table-container">
          <table className="audit-table" data-testid="audit-results-table">
            <thead>
              <tr>
                <th>{t('decisionReadiness.company')}</th>
                <th>{t('decisionReadiness.type')}</th>
                <th>{t('decisionReadiness.country')}</th>
                <th>{t('decisionReadiness.scenarios')}</th>
                <th>{t('decisionReadiness.process')}</th>
                <th>{t('decisionReadiness.proof')}</th>
                <th>{t('decisionReadiness.entry')}</th>
                <th>DRS</th>
                <th>{t('decisionReadiness.evidence')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((company) => (
                <tr key={company.id} data-testid="audit-table-row">
                  <td className="company-name">{company.company}</td>
                  <td><Badge variant={company.type === 'OEM' ? 'default' : 'info'}>{company.type}</Badge></td>
                  <td>{company.country}</td>
                  <td>{getStatusBadge(company.scenarios)}</td>
                  <td>{getStatusBadge(company.process)}</td>
                  <td>{getStatusBadge(company.proof)}</td>
                  <td>{getStatusBadge(company.entry)}</td>
                  <td>
                    <span className={`drs-score ${getDRSColor(company.drs)}`}>
                      {company.drs}
                    </span>
                  </td>
                  <td className="evidence-cell">{company.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DataPanel>

      <DataPanel title={t('decisionReadiness.comexReadingTitle')} className="mb-6">
        <div className="reading-grid">
          <div className="reading-item">
            <h3 className="reading-title">{t('decisionReadiness.pattern1')}</h3>
            <p className="reading-text">{t('decisionReadiness.pattern1Desc')}</p>
          </div>
          <div className="reading-item">
            <h3 className="reading-title">{t('decisionReadiness.pattern2')}</h3>
            <p className="reading-text">{t('decisionReadiness.pattern2Desc')}</p>
          </div>
          <div className="reading-item">
            <h3 className="reading-title">{t('decisionReadiness.pattern3')}</h3>
            <p className="reading-text">{t('decisionReadiness.pattern3Desc')}</p>
          </div>
        </div>
      </DataPanel>

      <DataPanel title={t('decisionReadiness.leaderPatterns')}>
        <ul className="pattern-list">
          <li className="pattern-item">
            <strong>{t('decisionReadiness.leaderPattern1Title')}</strong> {t('decisionReadiness.leaderPattern1Desc')}
          </li>
          <li className="pattern-item">
            <strong>{t('decisionReadiness.leaderPattern2Title')}</strong> {t('decisionReadiness.leaderPattern2Desc')}
          </li>
          <li className="pattern-item">
            <strong>{t('decisionReadiness.leaderPattern3Title')}</strong> {t('decisionReadiness.leaderPattern3Desc')}
          </li>
          <li className="pattern-item">
            <strong>{t('decisionReadiness.leaderPattern4Title')}</strong> {t('decisionReadiness.leaderPattern4Desc')}
          </li>
        </ul>
      </DataPanel>
    </div>
  );
};

export default DecisionReadiness;
