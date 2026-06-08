import React from 'react';
import { useTranslation } from 'react-i18next';
import { Area, AreaChart, CartesianGrid, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Delta from '../components/Delta';
import {
  ShareBarList,
  ShareBarListItem,
  ShareBarListContent,
  ShareBarListLabel,
  ShareBarListValue,
  ShareBarListFill,
} from '../components/ShareBarList';
import { nationalTrendData, regionalData } from '../data/industrial_pressure';
import { proofBlocks } from '../data/proof_blocks';
import { oemAuditData } from '../data/oem_audit';
import { decisionScenarios } from '../data/scenarios';

// ── Country flags (ISO → emoji) for OEM table ─────────────────────────────────
const countryFlags = {
  Germany: '🇩🇪', USA: '🇺🇸', Japan: '🇯🇵', France: '🇫🇷',
  Switzerland: '🇨🇭', Spain: '🇪🇸', 'South Korea': '🇰🇷',
};

const SystemStatus = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === 'fr';

  // ── National trend (area chart) ──────────────────────────────────────────
  const latest = nationalTrendData[nationalTrendData.length - 1];
  const first = nationalTrendData[0];
  const previous = nationalTrendData[nationalTrendData.length - 2];
  const totalDelta = ((latest.total - first.total) / first.total * 100);
  const yoyDelta = ((latest.total - previous.total) / previous.total * 100);

  const chartData = nationalTrendData.map((d) => ({
    year: String(d.year),
    failures: d.total,
  }));

  // ── Current pressure breakdown (online-now equivalent) ───────────────────
  const breakdownTotal = latest.ljDirectes + latest.rjDirectes + latest.sauvegardes;
  const pressureSplit = [
    { label: isFr ? 'Liquidations directes' : 'Direct liquidations', share: Math.round((latest.ljDirectes / breakdownTotal) * 100) },
    { label: isFr ? 'Redressements jud.' : 'Judicial restructuring', share: Math.round((latest.rjDirectes / breakdownTotal) * 100) },
    { label: isFr ? 'Sauvegardes' : 'Safeguards', share: Math.round((latest.sauvegardes / breakdownTotal) * 100) },
  ];

  // ── Top regions under pressure (table) ────────────────────────────────────
  const topRegions = regionalData
    .map((r) => {
      const cur = r.years[2025]?.altares || 0;
      const prev = r.years[2024]?.altares || cur;
      const delta = prev > 0 ? ((cur - prev) / prev) * 100 : 0;
      return { region: r.region, code: r.code, value: cur, delta };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 6);

  // ── Failures by type (traffic-sources equivalent) ─────────────────────────
  const maxType = Math.max(latest.ljDirectes, latest.rjDirectes, latest.sauvegardes);
  const failuresByType = [
    { label: isFr ? 'Liquidations directes' : 'Direct liquidations', value: latest.ljDirectes },
    { label: isFr ? 'Redressements judiciaires' : 'Judicial restructuring', value: latest.rjDirectes },
    { label: isFr ? 'Sauvegardes' : 'Safeguards', value: latest.sauvegardes },
  ].map((x) => ({ ...x, share: (x.value / maxType) * 75 }));

  // ── Decision scenarios frequency (audience-mix equivalent) ────────────────
  // Illustrative weighting across the 5 canonical scenarios
  const scenarioWeights = [32, 27, 18, 14, 9];
  const scenarioMix = decisionScenarios.slice(0, 5).map((s, i) => ({
    label: isFr ? s.titleFr : s.title,
    share: scenarioWeights[i],
  }));

  // ── Decision gates split (browser-share equivalent) ───────────────────────
  const gateMix = [
    { label: isFr ? 'Discret' : 'Discreet', share: 38 },
    { label: isFr ? 'Exploratoire' : 'Exploratory', share: 29 },
    { label: 'Urgent', share: 18 },
    { label: isFr ? 'Post-Crise' : 'Post-Crisis', share: 15 },
  ];

  // ── OEM audit by country (top-countries equivalent) ───────────────────────
  const oemByCountry = Object.entries(
    oemAuditData.reduce((acc, o) => {
      acc[o.country] = acc[o.country] || { count: 0, drsSum: 0 };
      acc[o.country].count += 1;
      acc[o.country].drsSum += o.drs;
      return acc;
    }, {})
  )
    .map(([country, v]) => ({ country, count: v.count, avgDrs: (v.drsSum / v.count).toFixed(1) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // ── Proof blocks (top-referrers equivalent) ───────────────────────────────
  const proofRows = proofBlocks.slice(0, 5).map((p) => {
    const keyMetric = p.metrics.find((m) => m.improvement) || p.metrics[0];
    return {
      company: p.company,
      sector: isFr ? p.sectorFr : p.sector,
      metric: keyMetric.improvement || keyMetric.value,
    };
  });

  // ── Key indices (web-vitals equivalent) ──────────────────────────────────
  const indices = [
    { label: 'URI', name: isFr ? 'Indice de Préparation Utilisateur' : 'User Readiness Index', value: '72', delta: 6, deltaLabel: isFr ? 'vs trimestre préc.' : 'vs prior quarter' },
    { label: 'DRS', name: isFr ? 'Score de Préparation Décisionnelle' : 'Decision Readiness Score', value: '3.6', delta: 0.4, deltaLabel: isFr ? 'vs trimestre préc.' : 'vs prior quarter', suffix: '' },
    { label: 'IPI', name: isFr ? 'Indice de Pression Industrielle' : 'Industrial Pressure Index', value: '68', delta: 9, deltaLabel: isFr ? 'vs an préc.' : 'vs prior year' },
  ];

  const fmt = (n) => n.toLocaleString(isFr ? 'fr-FR' : 'en-US');

  return (
    <div className="page-container dashboard-page" data-testid="system-status-page">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="dashboard-hero">
        <div>
          <h1 className="hero-title">
            {t('systemStatus.title')} <span className="hero-emphasis">{t('systemStatus.subtitle')}</span>
          </h1>
          <p className="dashboard-hero-sub">
            {isFr
              ? 'Cadrage exécutif du contexte décisionnel industriel français.'
              : 'Executive framing of the French industrial decision context.'}
          </p>
        </div>
        <span className="proxy-badge">
          {isFr ? 'Modèle illustratif · données proxy' : 'Illustrative model · proxy data'}
        </span>
      </div>

      {/* ── Dashboard grid ───────────────────────────────────────────────── */}
      <div className="dashboard-grid">

        {/* National failures — big area chart */}
        <div className="dash-card dash-col-3">
          <div className="dash-card-head dash-card-head-row">
            <div>
              <div className="dash-metric-lg">{fmt(latest.total)}</div>
              <div className="dash-card-desc">
                {isFr ? 'Défaillances industrielles · France 2025' : 'Industrial failures · France 2025'}
              </div>
            </div>
            <Delta value={parseFloat(yoyDelta.toFixed(1))} variant="badge" label={isFr ? 'vs 2024' : 'vs 2024'} />
          </div>
          <div className="dash-card-body">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={chartData} margin={{ left: 8, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="failGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#207BFF" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#207BFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#e0e4e8" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tickMargin={8}
                  tick={{ fill: '#718096', fontSize: 12 }} />
                <Tooltip
                  cursor={{ stroke: '#207BFF', strokeDasharray: '3 3' }}
                  contentStyle={{ borderRadius: 8, border: '1px solid #e0e4e8', fontSize: 13 }}
                  formatter={(v) => [fmt(v), isFr ? 'Défaillances' : 'Failures']}
                />
                <Area dataKey="failures" type="linear" stroke="#207BFF" strokeWidth={2}
                  fill="url(#failGradient)" dot={{ fill: '#207BFF', r: 2.5, strokeWidth: 2 }}
                  isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Current pressure split */}
        <div className="dash-card dash-col-1">
          <div className="dash-card-head dash-card-head-row">
            <div>
              <div className="dash-metric-lg">{fmt(breakdownTotal)}</div>
              <div className="dash-card-desc">{isFr ? 'Procédures 2025' : 'Procedures 2025'}</div>
            </div>
            <Delta value={parseFloat(totalDelta.toFixed(1))} variant="badge" />
          </div>
          <div className="dash-card-body dash-card-body-pad">
            <ShareBarList>
              {pressureSplit.map((d) => (
                <ShareBarListItem key={d.label} value={d.share}>
                  <ShareBarListContent>
                    <ShareBarListLabel>{d.label}</ShareBarListLabel>
                    <ShareBarListValue>{d.share}%</ShareBarListValue>
                  </ShareBarListContent>
                  <ShareBarListFill value={d.share} />
                </ShareBarListItem>
              ))}
            </ShareBarList>
          </div>
        </div>

        {/* Top regions table */}
        <div className="dash-card dash-col-2 dash-card-table">
          <div className="dash-card-head">
            <h3 className="dash-card-title">{isFr ? 'Régions sous pression' : 'Regions under pressure'}</h3>
            <p className="dash-card-desc">{isFr ? 'Classement par défaillances · 2025' : 'Ranked by failures · 2025'}</p>
          </div>
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>{isFr ? 'Région' : 'Region'}</th>
                  <th className="ta-end">{isFr ? 'Défaillances' : 'Failures'}</th>
                  <th className="ta-end">{isFr ? 'Évol.' : 'Change'}</th>
                </tr>
              </thead>
              <tbody>
                {topRegions.map((r) => (
                  <tr key={r.code}>
                    <td className="dash-td-strong">{r.region}</td>
                    <td className="ta-end dash-td-muted">{fmt(r.value)}</td>
                    <td className="ta-end dash-td-muted">{r.delta > 0 ? '+' : ''}{r.delta.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/market-pressure" className="dash-card-link">
            {isFr ? 'Voir tout' : 'View All'} <ArrowRight size={15} />
          </Link>
        </div>

        {/* OEM by country table */}
        <div className="dash-card dash-col-2 dash-card-table">
          <div className="dash-card-head">
            <h3 className="dash-card-title">{isFr ? 'OEM / Intégrateurs audités' : 'OEM / Integrators audited'}</h3>
            <p className="dash-card-desc">{isFr ? 'Par pays · score DRS moyen' : 'By country · avg DRS score'}</p>
          </div>
          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>{isFr ? 'Pays' : 'Country'}</th>
                  <th className="ta-end">{isFr ? 'Sites' : 'Sites'}</th>
                  <th className="ta-end">DRS</th>
                </tr>
              </thead>
              <tbody>
                {oemByCountry.map((c) => (
                  <tr key={c.country}>
                    <td className="dash-td-strong">
                      <span className="dash-flag">{countryFlags[c.country] || '🏳️'}</span>
                      {c.country}
                    </td>
                    <td className="ta-end dash-td-muted">{c.count}</td>
                    <td className="ta-end dash-td-muted">{c.avgDrs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/proof" className="dash-card-link">
            {isFr ? 'Voir tout' : 'View All'} <ArrowRight size={15} />
          </Link>
        </div>

        {/* Failures by type */}
        <div className="dash-card dash-col-1">
          <div className="dash-card-head">
            <h3 className="dash-card-title">{isFr ? 'Défaillances par type' : 'Failures by type'}</h3>
            <p className="dash-card-desc">{isFr ? 'Répartition · 2025' : 'Breakdown · 2025'}</p>
          </div>
          <div className="dash-card-body dash-card-body-pad">
            <ShareBarList>
              {failuresByType.map((d) => (
                <ShareBarListItem key={d.label} value={d.share}>
                  <ShareBarListContent>
                    <ShareBarListLabel>{d.label}</ShareBarListLabel>
                    <ShareBarListValue>{fmt(d.value)}</ShareBarListValue>
                  </ShareBarListContent>
                  <ShareBarListFill value={d.share} />
                </ShareBarListItem>
              ))}
            </ShareBarList>
          </div>
        </div>

        {/* Decision scenarios mix */}
        <div className="dash-card dash-col-1">
          <div className="dash-card-head">
            <h3 className="dash-card-title">{isFr ? 'Scénarios de décision' : 'Decision scenarios'}</h3>
            <p className="dash-card-desc">{isFr ? 'Fréquence observée' : 'Observed frequency'}</p>
          </div>
          <div className="dash-card-body dash-card-body-pad">
            <ShareBarList>
              {scenarioMix.map((d) => (
                <ShareBarListItem key={d.label} value={d.share}>
                  <ShareBarListContent>
                    <ShareBarListLabel>{d.label}</ShareBarListLabel>
                    <ShareBarListValue>{d.share}%</ShareBarListValue>
                  </ShareBarListContent>
                  <ShareBarListFill value={d.share} />
                </ShareBarListItem>
              ))}
            </ShareBarList>
          </div>
        </div>

        {/* Decision gates split */}
        <div className="dash-card dash-col-1">
          <div className="dash-card-head">
            <h3 className="dash-card-title">{isFr ? 'Portes de décision' : 'Decision gates'}</h3>
            <p className="dash-card-desc">{isFr ? 'Répartition des entrées' : 'Entry split'}</p>
          </div>
          <div className="dash-card-body dash-card-body-pad">
            <ShareBarList>
              {gateMix.map((d) => (
                <ShareBarListItem key={d.label} value={d.share}>
                  <ShareBarListContent>
                    <ShareBarListLabel>{d.label}</ShareBarListLabel>
                    <ShareBarListValue>{d.share}%</ShareBarListValue>
                  </ShareBarListContent>
                  <ShareBarListFill value={d.share} />
                </ShareBarListItem>
              ))}
            </ShareBarList>
          </div>
        </div>

        {/* Proof blocks */}
        <div className="dash-card dash-col-1 dash-card-table">
          <div className="dash-card-head">
            <h3 className="dash-card-title">{isFr ? 'Cas clients' : 'Proof blocks'}</h3>
            <p className="dash-card-desc">{isFr ? 'Métrique clé' : 'Key metric'}</p>
          </div>
          <div className="dash-table-wrap">
            <table className="dash-table">
              <tbody>
                {proofRows.map((p) => (
                  <tr key={p.company}>
                    <td className="dash-td-strong">{p.company}</td>
                    <td className="ta-end dash-td-accent">{p.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/proof" className="dash-card-link">
            {isFr ? 'Voir tout' : 'View All'} <ArrowRight size={15} />
          </Link>
        </div>

        {/* Key indices — full width */}
        <div className="dash-card dash-col-4">
          <div className="dash-card-head">
            <h3 className="dash-card-title">{isFr ? 'Indices clés' : 'Key indices'}</h3>
            <p className="dash-card-desc">
              {isFr ? 'Mesures composites de préparation et de pression.' : 'Composite readiness and pressure measures.'}
            </p>
          </div>
          <div className="dash-card-body">
            <ul className="dash-vitals">
              {indices.map((v) => (
                <li key={v.label} className="dash-vital">
                  <p className="dash-vital-label">{v.label}</p>
                  <p className="dash-vital-name">{v.name}</p>
                  <p className="dash-vital-value">{v.value}</p>
                  <div className="dash-vital-delta">
                    <Delta value={v.delta} suffix={v.suffix !== undefined ? v.suffix : ''} showSuffix={v.suffix !== ''} precision={v.suffix === '' ? 1 : 0} />
                    <span className="dash-vital-delta-label">{v.deltaLabel}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SystemStatus;
