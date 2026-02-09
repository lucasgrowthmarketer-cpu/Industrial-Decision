import React, { useState, useMemo } from 'react';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { oemAuditData } from '../data/oem_audit';
import { Filter } from 'lucide-react';

const DecisionReadiness = () => {
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
    if (value === 'Yes') return <Badge variant="success">Yes</Badge>;
    if (value === 'Partial') return <Badge variant="warning">Partial</Badge>;
    return <Badge variant="error">No</Badge>;
  };

  const getDRSColor = (score) => {
    if (score === 4) return 'drs-excellent';
    if (score === 3) return 'drs-good';
    return 'drs-needs-improvement';
  };

  return (
    <div className="page-container" data-testid="decision-readiness-page">
      <div className="page-header">
        <h1 className="page-title">Decision Readiness Benchmark</h1>
        <p className="page-subtitle">Operational audit of 30 OEM and integrator websites in the French industrial market</p>
      </div>

      <DataPanel title="Decision Readiness Score (DRS)" className="mb-6">
        <div className="drs-formula">
          <p className="formula-text">
            <strong>DRS = Scenarios + Process + Proof + Entry Clarity</strong> (0-4)
          </p>
          <p className="formula-desc">
            Each signal scores 0 (absent), 0.5 (partial), or 1 (present). A score of 4 indicates a decision-grade website; 
            scores below 3 suggest catalog-oriented architecture failing to support executive decision-making.
          </p>
        </div>
        <div className="drs-stats">
          <div className="stat-item">
            <span className="stat-label">Average DRS (filtered)</span>
            <span className="stat-value">{averageDRS}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Companies Audited</span>
            <span className="stat-value">{filteredData.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Score 4 (Decision-Grade)</span>
            <span className="stat-value">{filteredData.filter(c => c.drs === 4).length}</span>
          </div>
        </div>
      </DataPanel>

      <DataPanel title="Audit Results" className="mb-6">
        <div className="filters-bar" data-testid="audit-filters">
          <div className="filter-group">
            <Filter size={16} />
            <label className="filter-label">Type:</label>
            <select 
              value={typeFilter} 
              onChange={(e) => setTypeFilter(e.target.value)}
              className="filter-select"
              data-testid="type-filter"
            >
              <option value="all">All</option>
              <option value="OEM">OEM</option>
              <option value="Integrator">Integrator</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Country:</label>
            <select 
              value={countryFilter} 
              onChange={(e) => setCountryFilter(e.target.value)}
              className="filter-select"
              data-testid="country-filter"
            >
              <option value="all">All</option>
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
              <option value="all">All</option>
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
                <th>Company</th>
                <th>Type</th>
                <th>Country</th>
                <th>Scenarios</th>
                <th>Process</th>
                <th>Proof</th>
                <th>Entry</th>
                <th>DRS</th>
                <th>Evidence</th>
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

      <DataPanel title="COMEX Reading" className="mb-6">
        <div className="reading-grid">
          <div className="reading-item">
            <h3 className="reading-title">Pattern: Scenarios + Proof + Entry</h3>
            <p className="reading-text">
              Leaders consistently combine industry scenarios, credible proof, and clear entry points. 
              This triad reduces uncertainty before first contact, enabling confident decision initiation.
            </p>
          </div>
          <div className="reading-item">
            <h3 className="reading-title">Most Common Gap: Process Visibility</h3>
            <p className="reading-text">
              Even high-performing sites frequently lack process transparency. "How it works" remains implicit, 
              forcing leaders to extract information through direct contact—adding friction and uncertainty.
            </p>
          </div>
          <div className="reading-item">
            <h3 className="reading-title">Decision-Grade Threshold: DRS ≥ 3.5</h3>
            <p className="reading-text">
              Sites scoring 3.5+ demonstrate operational readiness for executive-level evaluation. Below this threshold, 
              websites function as catalogs requiring supplementary information gathering before decision consideration.
            </p>
          </div>
        </div>
      </DataPanel>

      <DataPanel title="Leader Patterns from Category Leaders">
        <ul className="pattern-list">
          <li className="pattern-item">
            <strong>Navigation by Sectors/Applications:</strong> Pages oriented towards specific industries/segments, 
            enabling rapid relevance assessment.
          </li>
          <li className="pattern-item">
            <strong>Proof through Testimonials/Success Stories:</strong> Contextualized customer feedback with operational specifics, 
            not generic endorsements.
          </li>
          <li className="pattern-item">
            <strong>Contextualized Entry Points:</strong> Request forms and contact options matched to decision context 
            (quote, demo, support, emergency).
          </li>
          <li className="pattern-item">
            <strong>Explicated Support and Services:</strong> Clear information on after-sales, parts availability, technical support, 
            and digital services—critical for total-cost-of-ownership evaluation.
          </li>
        </ul>
      </DataPanel>
    </div>
  );
};

export default DecisionReadiness;
