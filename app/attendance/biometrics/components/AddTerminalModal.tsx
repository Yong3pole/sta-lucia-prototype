"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface AddTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (terminalData: any) => void;
}

export default function AddTerminalModal({ isOpen, onClose, onAdd }: AddTerminalModalProps) {
  const [mounted, setMounted] = useState(false);
  const [deviceName, setDeviceName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("4370");
  const [deviceType, setDeviceType] = useState("");
  const [locationZone, setLocationZone] = useState("");
  const [commKey, setCommKey] = useState("");
  const [syncUsersOnConnect, setSyncUsersOnConnect] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      deviceName,
      ipAddress,
      port,
      deviceType,
      locationZone,
      commKey,
      syncUsersOnConnect,
    });
    setDeviceName("");
    setIpAddress("");
    setPort("4370");
    setDeviceType("");
    setLocationZone("");
    setCommKey("");
    setSyncUsersOnConnect(false);
    onClose();
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (mounted && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted, isOpen]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop with fade transition */}
      <div
        className={`fixed inset-0 bg-black/50 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />
      {/* Slide-in panel from right */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col min-h-full">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Add Terminal</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 px-6 py-5 space-y-5">
            {/* Device Name - full width */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Device Name
              </label>
              <input
                type="text"
                placeholder="e.g., Main Entrance Face Scanner"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            {/* IP Address + Port - side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  IP Address
                </label>
                <input
                  type="text"
                  placeholder="192.168.1.x"
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Port
                </label>
                <input
                  type="text"
                  placeholder="4370"
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            {/* Device Type + Location / Zone - side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Device Type
                </label>
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select type</option>
                  <option value="Fingerprint">Fingerprint</option>
                  <option value="Face Recognition">Face Recognition</option>
                  <option value="Finger + Face">Finger + Face</option>
                  <option value="Palm Scanner">Palm Scanner</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Location / Zone
                </label>
                <input
                  type="text"
                  placeholder="Assign to zone"
                  value={locationZone}
                  onChange={(e) => setLocationZone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            {/* Communication Key - full width */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Communication Key
              </label>
              <input
                type="password"
                placeholder="********"
                value={commKey}
                onChange={(e) => setCommKey(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Leave blank if the terminal does not require a comm key.
              </p>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="syncUsers"
                checked={syncUsersOnConnect}
                onChange={(e) => setSyncUsersOnConnect(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="syncUsers" className="text-sm text-gray-700">
                Sync users automatically upon connection
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4 sticky bottom-0 bg-white py-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 text-white rounded-md text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm"
              >
                Add Terminal
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.body
  );
}