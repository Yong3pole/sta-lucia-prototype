"use client";
import { useState } from "react";
import BiometricsHeader from "../components/BiometricsHeader";
import AddTerminalModal from "../components/AddTerminalModal";

export default function SyncNetworkRulesPage() {    
  const [allowMobileAppClockIn, setAllowMobileAppClockIn] = useState(true);
  const [requireBiometric, setRequireBiometric] = useState(true);
  const [livenessDetection, setLivenessDetection] = useState(false);
  const [pinFallback, setPinFallback] = useState(true);
  const [enforceGeofencing, setEnforceGeofencing] = useState(false);
  const [defaultRadius, setDefaultRadius] = useState("100");

  const terminals = [
    { id: "DC-1001", name: "HQ Main Entrance", subName: "Front Door (In/Out)", ip: "192.168.1.101", port: "4370", model: "Finger + Face", status: "Online", lastSync: "Just now" },
    { id: "DC-1002", name: "Floor 3 Lobby", subName: "Internal Access", ip: "192.168.1.102", port: "4370", model: "Fingerprint", status: "Online", lastSync: "2 mins ago" },
    { id: "DC-1003", name: "Warehouse B West", subName: "Staff Entrance", ip: "192.168.1.103", port: "4370", model: "Fingerprint", status: "Offline", lastSync: "2 hours ago" },
  ];

  const [isAddTerminalOpen, setIsAddTerminalOpen] = useState(false);
  const handleAddTerminal = () => {
    setIsAddTerminalOpen(true);
  };

  return (
    <div className="space-y-8 font-sans">
      <BiometricsHeader onAddTerminal={handleAddTerminal} />

      {/* Connection Biometric Terminals Table */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-4">Connection Biometric Terminals</h2>
        <p className="text-sm text-gray-500 mb-6">Manage your physical time clocks and biometric scanners.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Device Name</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">IP / Network</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Model / Type</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Sync</th>
              </tr>
            </thead>
            <tbody>
              {terminals.map((term) => (
                <tr key={term.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 text-sm font-medium text-gray-900 align-top">{term.id}</td>
                  <td className="py-3 px-2 align-top">
                    <div className="font-medium text-gray-900">{term.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{term.subName}</div>
                  </td>
                  <td className="py-3 px-2 align-top">
                    <div className="text-gray-800">{term.ip}</div>
                    <div className="text-xs text-gray-500 mt-0.5">Port {term.port}</div>
                  </td>
                  <td className="py-3 px-2 text-gray-800 align-top">{term.model}</td>
                  <td className="py-3 px-2 align-top">
                    <div className="flex items-center gap-1.5">
                      <span className={`inline-block w-2 h-2 rounded-full ${term.status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className={`text-sm font-medium ${term.status === 'Online' ? 'text-green-700' : 'text-red-700'}`}>
                        {term.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-gray-600 text-sm align-top">{term.lastSync}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile App Authentication */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">Mobile App Authentication</h2>
        <p className="text-sm text-gray-500 mb-6">
          Configure how employees use biometric features on their personal devices.
        </p>
        <div className="divide-y divide-gray-200">
          {/* Allow Mobile App Clock-In */}
          <div className="flex justify-between items-start gap-4 py-5 first:pt-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Allow Mobile App Clock-In</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Employee can use HR Core mobile app to clock-in and clock-out.
              </p>
            </div>
            <div className="flex-shrink-0">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowMobileAppClockIn}
                  onChange={(e) => setAllowMobileAppClockIn(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-green-600 peer-checked:border-green-600 transition-all duration-200 flex items-center justify-center">
                  {allowMobileAppClockIn && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Require Biometric */}
          <div className="flex justify-between items-start gap-4 py-5">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Require Biometric (FaceID/TouchID)</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Mandate device biometric authentication before recording a punch.
              </p>
            </div>
            <div className="flex-shrink-0">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={requireBiometric}
                  onChange={(e) => setRequireBiometric(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-green-600 peer-checked:border-green-600 transition-all duration-200 flex items-center justify-center">
                  {requireBiometric && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Liveness Detection */}
          <div className="flex justify-between items-start gap-4 py-5">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Liveness Detection for Face Scans</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Require users to blink or turn their head to prevent photo spoofing.
              </p>
            </div>
            <div className="flex-shrink-0">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={livenessDetection}
                  onChange={(e) => setLivenessDetection(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-green-600 peer-checked:border-green-600 transition-all duration-200 flex items-center justify-center">
                  {livenessDetection && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Fallback to PIN code */}
          <div className="flex justify-between items-start gap-4 py-5 last:pb-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Fallback to PIN code</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Allow employees to use 6-digit PIN if biometric fails 3 times.
              </p>
            </div>
            <div className="flex-shrink-0">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={pinFallback}
                  onChange={(e) => setPinFallback(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 peer-checked:bg-green-600 peer-checked:border-green-600 transition-all duration-200 flex items-center justify-center">
                  {pinFallback && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Location Rules Geofencing */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Location Rules Geofencing</h2>
        <p className="text-sm text-gray-500 mb-6">Restrict mobile punches to specific geographic locations.</p>
        <div className="space-y-5">
          <div>
            <div className="text-base font-semibold text-gray-900">Enforce Geofencing Boundaries</div>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Mobile punching is rejected when outside the authorized zones.
            </p>
          </div>
          <div>
            <div className="text-base font-semibold text-gray-900">Default Geofence Radius</div>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed mb-3">
              Maximum allowed distance from the authorized location marker.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={defaultRadius}
                onChange={(e) => setDefaultRadius(e.target.value)}
                className="w-24 px-3 py-1.5 border border-gray-300 rounded-md text-gray-800 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <span className="text-sm text-gray-600">meters</span>
            </div>
          </div>
        </div>
      </div>

      {/* Save/Reset buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-200">
        <button
          type="button"
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 transition-all duration-200 shadow-sm"
          onClick={() => {
            setAllowMobileAppClockIn(true);
            setRequireBiometric(true);
            setLivenessDetection(false);
            setPinFallback(true);
            setEnforceGeofencing(false);
            setDefaultRadius("100");
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset to Defaults</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-700 border border-transparent rounded-lg text-sm font-semibold text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={() => {
            console.log({
              allowMobileAppClockIn,
              requireBiometric,
              livenessDetection,
              pinFallback,
              enforceGeofencing,
              defaultRadius,
            });
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Save Changes</span>
        </button>
      </div>
      
      <AddTerminalModal
        isOpen={isAddTerminalOpen}
        onClose={() => setIsAddTerminalOpen(false)}
        onAdd={(newTerminal) => {
          console.log("New terminal:", newTerminal);
          // Add logic to save the terminal (e.g., API call, update local state)
          setIsAddTerminalOpen(false);
        }}
      />
    </div>
  );
}