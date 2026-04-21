"use client";
import { useState } from "react";

interface ManualPunchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (punchData: any) => void;
}

export default function ManualPunchModal({ isOpen, onClose, onConfirm }: ManualPunchModalProps) {
  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    timeIn: "",
    timeOut: "",
    breakStart: "",
    breakEnd: "",
    overtime: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Manual Punch Entry</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Row 1: Employee - Full width */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Employee <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.employee}
              onChange={(e) => setFormData({ ...formData, employee: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              required
            >
              <option value="">Select employee ▼</option>
              <option value="michael_chen">Michael Chen (EMP-001)</option>
              <option value="jessica_alby">Jessica Alby (EMP-002)</option>
              <option value="david_rodriguez">David Rodriguez (EMP-003)</option>
              <option value="avata">Avata (EMP-004)</option>
              <option value="robert_smith">Robert Smith (EMP-005)</option>
            </select>
          </div>

          {/* Row 2: Date - Full width */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Row 3: Time In (left) + Time Out (right) - Side by side */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Time In <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                value={formData.timeIn}
                onChange={(e) => setFormData({ ...formData, timeIn: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Time Out
              </label>
              <input
                type="time"
                value={formData.timeOut}
                onChange={(e) => setFormData({ ...formData, timeOut: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 4: Break Start (left) + Break End (right) - Side by side */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Break Start
              </label>
              <input
                type="time"
                value={formData.breakStart}
                onChange={(e) => setFormData({ ...formData, breakStart: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Break End
              </label>
              <input
                type="time"
                value={formData.breakEnd}
                onChange={(e) => setFormData({ ...formData, breakEnd: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 5: Overtime - Full width */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Overtime (hours)
            </label>
            <input
              type="number"
              step="0.5"
              placeholder="e.g. 2.5"
              value={formData.overtime}
              onChange={(e) => setFormData({ ...formData, overtime: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Row 6: Notes - Full width textarea */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Notes / Reason for manual entry
            </label>
            <textarea
              placeholder="Brief description..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Buttons - Bottom right */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 font-medium"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}