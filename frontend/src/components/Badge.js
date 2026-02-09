import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={`badge badge-${variant} ${className}`} data-testid="badge">
      {children}
    </span>
  );
};

export default Badge;
