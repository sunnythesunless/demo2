import React, { useState } from 'react';
import { CONSIGNMENT_MILESTONES, ORDER_PARCELS } from '../data/mockData';

interface TrackingScreenProps {
  onReorder: () => void;
  onOpenInvoice: () => void;
  onOpenPackingSlip: () => void;
  onOpenReschedule: () => void;
  onOpenHelpdesk: () => void;
  onNavigateToCheckout: () => void;
}

export const TrackingScreen: React.FC<TrackingScreenProps> = ({
  onReorder,
  onOpenInvoice,
  onOpenPackingSlip,
  onOpenReschedule,
  onOpenHelpdesk,
  onNavigateToCheckout,
}) => {
  const [copiedAWB, setCopiedAWB] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleCopyAWB = () => {
    navigator.clipboard.writeText('AWB-BLD-882910485').catch(() => {});
    setCopiedAWB(true);
    setTimeout(() => setCopiedAWB(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Everbright Uniform Shipment Tracking',
        text: 'Tracking for Order #ORD-2025-8842 (100 Scrub Sets) via BlueDart.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).catch(() => {});
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="flex flex-col w-full px-4 py-3 gap-4 max-w-2xl mx-auto">
      {/* Status & Order Header Card */}
      <div className="flex flex-col bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] gap-3 relative overflow-hidden">
        {/* Subtle architectural background accent */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#ffdcc3]/40 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 mb-1 flex-wrap">
              <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] bg-[#dce9ff] text-[#0b1c30] text-[11px] font-bold">
                #ORD-2025-8842
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] bg-[#ffdcc3] text-[#6e3900] text-[10px] font-bold uppercase">
                Tier 1 B2B
              </span>
            </div>
            <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0b1c30] tracking-tight leading-snug">
              Medical Scrub Sets
            </h1>
            <p className="text-[13px] text-[#45464d] mt-0.5">
              Apex Healthcare HQ • 100 Units
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              id="share-tracker"
              aria-label="Share tracking update"
              onClick={handleShare}
              className="w-10 h-10 rounded-lg bg-[#e5eeff] hover:bg-[#dce9ff] flex items-center justify-center text-[#0b1c30] active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">
                {copiedShare ? 'check' : 'share'}
              </span>
            </button>
          </div>
        </div>

        {/* Pulsing Transit Status Banner */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#fe932c] text-[#663500] shadow-sm mt-1">
          <div className="relative flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-[#663500]/15">
            <span className="material-symbols-outlined text-[20px] text-[#663500]">
              local_shipping
            </span>
            <span className="absolute inset-0 rounded-full animate-ping bg-[#663500]/25"></span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] uppercase tracking-wider text-[#663500]/90 font-bold">
              Current Status
            </span>
            <span className="text-[15px] sm:text-[16px] leading-tight text-[#663500] truncate font-extrabold">
              In Transit • Arriving Thu, Apr 5
            </span>
          </div>
        </div>
      </div>

      {/* Live Visual Milestone Stepper */}
      <div className="flex flex-col bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00] text-[22px]">
              route
            </span>
            <h2 className="text-[16px] text-[#0b1c30] font-bold">
              Consignment Milestones
            </h2>
          </div>
          <span className="text-[11px] text-[#45464d] bg-[#e5eeff] font-semibold px-2 py-0.5 rounded-[2px]">
            4 of 5 Stages
          </span>
        </div>

        {/* Stepper List */}
        <div className="relative flex flex-col pl-2 gap-4">
          {/* Continuous Background Track Line */}
          <div className="absolute left-[19px] top-3 bottom-6 w-[2px] bg-[#dce9ff] z-0"></div>
          {/* Progress Fill Segment (Steps 1 to 4) */}
          <div className="absolute left-[19px] top-3 h-[75%] w-[2px] bg-[#000000] z-0"></div>

          {/* Step 1 (Completed) */}
          <div className="relative flex items-start gap-3 z-10">
            <div className="w-6 h-6 rounded-full bg-[#000000] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <span className="material-symbols-outlined text-[14px]">check</span>
            </div>
            <div className="flex flex-col flex-1 min-w-0 pb-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-[14px] text-[#0b1c30] font-semibold truncate">
                  Order Placed & Advance Confirmed
                </h3>
                <span className="text-[11px] text-[#45464d] shrink-0 font-medium">
                  Mar 30, 11:42 AM
                </span>
              </div>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                GST PO Verified (#PO-77291) • Payment Gate Cleared
              </p>
            </div>
          </div>

          {/* Step 2 (Completed) */}
          <div className="relative flex items-start gap-3 z-10">
            <div className="w-6 h-6 rounded-full bg-[#000000] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <span className="material-symbols-outlined text-[14px]">check</span>
            </div>
            <div className="flex flex-col flex-1 min-w-0 pb-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-[14px] text-[#0b1c30] font-semibold truncate">
                  Artwork & Custom Embroidery QC
                </h3>
                <span className="text-[11px] text-[#45464d] shrink-0 font-medium">
                  Mar 31, 02:15 PM
                </span>
              </div>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                Left Chest & Sleeve Digitized Seal Approved by Client
              </p>
              <div className="flex items-center gap-1.5 mt-1.5 text-[#0b1c30]">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[2px] bg-[#e5eeff] text-[#0b1c30] text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px] text-[#904d00]">verified</span>
                  Digital Proof Signed
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 (Completed) */}
          <div className="relative flex items-start gap-3 z-10">
            <div className="w-6 h-6 rounded-full bg-[#000000] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <span className="material-symbols-outlined text-[14px]">check</span>
            </div>
            <div className="flex flex-col flex-1 min-w-0 pb-1">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-[14px] text-[#0b1c30] font-semibold truncate">
                  Production & Industrial Packaging
                </h3>
                <span className="text-[11px] text-[#45464d] shrink-0 font-medium">
                  Apr 01, 05:30 PM
                </span>
              </div>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                Everbright Textile Hub 4, Surat • Box Seal #99281
              </p>
            </div>
          </div>

          {/* Step 4 (ACTIVE / Pulsing Glow) */}
          <div className="relative flex items-start gap-3 z-10">
            <div className="relative shrink-0 mt-0.5">
              <div className="w-6 h-6 rounded-full bg-[#fe932c] text-[#663500] flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[15px] animate-spin" style={{ animationDuration: '4s' }}>
                  sync
                </span>
              </div>
              <span className="absolute -inset-1 rounded-full bg-[#fe932c]/40 animate-ping"></span>
            </div>
            <div className="flex flex-col flex-1 min-w-0 p-3 rounded-lg bg-[#eff4ff] border border-[#dce9ff] shadow-sm">
              <div className="flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#fe932c]"></span>
                  <h3 className="text-[14px] text-[#0b1c30] font-bold">
                    Shipped via BlueDart Cargo
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-[#904d00]">
                  Today, 09:10 AM
                </span>
              </div>
              <p className="text-[12px] text-[#0b1c30] mt-1 font-medium">
                Bhiwandi Sorting Center ➔ En route Mumbai Central Gateway
              </p>
              <div className="mt-2 flex items-center justify-between text-[#45464d] text-[10px] font-semibold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px] text-[#904d00]">
                    flight_takeoff
                  </span>
                  Express Freight #BD-449
                </span>
                <span className="text-[#0b1c30] bg-white/70 px-1.5 py-0.5 rounded">GPS Verified</span>
              </div>
            </div>
          </div>

          {/* Step 5 (Upcoming) */}
          <div className="relative flex items-start gap-3 z-10 opacity-70">
            <div className="w-6 h-6 rounded-full bg-[#dce9ff] text-[#45464d] flex items-center justify-center shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[14px]">home_work</span>
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h3 className="text-[14px] text-[#0b1c30] font-medium">
                  Delivered to Customer Premises
                </h3>
                <span className="text-[11px] text-[#45464d]">
                  Est. Apr 05, 02:00 PM
                </span>
              </div>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                Signature verification required at Gate 3 Receiving Dock
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Courier Partner & AWB Card */}
      <div className="flex flex-col bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[2px] bg-[#000000] text-white flex items-center justify-center font-bold text-xs tracking-wider">
              BD
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] font-bold text-[#0b1c30] leading-tight">
                BlueDart Express Air
              </span>
              <span className="text-[10px] text-[#45464d] uppercase tracking-wider font-semibold">
                Priority Corporate Logix
              </span>
            </div>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] bg-[#dce9ff] text-[#0b1c30] text-[10px] font-semibold">
            Surface + Air Cargo
          </span>
        </div>

        {/* AWB Copy Bar */}
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff] mt-1">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-[#45464d] uppercase tracking-wider font-semibold">
              Air Waybill (AWB)
            </span>
            <span className="text-[13px] text-[#0b1c30] font-bold tracking-wide" id="awb-text">
              AWB-BLD-882910485
            </span>
          </div>
          <button
            type="button"
            id="copy-awb-btn"
            onClick={handleCopyAWB}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold active:scale-95 transition-all ${
              copiedAWB 
                ? 'bg-[#ffdcc3] text-[#6e3900]' 
                : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#dce9ff]'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">
              {copiedAWB ? 'check' : 'content_copy'}
            </span>
            <span>{copiedAWB ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Live Gateway Location Ping */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#eff4ff]/60 border border-[#e5eeff] mt-0.5">
          <span className="material-symbols-outlined text-[#904d00] text-[18px] shrink-0 mt-0.5">
            radar
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#0b1c30]">
              Live Checkpoint Transit Log
            </span>
            <span className="text-[12px] text-[#45464d]">
              Processed at Mumbai Central Air Cargo Gateway Hub #04. Bagged for secondary sorting.
            </span>
          </div>
        </div>

        {/* Portal Tracking Link Button */}
        <a
          className="flex items-center justify-center gap-2 w-full py-2.5 mt-1 rounded-lg bg-[#000000] text-white text-[13px] font-bold active:scale-[0.99] transition-transform hover:bg-[#1e293b]"
          href="https://www.bluedart.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Track on Official BlueDart Portal</span>
          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
        </a>
      </div>

      {/* Delivery Contact & Receiving Dock Info */}
      <div className="flex flex-col bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] gap-2.5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#904d00] text-[20px]">
            location_on
          </span>
          <h2 className="text-[16px] text-[#0b1c30] font-bold">
            Destination & Consignee
          </h2>
        </div>

        <div className="flex flex-col gap-2 p-3 rounded-lg bg-[#eff4ff] border border-[#dce9ff]">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#45464d] uppercase tracking-wider font-bold">
              Premises Address
            </span>
            <span className="text-[14px] font-bold text-[#0b1c30]">
              Apex Healthcare HQ, Tower B - Medical Store Bay
            </span>
            <span className="text-[12px] text-[#45464d]">
              Saki Vihar Road, Andheri East, Mumbai, MH - 400072
            </span>
          </div>

          <div className="h-[1px] bg-[#dce9ff] my-0.5"></div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#45464d] uppercase tracking-wider font-bold">
                Authorized Receiving Officer
              </span>
              <span className="text-[14px] font-bold text-[#0b1c30]">
                Mr. Vikram Mehta (Procurement)
              </span>
              <span className="text-[12px] text-[#45464d] font-semibold">
                +91 98201 54321
              </span>
            </div>
            <a
              aria-label="Call Consignee Officer"
              className="w-10 h-10 rounded-full bg-[#904d00] text-white flex items-center justify-center active:scale-95 shadow-sm hover:bg-[#6e3900] transition-colors"
              href="tel:+919820154321"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Package Breakdown & Compliance Documents */}
      <div className="flex flex-col bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00] text-[20px]">
              inventory_2
            </span>
            <h2 className="text-[16px] text-[#0b1c30] font-bold">
              Package Contents (2 Parcels)
            </h2>
          </div>
          <span className="text-[11px] text-[#45464d] font-semibold">
            Total: 42.5 kg
          </span>
        </div>

        {ORDER_PARCELS.map((parcel) => (
          <div
            key={parcel.id}
            className="flex items-center justify-between p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#e5eeff] flex items-center justify-center text-[#0b1c30] text-xs font-bold">
                {parcel.id}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[13px] font-bold text-[#0b1c30]">
                  {parcel.cartonNumber} • {parcel.quantity} Sets
                </span>
                <span className="text-[11px] text-[#45464d] truncate">
                  {parcel.description}
                </span>
              </div>
            </div>
            <span className="text-xs text-[#45464d] font-bold shrink-0 ml-2">
              {parcel.weight.toFixed(1)} kg
            </span>
          </div>
        ))}

        {/* Fast Document Downloads */}
        <div className="flex items-center gap-2 pt-2">
          <button
            type="button"
            onClick={onOpenInvoice}
            className="flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-lg bg-[#e5eeff] text-[#0b1c30] text-[11px] font-bold hover:bg-[#dce9ff] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[16px] text-[#904d00]">
              description
            </span>
            <span className="truncate">GST Tax Invoice #8842</span>
          </button>
          <button
            type="button"
            onClick={onOpenPackingSlip}
            className="flex items-center justify-center gap-1.5 flex-1 py-2.5 px-3 rounded-lg bg-[#e5eeff] text-[#0b1c30] text-[11px] font-bold hover:bg-[#dce9ff] active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[16px] text-[#904d00]">
              picture_as_pdf
            </span>
            <span className="truncate">Packing Slip Manifest</span>
          </button>
        </div>
      </div>

      {/* Help & Rapid Reorder Actions */}
      <div className="flex flex-col gap-2.5 mb-6">
        {/* Reorder Button */}
        <button
          type="button"
          onClick={onReorder}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-[#904d00] text-white text-[15px] font-bold shadow-md hover:bg-[#7a3f00] active:scale-[0.98] transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">repeat</span>
          <span>Reorder Same Uniform Batch</span>
        </button>

        {/* Support / Reschedule Secondary Actions */}
        <div className="flex items-center justify-between px-1">
          <button
            type="button"
            onClick={onOpenReschedule}
            className="flex items-center gap-1 text-[#45464d] hover:text-[#0b1c30] text-[11px] font-semibold py-1"
          >
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            <span>Reschedule Dock Delivery</span>
          </button>
          <button
            type="button"
            onClick={onOpenHelpdesk}
            className="flex items-center gap-1 text-[#904d00] hover:text-[#6e3900] text-[11px] py-1 font-bold"
          >
            <span className="material-symbols-outlined text-[16px]">support_agent</span>
            <span>Everbright Logistics Helpdesk</span>
          </button>
        </div>

        {/* Quick link to View Checkout Spec */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onNavigateToCheckout}
            className="text-[12px] text-[#45464d] hover:text-[#0b1c30] underline inline-flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[14px]">receipt_long</span>
            <span>Review Delivery & Tax Specs for this order</span>
          </button>
        </div>
      </div>
    </div>
  );
};
