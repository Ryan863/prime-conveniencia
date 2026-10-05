import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Cyber Neon Shield / Beer Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center flex-shrink-0`}>
        {/* Ambient neon backglow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FF2E93] to-[#00E5FF] rounded-xl blur-[10px] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        
        {/* Emblem Border */}
        <div className="relative w-full h-full bg-[#0A0C0F] border border-white/20 rounded-xl p-1.5 flex items-center justify-center shadow-lg overflow-hidden">
          {/* Subtle grid in emblem */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_0_8px_rgba(255,46,147,0.8)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF2E93" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
            </defs>
            
            {/* Beer Mug Body */}
            <path
              d="M30 32 L70 32 L66 82 C66 86 62 90 57 90 L43 90 C38 90 34 86 34 82 Z"
              fill="rgba(255, 46, 147, 0.15)"
              stroke="url(#neonGrad)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Beer Mug Handle */}
            <path
              d="M70 42 H78 C83 42 87 46 87 51 V63 C87 68 83 72 78 72 H68"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Beer Foam / Frost Head */}
            <path
              d="M26 32 C26 26 30 22 36 24 C40 20 48 20 52 24 C57 19 65 20 68 25 C74 24 78 28 77 34 Z"
              fill="#FFFFFF"
              stroke="#00E5FF"
              strokeWidth="3"
            />
            {/* Sparkle star */}
            <path
              d="M50 48 Q50 56 42 56 Q50 56 50 64 Q50 56 58 56 Q50 56 50 48 Z"
              fill="#FF2E93"
            />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-display font-extrabold tracking-tight ${titleSizes[size]} bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent`}
          >
            PRIME
          </span>
          <span
            className={`font-display font-black tracking-tight ${titleSizes[size]} bg-gradient-to-r from-[#FF2E93] via-[#ff5ea8] to-[#00E5FF] bg-clip-text text-transparent text-glow-pink`}
          >
            BEER
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[10px] tracking-[0.25em] font-bold text-[#00E5FF] uppercase opacity-90 mt-0.5">
            CONVENIÊNCIA • CHAPECÓ
          </span>
        )}
      </div>
    </div>
  );
};
