import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DataPanel from '../components/DataPanel';
import Badge from '../components/Badge';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { regionalData, calculateIPI, nationalTrendData } from '../data/industrial_pressure';

const FRANCE_TOPO_JSON = 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson';

const MarketPressure = () => {
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState(2025);
  const [dataSource, setDataSource] = useState('altares');
  const [geoData, setGeoData] = useState(null);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(FRANCE_TOPO_JSON)
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Error loading France GeoJSON:', err));
  }, []);

  const getRegionValue = (regionName) => {
    const region = regionalData.find(r => 
      r.region.toLowerCase().includes(regionName.toLowerCase()) ||
      regionName.toLowerCase().includes(r.region.toLowerCase())
    );
    return region?.years[selectedYear]?.[dataSource] || 0;
  };

  const allValues = regionalData.map(r => r.years[selectedYear]?.[dataSource] || 0);
  const maxValue = Math.max(...allValues);
  const minValue = Math.min(...allValues.filter(v => v > 0));

  const colorScale = scaleLinear()
    .domain([minValue, maxValue])
    .range(['#e89565', '#d64933']);

  const handleMouseEnter = (geo, evt) => {
    const regionName = geo.properties.nom;
    const value = getRegionValue(regionName);
    const region = regionalData.find(r => 
      r.region.toLowerCase().includes(regionName.toLowerCase()) ||
      regionName.toLowerCase().includes(r.region.toLowerCase())
    );
    const ipi = region ? calculateIPI(region.region, selectedYear, dataSource) : 0;
    
    setTooltipContent(`${regionName}: ${value} failures | IPI: ${ipi}`);
    setTooltipPosition({ x: evt.clientX, y: evt.clientY });
  };

  const handleMouseLeave = () => {
    setTooltipContent('');
  };

  const trendData = nationalTrendData.map((yearData) => ({
    year: yearData.year,
    value: yearData.total
  }));

  const yoyChange = nationalTrendData.map((yearData, index) => {
    if (index === 0) return { year: yearData.year, change: 0 };
    const prev = nationalTrendData[index - 1];
    const change = ((yearData.total - prev.total) / prev.total * 100).toFixed(1);
    return { year: yearData.year, change: parseFloat(change) };
  });

  return (
    <div className="page-container" data-testid="market-pressure-page">
      <div className="page-header">
        <h1 className="page-title">{t('marketPressure.title')}</h1>
        <p className="page-subtitle">{t('marketPressure.subtitle')}</p>
      </div>

      <DataPanel title={t('marketPressure.franceTitle')} className="mb-6">
        <div className="map-controls">
          <div className="control-group">
            <label className="control-label">{t('marketPressure.year')}</label>
            <input
              type="range"
              min="2021"
              max="2025"
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="year-slider"
              data-testid="year-slider"
            />
            <span className="control-value">{selectedYear}</span>
          </div>
          
          <div className="control-group">
            <label className="control-label">{t('marketPressure.dataSource')}</label>
            <div className="toggle-group">
              <button
                className={`toggle-button ${dataSource === 'altares' ? 'active' : ''}`}
                onClick={() => setDataSource('altares')}
                data-testid="source-altares-btn"
              >
                {t('common.altares')}
              </button>
              <button
                className={`toggle-button ${dataSource === 'banqueDeFrance' ? 'active' : ''}`}
                onClick={() => setDataSource('banqueDeFrance')}
                data-testid="source-bdf-btn"
              >
                {t('common.banqueDeFrance')}
              </button>
            </div>
          </div>
        </div>

        <div className="map-container" data-testid="france-choropleth-map">
          {geoData ? (
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                center: [2.5, 46.8],
                scale: 2600
              }}
              width={800}
              height={600}
            >
              <Geographies geography={geoData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const value = getRegionValue(geo.properties.nom);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={value > 0 ? colorScale(value) : '#3a3a3a'}
                        stroke="#262626"
                        strokeWidth={0.5}
                        onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          default: { outline: 'none' },
                          hover: { fill: '#f4a76a', outline: 'none', cursor: 'pointer' },
                          pressed: { outline: 'none' }
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          ) : (
            <div className="map-loading">{t('marketPressure.loadingMap')}</div>
          )}
        </div>

        {tooltipContent && (
          <div
            className="map-tooltip"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y + 10
            }}
          >
            {tooltipContent}
          </div>
        )}

        <div className="info-block mt-4">
          <Badge variant="info">{t('marketPressure.methodologicalNote')}</Badge>
          <p className="info-text">
            <strong>{t('common.altares')}:</strong> {t('marketPressure.altaresDesc')}<br />
            <strong>{t('common.banqueDeFrance')}:</strong> {t('marketPressure.bdfDesc')}<br />
            {t('marketPressure.methodDiff')}
          </p>
        </div>
      </DataPanel>

      <DataPanel title={t('marketPressure.ipiTitle')} className="mb-6">
        <div className="ipi-grid">
          {regionalData.slice(0, 6).map((region) => {
            const ipi = calculateIPI(region.region, selectedYear, dataSource);
            return (
              <div key={region.code} className="ipi-item" data-testid="ipi-region-item">
                <span className="ipi-region">{region.region}</span>
                <span className="ipi-value">{ipi}</span>
                <div className="ipi-bar">
                  <div className="ipi-fill" style={{ width: `${ipi}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="info-block mt-4">
          <Badge variant="warning">{t('marketPressure.compositeIndicator')}</Badge>
          <p className="info-text">{t('marketPressure.ipiDesc')}</p>
        </div>
      </DataPanel>

      <DataPanel title={t('marketPressure.nationalTrend')} className="mb-6">
        <div className="trend-chart">
          <div className="trend-bars">
            {trendData.map((item, index) => {
              const heightPercent = (item.value / Math.max(...trendData.map(d => d.value))) * 100;
              return (
                <div key={item.year} className="trend-bar-container" data-testid="trend-bar">
                  <div className="trend-bar" style={{ height: `${heightPercent}%` }}>
                    <span className="trend-value">{item.value.toLocaleString()}</span>
                  </div>
                  <span className="trend-year">{item.year}</span>
                  {yoyChange[index].change !== 0 && (
                    <span className="trend-change">
                      {yoyChange[index].change > 0 ? '+' : ''}{yoyChange[index].change}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </DataPanel>

      <DataPanel title={t('marketPressure.comexReading')}>
        <p className="reading-text">{t('marketPressure.comexReadingText')}</p>
      </DataPanel>
    </div>
  );
};

export default MarketPressure;
