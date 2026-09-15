import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const navItems = [
    {
      id: 'shop-catalog' as TabType,
      label: 'Shop & Catalog',
      icon: 'storefront',
    },
    {
      id: 'bulk-rfq' as TabType,
      label: 'Bulk RFQ',
      icon: 'factory',
      hasBadge: true,
    },
    {
      id: 'checkout-orders' as TabType,
      label: 'Orders',
      icon: 'local_shipping',
    },
    {
      id: 'corporate-account' as TabType,
      label: 'Corporate',
      icon: 'domain',
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#ffffff]/95 backdrop-blur-xl border-t border-[#e5eeff] shadow-[0_-2px_12px_rgba(0,0,0,0.04)]">
      <div className="max-w-4xl mx-auto flex justify-around items-center h-16 px-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full min-w-0 py-1 transition-all group ${
                isActive ? 'text-[#904d00] font-bold' : 'text-[#45464d] hover:text-[#0b1c30]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span className={`material-symbols-outlined text-[22px] group-hover:scale-105 transition-transform ${
                  isActive ? 'font-bold' : ''
                }`}>
                  {item.icon}
                </span>
                {item.hasBadge && (
                  <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-[#fe932c]"></span>
                )}
              </div>
              <span className={`text-[10px] tracking-tight truncate max-w-full px-0.5 mt-0.5 ${
                isActive ? 'font-semibold text-[#904d00]' : 'font-medium'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
