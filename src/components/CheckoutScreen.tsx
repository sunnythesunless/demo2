import React, { useState } from 'react';
import { CURRENT_ORDER_ITEMS } from '../data/mockData';

interface CheckoutScreenProps {
  onFinalizeOrder: () => void;
  onNavigateToTracking: () => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  onFinalizeOrder,
  onNavigateToTracking,
}) => {
  const [buyerType, setBuyerType] = useState<'b2b' | 'b2c'>('b2b');
  const [paymentMethod, setPaymentMethod] = useState<'po' | 'upi' | 'card'>('po');
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [consigneeName, setConsigneeName] = useState('Vikram Mehta');
  const [businessEntity, setBusinessEntity] = useState('Apex Healthcare Pvt Ltd');
  const [gstin, setGstin] = useState('27AABCA1234F1Z5');
  const [deliveryAddress, setDeliveryAddress] = useState('Unit 402, Lotus Corporate Park, Goregaon-Powai Link Rd');
  const [cityState, setCityState] = useState('Mumbai, Maharashtra');
  const [postalCode, setPostalCode] = useState('400063');
  const [mobile, setMobile] = useState('+91 98201 54321');

  const handleCheckoutDispatch = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onFinalizeOrder();
    }, 1300);
  };

  return (
    <div className="flex flex-col w-full px-4 py-3 gap-4 max-w-2xl mx-auto">
      {/* Navigation breadcrumb / return */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onNavigateToTracking}
          className="inline-flex items-center gap-1 text-[12px] font-bold text-[#904d00] hover:underline"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>View Live Tracking (#ORD-2025-8842)</span>
        </button>
        <span className="text-[11px] text-[#45464d] font-semibold bg-[#e5eeff] px-2 py-0.5 rounded">
          Secure Portal
        </span>
      </div>

      {/* Step Indicator */}
      <div className="bg-white p-3 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff]">
        <div className="flex items-center justify-between">
          {/* Step 1 */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-[#000000] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#0b1c30]">
                1. Delivery & Tax
              </span>
              <span className="text-[11px] text-[#904d00] font-bold">
                Verified & Active
              </span>
            </div>
          </div>

          <div className="h-0.5 w-10 sm:w-16 bg-[#ffdcc3]"></div>

          {/* Step 2 */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#45464d] text-[12px] font-bold">
              2
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#45464d]">
                2. Payment
              </span>
              <span className="text-[11px] text-[#45464d]">
                Final Review
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Buyer Type Toggle Pill */}
      <div className="bg-[#eff4ff] p-1 rounded-xl border border-[#dce9ff]">
        <div className="grid grid-cols-2 gap-1" id="buyer-type-toggle">
          <button
            type="button"
            onClick={() => setBuyerType('b2c')}
            className={`py-2 px-3 rounded-lg text-center transition-all text-[12px] font-bold ${
              buyerType === 'b2c'
                ? 'bg-white shadow-sm text-[#000000]'
                : 'text-[#45464d] hover:text-[#0b1c30]'
            }`}
          >
            B2C Retail Order
          </button>
          <button
            type="button"
            onClick={() => setBuyerType('b2b')}
            className={`py-2 px-3 rounded-lg text-center transition-all flex items-center justify-center gap-1.5 text-[12px] font-bold ${
              buyerType === 'b2b'
                ? 'bg-white shadow-sm text-[#000000]'
                : 'text-[#45464d] hover:text-[#0b1c30]'
            }`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#904d00]">
              domain
            </span>
            <span>B2B Corporate</span>
          </button>
        </div>
      </div>

      {/* GST Benefit Highlight Banner (Only when B2B is active) */}
      {buyerType === 'b2b' && (
        <div className="bg-[#ffdcc3]/60 p-3 rounded-xl flex items-start space-x-3 border border-[#ffb77d] transition-all">
          <div className="p-1.5 bg-[#fe932c] text-[#663500] rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-[16px]">receipt_long</span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[12px] text-[#2f1500] font-bold">
                18% GST Input Credit Guaranteed
              </span>
              <span className="bg-[#904d00] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] uppercase tracking-wider">
                HSN 6211
              </span>
            </div>
            <p className="text-[12px] text-[#6e3900] mt-0.5 font-medium">
              Official B2B e-invoice generated with GSTIN & CIN. Save up to ₹9,331 on this order.
            </p>
          </div>
        </div>
      )}

      {/* Delivery & Institutional Tax Entity Card */}
      <div className="bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[#904d00] text-[20px]">
              local_shipping
            </span>
            <h2 className="text-[16px] font-bold text-[#0b1c30]">
              Delivery & Tax Specs
            </h2>
          </div>
          <button
            type="button"
            className="text-[12px] text-[#904d00] font-bold hover:underline flex items-center gap-0.5"
          >
            Change <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>

        {/* Quick Selected Dispatch Entity */}
        <div className="bg-[#eff4ff] p-3 rounded-lg flex items-start justify-between border border-[#dce9ff]">
          <div className="flex items-start space-x-2.5">
            <span className="material-symbols-outlined text-[#45464d] text-[18px] mt-0.5">
              corporate_fare
            </span>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold text-[#0b1c30]">
                Apex Health HQ - Mumbai
              </span>
              <span className="text-[11px] text-[#45464d] line-clamp-1">
                Unit 402, Lotus Corporate Park, Goregaon-Powai Link Rd
              </span>
            </div>
          </div>
          <span className="bg-[#e5eeff] text-[#131b2e] text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] shrink-0 uppercase tracking-wider">
            Default
          </span>
        </div>

        {/* Pre-filled B2B Tax Spec Form */}
        <div className="space-y-3 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#45464d] uppercase">
                Consignee Name
              </label>
              <input
                type="text"
                value={consigneeName}
                onChange={(e) => setConsigneeName(e.target.value)}
                className="w-full h-11 px-3 rounded-[4px] bg-white border border-[#c6c6cd] text-[#0b1c30] text-[13px] font-medium shadow-sm outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#45464d] uppercase">
                Business Entity
              </label>
              <input
                type="text"
                value={businessEntity}
                onChange={(e) => setBusinessEntity(e.target.value)}
                className="w-full h-11 px-3 rounded-[4px] bg-white border border-[#c6c6cd] text-[#0b1c30] text-[13px] font-medium shadow-sm outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
              />
            </div>
          </div>

          {/* GSTIN Input with Active Validation Badge */}
          {buyerType === 'b2b' && (
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-[#45464d] uppercase">
                  GSTIN (for Input Credit)
                </label>
                <span className="inline-flex items-center text-[10px] font-bold text-white bg-[#904d00] px-1.5 py-0.5 rounded-[2px] uppercase tracking-wider gap-1">
                  <span className="material-symbols-outlined text-[12px]">verified</span>
                  Active GST Registered
                </span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                  className="w-full h-11 pl-3 pr-10 rounded-[4px] bg-white border border-[#c6c6cd] text-[#0b1c30] text-[13px] shadow-sm outline-none uppercase font-bold focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
                />
                <span className="material-symbols-outlined text-[#904d00] absolute right-3 text-[18px]">
                  verified_user
                </span>
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#45464d] uppercase">
              Delivery Address
            </label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="w-full h-11 px-3 rounded-[4px] bg-white border border-[#c6c6cd] text-[#0b1c30] text-[13px] shadow-sm outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#45464d] uppercase">
                City & State
              </label>
              <input
                type="text"
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                className="w-full h-11 px-3 rounded-[4px] bg-white border border-[#c6c6cd] text-[#0b1c30] text-[13px] shadow-sm outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#45464d] uppercase">
                Postal Code
              </label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full h-11 px-3 rounded-[4px] bg-white border border-[#c6c6cd] text-[#0b1c30] text-[13px] shadow-sm outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#45464d] uppercase">
              Dispatch Mobile Contact
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-[#45464d] absolute left-3 text-[18px]">
                call
              </span>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full h-11 pl-10 pr-3 rounded-[4px] bg-white border border-[#c6c6cd] text-[#0b1c30] text-[13px] shadow-sm outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary (2 Items) */}
      <div className="bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] space-y-3">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[#904d00] text-[20px]">
              inventory_2
            </span>
            <h2 className="text-[16px] font-bold text-[#0b1c30]">
              Order Summary (2 Items)
            </h2>
          </div>
          <span className="text-[11px] text-[#45464d] font-semibold">
            Bulk Tier Matrix
          </span>
        </div>

        {CURRENT_ORDER_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-start space-x-3 p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff]"
          >
            <img
              className="w-16 h-16 rounded-[4px] object-cover shrink-0 shadow-sm bg-white"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-start justify-between gap-1">
                <h3 className="text-[14px] font-bold text-[#0b1c30] truncate">
                  {item.title}
                </h3>
                <span className={`text-[14px] font-bold shrink-0 ${
                  item.isFree ? 'text-[#904d00]' : 'text-[#0b1c30]'
                }`}>
                  {item.isFree ? 'FREE' : `₹${item.totalPrice.toLocaleString('en-IN')}`}
                </span>
              </div>
              <span className="text-[12px] text-[#45464d]">
                {item.subtitle}
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] font-bold text-[#6e3900] bg-[#ffdcc3] px-1.5 py-0.5 rounded-[2px]">
                  {item.badge}
                </span>
                <span className="text-[11px] text-[#45464d] font-semibold">
                  {item.isFree ? (
                    <span className="line-through">₹{item.originalPrice?.toLocaleString('en-IN')}</span>
                  ) : (
                    `₹${item.unitPrice} / unit`
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Financial Ledger */}
      <div className="bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] space-y-2.5">
        <div className="flex items-center space-x-2 mb-1">
          <span className="material-symbols-outlined text-[#904d00] text-[20px]">
            calculate
          </span>
          <h2 className="text-[16px] font-bold text-[#0b1c30]">
            Financial Ledger
          </h2>
        </div>

        <div className="flex justify-between text-[13px] text-[#45464d]">
          <span>Standard Order Subtotal (100 units)</span>
          <span className="text-[#0b1c30] font-semibold">₹72,000.00</span>
        </div>

        <div className="flex justify-between text-[13px] text-[#904d00]">
          <div className="flex items-center gap-1">
            <span>B2B Wholesale Volume Discount</span>
            <span className="text-[10px] bg-[#ffdcc3] text-[#6e3900] px-1 rounded-[2px] font-bold">
              -28%
            </span>
          </div>
          <span className="font-bold">-₹20,160.00</span>
        </div>

        <div className="flex justify-between text-[13px] text-[#45464d]">
          <span>Net Taxable Base Value</span>
          <span className="text-[#0b1c30] font-bold">₹51,840.00</span>
        </div>

        <div className="flex justify-between text-[13px] text-[#45464d]">
          <div className="flex flex-col">
            <span>GST (18% Integrated IGST)</span>
            <span className="text-[11px] text-[#904d00] font-bold">
              B2B Input Tax Credit Eligible
            </span>
          </div>
          <span className="text-[#0b1c30] font-semibold">+₹9,331.20</span>
        </div>

        <div className="flex justify-between text-[13px] text-[#45464d]">
          <div className="flex items-center gap-1">
            <span>Institutional Priority Freight</span>
            <span className="text-[10px] bg-[#e5eeff] text-[#0b1c30] font-bold px-1 rounded-[2px]">
              Bulk Logistics
            </span>
          </div>
          <span className="text-[#904d00] font-bold">FREE</span>
        </div>

        <div className="pt-2 mt-1 bg-[#eff4ff] p-3 rounded-lg border border-[#dce9ff] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#45464d] uppercase tracking-wider font-bold">
              Total Payable Amount
            </span>
            <span className="text-[11px] text-[#45464d]">
              Inclusive of all industrial levies
            </span>
          </div>
          <div className="text-right">
            <span className="text-[20px] font-extrabold text-[#000000]">
              ₹61,171.20
            </span>
            <div className="text-[11px] text-[#904d00] font-bold">
              Est. Net Cost: ₹51,840 after ITC
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Payment Channels */}
      <div className="bg-white p-4 rounded-xl shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[#904d00] text-[20px]">
              account_balance_wallet
            </span>
            <h2 className="text-[16px] font-bold text-[#0b1c30]">
              Payment Method
            </h2>
          </div>
          <span className="text-[11px] text-[#45464d] font-semibold">
            Instant Activation
          </span>
        </div>

        <div className="space-y-2">
          {/* Option 1: Corporate PO / Net 30 Terms */}
          <label 
            onClick={() => setPaymentMethod('po')}
            className={`p-3 rounded-lg flex items-start space-x-3 cursor-pointer transition-all border ${
              paymentMethod === 'po'
                ? 'bg-[#eff4ff] border-[#fe932c]'
                : 'bg-white border-[#e5eeff] hover:bg-[#eff4ff]'
            }`}
          >
            <input
              type="radio"
              name="payment_method"
              value="po"
              checked={paymentMethod === 'po'}
              onChange={() => setPaymentMethod('po')}
              className="mt-1 accent-[#000000]"
            />
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#0b1c30] font-bold">
                  Institutional PO / Net 30 Terms
                </span>
                <span className="bg-[#ffdcc3] text-[#6e3900] text-[10px] font-bold px-1.5 py-0.5 rounded-[2px] uppercase">
                  Pre-Approved
                </span>
              </div>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                Credit facility for verified corporate entities. Upload PO document at order sign-off.
              </p>
            </div>
          </label>

          {/* Option 2: Corporate UPI & NetBanking */}
          <label 
            onClick={() => setPaymentMethod('upi')}
            className={`p-3 rounded-lg flex items-start space-x-3 cursor-pointer transition-all border ${
              paymentMethod === 'upi'
                ? 'bg-[#eff4ff] border-[#fe932c]'
                : 'bg-white border-[#e5eeff] hover:bg-[#eff4ff]'
            }`}
          >
            <input
              type="radio"
              name="payment_method"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
              className="mt-1 accent-[#000000]"
            />
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#0b1c30] font-bold">
                  Corporate NetBanking / UPI
                </span>
                <span className="text-[12px] text-[#45464d] font-semibold">
                  HDFC, ICICI, SBI
                </span>
              </div>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                Direct clearing through institutional current accounts with auto-generated receipt.
              </p>
            </div>
          </label>

          {/* Option 3: Corporate Credit Card */}
          <label 
            onClick={() => setPaymentMethod('card')}
            className={`p-3 rounded-lg flex items-start space-x-3 cursor-pointer transition-all border ${
              paymentMethod === 'card'
                ? 'bg-[#eff4ff] border-[#fe932c]'
                : 'bg-white border-[#e5eeff] hover:bg-[#eff4ff]'
            }`}
          >
            <input
              type="radio"
              name="payment_method"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
              className="mt-1 accent-[#000000]"
            />
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#0b1c30] font-bold">
                  Commercial / Purchasing Card
                </span>
                <span className="material-symbols-outlined text-[18px] text-[#45464d]">
                  credit_card
                </span>
              </div>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                Visa Commercial, MasterCard Corporate, and Amex Corporate cards accepted.
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Trust & Compliance Micro-Badges */}
      <div className="bg-[#eff4ff] p-3 rounded-xl border border-[#dce9ff] flex items-center justify-around text-center">
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[#904d00] text-[20px]">lock</span>
          <span className="text-[10px] text-[#0b1c30] font-bold uppercase mt-1">256-Bit SSL</span>
          <span className="text-[10px] text-[#45464d]">Bank Grade</span>
        </div>
        <div className="h-6 w-px bg-[#c6c6cd]"></div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[#904d00] text-[20px]">verified</span>
          <span className="text-[10px] text-[#0b1c30] font-bold uppercase mt-1">GST E-Invoice</span>
          <span className="text-[10px] text-[#45464d]">IRN Generated</span>
        </div>
        <div className="h-6 w-px bg-[#c6c6cd]"></div>
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-[#904d00] text-[20px]">shield</span>
          <span className="text-[10px] text-[#0b1c30] font-bold uppercase mt-1">Quality Assured</span>
          <span className="text-[10px] text-[#45464d]">ISO 9001:2015</span>
        </div>
      </div>

      {/* Sticky Mobile / Desktop Action Deck */}
      <div className="sticky bottom-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#e5eeff] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#45464d] uppercase tracking-wider font-bold">
              Final Authorization
            </span>
            <span className="text-[18px] text-[#0b1c30] font-extrabold">
              ₹61,171.20
            </span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-[#904d00] font-bold">
              18% GST Saved: ₹9,331.20
            </span>
          </div>
        </div>

        <button
          type="button"
          id="checkout-action-btn"
          disabled={isProcessing}
          onClick={handleCheckoutDispatch}
          className="w-full h-12 bg-[#000000] hover:bg-[#131b2e] text-white text-[14px] font-bold rounded-[4px] flex items-center justify-center space-x-2 shadow-md transition-all active:scale-[0.99] disabled:opacity-75 cursor-pointer"
        >
          {isProcessing ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[18px]">
                progress_activity
              </span>
              <span>Validating GSTIN & PO Ledger...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">
                {buyerType === 'b2b' ? 'verified' : 'lock'}
              </span>
              <span>
                {buyerType === 'b2b' ? 'Authorize Corporate PO & Finalize' : 'Pay ₹61,171.20'}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
