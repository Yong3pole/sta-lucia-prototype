"use client";
import { useState } from "react";
import BiometricsHeader from "../components/BiometricsHeader";
import AddTerminalModal from "../components/AddTerminalModal";

export default function DataPrivacySecurityPage() {
  // Data Retention & Archival
  const [retentionPeriod, setRetentionPeriod] = useState("90");
  const [autoArchiveOldRecords, setAutoArchiveOldRecords] = useState(true);
  const [deleteOnTermination, setDeleteOnTermination] = useState(true);

  // Consent & Compliance
  const [explicitConsentLogging, setExplicitConsentLogging] = useState(true);
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);

  // Access Control & Encryption
  const [encryptionKeyManagement, setEncryptionKeyManagement] = useState("Managed by IT Core");
  const [anonymizedExport, setAnonymizedExport] = useState(false);
  const [restrictSupportAccess, setRestrictSupportAccess] = useState(true);

  // Add Terminal Modal state
  const [isAddTerminalOpen, setIsAddTerminalOpen] = useState(false);
  const handleAddTerminal = () => {
    setIsAddTerminalOpen(true);
  };

  // Reusable toggle switch component
  const ToggleSwitch = ({ enabled, onChange, label, description }: { enabled: boolean; onChange: () => void; label: string; description?: string }) => (
    <div className="flex justify-between items-start gap-4 py-5 first:pt-0 last:pb-0">
      <div className="flex-1">
        <div className="text-base font-semibold text-gray-900">{label}</div>
        {description && <p className="text-sm text-gray-500 mt-1 leading-relaxed">{description}</p>}
      </div>
      <div className="flex-shrink-0">
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
      </div>
    </div>
  );

  const handleViewDocument = () => {
    console.log("View DPA document");
    // Open document logic
  };

  const resetToDefaults = () => {
    setRetentionPeriod("90");
    setAutoArchiveOldRecords(true);
    setDeleteOnTermination(true);
    setExplicitConsentLogging(true);
    setShowPrivacyNotice(false);
    setEncryptionKeyManagement("Managed by IT Core");
    setAnonymizedExport(false);
    setRestrictSupportAccess(true);
  };

  const saveSettings = () => {
    const settings = {
      retentionPeriod,
      autoArchiveOldRecords,
      deleteOnTermination,
      explicitConsentLogging,
      showPrivacyNotice,
      encryptionKeyManagement,
      anonymizedExport,
      restrictSupportAccess,
    };
    console.log("Saved privacy settings:", settings);
    // API call here
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Global Biometrics Header */}
      <BiometricsHeader onAddTerminal={handleAddTerminal} />

      {/* Data Retention & Archival */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Data Retention & Archival</h2>
        <p className="text-sm text-gray-500 mb-6">
          Control how long biometric data and templates are stored in HR Core.
        </p>
        <div className="divide-y divide-gray-200">
          {/* Retention period dropdown - uniform width */}
          <div className="py-5 first:pt-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Biometric Data Retention Period</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  How long to keep raw punch data and facial / fingerprint templates.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <select
                  value={retentionPeriod}
                  onChange={(e) => setRetentionPeriod(e.target.value)}
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="60">60 Days</option>
                  <option value="80">80 Days</option>
                  <option value="90">90 Days</option>
                  <option value="110">110 Days</option>
                </select>
              </div>
            </div>
          </div>

          <ToggleSwitch
            enabled={autoArchiveOldRecords}
            onChange={() => setAutoArchiveOldRecords(!autoArchiveOldRecords)}
            label="Auto-Archive Old Records"
            description="Automatically move records past the retention period to encrypted cold storage."
          />

          <ToggleSwitch
            enabled={deleteOnTermination}
            onChange={() => setDeleteOnTermination(!deleteOnTermination)}
            label="Delete on Employee Termination"
            description="Automatically purge biometric templates when an employee is deactivated."
          />
        </div>
      </div>

      {/* Consent & Compliance */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Consent & Compliance</h2>
        <p className="text-sm text-gray-500 mb-6">
          Ensure biometric data collection complies with local privacy regulations (BIPA, GDPR, DPA).
        </p>
        <div className="divide-y divide-gray-200">
          <ToggleSwitch
            enabled={explicitConsentLogging}
            onChange={() => setExplicitConsentLogging(!explicitConsentLogging)}
            label="Require Explicit Consent Logging"
            description="Log timestamp and method of employee consent before biometric enrollment."
          />

          <ToggleSwitch
            enabled={showPrivacyNotice}
            onChange={() => setShowPrivacyNotice(!showPrivacyNotice)}
            label="Show Privacy Notice on Terminals"
            description="Display a brief privacy notice on compatible terminal screens during enrollment."
          />

          <div className="py-5 last:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Data Processing Addendum (DPA)</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  View or update your signed DPA for biometric processing.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <button
                  onClick={handleViewDocument}
                  className="text-sm text-green-700 hover:text-green-800 underline underline-offset-2 font-medium transition-colors"
                >
                  View Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Access Control & Encryption */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-1">Access Control & Encryption</h2>
        <p className="text-sm text-gray-500 mb-6">
          Manage how biometric data is secured and who can access it.
        </p>
        <div className="divide-y divide-gray-200">
          {/* Encryption Key Management - uniform width dropdown */}
          <div className="py-5 first:pt-0">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">Encryption Key Management</div>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  Choose how biometric templates are encrypted at rest on the HR Core servers.
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <select
                  value={encryptionKeyManagement}
                  onChange={(e) => setEncryptionKeyManagement(e.target.value)}
                  className="w-48 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-800 focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="Managed by IT Core">Managed by IT Core</option>
                  <option value="Managed by HR Core">Managed by HR Core</option>
                </select>
              </div>
            </div>
          </div>

          <ToggleSwitch
            enabled={anonymizedExport}
            onChange={() => setAnonymizedExport(!anonymizedExport)}
            label="Anonymized Export Report"
            description="Hide Personally Identifiable Information (PII) in standard attendance reports."
          />

          <ToggleSwitch
            enabled={restrictSupportAccess}
            onChange={() => setRestrictSupportAccess(!restrictSupportAccess)}
            label="Restrict Support Access"
            description="Prevent support staff from viewing raw biometric punch data without authorization."
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={resetToDefaults}
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 transition-all duration-200 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Discard Changes</span>
        </button>
        <button
          type="button"
          onClick={saveSettings}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-700 border border-transparent rounded-lg text-sm font-semibold text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Save Privacy Settings</span>
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