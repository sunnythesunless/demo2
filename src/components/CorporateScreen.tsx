import React, { useState } from 'react';

interface CorporateScreenProps {
  onOpenInvoice: () => void;
  onOpenHelpdesk: () => void;
  onNavigateToTracking: () => void;
}

export const CorporateScreen: React.FC<CorporateScreenProps> = ({
  onOpenInvoice,
  onOpenHelpdesk,
  onNavigateToTracking,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadContract = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="flex flex-col w-full pb-10 max-w-2xl mx-auto px-4 py-3 gap-4">
      {/* Corporate Institution Profile Card */}
      <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#131b2e] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <span className="material-symbols-outlined text-[28px]">corporate_fare</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <h1 className="text-[17px] font-bold text-[#0b1c30]">
                  Apex Healthcare Systems Ltd
                </h1>
                <span className="px-1.5 py-0.5 rounded-[2px] bg-[#ffdcc3] text-[#6e3900] text-[10px] font-bold uppercase">
                  Tier 1 Enterprise
                </span>
              </div>
              <span className="text-[12px] text-[#45464d]">
                Healthcare Hospital Network • Account #EB-CORP-4882
              </span>
            </div>
          </div>
        </div>

        {/* GST & Verification Matrix */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#e5eeff]">
          <div className="p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff]">
            <span className="text-[10px] font-bold text-[#45464d] uppercase block">
              GSTIN (Verified Active)
            </span>
            <span className="text-[13px] font-bold text-[#0b1c30] tracking-wide">
              27AABCA1234F1Z5
            </span>
            <span className="text-[10px] text-[#904d00] font-bold block mt-0.5">
              18% ITC Auto-Credited
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff]">
            <span className="text-[10px] font-bold text-[#45464d] uppercase block">
              CIN Registration
            </span>
            <span className="text-[13px] font-bold text-[#0b1c30] tracking-wide">
              U85110MH2012PTC229
            </span>
            <span className="text-[10px] text-[#45464d] font-semibold block mt-0.5">
              Govt. MCA Registered
            </span>
          </div>
        </div>
      </div>

      {/* Net-30 Institutional Credit Line Facility */}
      <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00] text-[20px]">
              account_balance
            </span>
            <h2 className="text-[15px] font-bold text-[#0b1c30]">
              Net-30 Corporate Revolving Credit
            </h2>
          </div>
          <span className="px-2 py-0.5 bg-[#dce9ff] text-[#0b1c30] text-[10px] font-bold rounded">
            Pre-Approved
          </span>
        </div>

        {/* Credit Meter */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-[12px]">
            <span className="text-[#45464d]">Utilized: ₹61,171.20</span>
            <span className="font-bold text-[#0b1c30]">Limit: ₹5,00,000.00</span>
          </div>
          <div className="w-full h-2.5 bg-[#e5eeff] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#904d00] rounded-full"
              style={{ width: '12.2%' }}
            ></div>
          </div>
          <div className="flex justify-between text-[11px] text-[#45464d]">
            <span>Active Bill Cycle: Apr 2025</span>
            <span className="text-[#904d00] font-bold">
              Available: ₹4,38,828.80
            </span>
          </div>
        </div>
      </div>

      {/* Active Consignments Shortcut */}
      <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00] text-[20px]">
              local_shipping
            </span>
            <h2 className="text-[15px] font-bold text-[#0b1c30]">
              Active Institutional Consignment
            </h2>
          </div>
          <span className="text-[11px] font-bold text-[#904d00] bg-[#ffdcc3] px-2 py-0.5 rounded">
            In Transit
          </span>
        </div>

        <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff] flex items-center justify-between">
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-bold text-[#0b1c30]">
              #ORD-2025-8842 • 100 Scrub Sets
            </span>
            <span className="text-[11px] text-[#45464d]">
              BlueDart Air Express • ETA Apr 05, 02:00 PM
            </span>
          </div>
          <button
            type="button"
            onClick={onNavigateToTracking}
            className="px-3 py-1.5 bg-[#000000] text-white text-[11px] font-bold rounded-[4px] hover:bg-[#1e293b] active:scale-95 transition-all shrink-0"
          >
            Track Live
          </button>
        </div>
      </div>

      {/* Master Agreements & Documents */}
      <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#904d00] text-[20px]">
            folder_shared
          </span>
          <h2 className="text-[15px] font-bold text-[#0b1c30]">
            Procurement Contract & Rate Cards
          </h2>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 bg-[#eff4ff] rounded-lg border border-[#dce9ff] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#904d00] text-[20px]">
                verified
              </span>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-[#0b1c30]">
                  Master Rate Agreement (2025–2026)
                </span>
                <span className="text-[10px] text-[#45464d]">
                  Fixed wholesale pricing across 5 categories
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleDownloadContract}
              className="p-1.5 text-[#0b1c30] hover:bg-[#e5eeff] rounded"
            >
              <span className="material-symbols-outlined text-[18px]">
                {downloadSuccess ? 'check' : 'download'}
              </span>
            </button>
          </div>

          <div className="p-2.5 bg-[#eff4ff] rounded-lg border border-[#dce9ff] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#904d00] text-[20px]">
                receipt
              </span>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-[#0b1c30]">
                  GST Tax Invoice #8842 (₹61,171.20)
                </span>
                <span className="text-[10px] text-[#45464d]">
                  Generated with e-Way Bill & IRN QR
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenInvoice}
              className="p-1.5 text-[#0b1c30] hover:bg-[#e5eeff] rounded"
            >
              <span className="material-symbols-outlined text-[18px]">visibility</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Procurement Contacts */}
      <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-2.5">
        <h2 className="text-[15px] font-bold text-[#0b1c30]">
          Authorized Officers
        </h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#eff4ff] border border-[#dce9ff]">
            <div>
              <span className="text-[13px] font-bold text-[#0b1c30] block">
                Vikram Mehta
              </span>
              <span className="text-[11px] text-[#45464d]">
                Head of Procurement • Primary Signatory
              </span>
            </div>
            <span className="text-[11px] text-[#45464d] font-semibold">+91 98201 44892</span>
          </div>

          <div className="flex items-center justify-between p-2 rounded-lg bg-[#eff4ff] border border-[#dce9ff]">
            <div>
              <span className="text-[13px] font-bold text-[#0b1c30] block">
                Dr. Priya Sen
              </span>
              <span className="text-[11px] text-[#45464d]">
                Medical Superintendent • Clinical QC
              </span>
            </div>
            <span className="text-[11px] text-[#45464d] font-semibold">+91 98209 11029</span>
          </div>
        </div>
      </div>

      {/* Direct Key Account Manager Banner */}
      <div className="bg-[#eff4ff] rounded-xl p-3.5 border border-[#dce9ff] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#ffdcc3] text-[#904d00] flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">support_agent</span>
          </div>
          <div>
            <span className="text-[12px] font-bold text-[#0b1c30] block">
              Dedicated Key Account Manager
            </span>
            <span className="text-[11px] text-[#45464d]">
              Rajesh Singhania (Sr. Enterprise Director)
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onOpenHelpdesk}
          className="px-3 py-1.5 bg-[#904d00] text-white text-[11px] font-bold rounded hover:bg-[#6e3900] transition-colors"
        >
          Call Desk
        </button>
      </div>
    </div>
  );
};
