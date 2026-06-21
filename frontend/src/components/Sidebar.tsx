import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant bg-surface flex flex-col py-stack-lg z-50">
      <div className="px-6 mb-10">
        <h1 className="text-headline-md font-headline-md font-bold text-primary">AlphaRisk</h1>
        <p className="text-label-sm text-on-surface-variant mt-1 opacity-60">Terminal v2.4</p>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {/* Dashboard Active */}
        <a className="flex items-center px-3 py-2 text-primary font-bold border-r-2 border-primary bg-secondary-container transition-colors duration-200" href="#">
          <span className="material-symbols-outlined mr-3">dashboard</span>
          <span className="font-body-md text-body-md">Dashboard</span>
        </a>
        <a className="flex items-center px-3 py-2 text-on-surface-variant font-body-md hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" href="#">
          <span className="material-symbols-outlined mr-3">security</span>
          <span className="font-body-md text-body-md">Risk Analysis</span>
        </a>
        <a className="flex items-center px-3 py-2 text-on-surface-variant font-body-md hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" href="#">
          <span className="material-symbols-outlined mr-3">account_balance_wallet</span>
          <span className="font-body-md text-body-md">Portfolio</span>
        </a>
        <a className="flex items-center px-3 py-2 text-on-surface-variant font-body-md hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" href="#">
          <span className="material-symbols-outlined mr-3">rule</span>
          <span className="font-body-md text-body-md">Compliance</span>
        </a>
        <a className="flex items-center px-3 py-2 text-on-surface-variant font-body-md hover:bg-surface-container-high hover:text-on-surface transition-colors duration-200" href="#">
          <span className="material-symbols-outlined mr-3">settings</span>
          <span className="font-body-md text-body-md">Settings</span>
        </a>
      </nav>
      <div className="px-6 mt-auto space-y-4">
        <button className="w-full py-2 px-4 border border-outline-variant text-on-surface font-body-md hover:bg-surface-container-high transition-colors">
          Generate Report
        </button>
        <div className="pt-4 border-t border-outline-variant space-y-2">
          <a className="flex items-center text-on-surface-variant hover:text-on-surface text-label-sm" href="#">
            <span className="material-symbols-outlined text-[18px] mr-2">help</span> Support
          </a>
          <a className="flex items-center text-on-surface-variant hover:text-on-surface text-label-sm" href="#">
            <span className="material-symbols-outlined text-[18px] mr-2">logout</span> Sign Out
          </a>
        </div>
      </div>
    </aside>
  );
};
