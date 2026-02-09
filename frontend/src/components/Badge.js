import React from 'react';

const Badge = ({ children, variant, className }) => {
  const variantClass = variant || 'default';
  const badgeClass = className ? `badge badge-${variantClass} ${className}` : `badge badge-${variantClass}`;
  
  return (
    <span className={badgeClass} data-testid="badge">
      {children}
    </span>
  );
};

export default Badge;
