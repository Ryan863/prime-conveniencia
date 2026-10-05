import React from 'react';

interface ChromeStarProps {
  className?: string;
  size?: number;
  glow?: 'pink' | 'cyan' | 'silver';
  rotation?: number;
}

export const ChromeStar: React.FC<ChromeStarProps> = ({
  className = '',
  size = 48,
  glow = 'silver',
  rotation = 0,
}) => {
  const glowStyles = {
    silver: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))',
    pink: 'drop-shadow(0 0 14px rgba(255, 46, 147, 0.6)) drop-shadow(0 0 25px rgba(255, 46, 147, 0.3))',
    cyan: 'drop-shadow(0 0 14px rgba(0, 229, 255, 0.6)) drop-shadow(0 0 25px rgba(0, 229, 255, 0.3))',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        filter: glowStyles[glow],
      }}
    >
      <defs>
        <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#CBD5E1" />
          <stop offset="45%" stopColor="#64748B" />
          <stop offset="60%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <radialGradient id="specularGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#00E5FF" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#FF2E93" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* 4-point curved diamond star */}
      <path
        d="M50 0 C50 35, 65 50, 100 50 C65 50, 50 65, 50 100 C50 65, 35 50, 0 50 C35 50, 50 35, 50 0 Z"
        fill="url(#chromeGradient)"
      />

      {/* Central reflection highlight */}
      <circle cx="50" cy="50" r="14" fill="url(#specularGlow)" />
      <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
    </svg>
  );
};
