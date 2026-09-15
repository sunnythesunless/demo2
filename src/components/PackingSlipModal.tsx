import React from 'react';
import { ORDER_PARCELS } from '../data/mockData';

interface PackingSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PackingSlipModal: React.FC<PackingSlipModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-[#dce9ff] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-[#e5eeff] bg-[#eff4ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00]">inventory</span>
            <h3 className="text-[16px] font-bold text-[#0b1c30]">
              Packing Slip & Cargo Manifest
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

        <div className="p-4 space-y-3 text-[12px]">
          <div className="grid grid-cols-2 gap-2 p-3 bg-[#f8f9ff] rounded-lg border border-[#dce9ff]">
            <div>
              <span className="text-[10px] text-[#45464d] uppercase font-bold block">Manifest No</span>
              <span className="font-mono text-[12px] font-bold text-[#0b1c30]">MNF-EB-2025-0914</span>
            </div>
            <div>
              <span className="text-[10px] text-[#45464d] uppercase font-bold block">Box Security Seal</span>
              <span className="font-mono text-[12px] font-bold text-[#904d00]">#SEAL-99281 (Tamper-evident)</span>
            </div>
            <div>
              <span className="text-[10px] text-[#45464d] uppercase font-bold block">Consignee Bay</span>
              <span className="text-[12px] font-medium text-[#0b1c30]">Gate 3 Medical Bay</span>
            </div>
            <div>
              <span className="text-[10px] text-[#45464d] uppercase font-bold block">Gross Consignment Weight</span>
              <span className="text-[12px] font-bold text-[#0b1c30]">42.5 kg (2 Cartons)</span>
            </div>
          </div>

          <div className="border border-[#dce9ff] rounded-lg overflow-hidden">
            <div className="bg-[#e5eeff] p-2 text-[11px] font-bold text-[#0b1c30]">
              Carton Packaging Breakdown
            </div>
            <div className="divide-y divide-[#e5eeff]">
              {ORDER_PARCELS.map((p) => (
                <div key={p.id} className="p-2.5 flex items-center justify-between text-[11px]">
                  <div>
                    <span className="font-bold text-[#0b1c30] block">{p.cartonNumber}</span>
                    <span className="text-[#45464d]">{p.description}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#0b1c30] block">{p.weight} kg</span>
                    <span className="text-[#45464d]">{p.quantity} Units</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff] flex items-center justify-between text-[11px]">
            <div>
              <span className="font-bold text-[#0b1c30] block">Surat Production Hub QC Sign-Off</span>
              <span className="text-[#45464d]">Inspected by Lead Inspector: R. K. Patel</span>
            </div>
            <span className="material-symbols-outlined text-[24px] text-[#904d00]">verified</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-[#000000] text-white font-bold text-[12px]"
          >
            Close Manifest
          </button>
        </div>
      </div>
    </div>
  );
};
