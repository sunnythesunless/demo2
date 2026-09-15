import React, { useState } from 'react';

interface HelpdeskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpdeskModal: React.FC<HelpdeskModalProps> = ({ isOpen, onClose }) => {
  const [callbackScheduled, setCallbackScheduled] = useState(false);
  const [issueType, setIssueType] = useState('Immediate Consignment Delivery Escalation');

  if (!isOpen) return null;

  const handleRequestCallback = () => {
    setCallbackScheduled(true);
    setTimeout(() => {
      setCallbackScheduled(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-[#dce9ff] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-[#e5eeff] bg-[#eff4ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00]">support_agent</span>
            <h3 className="text-[16px] font-bold text-[#0b1c30]">
              Everbright Logistics Helpdesk
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
          {/* Direct Telephone Support */}
          <div className="p-3 bg-[#ffdcc3]/50 rounded-lg border border-[#ffb77d] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase text-[#6e3900] block">
                Dedicated Enterprise Hotline
              </span>
              <span className="text-[15px] font-extrabold text-[#0b1c30]">
                +91 (022) 4890-7700
              </span>
              <span className="text-[10px] text-[#45464d] block mt-0.5">
                Priority Tier 1 queue • 24/7 Dispatch Control
              </span>
            </div>
            <a
              href="tel:+912248907700"
              className="w-10 h-10 rounded-full bg-[#904d00] text-white flex items-center justify-center shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
              Select Request Type
            </label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] font-medium focus:bg-white focus:outline-none"
            >
              <option value="Immediate Consignment Delivery Escalation">
                Immediate Consignment Delivery Escalation
              </option>
              <option value="Uniform Size Run Adjustment / Swap">
                Uniform Size Run Adjustment / Swap
              </option>
              <option value="Embroidery Quality & Thread Proof Re-verification">
                Embroidery Quality & Thread Proof Re-verification
              </option>
              <option value="GST E-Way Bill / Invoicing Revision">
                GST E-Way Bill / Invoicing Revision
              </option>
            </select>
          </div>

          <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff] text-[11px] text-[#45464d]">
            Linked to: <strong className="text-[#0b1c30]">#ORD-2025-8842 (Apex Healthcare HQ)</strong>
            <br />
            Air Waybill: <strong className="text-[#0b1c30]">AWB-BLD-882910485</strong>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-[#c6c6cd] text-[#0b1c30] font-bold hover:bg-[#eff4ff]"
            >
              Close
            </button>
            <button
              type="button"
              disabled={callbackScheduled}
              onClick={handleRequestCallback}
              className="flex-1 py-2 rounded-lg bg-[#000000] text-white font-bold hover:bg-[#1e293b] active:scale-95 transition-all flex items-center justify-center gap-1"
            >
              {callbackScheduled ? (
                <>
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  <span>Officer Assigned!</span>
                </>
              ) : (
                'Request Priority Callback'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
