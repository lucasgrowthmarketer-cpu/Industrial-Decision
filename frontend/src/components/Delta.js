import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

// Trend delta indicator — recreated from @efferd/dashboard-5
// variant: "badge" (pill) or "default" (inline text)

const Delta = ({ value, variant = 'default', suffix = '%', showSuffix = true, label, precision = 1 }) => {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const Icon = isPositive ? TrendingUp : isNegative ? TrendingDown : Minus;
  const formatted = Math.abs(value).toFixed(precision);

  const toneClass = isPositive ? 'delta-positive' : isNegative ? 'delta-negative' : 'delta-neutral';
  const variantClass = variant === 'badge' ? 'delta-badge' : 'delta-inline';

  return (
    <span className={`delta ${variantClass} ${toneClass}`}>
      <Icon size={variant === 'badge' ? 15 : 13} className="delta-icon" />
      <span className="delta-value">
        {formatted}{showSuffix ? suffix : ''}
      </span>
      {label && <span className="delta-label">{label}</span>}
    </span>
  );
};

export default Delta;
