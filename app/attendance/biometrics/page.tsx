"use client";
import { useState } from "react";

export default function SyncNetworkRulesPage() {
  const [mobileGeofencing, setMobileGeofencing] = useState(false);
  const [dataPrivacy, setDataPrivacy] = useState(false);
  const [logsDiagnostics, setLogsDiagnostics] = useState(false);
  const [realTimeSync, setRealTimeSync] = useState(true);
  const [fallbackInterval, setFallbackInterval] = useState("15");
  const [clearDeviceLog, setClearDeviceLog] = useState(true);
  const [offlineRecording, setOfflineRecording] = useState(true);
  const [autoSyncReconnect, setAutoSyncReconnect] = useState(true);
  const [connectionRetryLimit, setConnectionRetryLimit] = useState("5");
  const [primaryPort, setPrimaryPort] = useState("8080");
  const [requireSSL, setRequireSSL] = useState(true);
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

  return (
    <div className="space-y-8">
      {/* Sync Network Rules (top checkboxes) */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Sync Network Rules</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={mobileGeofencing} onChange={(e) => setMobileGeofencing(e.target.checked)} className="rounded border-gray-300 text-green-600" />
            <span className="text-gray-700">Mobile Geofencing (Add Ons)</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={dataPrivacy} onChange={(e) => setDataPrivacy(e.target.checked)} className="rounded border-gray-300 text-green-600" />
            <span className="text-gray-700">Data Privacy Security</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={logsDiagnostics} onChange={(e) => setLogsDiagnostics(e.target.checked)} className="rounded border-gray-300 text-green-600" />
            <span className="text-gray-700">Logs Diagnostics</span>
          </label>
        </div>
      </div>

      {/* Connection Biometric Terminals Table + Add Button */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Connection Biometric Terminals</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800">
            <span className="material-icons text-base">add</span>
            Add Terminal
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Manage your physical time clocks and biometric scanners.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm font-medium text-gray-700">
                <th className="px-4 py-3 border-b">Device Name</th>
                <th className="px-4 py-3 border-b">IP / Network</th>
                <th className="px-4 py-3 border-b">Model / Type</th>
                <th className="px-4 py-3 border-b">Status</th>
                <th className="px-4 py-3 border-b">Last Sync</th>
              </tr>
            </thead>
            <tbody>
              {terminals.map((term) => (
                <tr key={term.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">
                    <div className="font-medium">{term.id}</div>
                    <div className="text-xs text-gray-500">{term.name}</div>
                    <div className="text-xs text-gray-500">{term.subName}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div>{term.ip}</div>
                    <div className="text-xs text-gray-500">Port {term.port}</div>
                  </td>
                  <td className="px-4 py-3">{term.model}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${term.status === 'Online' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {term.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{term.lastSync}</td>
                </tr>
              ))}
            </tbody>
         </table>
        </div>
      </div>

      {/* Mobile App Authentication */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Mobile App Authentication</h2>
        <p className="text-sm text-gray-500 mb-4">Configure how employees use biometric features on their personal devices.</p>
        <div className="space-y-4">
          <label className="flex items-start gap-2">
            <input type="checkbox" checked={allowMobileAppClockIn} onChange={(e) => setAllowMobileAppClockIn(e.target.checked)} className="mt-1 rounded border-gray-300 text-green-600" />
            <div><span className="font-medium text-gray-800">Allow Mobile App Clock-In</span><br/><span className="text-sm text-gray-500">Employee can use HR Core mobile app to clock-in and clock-out.</span></div>
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" checked={requireBiometric} onChange={(e) => setRequireBiometric(e.target.checked)} className="mt-1 rounded border-gray-300 text-green-600" />
            <div><span className="font-medium text-gray-800">Require Biometric (FaceID/TouchID)</span><br/><span className="text-sm text-gray-500">Mandate device biometric authentication before recording a punch.</span></div>
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" checked={livenessDetection} onChange={(e) => setLivenessDetection(e.target.checked)} className="mt-1 rounded border-gray-300 text-green-600" />
            <div><span className="font-medium text-gray-800">Liveness Detection for Face Scans</span><br/><span className="text-sm text-gray-500">Require users to blink or turn their head to prevent photo spoofing.</span></div>
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" checked={pinFallback} onChange={(e) => setPinFallback(e.target.checked)} className="mt-1 rounded border-gray-300 text-green-600" />
            <div><span className="font-medium text-gray-800">Fallback to PIN code</span><br/><span className="text-sm text-gray-500">Allow employees to use 6-digit PIN if biometric fails 3 times.</span></div>
          </label>
        </div>
      </div>

      {/* Location Rules Geofencing */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Location Rules Geofencing</h2>
        <p className="text-sm text-gray-500 mb-4">Restrict mobile punches to specific geographic locations.</p>
        <div className="space-y-4">
          <label className="flex items-start gap-2">
            <input type="checkbox" checked={enforceGeofencing} onChange={(e) => setEnforceGeofencing(e.target.checked)} className="mt-1 rounded border-gray-300 text-green-600" />
            <div><span className="font-medium text-gray-800">Enforce Geofencing Boundaries</span><br/><span className="text-sm text-gray-500">Mobile punching is rejected when outside the authorized zones.</span></div>
          </label>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Default Geofence Radius</label>
            <div className="flex items-center gap-3">
              <input type="number" value={defaultRadius} onChange={(e) => setDefaultRadius(e.target.value)} className="w-24 px-3 py-2 border border-gray-300 rounded-md" />
              <span className="text-sm text-gray-500">meters (maximum allowed distance from the authorized location marker)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Save/Reset buttons? Not shown in image but can add */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Reset to Defaults</button>
        <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Save Changes</button>
      </div>
    </div>
  );
}