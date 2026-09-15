import React, { useState } from 'react';

interface TaxInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaxInvoiceModal: React.FC<TaxInvoiceModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border border-[#dce9ff] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e5eeff] bg-[#eff4ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00]">receipt_long</span>
            <div>
              <h3 className="text-[16px] font-bold text-[#0b1c30]">
                Official GST Tax Invoice #8842
              </h3>
              <span className="text-[11px] text-[#45464d]">
                B2B Electronic Tax Invoice (Rule 48(4) CGST)
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#45464d] hover:bg-[#e5eeff] hover:text-[#0b1c30]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Invoice Body */}
        <div className="p-4 space-y-4 text-[12px] text-[#0b1c30]">
          {/* Top IRN & QR Strip */}
          <div className="p-3 bg-[#f8f9ff] rounded-lg border border-[#dce9ff] flex items-center justify-between gap-3">
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] font-bold uppercase text-[#45464d]">
                Invoice Reference Number (IRN)
              </span>
              <span className="font-mono text-[11px] text-[#0b1c30] truncate font-bold">
                4a8f3b92c1094892e8c2794821a7304918239081294821739018420918239048
              </span>
              <span className="text-[10px] text-[#904d00] font-bold mt-0.5">
                E-Way Bill: #2819-0194-8842 (Active BlueDart)
              </span>
            </div>
            <div className="w-12 h-12 bg-white border border-[#c6c6cd] flex items-center justify-center p-1 rounded shrink-0">
              <span className="material-symbols-outlined text-[32px] text-[#0b1c30]">qr_code_2</span>
            </div>
          </div>

          {/* Supplier & Consignee Columns */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-[#eff4ff] border border-[#dce9ff]">
              <span className="text-[10px] font-bold uppercase text-[#45464d] block">
                Supplier (Seller)
              </span>
              <span className="text-[13px] font-bold text-[#0b1c30] block">
                Everbright Uniforms LLP
              </span>
              <p className="text-[11px] text-[#45464d] mt-0.5 leading-tight">
                Plot 48, GIDC Industrial Estate, Sachin, Surat, Gujarat - 394230
              </p>
              <div className="mt-1 font-mono text-[11px] font-bold text-[#0b1c30]">
                GSTIN: 24AAFFE1234F1Z8
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#eff4ff] border border-[#dce9ff]">
              <span className="text-[10px] font-bold uppercase text-[#45464d] block">
                Billed & Shipped To (Buyer)
              </span>
              <span className="text-[13px] font-bold text-[#0b1c30] block">
                Apex Healthcare Systems Ltd
              </span>
              <p className="text-[11px] text-[#45464d] mt-0.5 leading-tight">
                Unit 402, Lotus Corporate Park, Goregaon-Powai Rd, Mumbai - 400063
              </p>
              <div className="mt-1 font-mono text-[11px] font-bold text-[#0b1c30]">
                GSTIN: 27AABCA1234F1Z5
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="border border-[#dce9ff] rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead className="bg-[#e5eeff] text-[#0b1c30] font-bold">
                <tr>
                  <th className="p-2">Description</th>
                  <th className="p-2">HSN</th>
                  <th className="p-2 text-right">Qty</th>
                  <th className="p-2 text-right">Rate</th>
                  <th className="p-2 text-right">Taxable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5eeff]">
                <tr>
                  <td className="p-2 font-medium">
                    Medical Pro Scrubs (Navy Blue)
                    <div className="text-[10px] text-[#45464d]">Size M (60), Size L (40)</div>
                  </td>
                  <td className="p-2 font-mono">6211</td>
                  <td className="p-2 text-right font-bold">100</td>
                  <td className="p-2 text-right">₹518.40</td>
                  <td className="p-2 text-right font-bold">₹51,840.00</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">
                    Apex Hospital Crest Digitized Embroidery
                    <div className="text-[10px] text-[#45464d]">Vector DST Approved (Waived)</div>
                  </td>
                  <td className="p-2 font-mono">5810</td>
                  <td className="p-2 text-right font-bold">100</td>
                  <td className="p-2 text-right text-[#904d00]">FREE</td>
                  <td className="p-2 text-right font-bold">₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Tax Ledger Summary */}
          <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff] space-y-1 text-[12px]">
            <div className="flex justify-between text-[#45464d]">
              <span>Taxable Value:</span>
              <span className="font-bold text-[#0b1c30]">₹51,840.00</span>
            </div>
            <div className="flex justify-between text-[#45464d]">
              <span>Integrated IGST (18% Inter-state):</span>
              <span className="font-bold text-[#0b1c30]">₹9,331.20</span>
            </div>
            <div className="flex justify-between text-[#45464d]">
              <span>Priority Air Logistics:</span>
              <span className="font-bold text-[#904d00]">FREE</span>
            </div>
            <div className="flex justify-between text-[14px] font-bold text-[#000000] pt-1.5 border-t border-[#dce9ff]">
              <span>Total Invoice Amount:</span>
              <span className="text-[#904d00] font-extrabold">₹61,171.20</span>
            </div>
            <div className="text-[10px] text-[#45464d] italic text-right">
              Amount in words: Sixty One Thousand One Hundred Seventy One Rupees and Twenty Paise Only
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#e5eeff] bg-[#f8f9ff] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-[#c6c6cd] text-[#0b1c30] text-[12px] font-bold hover:bg-white"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#000000] text-white text-[12px] font-bold hover:bg-[#1e293b] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">
              {downloaded ? 'check' : 'download'}
            </span>
            <span>{downloaded ? 'Downloaded PDF!' : 'Download Signed PDF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
