import React, { ReactNode } from 'react';

interface MetricsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend: string;
}

const MetricsCard = ({ title, value, icon, trend }: MetricsCardProps) => {
  // Determine if trend is positive, negative, or neutral
  const isTrendPositive = trend.startsWith('+');
  const isTrendNegative = trend.startsWith('-');
  const trendColor = isTrendPositive 
    ? 'text-emerald-300' 
    : isTrendNegative 
      ? 'text-red-300' 
      : 'text-blue-300';

  return (
    <div className="glass-card p-1 group hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 rounded-xl relative overflow-hidden h-full">
        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="animate-shimmer w-full h-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white/70">{title}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
            </div>
            <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm font-medium ${trendColor}`}>{trend}</span>
            <span className="text-sm text-white/50"> vs last period</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;