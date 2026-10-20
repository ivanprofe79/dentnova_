import React from 'react';

interface DentNovaLogoProps {
  variant?: 'horizontal' | 'stacked' | 'symbol';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const DentNovaLogo: React.FC<DentNovaLogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  size = 'md'
}) => {
  const isDark = theme === 'dark';

  const dimensions = {
    sm: { symbol: 32, textMain: 'text-lg', textSub: 'text-[9px]' },
    md: { symbol: 44, textMain: 'text-2xl', textSub: 'text-[10px]' },
    lg: { symbol: 64, textMain: 'text-3xl sm:text-4xl', textSub: 'text-xs' },
    xl: { symbol: 88, textMain: 'text-4xl sm:text-5xl', textSub: 'text-sm' }
  }[size];

  // Official DentNova Emblem: Exact vector reproduction of the user's uploaded logo
  // (Fluid, dynamic blue dental swoosh curves forming an open-form molar tooth)
  const Emblem = (
    <svg
      width={dimensions.symbol}
      height={dimensions.symbol}
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-xs"
    >
      {/* Upper-left accent swoosh */}
      <path
        d="M 132 28 C 175 14, 255 24, 332 64 C 382 91, 412 134, 432 165 C 388 128, 322 84, 250 56 C 196 35, 155 31, 132 28 Z"
        fill={isDark ? '#60a5fa' : '#2258D4'}
      />

      {/* Main outer swooshing tooth ribbon */}
      <path
        d="M 125 42
           C 255 125, 410 152, 482 118
           C 542 90, 638 58, 735 62
           C 845 68, 935 128, 930 190
           C 924 252, 868 395, 785 558
           C 715 695, 650 790, 624 825
           C 652 785, 745 615, 818 472
           C 872 368, 894 258, 880 188
           C 866 122, 805 92, 725 90
           C 640 88, 555 118, 492 144
           C 425 172, 290 155, 172 75
           C 120 40, 85 95, 52 185
           C 18 285, 20 445, 62 610
           C 98 750, 158 875, 235 965
           C 265 1000, 310 995, 328 948
           C 350 892, 338 825, 312 770
           C 265 670, 195 540, 132 405
           C 92 318, 80 230, 95 162
           C 105 118, 118 70, 125 42 Z"
        fill={isDark ? '#3b82f6' : '#2258D4'}
      />

      {/* Lower inner root furcation swoosh */}
      <path
        d="M 285 912
           C 328 852, 385 765, 465 685
           C 545 605, 642 552, 762 525
           C 652 548, 558 595, 478 668
           C 395 745, 335 832, 285 912 Z"
        fill={isDark ? '#60a5fa' : '#2258D4'}
      />
    </svg>
  );

  if (variant === 'symbol') {
    return <div className={`inline-flex items-center ${className}`}>{Emblem}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center gap-2 ${className}`}>
        {Emblem}
        <div>
          <div className={`${dimensions.textMain} font-extrabold tracking-tight leading-none`}>
            <span className={isDark ? 'text-white' : 'text-slate-900'}>Dent</span>
            <span className={isDark ? 'text-blue-400' : 'text-[#2258D4]'}>Nova</span>
          </div>
          <span
            className={`${dimensions.textSub} block font-bold uppercase tracking-[0.25em] mt-1.5 ${
              isDark ? 'text-blue-300' : 'text-slate-500'
            }`}
          >
            Depósito Dental
          </span>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      {Emblem}
      <div className="flex flex-col text-left">
        <div className={`${dimensions.textMain} font-extrabold tracking-tight leading-none`}>
          <span className={isDark ? 'text-white' : 'text-slate-900'}>Dent</span>
          <span className={isDark ? 'text-blue-400' : 'text-[#2258D4]'}>Nova</span>
        </div>
        <span
          className={`${dimensions.textSub} font-bold uppercase tracking-[0.22em] mt-1.5 ${
            isDark ? 'text-blue-300' : 'text-slate-500'
          }`}
        >
          Depósito Dental
        </span>
      </div>
    </div>
  );
};
