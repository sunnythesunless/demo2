import React from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCorporate: () => void;
  onNavigateToInvoice: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigateToCorporate,
  onNavigateToInvoice,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl border border-[#dce9ff] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-[#e5eeff] bg-[#eff4ff] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00]">account_circle</span>
            <h3 className="text-[16px] font-bold text-[#0b1c30]">
              Institutional Account
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#45464d] hover:bg-[#e5eeff]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-4 space-y-3.5 text-[12px]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#131b2e] text-white flex items-center justify-center font-bold text-[16px]">
              VM
            </div>
            <div>
              <div className="text-[14px] font-bold text-[#0b1c30]">Vikram Mehta</div>
              <div className="text-[11px] text-[#45464d]">Head of Procurement • Apex Healthcare</div>
              <div className="text-[10px] text-[#904d00] font-bold mt-0.5">Authorized Enterprise Signatory</div>
            </div>
          </div>

          <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff] space-y-1">
            <div className="flex justify-between">
              <span className="text-[#45464d]">Corporate ID:</span>
              <span className="font-bold text-[#0b1c30]">EB-CORP-4882</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#45464d]">GSTIN:</span>
              <span className="font-bold text-[#0b1c30]">27AABCA1234F1Z5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#45464d]">Credit Line:</span>
              <span className="font-bold text-[#904d00]">₹5,00,000 Net-30</span>
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <button
              type="button"
              onClick={() => {
                onNavigateToCorporate();
                onClose();
              }}
              className="w-full py-2 px-3 rounded-lg bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] text-left flex items-center justify-between font-bold"
            >
              <span>Manage Corporate Contracts</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigateToInvoice();
                onClose();
              }}
              className="w-full py-2 px-3 rounded-lg bg-[#eff4ff] hover:bg-[#e5eeff] text-[#0b1c30] text-left flex items-center justify-between font-bold"
            >
              <span>View GST Tax Invoices</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-[#000000] text-white text-[12px] font-bold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
