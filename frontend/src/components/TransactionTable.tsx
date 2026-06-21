import React, { useState } from 'react';
import type { Transaction } from '../types';

interface TransactionTableProps {
  transactions: Transaction[];
  onSelectTransaction?: (tx: Transaction) => void;
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  onSelectTransaction
}) => {
  const [selectedTxId, setSelectedTxId] = useState<string | null>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const getRiskBadgeClass = (assessment: 'Low' | 'Medium' | 'High') => {
    switch (assessment) {
      case 'High':
        return 'risk-pill-high';
      case 'Medium':
        return 'risk-pill-medium';
      case 'Low':
      default:
        return 'risk-pill-low';
    }
  };

  const handleRowClick = (tx: Transaction, idx: number) => {
    const key = `${tx.step}-${tx.nameOrig}-${idx}`;
    setSelectedTxId(key);
    if (onSelectTransaction) {
      onSelectTransaction(tx);
    }
    // Remove highlight after a brief interval to match the mockup's micro-interaction
    setTimeout(() => {
      setSelectedTxId(null);
    }, 300);
  };

  return (
    <div className="lg:col-span-8 bento-card flex flex-col h-full overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low/50">
        <div className="flex items-center space-x-3">
          <span className="text-headline-md font-headline-md text-primary">Live Transaction Stream</span>
          <span className="bg-secondary-container text-on-secondary-container text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-tighter animate-pulse">
            Real-Time
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="p-1.5 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors" title="Filter List">
            <span className="material-symbols-outlined text-[20px]">filter_list</span>
          </button>
          <button className="p-1.5 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors" title="Download CSV">
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-surface z-10 border-b border-outline-variant">
            <tr>
              <th className="px-6 py-4 text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Timestamp</th>
              <th className="px-6 py-4 text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Type</th>
              <th className="px-6 py-4 text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Sender</th>
              <th className="px-6 py-4 text-label-caps text-on-surface-variant uppercase tracking-widest font-bold text-right">Amount</th>
              <th className="px-6 py-4 text-label-caps text-on-surface-variant uppercase tracking-widest font-bold text-center">Risk Assessment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-on-surface-variant text-body-md">
                  Waiting for incoming transactions...
                </td>
              </tr>
            ) : (
              transactions.map((tx, idx) => {
                const key = `${tx.step}-${tx.nameOrig}-${idx}`;
                const isRecentlySelected = selectedTxId === key;
                
                return (
                  <tr 
                    key={key} 
                    onClick={() => handleRowClick(tx, idx)}
                    className={`transition-colors duration-200 cursor-pointer group hover:bg-surface-container-high/60 ${
                      isRecentlySelected ? 'bg-primary-container/20 border-l-2 border-primary' : ''
                    }`}
                  >
                    <td className="px-6 py-4 font-body-md text-on-surface">{tx.timestamp}</td>
                    <td className="px-6 py-4 font-body-md text-on-surface-variant">{tx.type}</td>
                    <td className="px-6 py-4 font-body-md text-primary font-mono">{tx.nameOrig}</td>
                    <td className="px-6 py-4 font-body-md text-primary text-right font-medium">{formatCurrency(tx.amount)}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${getRiskBadgeClass(tx.riskAssessment)}`}>
                        {tx.riskAssessment}
                      </span>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
