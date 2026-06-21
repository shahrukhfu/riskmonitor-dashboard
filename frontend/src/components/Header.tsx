import React from 'react';

interface HeaderProps {
  isConnected: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isConnected }) => {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b border-outline-variant bg-surface flex justify-between items-center px-container-margin z-40">
      <div className="flex items-center bg-surface-container-low border border-outline-variant rounded px-3 py-1.5 w-96">
        <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
        <input 
          className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface placeholder:text-on-surface-variant w-full h-full py-0 outline-none" 
          placeholder="Search transactions, assets, or entities..." 
          type="text"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500 animate-pulse'}`}></span>
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
            {isConnected ? 'System Nominal' : 'System Offline'}
          </span>
        </div>
        <div className="h-6 w-[1px] bg-outline-variant"></div>
        <div className="flex items-center space-x-4">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">monitor_heart</span>
          <div className="relative cursor-pointer">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary">notifications</span>
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-error rounded-full"></span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer group">
            <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
            <span className="text-body-md text-on-surface-variant group-hover:text-primary">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};
