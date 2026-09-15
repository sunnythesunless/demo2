import React from 'react';
import { EVERBRIGHT_LOGO_URL, USER_AVATAR_URL } from '../data/mockData';
import { TabType, SubScreen } from '../types';

interface HeaderProps {
  activeTab: TabType;
  subScreen: SubScreen;
  onOpenNotifications: () => void;
  onOpenProfile: () => void;
  onNavigateTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  subScreen,
  onOpenNotifications,
  onOpenProfile,
  onNavigateTab,
}) => {
  const getSubtitle = () => {
    if (activeTab === 'bulk-rfq') return '• Bulk RFQ';
    if (activeTab === 'corporate-account') return '• Enterprise Account';
    if (activeTab === 'shop-catalog') return '• Catalog & Wholesale';
    if (subScreen === 'checkout') return '• Checkout & Tax Specs';
    if (subScreen === 'order-success') return '• Order Confirmed';
    return '• Consignment Tracking';
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#ffffff]/90 backdrop-blur-xl border-b border-[#e5eeff] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="max-w-4xl mx-auto h-16 px-4 flex items-center justify-between gap-3">
        <div 
          className="flex items-center gap-2.5 min-w-0 cursor-pointer select-none"
          onClick={() => onNavigateTab('shop-catalog')}
          role="button"
          tabIndex={0}
        >
          <img 
            alt="Everbright Uniform Logo" 
            className="h-8 w-auto object-contain flex-shrink-0" 
            src={EVERBRIGHT_LOGO_URL} 
          />
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#0b1c30] truncate">
              Everbright
            </span>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] bg-[#ffdcc3] text-[#6e3900] text-[10px] leading-tight font-bold uppercase tracking-tight">
                B2B Verified
              </span>
              <span className="text-[12px] text-[#45464d] hidden sm:inline">
                {getSubtitle()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button 
            type="button"
            aria-label="Notifications" 
            onClick={onOpenNotifications}
            className="relative w-10 h-10 rounded-lg flex items-center justify-center text-[#45464d] hover:text-[#0b1c30] hover:bg-[#eff4ff] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#fe932c] ring-2 ring-white"></span>
          </button>

          <button 
            type="button"
            aria-label="Account Profile" 
            onClick={onOpenProfile}
            className="w-10 h-10 rounded-full flex items-center justify-center p-0.5 hover:ring-2 hover:ring-[#fe932c] active:scale-95 transition-all"
          >
            <img 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover shadow-[0_1px_4px_rgba(0,0,0,0.08)]" 
              src={USER_AVATAR_URL} 
            />
          </button>
        </div>
      </div>
    </header>
  );
};
