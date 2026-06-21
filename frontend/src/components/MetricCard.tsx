import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtext: string;
  icon: string;
  iconColorClass?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtext,
  icon,
  iconColorClass = 'text-on-surface-variant'
}) => {
  // Determine text color for subtext to match the design mock theme rules
  let subtextColorClass = 'text-on-surface-variant';
  if (subtext.includes('+') && !subtext.includes('today')) {
    subtextColorClass = 'text-green-400';
  } else if (subtext.includes('today') || subtext.includes('critical')) {
    subtextColorClass = 'text-error';
  }

  return (
    <div className="bento-card p-6 flex flex-col justify-between h-32 relative overflow-hidden">
      <div className="flex justify-between items-start z-10">
        <span className="text-label-caps text-on-surface-variant tracking-widest uppercase">{title}</span>
        <span className={`material-symbols-outlined text-[18px] ${iconColorClass}`}>{icon}</span>
      </div>
      <div className="flex items-baseline space-x-2 z-10">
        <span className="text-display-lg font-display-lg text-primary">{value}</span>
        <span className={`text-label-sm ${subtextColorClass}`}>
          {subtext}
        </span>
      </div>
    </div>
  );
};
