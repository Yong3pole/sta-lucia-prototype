"use client";

interface BiometricsHeaderProps {
  onAddTerminal?: () => void;
}

export default function BiometricsHeader({ onAddTerminal }: BiometricsHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Biometric Settings</h1>
      <button
        onClick={onAddTerminal}
        className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm"
      >
        <span className="material-icons text-base">devices</span>
        <span>Add Terminal</span>
      </button>
    </div>
  );
}