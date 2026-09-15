import React, { useState } from 'react';
import { SCRUBS_IMAGE_URL, EMBROIDERY_IMAGE_URL } from '../data/mockData';

interface OrderSuccessScreenProps {
  onTrackDispatch: () => void;
  onReturnCatalog: () => void;
  onOpenInvoice: () => void;
}

export const OrderSuccessScreen: React.FC<OrderSuccessScreenProps> = ({
  onTrackDispatch,
  onReturnCatalog,
  onOpenInvoice,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText('#ORD-2025-8842').catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full px-4 py-4 gap-4 max-w-2xl mx-auto">
      {/* Success Banner & Celebration Header */}
      <div className="flex flex-col items-center text-center pt-2 pb-1">
        <div className="relative flex items-center justify-center w-20 h-20 mb-3">
          <div
            className="absolute inset-0 rounded-full bg-[#ffdcc3] opacity-70 animate-ping"
            style={{ animationDuration: '2.5s' }}
          ></div>
          <div className="relative w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border border-[#ffdcc3]">
            <div className="w-12 h-12 rounded-full bg-[#fe932c] flex items-center justify-center shadow-inner">
              <span
                className="material-symbols-outlined text-white text-[30px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[2px] bg-[#ffdcc3] text-[#2f1500] text-[11px] font-bold uppercase tracking-wider mb-1.5">
          Enterprise Bulk Authorized
        </span>
        <h1 className="text-[24px] sm:text-[26px] text-[#0b1c30] font-bold tracking-tight">
          Order Successfully Placed!
        </h1>
        <p className="text-[13px] text-[#45464d] max-w-sm mt-1 leading-relaxed">
          Thank you for choosing Everbright Uniforms. Your corporate bulk order has been logged and queued for embroidery production.
        </p>
      </div>

      {/* Key Metadata Card (Industrial Precision Layout) */}
      <div className="w-full bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase text-[#45464d] tracking-wider">
            Purchase Reference
          </span>
          <span className="text-[12px] text-[#45464d]">
            March 30, 2025 • 11:42 AM
          </span>
        </div>

        <div className="flex items-center justify-between bg-[#eff4ff] p-3 rounded-lg border border-[#dce9ff]">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#45464d] uppercase font-bold">
              Order ID
            </span>
            <span className="text-[14px] font-bold text-[#0b1c30]">
              #ORD-2025-8842
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyOrderId}
            className="flex items-center gap-1 px-3 py-1.5 rounded-[4px] bg-white text-[#0b1c30] border border-[#dce9ff] shadow-xs active:scale-95 transition-all text-[11px] font-bold"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#904d00] text-[20px] shrink-0 mt-0.5">
              verified
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] text-[#45464d] font-bold">
                Settlement Method
              </span>
              <span className="text-[12px] font-medium text-[#0b1c30] truncate">
                PAID via HDFC Corporate NetBanking (Txn: EB-901842)
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#904d00] text-[20px] shrink-0 mt-0.5">
              receipt_long
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] text-[#45464d] font-bold">
                GST Compliance (Tax Invoice)
              </span>
              <span className="text-[12px] font-medium text-[#0b1c30] truncate">
                Apex Health • GSTIN: 27AABCA1234F1Z5
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenInvoice}
          className="w-full mt-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-[4px] bg-[#dce9ff] hover:bg-[#cbdbf5] text-[#0b1c30] text-[12px] font-bold transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span>Download Tax Invoice (PDF & HSN Breakdown)</span>
        </button>
      </div>

      {/* Delivery & Fulfillment ETA */}
      <div className="w-full bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#e5eeff] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#904d00] text-[22px]">
              local_shipping
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] font-bold uppercase text-[#45464d]">
              Estimated Handover Window
            </span>
            <span className="text-[16px] font-bold text-[#0b1c30]">
              April 5 – April 7, 2025
            </span>
          </div>
        </div>

        <div className="bg-[#eff4ff] rounded-lg p-3 flex items-center justify-between border border-[#dce9ff]">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-[#fe932c] text-[18px]">
              bolt
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] text-[#0b1c30] font-bold truncate">
                BlueDart Enterprise Priority Cargo
              </span>
              <span className="text-[11px] text-[#45464d]">
                Manifest sync in progress; AWB activates in 12 hrs
              </span>
            </div>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-[#fe932c] shrink-0"></span>
        </div>
      </div>

      {/* Order Items Summary Card */}
      <div className="w-full bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase text-[#45464d] tracking-wider">
            Garment Manifest (2 Items)
          </span>
          <span className="text-[11px] font-bold text-[#904d00]">
            Batch Production
          </span>
        </div>

        {/* Line Item 1 */}
        <div className="flex gap-3 items-center py-1">
          <img
            className="w-16 h-16 rounded-lg object-cover bg-[#eff4ff] shrink-0 border border-[#dce9ff]"
            src={SCRUBS_IMAGE_URL}
            alt="Medical Pro Anti-Microbial Scrub Sets"
          />
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[14px] font-bold text-[#0b1c30] leading-tight truncate">
              Medical Pro Anti-Microbial Scrub Sets
            </span>
            <span className="text-[12px] text-[#45464d]">
              Navy Blue • 60x Size M / 40x Size L
            </span>
            <span className="text-[12px] font-extrabold text-[#0b1c30] mt-1">
              100 Units @ ₹518.40/ea
            </span>
          </div>
        </div>

        {/* Line Item 2 */}
        <div className="flex gap-3 items-center py-1">
          <img
            className="w-16 h-16 rounded-lg object-cover bg-[#eff4ff] shrink-0 border border-[#dce9ff]"
            src={EMBROIDERY_IMAGE_URL}
            alt="Precision Chest Embroidery"
          />
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[14px] font-bold text-[#0b1c30] leading-tight truncate">
              Precision Chest Embroidery
            </span>
            <span className="text-[12px] text-[#45464d]">
              Apex Hospital Crest • Left Yoke (Vector Approved)
            </span>
            <span className="text-[12px] font-extrabold text-[#0b1c30] mt-1">
              100 Applications Included
            </span>
          </div>
        </div>

        <div className="bg-[#eff4ff] rounded-lg p-3 flex flex-col gap-1 mt-1 border border-[#dce9ff]">
          <div className="flex justify-between items-center text-[#45464d] text-[12px]">
            <span>Subtotal (Excl. Tax)</span>
            <span>₹51,840.00</span>
          </div>
          <div className="flex justify-between items-center text-[#45464d] text-[12px]">
            <span>Integrated IGST (18%)</span>
            <span>₹9,331.20</span>
          </div>
          <div className="flex justify-between items-center text-[#0b1c30] pt-1 border-t border-[#dce9ff] text-[14px] font-bold">
            <span>Total Remitted</span>
            <span className="text-[#904d00] font-extrabold">₹61,171.20</span>
          </div>
        </div>
      </div>

      {/* Delivery Address Card */}
      <div className="w-full bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-[#45464d] mb-0.5">
          <span className="material-symbols-outlined text-[18px]">domain</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Consignee & Delivery Destination
          </span>
        </div>
        <span className="text-[14px] font-bold text-[#0b1c30]">
          Apex Healthcare Systems Ltd
        </span>
        <span className="text-[12px] font-semibold text-[#0b1c30]">
          Attn: Vikram Mehta (Procurement Lead)
        </span>
        <p className="text-[12px] text-[#45464d] leading-relaxed">
          Unit 402, Building 3, Lotus Corporate Park, Off Western Express Highway, Goregaon East, Mumbai, Maharashtra 400063
        </p>
      </div>

      {/* Primary Action CTAs */}
      <div className="w-full flex flex-col gap-2.5 pt-1">
        <button
          type="button"
          onClick={onTrackDispatch}
          className="w-full h-12 flex items-center justify-center gap-2 rounded-[4px] bg-[#000000] hover:bg-[#1e293b] text-white text-[14px] font-bold tracking-wide shadow-md active:scale-[0.99] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">explore</span>
          <span>Track Live Production & Dispatch</span>
        </button>

        <button
          type="button"
          onClick={onReturnCatalog}
          className="w-full h-11 flex items-center justify-center gap-2 rounded-[4px] bg-white hover:bg-[#eff4ff] text-[#0b1c30] text-[13px] font-bold border border-[#dce9ff] shadow-xs active:scale-[0.99] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">storefront</span>
          <span>Return to Uniform Catalog</span>
        </button>
      </div>

      {/* Dedicated Support Banner */}
      <div className="w-full bg-[#eff4ff] rounded-xl p-3.5 flex items-center gap-3 border border-[#dce9ff] mb-6">
        <div className="w-9 h-9 rounded-full bg-[#ffdcc3] flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-[#904d00] text-[20px]">
            headset_mic
          </span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[12px] font-bold text-[#0b1c30]">
            Need urgent order edits or size swaps?
          </span>
          <a
            className="text-[12px] text-[#904d00] underline font-bold truncate hover:text-[#6e3900]"
            href="tel:+912248907700"
          >
            Dedicated B2B Desk: +91 (022) 4890-7700
          </a>
        </div>
      </div>
    </div>
  );
};
