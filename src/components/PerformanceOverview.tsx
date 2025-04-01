import React from 'react';
import { LineChart, Maximize } from 'lucide-react';

const PerformanceOverview = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const performanceData = [75, 82, 78, 85, 90, 92];
  const goalData = [70, 75, 80, 85, 90, 95];
  
  // Find max value for graph scaling
  const maxValue = Math.max(...performanceData, ...goalData);
  const normalizeValue = (value: number) => (value / maxValue) * 100;

  return (
    <div className="glass-card p-1 group">
      <div className="p-6 rounded-xl relative overflow-hidden h-full">
        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="animate-shimmer w-full h-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 glass rounded-xl flex items-center justify-center mr-3">
                <LineChart className="w-5 h-5 text-indigo-300" />
              </div>
              <h2 className="text-xl font-semibold text-white">Performance Trend</h2>
            </div>
            <button className="text-white/70 hover:text-white glass p-1.5 rounded-lg transition-colors">
              <Maximize className="w-4 h-4" />
            </button>
          </div>

          <div className="h-60 relative mb-4">
            {/* Graph grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full border-t border-white/10" />
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white/50 text-xs">
              {months.map((month, i) => (
                <div key={i} className="text-center">{month}</div>
              ))}
            </div>
            
            {/* Performance line */}
            <svg className="absolute inset-0 h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="performance-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points={performanceData
                  .map((value, i) => `${(i / (months.length - 1)) * 100}% ${100 - normalizeValue(value)}%`)
                  .join(' ')}
                fill="none"
                stroke="#818cf8"
                strokeWidth="2"
                strokeLinecap="round"
                className="drop-shadow-lg"
              />
              <polygon
                points={`0 100% ${performanceData
                  .map((value, i) => `${(i / (months.length - 1)) * 100}% ${100 - normalizeValue(value)}%`)
                  .join(' ')} 100% 100%`}
                fill="url(#performance-gradient)"
                opacity="0.3"
              />
              
              {/* Data points */}
              {performanceData.map((value, i) => (
                <circle
                  key={i}
                  cx={`${(i / (months.length - 1)) * 100}%`}
                  cy={`${100 - normalizeValue(value)}%`}
                  r="4"
                  fill="#818cf8"
                  className="animate-pulse-slow"
                />
              ))}
            </svg>
            
            {/* Goal line */}
            <svg className="absolute inset-0 h-full" preserveAspectRatio="none">
              <polyline
                points={goalData
                  .map((value, i) => `${(i / (months.length - 1)) * 100}% ${100 - normalizeValue(value)}%`)
                  .join(' ')}
                fill="none"
                stroke="#a5b4fc"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-indigo-400 rounded-full mr-2"></div>
              <span className="text-sm text-white/70">Performance</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 border border-indigo-300 rounded-full mr-2"></div>
              <span className="text-sm text-white/70">Target</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;