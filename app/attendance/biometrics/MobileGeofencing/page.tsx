"use client";
import { useState } from "react";
import BiometricsHeader from "../components/BiometricsHeader";
import AddTerminalModal from "../components/AddTerminalModal";

export default function MobileGeofencingPage() {
  // Location Roles
  const [enableGeofencing, setEnableGeofencing] = useState(true);
  const [fallbackInterval, setFallbackInterval] = useState("200");
  const [authorizedSSIDs, setAuthorizedSSIDs] = useState("");

  // App Verification – using toggles
  const [requireGPS, setRequireGPS] = useState(true);
  const [biometricSelfie, setBiometricSelfie] = useState(false);
  const [blockMockLocations, setBlockMockLocations] = useState(true);
  const [offlineAppPunches, setOfflineAppPunches] = useState(false);

  // Network Restrictions
  const [restrictToOfficeWiFi, setRestrictToOfficeWiFi] = useState(false);
  const [authorizedNetworkSSIDs, setAuthorizedNetworkSSIDs] = useState("");

  // Add Terminal Modal state
  const [isAddTerminalOpen, setIsAddTerminalOpen] = useState(false);
  const handleAddTerminal = () => {
    setIsAddTerminalOpen(true);
  };

  // Toggle switch component (reusable)
  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      type="button"
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
        enabled ? "bg-green-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <div className="space-y-8 font-sans">
      {/* Global Biometrics Header */}
      <BiometricsHeader onAddTerminal={handleAddTerminal} />

      {/* Location Roles */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Location Roles</h2>
        <p className="text-sm text-gray-500 mb-6">
          Configure boundaries for mobile punches and location validation.
        </p>
        <div className="divide-y divide-gray-200">
          {/* Enable Geofencing – using toggle switch */}
          <div className="flex justify-between items-start gap-4 py-5 first:pt-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Enable Geofencing</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Restrict punches to authorized zones
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={enableGeofencing} onChange={() => setEnableGeofencing(!enableGeofencing)} />
            </div>
          </div>

          {/* Fallback Polling Interval - uniform width dropdown */}
          <div className="py-5">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Fallback Polling Interval</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  How often the server should poll devices if real-time push fails.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <select
                  value={fallbackInterval}
                  onChange={(e) => setFallbackInterval(e.target.value)}
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="100">100 meters</option>
                  <option value="200">200 meters</option>
                  <option value="300">300 meters</option>
                  <option value="350">350 meters</option>
                </select>
              </div>
            </div>
          </div>

          {/* Authorized SSIDs - uniform width dropdown */}
          <div className="py-5 last:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Authorized SSIDs</div>
              </div>
              <div className="flex-shrink-0 ml-6">
                <select
                  value={authorizedSSIDs}
                  onChange={(e) => setAuthorizedSSIDs(e.target.value)}
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="">Select approval level</option>
                  <option value="manager">Flag for Manager Approval</option>
                  <option value="team_leader">Flag for Team Leader Approval</option>
                  <option value="supervisor">Flag for Supervisor Approval</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* App Verification – toggle switches */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">App Verification</h2>
        <p className="text-sm text-gray-500 mb-6">
          Security requirements for the employee mobile app.
        </p>
        <div className="divide-y divide-gray-200">
          <div className="flex justify-between items-start gap-4 py-5 first:pt-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Require GPS Location</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Capture coordinates with every punch
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={requireGPS} onChange={() => setRequireGPS(!requireGPS)} />
            </div>
          </div>

          <div className="flex justify-between items-start gap-4 py-5">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Biometric / Selfie Verification</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Use FaceID or prompt for selfie
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={biometricSelfie} onChange={() => setBiometricSelfie(!biometricSelfie)} />
            </div>
          </div>

          <div className="flex justify-between items-start gap-4 py-5">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Block Mock Locations</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Prevent GPS spoofing apps
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={blockMockLocations} onChange={() => setBlockMockLocations(!blockMockLocations)} />
            </div>
          </div>

          <div className="flex justify-between items-start gap-4 py-5 last:pb-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Offline App Punches</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Allow punches without internet
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={offlineAppPunches} onChange={() => setOfflineAppPunches(!offlineAppPunches)} />
            </div>
          </div>
        </div>
      </div>

      {/* Network Restrictions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Network Restrictions</h2>
        <p className="text-sm text-gray-500 mb-6">
          Limit punches to authorized networks.
        </p>
        <div className="divide-y divide-gray-200">
          <div className="flex justify-between items-start gap-4 py-5 first:pt-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Restrict to Office Wi‑Fi</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Only allow punches on authorized SSIDs
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={restrictToOfficeWiFi} onChange={() => setRestrictToOfficeWiFi(!restrictToOfficeWiFi)} />
            </div>
          </div>

          <div className="py-5 last:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Authorized SSIDs</div>
              </div>
              <div className="flex-shrink-0 ml-6">
                <select
                  value={authorizedNetworkSSIDs}
                  onChange={(e) => setAuthorizedNetworkSSIDs(e.target.value)}
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="">None Selected</option>
                  <option value="Office-WiFi">Office-WiFi</option>
                  <option value="HQ-Secure">HQ-Secure</option>
                  <option value="Guest-Network">Guest-Network</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-200">
        <button
          type="button"
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 transition-all duration-200 shadow-sm"
          onClick={() => {
            setEnableGeofencing(true);
            setFallbackInterval("200");
            setAuthorizedSSIDs("");
            setRequireGPS(true);
            setBiometricSelfie(false);
            setBlockMockLocations(true);
            setOfflineAppPunches(false);
            setRestrictToOfficeWiFi(false);
            setAuthorizedNetworkSSIDs("");
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
              enableGeofencing,
              fallbackInterval,
              authorizedSSIDs,
              requireGPS,
              biometricSelfie,
              blockMockLocations,
              offlineAppPunches,
              restrictToOfficeWiFi,
              authorizedNetworkSSIDs,
            });
          }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Save Configurations</span>
        </button>
      </div>

      {/* Add Terminal Modal */}
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