import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <img
      src="/xy.png"
      alt="Logo La Caserita"
      className={`logo-graphic ${className}`}
    />
  );
}
