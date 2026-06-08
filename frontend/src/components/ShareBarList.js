import React from 'react';

// Horizontal share bars with gradient fill — recreated from @efferd/dashboard-5
// Pure JSX + CSS (no Tailwind), brand accent #207BFF

const ShareBarList = ({ children, className, ...props }) => (
  <ul className={`share-bar-list ${className || ''}`} {...props}>
    {children}
  </ul>
);

const ShareBarListItem = ({ value, children, className, ...props }) => {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <li
      className={`share-bar-list-item ${className || ''}`}
      style={{ '--bar-value': `${clamped}%` }}
      {...props}
    >
      {children}
    </li>
  );
};

const ShareBarListContent = ({ children, className }) => (
  <div className={`share-bar-list-content ${className || ''}`}>{children}</div>
);

const ShareBarListLabel = ({ children, className }) => (
  <span className={`share-bar-list-label ${className || ''}`}>{children}</span>
);

const ShareBarListValue = ({ children, className }) => (
  <span className={`share-bar-list-value ${className || ''}`}>{children}</span>
);

const ShareBarListFill = ({ value, className }) => {
  const clamped = Math.min(100, Math.max(0, value || 0));
  const borderMix = Math.min(100, Math.max(36, clamped * 1.75));
  return (
    <div
      aria-hidden
      className={`share-bar-list-fill ${className || ''}`}
      style={{
        width: `${clamped}%`,
        borderRightColor: `color-mix(in srgb, #207BFF ${borderMix}%, transparent)`,
        backgroundImage:
          'linear-gradient(to right, color-mix(in srgb, #207BFF 4%, transparent), color-mix(in srgb, #207BFF 36%, transparent))',
      }}
    />
  );
};

export {
  ShareBarList,
  ShareBarListItem,
  ShareBarListContent,
  ShareBarListLabel,
  ShareBarListValue,
  ShareBarListFill,
};
