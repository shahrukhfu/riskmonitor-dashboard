import React from 'react';
import type { SystemAlert } from '../types';

interface SystemHealthProps {
  alerts: SystemAlert[];
}

export const SystemHealth: React.FC<SystemHealthProps> = ({ alerts }) => {
  const getAlertStyle = (type: 'critical' | 'info' | 'success') => {
    switch (type) {
      case 'critical':
        return 'bg-error-container/10 border-l-2 border-error';
      case 'success':
        return 'bg-surface-container-high/50 border-l-2 border-outline-variant opacity-60';
      case 'info':
      default:
        return 'bg-surface-container-high/50 border-l-2 border-outline-variant';
    }
  };

  const getAlertIcon = (type: 'critical' | 'info' | 'success') => {
    switch (type) {
      case 'critical':
        return 'report';
      case 'success':
        return 'check_circle';
      case 'info':
      default:
        return 'update';
    }
  };

  const getIconColor = (type: 'critical' | 'info' | 'success') => {
    switch (type) {
      case 'critical':
        return 'text-error';
      case 'success':
      case 'info':
      default:
        return 'text-on-surface-variant';
    }
  };

  return (
    <div className="bento-card p-6 flex flex-col h-[50%] min-h-[230px] overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-label-caps text-on-surface-variant tracking-widest uppercase font-bold">System Health</h3>
        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">info</span>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {alerts.length === 0 ? (
          <p className="text-label-sm text-on-surface-variant text-center py-6">No warnings or activities logged.</p>
        ) : (
          alerts.map((alert) => (
            <div key={alert.id} className={`flex items-start space-x-3 p-3 rounded-r transition-all ${getAlertStyle(alert.type)}`}>
              <span className={`material-symbols-outlined ${getIconColor(alert.type)} text-[18px] mt-0.5`}>
                {getAlertIcon(alert.type)}
              </span>
              <div>
                <p className="text-body-md font-medium text-on-surface">{alert.title}</p>
                <p className="text-label-sm text-on-surface-variant mt-0.5">{alert.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
