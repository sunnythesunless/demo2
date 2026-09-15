import React, { useState } from 'react';
import { BLUEPRINT_IMAGE_URL } from '../data/mockData';

interface BulkRFQScreenProps {
  onOpenCatalog: () => void;
  onOpenHelpdesk: () => void;
}

export const BulkRFQScreen: React.FC<BulkRFQScreenProps> = ({
  onOpenCatalog,
  onOpenHelpdesk,
}) => {
  // Step 1 states
  const [companyName, setCompanyName] = useState('Apex Healthcare Systems Ltd');
  const [officerName, setOfficerName] = useState('Vikram Mehta • Head of Procurement');
  const [workEmail, setWorkEmail] = useState('v.mehta@apexhealth.in');
  const [phone, setPhone] = useState('98201 44892');
  const [gstin, setGstin] = useState('27AAACA9928P1Z8');

  // Step 2: Segment
  const [selectedSegment, setSelectedSegment] = useState<string>('healthcare');

  // Step 3: Quantity & sizing
  const [quantity, setQuantity] = useState<number>(250);
  const [sizeSplit, setSizeSplit] = useState({
    S: 40,
    M: 90,
    L: 80,
    XL: 40,
  });
  const [showSizeMatrix, setShowSizeMatrix] = useState(true);

  // Step 4: Embroidery
  const [embroideryEnabled, setEmbroideryEnabled] = useState<boolean>(true);
  const [embroideryLocation, setEmbroideryLocation] = useState<'Left Chest' | 'Right Sleeve' | 'Back Collar'>('Left Chest');
  const [fileName, setFileName] = useState('Apex_Health_Brandmark_2024.ai (3.4 MB)');

  // Step 5: Timeline
  const [dispatchTimeline, setDispatchTimeline] = useState<'standard' | 'express'>('standard');
  const [fabricNotes, setFabricNotes] = useState(
    'Require anti-microbial Silver-Ion woven fabric with reinforced double stitching along pocket seams. Pantone matched teal hue (#008080).'
  );

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Dynamic Tier calculations
  const getTierInfo = (qty: number) => {
    if (qty < 200) {
      return {
        name: 'Tier 1',
        discount: '15%',
        rate: 850,
        label: 'Tier 1: 50 – 199 Units',
        retail: 1000,
      };
    } else if (qty < 500) {
      return {
        name: 'Tier 2',
        discount: '28%',
        rate: 720,
        label: 'Tier 2: 200 – 499 Units',
        retail: 1000,
      };
    } else {
      return {
        name: 'Tier 3',
        discount: '41%',
        rate: 590,
        label: 'Tier 3: 500+ Units',
        retail: 1000,
      };
    }
  };

  const currentTier = getTierInfo(quantity);
  const subtotalBase = quantity * 1000;
  const currentTotal = quantity * currentTier.rate * (dispatchTimeline === 'express' ? 1.1 : 1.0);
  const savings = subtotalBase - quantity * currentTier.rate;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 25);
  };

  const handleDecrement = () => {
    if (quantity > 50) {
      setQuantity((prev) => prev - 25);
    }
  };

  const handleSizeChange = (size: 'S' | 'M' | 'L' | 'XL', val: number) => {
    const num = Math.max(0, val);
    setSizeSplit((prev) => ({
      ...prev,
      [size]: num,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setFileName(`${file.name} (${sizeMb} MB)`);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef('EB-RFQ-2025-9842');
    }, 1200);
  };

  const segments = [
    {
      id: 'healthcare',
      title: 'Healthcare & Medical',
      badge: 'Active',
      description: 'OT Scrubs, Lab Coats, Anti-microbial Fluid-barrier Linen',
      icon: 'medical_services',
    },
    {
      id: 'corporate',
      title: 'Corporate & Hospitality',
      description: 'Wrinkle-free Oxford Shirts, Blazers, Front-Desk Waistcoats',
      icon: 'business_center',
    },
    {
      id: 'industrial',
      title: 'Industrial Safety & High-Vis',
      tag: 'EN ISO 20471',
      description: 'Heavy Boiler Suits, Reflective Vests, Flame-Retardant Drill',
      icon: 'engineering',
    },
    {
      id: 'security',
      title: 'Security & Tactical Forces',
      description: 'Ripstop Combat Trousers, Epaulette Shirts, Lanyard Caps',
      icon: 'security',
    },
    {
      id: 'culinary',
      title: 'Chef & Culinary Kitchen',
      description: 'Double-Breasted Tunics, Aprons, Breathable Mesh Chef Caps',
      icon: 'restaurant',
    },
  ];

  return (
    <div className="flex flex-col w-full pb-10 max-w-2xl mx-auto">
      {/* Top Ambient Banner */}
      <section className="px-4 pt-3 pb-2">
        <div className="bg-[#eff4ff] rounded-xl p-4 shadow-sm border border-[#dce9ff] relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#fe932c]/15 blur-xl pointer-events-none"></div>

          {/* Gold Wholesale Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#ffdcc3] text-[#6e3900] mb-2.5">
            <span className="material-symbols-outlined text-[15px]">corporate_fare</span>
            <span className="text-[11px] font-bold uppercase tracking-wide">
              Enterprise Wholesale Pricing (Min. 50 Units)
            </span>
          </div>

          <h1 className="text-[24px] font-bold text-[#0b1c30] tracking-tight mb-1">
            Request Custom Bulk Uniforms
          </h1>
          <p className="text-[13px] text-[#45464d] leading-relaxed">
            Volume tiered pricing, Pantone-matched custom dyeing, and precision digital embroidery for institutions nationwide.
          </p>

          {/* Trust Badges Strip */}
          <div className="flex items-center gap-2.5 mt-3 pt-3 bg-white/70 rounded-lg px-3 py-2 border border-[#dce9ff] flex-wrap">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">verified</span>
              <span className="text-[11px] font-bold text-[#0b1c30]">GST Invoicing</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#c6c6cd]"></div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">verified_user</span>
              <span className="text-[11px] font-bold text-[#0b1c30]">ISO Certified</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#c6c6cd]"></div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#904d00]">inventory_2</span>
              <span className="text-[11px] font-bold text-[#0b1c30]">Free Samples &gt;100 pcs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Success Alert if triggered */}
      {submittedRef && (
        <section className="px-4 py-2">
          <div className="bg-[#eff4ff] border-2 border-[#fe932c] rounded-xl p-4 flex items-start gap-3 shadow-md">
            <div className="w-10 h-10 rounded-full bg-[#fe932c] text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">task_alt</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[15px] font-bold text-[#0b1c30]">
                Institutional RFQ Submitted Successfully!
              </h3>
              <p className="text-[12px] text-[#45464d] mt-0.5">
                Dossier logged under reference <strong className="text-[#904d00] font-bold">{submittedRef}</strong>. An institutional key account manager will review specifications and generate your binding tax quote within 4 business hours.
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setSubmittedRef(null)}
                  className="px-3 py-1 bg-white border border-[#dce9ff] text-[#0b1c30] text-[11px] font-bold rounded"
                >
                  Edit Specifications
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 1: Corporate & Contact Credentials */}
      <section className="px-4 py-2">
        <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-[2px] bg-[#000000] text-white flex items-center justify-center text-[11px] font-bold">
                1
              </div>
              <h2 className="text-[16px] font-bold text-[#0b1c30]">
                Company & Procurement Details
              </h2>
            </div>
            <span className="text-[11px] font-bold text-[#904d00] flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">lock</span> B2B Confidential
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
                Company / Institution Legal Entity
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-[#eff4ff] text-[#0b1c30] text-[13px] px-3 py-2.5 rounded-[4px] border border-[#dce9ff] focus:outline-none focus:bg-white focus:border-[#000000] transition-colors"
                />
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-[18px] text-[#904d00]">
                  domain
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
                Procurement Officer & Designation
              </label>
              <input
                type="text"
                value={officerName}
                onChange={(e) => setOfficerName(e.target.value)}
                className="w-full bg-[#eff4ff] text-[#0b1c30] text-[13px] px-3 py-2.5 rounded-[4px] border border-[#dce9ff] focus:outline-none focus:bg-white focus:border-[#000000] transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full bg-[#eff4ff] text-[#0b1c30] text-[13px] px-3 py-2.5 rounded-[4px] border border-[#dce9ff] focus:outline-none focus:bg-white focus:border-[#000000] truncate transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
                  Contact Phone
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-2 bg-[#e5eeff] text-[#45464d] text-[13px] font-bold rounded-l-[4px] border border-r-0 border-[#dce9ff]">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#eff4ff] text-[#0b1c30] text-[13px] px-2.5 py-2.5 rounded-r-[4px] border border-[#dce9ff] focus:outline-none focus:bg-white focus:border-[#000000] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[11px] font-bold text-[#45464d] uppercase">
                  Institutional GSTIN (Optional for tax credit)
                </label>
                <span className="text-[11px] font-bold text-[#904d00]">
                  18% ITC Eligible
                </span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                  className="flex-1 bg-[#eff4ff] text-[#0b1c30] text-[13px] font-bold uppercase px-3 py-2.5 rounded-[4px] border border-[#dce9ff] focus:outline-none focus:bg-white focus:border-[#000000]"
                />
                <button
                  type="button"
                  className="bg-[#e5eeff] px-3 py-2.5 rounded-[4px] text-[11px] font-bold text-[#0b1c30] hover:bg-[#dce9ff] transition-colors flex items-center gap-1 shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#904d00]">
                    check_circle
                  </span>
                  <span>Verified</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Industry / Garment Category Selector */}
      <section className="px-4 py-2">
        <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-[2px] bg-[#000000] text-white flex items-center justify-center text-[11px] font-bold">
                2
              </div>
              <h2 className="text-[16px] font-bold text-[#0b1c30]">
                Select Uniform Segment
              </h2>
            </div>
            <span className="text-[11px] text-[#45464d] font-semibold">
              1 Selected
            </span>
          </div>

          {/* Sector Cards List */}
          <div className="space-y-2">
            {segments.map((seg) => {
              const isSelected = selectedSegment === seg.id;
              return (
                <div
                  key={seg.id}
                  onClick={() => setSelectedSegment(seg.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#131b2e] text-white shadow-md border-[#131b2e]'
                      : 'bg-[#eff4ff] text-[#0b1c30] border-[#dce9ff] hover:bg-[#e5eeff]'
                  }`}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                        isSelected
                          ? 'bg-white/15 text-white'
                          : 'bg-white text-[#0b1c30] border border-[#dce9ff]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {seg.icon}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[14px] font-bold ${isSelected ? 'text-white' : 'text-[#0b1c30]'}`}>
                          {seg.title}
                        </span>
                        {seg.badge && (
                          <span className="px-1.5 py-0.5 rounded-[2px] bg-[#fe932c] text-[#663500] text-[10px] font-bold uppercase">
                            {seg.badge}
                          </span>
                        )}
                        {seg.tag && (
                          <span className="px-1.5 py-0.5 rounded-[2px] bg-[#dce9ff] text-[#0b1c30] text-[10px] font-bold">
                            {seg.tag}
                          </span>
                        )}
                      </div>
                      <p className={`text-[11px] mt-0.5 ${isSelected ? 'text-[#bec6e0]' : 'text-[#45464d]'}`}>
                        {seg.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-[#fe932c] text-white'
                        : 'bg-[#dce9ff] text-[#45464d]'
                    }`}
                  >
                    {isSelected && (
                      <span className="material-symbols-outlined text-[16px]">check</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step 3: Quantity Counter & Volume Matrix */}
      <section className="px-4 py-2">
        <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-[2px] bg-[#000000] text-white flex items-center justify-center text-[11px] font-bold">
                3
              </div>
              <h2 className="text-[16px] font-bold text-[#0b1c30]">
                Order Volume & Tier Pricing
              </h2>
            </div>
            <span className="px-2 py-0.5 rounded-[2px] bg-[#ffdcc3] text-[#2f1500] text-[11px] font-bold">
              {currentTier.name} Discount
            </span>
          </div>

          {/* Quantity Stepper Block */}
          <div className="bg-[#eff4ff] p-4 rounded-xl mb-3 flex flex-col items-center justify-center border border-[#dce9ff]">
            <span className="text-[11px] font-bold text-[#45464d] uppercase tracking-wider mb-2">
              Total Estimated Quantity
            </span>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={handleDecrement}
                aria-label="Decrease quantity"
                className="w-12 h-12 rounded-xl bg-white text-[#0b1c30] border border-[#dce9ff] flex items-center justify-center hover:bg-[#e5eeff] transition-transform active:scale-95 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">remove</span>
              </button>
              <div className="flex flex-col items-center min-w-[120px]">
                <span className="text-[32px] font-extrabold text-[#0b1c30] tracking-tight">
                  {quantity}
                </span>
                <span className="text-[11px] text-[#45464d] uppercase font-bold">
                  Sets / Units
                </span>
              </div>
              <button
                type="button"
                onClick={handleIncrement}
                aria-label="Increase quantity"
                className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center hover:bg-[#1e293b] transition-transform active:scale-95 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[24px]">add</span>
              </button>
            </div>

            {/* Volume Tier Applied Pill */}
            <div className="w-full mt-4 p-3 rounded-lg bg-[#ffdcc3] text-[#2f1500] flex items-start gap-2.5 shadow-sm border border-[#ffb77d]">
              <span className="material-symbols-outlined text-[20px] text-[#904d00] mt-0.5">
                percent
              </span>
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-[#2f1500]">
                  Tier 2 Applied: 200 – 499 Units
                </span>
                <span className="text-[12px] text-[#6e3900] leading-snug">
                  {currentTier.discount} wholesale reduction applied. <strong className="font-bold">₹{currentTier.rate} / set</strong> (vs standard retail ₹1,000 / set).
                </span>
              </div>
            </div>
          </div>

          {/* Tier Visual Ladder */}
          <div className="grid grid-cols-3 gap-2 mb-3 text-center">
            <div
              onClick={() => setQuantity(100)}
              className={`p-2.5 rounded-lg transition-all cursor-pointer ${
                quantity < 200
                  ? 'bg-[#904d00] text-white ring-2 ring-[#fe932c] shadow-sm'
                  : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#e5eeff]'
              }`}
            >
              <span className={`block text-[11px] font-bold ${quantity < 200 ? 'text-[#ffdcc3]' : 'text-[#45464d]'}`}>
                50 – 199 pcs
              </span>
              <span className={`block text-[14px] font-bold mt-0.5 ${quantity < 200 ? 'text-white' : 'text-[#0b1c30]'}`}>
                ₹850
              </span>
              <span className={`text-[10px] ${quantity < 200 ? 'text-[#ffdcc3]' : 'text-[#45464d]'}`}>
                15% off {quantity < 200 ? '(Active)' : ''}
              </span>
            </div>

            <div
              onClick={() => setQuantity(250)}
              className={`p-2.5 rounded-lg transition-all cursor-pointer ${
                quantity >= 200 && quantity < 500
                  ? 'bg-[#904d00] text-white ring-2 ring-[#fe932c] shadow-sm'
                  : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#e5eeff]'
              }`}
            >
              <span className={`block text-[11px] font-bold ${quantity >= 200 && quantity < 500 ? 'text-[#ffdcc3]' : 'text-[#45464d]'}`}>
                200 – 499 pcs
              </span>
              <span className={`block text-[14px] font-bold mt-0.5 ${quantity >= 200 && quantity < 500 ? 'text-white' : 'text-[#0b1c30]'}`}>
                ₹720
              </span>
              <span className={`text-[10px] ${quantity >= 200 && quantity < 500 ? 'text-[#ffdcc3]' : 'text-[#45464d]'}`}>
                28% off {quantity >= 200 && quantity < 500 ? '(Active)' : ''}
              </span>
            </div>

            <div
              onClick={() => setQuantity(500)}
              className={`p-2.5 rounded-lg transition-all cursor-pointer ${
                quantity >= 500
                  ? 'bg-[#904d00] text-white ring-2 ring-[#fe932c] shadow-sm'
                  : 'bg-[#eff4ff] text-[#45464d] hover:bg-[#e5eeff]'
              }`}
            >
              <span className={`block text-[11px] font-bold ${quantity >= 500 ? 'text-[#ffdcc3]' : 'text-[#45464d]'}`}>
                500+ pcs
              </span>
              <span className={`block text-[14px] font-bold mt-0.5 ${quantity >= 500 ? 'text-white' : 'text-[#0b1c30]'}`}>
                ₹590
              </span>
              <span className={`text-[10px] ${quantity >= 500 ? 'text-[#ffdcc3]' : 'text-[#45464d]'}`}>
                41% off {quantity >= 500 ? '(Active)' : ''}
              </span>
            </div>
          </div>

          {/* Expandable Size Matrix Accordion */}
          <div className="rounded-xl bg-[#eff4ff] p-3 border border-[#dce9ff]">
            <div
              className="flex items-center justify-between cursor-pointer select-none"
              onClick={() => setShowSizeMatrix(!showSizeMatrix)}
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#904d00]">
                  straighten
                </span>
                <span className="text-[13px] font-bold text-[#0b1c30]">
                  Detailed Sizing Split Matrix
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#904d00] flex items-center">
                Balanced: {quantity} pcs{' '}
                <span className="material-symbols-outlined text-[18px] ml-1">
                  {showSizeMatrix ? 'expand_less' : 'expand_more'}
                </span>
              </span>
            </div>

            {showSizeMatrix && (
              <div className="grid grid-cols-4 gap-2 mt-3 pt-2 border-t border-[#dce9ff]">
                <div className="bg-white p-2 rounded-lg text-center shadow-xs border border-[#dce9ff]">
                  <span className="text-[11px] text-[#45464d] font-bold block">
                    Size S
                  </span>
                  <input
                    type="number"
                    value={sizeSplit.S}
                    onChange={(e) => handleSizeChange('S', parseInt(e.target.value) || 0)}
                    className="w-full text-center text-[14px] font-extrabold text-[#0b1c30] bg-transparent focus:outline-none"
                  />
                  <span className="text-[10px] text-[#45464d] font-semibold block">
                    {Math.round((sizeSplit.S / quantity) * 100) || 16}%
                  </span>
                </div>

                <div className="bg-white p-2 rounded-lg text-center shadow-xs border border-[#dce9ff]">
                  <span className="text-[11px] text-[#45464d] font-bold block">
                    Size M
                  </span>
                  <input
                    type="number"
                    value={sizeSplit.M}
                    onChange={(e) => handleSizeChange('M', parseInt(e.target.value) || 0)}
                    className="w-full text-center text-[14px] font-extrabold text-[#0b1c30] bg-transparent focus:outline-none"
                  />
                  <span className="text-[10px] text-[#45464d] font-semibold block">
                    {Math.round((sizeSplit.M / quantity) * 100) || 36}%
                  </span>
                </div>

                <div className="bg-white p-2 rounded-lg text-center shadow-xs border border-[#dce9ff]">
                  <span className="text-[11px] text-[#45464d] font-bold block">
                    Size L
                  </span>
                  <input
                    type="number"
                    value={sizeSplit.L}
                    onChange={(e) => handleSizeChange('L', parseInt(e.target.value) || 0)}
                    className="w-full text-center text-[14px] font-extrabold text-[#0b1c30] bg-transparent focus:outline-none"
                  />
                  <span className="text-[10px] text-[#45464d] font-semibold block">
                    {Math.round((sizeSplit.L / quantity) * 100) || 32}%
                  </span>
                </div>

                <div className="bg-white p-2 rounded-lg text-center shadow-xs border border-[#dce9ff]">
                  <span className="text-[11px] text-[#45464d] font-bold block">
                    Size XL
                  </span>
                  <input
                    type="number"
                    value={sizeSplit.XL}
                    onChange={(e) => handleSizeChange('XL', parseInt(e.target.value) || 0)}
                    className="w-full text-center text-[14px] font-extrabold text-[#0b1c30] bg-transparent focus:outline-none"
                  />
                  <span className="text-[10px] text-[#45464d] font-semibold block">
                    {Math.round((sizeSplit.XL / quantity) * 100) || 16}%
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Step 4: Custom Branding & Embroidery Studio */}
      <section className="px-4 py-2">
        <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-[2px] bg-[#000000] text-white flex items-center justify-center text-[11px] font-bold">
                4
              </div>
              <h2 className="text-[16px] font-bold text-[#0b1c30]">
                Embroidery & Custom Branding
              </h2>
            </div>

            {/* Toggle switch */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={embroideryEnabled}
                onChange={(e) => setEmbroideryEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#dce9ff] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#904d00]"></div>
            </label>
          </div>

          {embroideryEnabled && (
            <div className="space-y-3">
              {/* Visual Garment Mockup & Placement Selector */}
              <div className="bg-[#eff4ff] rounded-xl p-3 flex flex-col items-center border border-[#dce9ff]">
                <div className="w-full flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#45464d] uppercase tracking-wider">
                    Embroidery Location
                  </span>
                  <span className="text-[11px] font-bold text-[#904d00]">
                    Pantone Matched Silk Thread
                  </span>
                </div>

                {/* Placement Choice Pills */}
                <div className="grid grid-cols-3 gap-2 w-full mb-3">
                  {(['Left Chest', 'Right Sleeve', 'Back Collar'] as const).map((loc) => {
                    const active = embroideryLocation === loc;
                    return (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setEmbroideryLocation(loc)}
                        className={`py-2 px-2.5 rounded-[4px] text-[12px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer ${
                          active
                            ? 'bg-[#000000] text-white shadow-sm'
                            : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#dce9ff]'
                        }`}
                      >
                        {active && (
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>
                        )}
                        <span>{loc}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Blueprint Garment Canvas Graphic */}
                <div className="relative w-full h-44 bg-white rounded-xl overflow-hidden shadow-inner flex items-center justify-center border border-[#dce9ff]">
                  <img
                    className="w-full h-full object-contain p-4 opacity-80"
                    src={BLUEPRINT_IMAGE_URL}
                    alt="Technical blueprint sketch of medical scrub tunic"
                  />
                  {/* Left Chest Interactive Anchor Crosshair */}
                  <div
                    className={`absolute flex items-center gap-1 bg-[#904d00] text-white px-2.5 py-1 rounded-full shadow-lg transition-all ${
                      embroideryLocation === 'Left Chest'
                        ? 'top-12 left-1/3 -translate-x-5 animate-pulse ring-2 ring-[#fe932c]'
                        : embroideryLocation === 'Right Sleeve'
                        ? 'top-16 right-1/4 ring-2 ring-[#fe932c]'
                        : 'top-6 left-1/2 -translate-x-1/2 ring-2 ring-[#fe932c]'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span className="text-[10px] font-bold uppercase tracking-tight">
                      Apex Logo (8,500 Stitches) • {embroideryLocation}
                    </span>
                  </div>
                </div>
              </div>

              {/* File Upload Container */}
              <label className="p-4 rounded-xl bg-[#eff4ff] border border-dashed border-[#fe932c] flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#e5eeff] transition-colors">
                <input
                  type="file"
                  accept=".ai,.eps,.svg,.pdf,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#904d00] mb-2">
                  <span className="material-symbols-outlined text-[26px]">upload_file</span>
                </div>
                <span className="text-[13px] font-bold text-[#0b1c30]">
                  Upload High-Res Vector Artwork
                </span>
                <span className="text-[11px] text-[#45464d] mt-0.5">
                  Supports .AI, .EPS, .SVG, .PDF, high-res .PNG (Max 25MB)
                </span>
                <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-white border border-[#dce9ff] shadow-xs text-[#0b1c30]">
                  <span className="material-symbols-outlined text-[16px] text-[#904d00]">
                    check
                  </span>
                  <span className="text-[11px] font-mono">{fileName}</span>
                </div>
              </label>

              {/* Sample Benefit Notification */}
              <div className="p-3 rounded-lg bg-[#e5eeff] text-[#0b1c30] flex items-center gap-2.5 border border-[#dce9ff]">
                <span className="material-symbols-outlined text-[22px] text-[#904d00] shrink-0">
                  redeem
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#0b1c30]">
                    Complimentary Pre-Production Sample
                  </span>
                  <span className="text-[11px] text-[#45464d] leading-tight">
                    Orders exceeding 100 sets receive an embroidered tangible prototype for institutional sign-off prior to bulk production.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Step 5: Timeline & Custom Requirements */}
      <section className="px-4 py-2">
        <div className="bg-white rounded-xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.05)] border border-[#e5eeff]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-[2px] bg-[#000000] text-white flex items-center justify-center text-[11px] font-bold">
              5
            </div>
            <h2 className="text-[16px] font-bold text-[#0b1c30]">
              Delivery Timeline & Specifications
            </h2>
          </div>

          {/* Dispatch Timeline Selector */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div
              onClick={() => setDispatchTimeline('standard')}
              className={`p-3 rounded-xl cursor-pointer flex flex-col justify-between transition-all border ${
                dispatchTimeline === 'standard'
                  ? 'bg-[#000000] text-white shadow-sm border-[#000000]'
                  : 'bg-[#eff4ff] text-[#0b1c30] border-[#dce9ff] hover:bg-[#e5eeff]'
              }`}
              role="button"
              tabIndex={0}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[11px] font-bold ${dispatchTimeline === 'standard' ? 'text-white' : 'text-[#0b1c30]'}`}>
                  Standard Dispatch
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#fe932c]">
                  {dispatchTimeline === 'standard' ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
              </div>
              <span className={`text-[18px] font-bold ${dispatchTimeline === 'standard' ? 'text-white' : 'text-[#0b1c30]'}`}>
                10–14 Days
              </span>
              <span className={`text-[11px] mt-1 ${dispatchTimeline === 'standard' ? 'text-[#bec6e0]' : 'text-[#45464d]'}`}>
                Zero rush fees included
              </span>
            </div>

            <div
              onClick={() => setDispatchTimeline('express')}
              className={`p-3 rounded-xl cursor-pointer flex flex-col justify-between transition-all border ${
                dispatchTimeline === 'express'
                  ? 'bg-[#000000] text-white shadow-sm border-[#000000]'
                  : 'bg-[#eff4ff] text-[#0b1c30] border-[#dce9ff] hover:bg-[#e5eeff]'
              }`}
              role="button"
              tabIndex={0}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[11px] font-bold ${dispatchTimeline === 'express' ? 'text-white' : 'text-[#0b1c30]'}`}>
                  Express Priority
                </span>
                <span className="material-symbols-outlined text-[16px] text-[#fe932c]">
                  {dispatchTimeline === 'express' ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
              </div>
              <span className={`text-[18px] font-bold ${dispatchTimeline === 'express' ? 'text-white' : 'text-[#0b1c30]'}`}>
                5–7 Days
              </span>
              <span className={`text-[11px] mt-1 font-semibold ${dispatchTimeline === 'express' ? 'text-[#fe932c]' : 'text-[#904d00]'}`}>
                +10% air-freight surcharge
              </span>
            </div>
          </div>

          {/* Special Requirements Note */}
          <div>
            <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
              Fabric Specifications & Tailoring Notes
            </label>
            <textarea
              rows={3}
              value={fabricNotes}
              onChange={(e) => setFabricNotes(e.target.value)}
              className="w-full bg-[#eff4ff] text-[#0b1c30] text-[13px] p-3 rounded-[4px] border border-[#dce9ff] focus:outline-none focus:bg-white focus:border-[#000000] transition-colors"
            />
          </div>

          {/* GST & Quote Estimate Summary Card */}
          <div className="mt-3 p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff]">
            <div className="flex items-center justify-between pb-1.5 text-[12px]">
              <span className="text-[#45464d] font-bold uppercase text-[10px]">
                Estimated Bulk Subtotal
              </span>
              <span className="text-[#0b1c30] font-bold">
                ₹{subtotalBase.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center justify-between pb-1.5 text-[12px]">
              <span className="text-[#45464d] font-bold uppercase text-[10px]">
                Institutional Savings ({currentTier.discount})
              </span>
              <span className="text-[#904d00] font-bold">
                - ₹{savings.toLocaleString('en-IN')}
              </span>
            </div>

            <div className="flex items-center justify-between pb-1.5 text-[12px]">
              <span className="text-[#45464d] font-bold uppercase text-[10px]">
                Logo Setup & Embroidery
              </span>
              <span className="text-[#904d00] font-bold">
                Waived (Qty &gt; 100)
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 bg-white rounded-lg px-3 py-2 mt-1 border border-[#dce9ff]">
              <div>
                <span className="text-[12px] font-bold text-[#0b1c30] block">
                  Estimated Total (excl. 5% GST)
                </span>
                <span className="text-[10px] text-[#45464d]">
                  Exact formal tax invoice generated post review
                </span>
              </div>
              <span className="text-[18px] font-extrabold text-[#0b1c30]">
                ₹{Math.round(currentTotal).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Action Rails */}
      <section className="sticky bottom-16 z-40 bg-white/95 backdrop-blur-md px-4 py-3 border-t border-[#e5eeff] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-2">
          {/* Main Institutional RFQ CTA */}
          <button
            type="button"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="w-full bg-[#000000] hover:bg-[#1e293b] text-white text-[14px] font-bold py-3.5 px-4 rounded-[4px] flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99] cursor-pointer disabled:opacity-75"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">
                  sync
                </span>
                <span>Submitting RFQ Dossier...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px] text-[#fe932c]">
                  send
                </span>
                <span>Submit Institutional RFQ</span>
                <span className="text-xs opacity-75 font-mono">({quantity} Sets)</span>
              </>
            )}
          </button>

          {/* Secondary Spec Sheet Download & Talk to Sales */}
          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              type="button"
              onClick={onOpenCatalog}
              className="inline-flex items-center gap-1 text-[#0b1c30] text-[11px] font-bold hover:text-[#904d00] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download Wholesale Catalog (PDF)</span>
            </button>
            <span className="text-[#c6c6cd]">•</span>
            <button
              type="button"
              onClick={onOpenHelpdesk}
              className="inline-flex items-center gap-1 text-[#45464d] text-[11px] font-bold hover:text-[#0b1c30]"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>Talk to Sales Rep</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
