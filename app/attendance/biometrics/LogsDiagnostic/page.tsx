"use client";
import { useState } from "react";
import BiometricsHeader from "../components/BiometricsHeader";
import AddTerminalModal from "../components/AddTerminalModal";

export default function LogsDiagnosticPage() {
  // Activity & Audit Logs
  const [logRetentionDays, setLogRetentionDays] = useState("20");
  const [detailedDebugLogging, setDetailedDebugLogging] = useState(false);

  // Error Monitoring & Alerts
  const [terminalOfflineAlerts, setTerminalOfflineAlerts] = useState(true);
  const [offlineThresholdMinutes, setOfflineThresholdMinutes] = useState("15");
  const [failedSyncAlerts, setFailedSyncAlerts] = useState(true);

  // Add Terminal Modal state
  const [isAddTerminalOpen, setIsAddTerminalOpen] = useState(false);
  const handleAddTerminal = () => {
    setIsAddTerminalOpen(true);
  };

  // Reusable toggle switch component
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

  const handleExportCSV = () => {
    console.log("Export CSV");
  };

  const handleRunTest = () => {
    console.log("Run test");
  };

  const handlePingAll = () => {
    console.log("Ping all terminals");
  };

  const handleForceSync = () => {
    console.log("Force sync");
  };

  const handleSave = () => {
    const settings = {
      logRetentionDays,
      detailedDebugLogging,
      terminalOfflineAlerts,
      offlineThresholdMinutes,
      failedSyncAlerts,
    };
    console.log("Saved diagnostics settings:", settings);
  };

  const handleDiscard = () => {
    setLogRetentionDays("20");
    setDetailedDebugLogging(false);
    setTerminalOfflineAlerts(true);
    setOfflineThresholdMinutes("15");
    setFailedSyncAlerts(true);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Global Biometrics Header */}
      <BiometricsHeader onAddTerminal={handleAddTerminal} />

      {/* Activity & Audit Logs */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Activity & Audit Logs</h2>
        <p className="text-sm text-gray-500 mb-6">
          Configure how system activities and user interactions are recorded.
        </p>
        <div className="divide-y divide-gray-200">
          {/* Log Retention Period dropdown */}
          <div className="py-5 first:pt-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Log Retention Period</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  How long to keep diagnostics and activity before they are overwritten.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <select
                  value={logRetentionDays}
                  onChange={(e) => setLogRetentionDays(e.target.value)}
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="20">20 Days</option>
                  <option value="30">30 Days</option>
                  <option value="60">60 Days</option>
                  <option value="90">90 Days</option>
                </select>
              </div>
            </div>
          </div>

          {/* Enable Detailed Debug Logging toggle */}
          <div className="flex justify-between items-start gap-4 py-5">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Enable Detailed Debug Logging</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Capture in-depth technical details for troubleshooting (NOTE: consumes more storage).
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={detailedDebugLogging} onChange={() => setDetailedDebugLogging(!detailedDebugLogging)} />
            </div>
          </div>

          {/* Download Audit Log button */}
          <div className="py-5 last:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Download Audit Log</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Export a CSV of all system changes and administrator logins for the past 30 days.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Monitoring & Alerts */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Error Monitoring & Alerts</h2>
        <p className="text-sm text-gray-500 mb-6">
          Set up automated notifications for system failures and synchronization issues.
        </p>
        <div className="divide-y divide-gray-200">
          {/* Terminal Offline Alerts toggle */}
          <div className="flex justify-between items-start gap-4 py-5 first:pt-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Terminal Offline Alerts</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Notify administrators when a biometric terminal goes offline.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={terminalOfflineAlerts} onChange={() => setTerminalOfflineAlerts(!terminalOfflineAlerts)} />
            </div>
          </div>

          {/* Offline Thresholds dropdown */}
          <div className="py-5">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Offline Thresholds</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Wait this long before triggering the offline alert.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <select
                  value={offlineThresholdMinutes}
                  onChange={(e) => setOfflineThresholdMinutes(e.target.value)}
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="5">5 Minutes</option>
                  <option value="15">15 Minutes</option>
                  <option value="30">30 Minutes</option>
                  <option value="60">1 Hour</option>
                </select>
              </div>
            </div>
          </div>

          {/* Failed Sync Alerts toggle */}
          <div className="flex justify-between items-start gap-4 py-5 last:pb-0">
            <div className="flex-1">
              <div className="text-base font-semibold text-gray-900">Failed Sync Alerts</div>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Send an email if biometric templates fail to push to remote terminals.
              </p>
            </div>
            <div className="flex-shrink-0">
              <ToggleSwitch enabled={failedSyncAlerts} onChange={() => setFailedSyncAlerts(!failedSyncAlerts)} />
            </div>
          </div>
        </div>
      </div>

      {/* System Diagnostics */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">System Diagnostics</h2>
        <p className="text-sm text-gray-500 mb-6">
          Run on-demand tests to check the health of your biometric network.
        </p>
        <div className="divide-y divide-gray-200">
          {/* Ping All Terminals button */}
          <div className="py-5 first:pt-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Ping All Terminals</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Check network connectivity for all active biometric devices.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <button
                  onClick={handlePingAll}
                  className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Run Test</span>
                </button>
              </div>
            </div>
          </div>

          {/* Force Sync button */}
          <div className="py-5 last:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Force Synchronization</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Immediately push pending templates and pull un-synced attendance logs.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <button
                  onClick={handleForceSync}
                  className="inline-flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Force Sync</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={handleDiscard}
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 transition-all duration-200 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Discard Changes</span>
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-700 border border-transparent rounded-lg text-sm font-semibold text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Save</span>
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