import React from 'react';
import type { Transaction } from '../types';

interface RiskChartProps {
  transactions: Transaction[];
}

export const RiskChart: React.FC<RiskChartProps> = ({ transactions }) => {
  const total = transactions.length;
  
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;

  transactions.forEach((tx) => {
    if (tx.riskAssessment === 'High') highCount++;
    else if (tx.riskAssessment === 'Medium') mediumCount++;
    else lowCount++;
  });

  // Default to mock values if no transactions have been loaded yet
  const highPct = total > 0 ? Math.round((highCount / total) * 100) : 12;
  const mediumPct = total > 0 ? Math.round((mediumCount / total) * 100) : 34;
  const lowPct = total > 0 ? Math.round((lowCount / total) * 100) : 54;

  return (
    <div className="bento-card p-6 flex flex-col h-[48%] min-h-[220px]">
      <h3 className="text-label-caps text-on-surface-variant tracking-widest uppercase mb-6">Risk Distribution</h3>
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-body-md mb-2">
              <span>High Risk</span>
              <span className="text-error font-medium">{highPct}%</span>
            </div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div 
                className="h-full bg-error rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${highPct}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-body-md mb-2">
              <span>Medium Risk</span>
              <span className="text-yellow-400 font-medium">{mediumPct}%</span>
            </div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-400 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${mediumPct}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between text-body-md mb-2">
              <span>Low Risk</span>
              <span className="text-green-400 font-medium">{lowPct}%</span>
            </div>
            <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-400 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${lowPct}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
