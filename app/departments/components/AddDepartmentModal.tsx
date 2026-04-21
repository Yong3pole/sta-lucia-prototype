"use client";
import { useState } from "react";

interface AddDepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (departmentData: any) => void;
}

export default function AddDepartmentModal({ isOpen, onClose, onConfirm }: AddDepartmentModalProps) {
  const [formData, setFormData] = useState({
    departmentName: "",
    departmentCode: "",
    parentDepartment: "",
    description: "",
    departmentHead: "",
    themeColor: "",
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
        <h2 className="text-xl font-bold text-gray-900 mb-6">Create New Department</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Row 1: Department name - Full width */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Department name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Human Resource"
              value={formData.departmentName}
              onChange={(e) => setFormData({ ...formData, departmentName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Row 2: Department code (left) + Parent Department (right) - Side by side */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Department code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. HR-1001"
                value={formData.departmentCode}
                onChange={(e) => setFormData({ ...formData, departmentCode: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Parent Department
              </label>
              <select
                value={formData.parentDepartment}
                onChange={(e) => setFormData({ ...formData, parentDepartment: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              >
                <option value="">Select parent department ▼</option>
                <option value="engineering">Engineering</option>
                <option value="product">Product</option>
                <option value="sales">Sales</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="finance">Finance</option>
              </select>
            </div>
          </div>

          {/* Row 3: Description - Full width, tall textarea */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Description
            </label>
            <textarea
              placeholder="Brief description..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Row 4: Department Head - Full width */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Department Head <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.departmentHead}
              onChange={(e) => setFormData({ ...formData, departmentHead: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
              required
            >
              <option value="">Select an employee ▼</option>
              <option value="marcus_johnson">Marcus Johnson</option>
              <option value="jose_carlos">Jose Carlos</option>
              <option value="david_castro">David Castro</option>
              <option value="juan_tamad">Juan Tamad</option>
              <option value="kim_jhon">Kim Jhon</option>
              <option value="rachel_berdin">Rachel Berdin</option>
            </select>
          </div>

          {/* Row 5: Theme Color - Small width, left aligned */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Theme Color
            </label>
            <select
              value={formData.themeColor}
              onChange={(e) => setFormData({ ...formData, themeColor: e.target.value })}
              className="w-48 px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            >
              <option value="">Select color ▼</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
              <option value="indigo">Indigo</option>
            </select>
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