import React from 'react';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTracking: () => void;
  onNavigateToInvoice: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateToTracking,
  onNavigateToInvoice,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="bg-white w-full max-w-sm h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
        <div className="p-4 border-b border-[#e5eeff] bg-[#eff4ff] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00]">notifications</span>
            <h3 className="text-[16px] font-bold text-[#0b1c30]">
              Consignment Alerts
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

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {/* Notification 1 */}
          <div
            onClick={() => {
              onNavigateToTracking();
              onClose();
            }}
            className="p-3 bg-[#eff4ff] hover:bg-[#e5eeff] rounded-xl border border-[#dce9ff] cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase text-[#904d00] bg-[#ffdcc3] px-1.5 py-0.5 rounded">
                BlueDart Air Dispatch
              </span>
              <span className="text-[10px] text-[#45464d]">12m ago</span>
            </div>
            <div className="text-[13px] font-bold text-[#0b1c30]">
              Consignment #8842 Departed Mumbai Hub
            </div>
            <div className="text-[11px] text-[#45464d] mt-0.5">
              Air courier transfer initiated. Next checkpoint: Andheri Distribution Center.
            </div>
          </div>

          {/* Notification 2 */}
          <div
            onClick={() => {
              onNavigateToInvoice();
              onClose();
            }}
            className="p-3 bg-[#eff4ff] hover:bg-[#e5eeff] rounded-xl border border-[#dce9ff] cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase text-[#0b1c30] bg-[#dce9ff] px-1.5 py-0.5 rounded">
                GST Tax Compliance
              </span>
              <span className="text-[10px] text-[#45464d]">2h ago</span>
            </div>
            <div className="text-[13px] font-bold text-[#0b1c30]">
              E-Way Bill & IRN QR Generated
            </div>
            <div className="text-[11px] text-[#45464d] mt-0.5">
              Tax Invoice #8842 with 18% ITC credit uploaded for Apex Healthcare Systems Ltd.
            </div>
          </div>

          {/* Notification 3 */}
          <div className="p-3 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase text-[#6e3900] bg-[#ffdcc3] px-1.5 py-0.5 rounded">
                Quality Assurance
              </span>
              <span className="text-[10px] text-[#45464d]">Yesterday</span>
            </div>
            <div className="text-[13px] font-bold text-[#0b1c30]">
              Digital Embroidery Proof Approved
            </div>
            <div className="text-[11px] text-[#45464d] mt-0.5">
              Apex Hospital Crest (8,500 stitches) passed spectrophotometer color tolerance check.
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#e5eeff] bg-[#f8f9ff]">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 bg-[#000000] text-white text-[12px] font-bold rounded-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
