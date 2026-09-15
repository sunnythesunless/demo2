import React, { useState } from 'react';

interface RescheduleDockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RescheduleDockModal: React.FC<RescheduleDockModalProps> = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState('Apr 6, 2025');
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM – 01:00 PM (Morning Dock)');
  const [dockNote, setDockNote] = useState('Receiving at Gate 3 Hydraulic Bay. Forklift driver on standby.');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-[#dce9ff] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-[#e5eeff] bg-[#eff4ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#904d00]">schedule</span>
            <h3 className="text-[16px] font-bold text-[#0b1c30]">
              Reschedule Dock Delivery
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

        <form onSubmit={handleSubmit} className="p-4 space-y-3.5 text-[12px]">
          <div>
            <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
              Select Delivery Date
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Apr 5, 2025', 'Apr 6, 2025', 'Apr 7, 2025'].map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => setSelectedDate(date)}
                  className={`p-2 rounded-lg text-center font-bold border transition-all ${
                    selectedDate === date
                      ? 'bg-[#000000] text-white border-[#000000]'
                      : 'bg-[#eff4ff] text-[#0b1c30] border-[#dce9ff] hover:bg-[#e5eeff]'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
              Receiving Dock Time Window
            </label>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] font-medium focus:bg-white focus:outline-none"
            >
              <option value="09:00 AM – 12:00 PM (Early Inbound)">
                09:00 AM – 12:00 PM (Early Inbound)
              </option>
              <option value="10:00 AM – 01:00 PM (Morning Dock)">
                10:00 AM – 01:00 PM (Morning Dock)
              </option>
              <option value="02:00 PM – 05:00 PM (Afternoon Unload)">
                02:00 PM – 05:00 PM (Afternoon Unload)
              </option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#45464d] uppercase mb-1">
              Dock Gate & Security Instructions
            </label>
            <textarea
              rows={2}
              value={dockNote}
              onChange={(e) => setDockNote(e.target.value)}
              className="w-full p-2.5 rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] font-medium focus:bg-white focus:outline-none"
            />
          </div>

          <div className="p-2.5 rounded-lg bg-[#ffdcc3]/60 border border-[#ffb77d] text-[11px] text-[#6e3900]">
            BlueDart Cargo Waybill #AWB-BLD-882910485 will be automatically re-routed with driver dispatch notified.
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-[#c6c6cd] text-[#0b1c30] font-bold hover:bg-[#eff4ff]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitted}
              className="flex-1 py-2 rounded-lg bg-[#904d00] text-white font-bold hover:bg-[#6e3900] active:scale-95 transition-all flex items-center justify-center gap-1"
            >
              {submitted ? (
                <>
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  <span>Confirmed!</span>
                </>
              ) : (
                'Update BlueDart ETA'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
