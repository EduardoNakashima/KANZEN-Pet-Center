import React from 'react';

interface KanzenLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const KanzenLogo: React.FC<KanzenLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: { box: 'w-10 h-10', text: 'text-lg', sub: 'text-[9px]' },
    md: { box: 'w-12 h-12', text: 'text-xl', sub: 'text-[11px]' },
    lg: { box: 'w-20 h-20', text: 'text-3xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* SVG rendering of the official Kanzen Red & Yellow Paw Logo */}
      <div
        className={`${currentSize.box} rounded-2xl bg-[#E51921] shadow-md flex items-center justify-center p-1 relative overflow-hidden shrink-0 border border-red-700/30`}
        title="Kanzen Pet Center - 完全"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Kanji 完全 on top right */}
          <text
            x="170"
            y="35"
            textAnchor="middle"
            fill="#111111"
            fontFamily="'Noto Sans JP', 'PingFang SC', sans-serif"
            fontWeight="900"
            fontSize="26"
          >
            完
          </text>
          <text
            x="170"
            y="65"
            textAnchor="middle"
            fill="#111111"
            fontFamily="'Noto Sans JP', 'PingFang SC', sans-serif"
            fontWeight="900"
            fontSize="26"
          >
            全
          </text>

          {/* Yellow Paw Print */}
          <g fill="#FFE600">
            {/* 4 Toes */}
            <ellipse cx="62" cy="58" rx="14" ry="20" transform="rotate(-15 62 58)" />
            <ellipse cx="90" cy="46" rx="14" ry="21" />
            <ellipse cx="120" cy="48" rx="14" ry="21" transform="rotate(10 120 48)" />
            <ellipse cx="145" cy="66" rx="13" ry="19" transform="rotate(25 145 66)" />
            
            {/* Paw Main Pad */}
            <path d="M 55 110 C 45 85, 75 70, 102 70 C 130 70, 160 85, 150 110 C 145 125, 130 140, 103 138 C 76 140, 60 125, 55 110 Z" />
          </g>

          {/* Stylized KANZEN text */}
          <g>
            {/* 3D Red Shadow offset */}
            <text
              x="97"
              y="126"
              textAnchor="middle"
              fill="#990000"
              fontFamily="'Arial Black', Impact, sans-serif"
              fontWeight="900"
              fontSize="44"
              letterSpacing="-2"
            >
              KANZEN
            </text>
            {/* Black Stroke */}
            <text
              x="95"
              y="123"
              textAnchor="middle"
              fill="#111111"
              stroke="#111111"
              strokeWidth="9"
              strokeLinejoin="round"
              fontFamily="'Arial Black', Impact, sans-serif"
              fontWeight="900"
              fontSize="44"
              letterSpacing="-2"
            >
              KANZEN
            </text>
            {/* White Fill */}
            <text
              x="95"
              y="123"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Arial Black', Impact, sans-serif"
              fontWeight="900"
              fontSize="44"
              letterSpacing="-2"
            >
              KANZEN
            </text>
          </g>

          {/* "Pet Center" text in black bold */}
          <text
            x="180"
            y="155"
            textAnchor="end"
            fill="#111111"
            fontFamily="'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="18"
            letterSpacing="-0.5"
          >
            Pet Center
          </text>
        </svg>
      </div>

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-extrabold text-slate-900 tracking-tight text-xl">
              KANZEN
            </span>
            <span className="text-xs font-bold text-[#E51921] bg-red-50 border border-red-200/80 px-1.5 py-0.5 rounded">
              完全
            </span>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
            Pet Center
          </span>
        </div>
      )}
    </div>
  );
};
