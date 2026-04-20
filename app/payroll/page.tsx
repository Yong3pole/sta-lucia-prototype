"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function PayrollPage() {

  const payrollRuns = [
    {
      id: 1,
      period: "Mar 15 - Mar 31 2026",
      type: "Regular Semi-monthly",
      payDate: "Apr 5, 2026",
      employees: 248,
      amount: "420,150",
      status: "Draft",
    },
    {
      id: 2,
      period: "Mar 15 - Mar 31 2026",
      type: "Regular Semi-monthly",
      payDate: "Apr 5, 2026",
      employees: 248,
      amount: "420,150",
      status: "Paid",
    },
    {
      id: 3,
      period: "Mar 15 - Mar 31 2026",
      type: "Regular Semi-monthly",
      payDate: "Apr 5, 2026",
      employees: 248,
      amount: "420,150",
      status: "Paid",
    },
    {
      id: 4,
      period: "Mar 15 - Mar 31 2026",
      type: "Regular Semi-monthly",
      payDate: "Apr 5, 2026",
      employees: 248,
      amount: "420,150",
      status: "Paid",
    },
    {
      id: 5,
      period: "Mar 15 - Mar 31 2026",
      type: "Regular Semi-monthly",
      payDate: "Apr 5, 2026",
      employees: 248,
      amount: "420,150",
      status: "Paid",
    },
  ];


  return (
    <div className="flex h-screen bg-green-50">
      <Sidebar activeMenu="payroll" />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Payroll</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-emerald-50 font-medium shadow-sm">
              <span className="material-icons text-base">receipt</span>
              <span>Payslip</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-emerald-50 font-medium shadow-sm">
              <span className="material-icons text-base">file_download</span>
              <span>Generate Payslip</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-emerald-50 font-medium shadow-sm">
              <span className="material-icons text-base">assessment</span>
              <span>Reports</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-emerald-50 font-medium shadow-sm">
              <span className="material-icons text-base">settings</span>
              <span>Payroll Settings</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Next Pay Date</p>
                <p className="text-2xl font-bold text-gray-900">Apr 12, 2026</p>
              </div>
              <span className="material-icons text-gray-400">calendar_today</span>
            </div>
            <p className="text-xs text-gray-600">Pay Period: Apr 15 - Apr 32</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Est. Total Gross</p>
                <p className="text-2xl font-bold text-gray-900">₱420,150.00</p>
              </div>
              <span className="material-icons text-gray-400">visibility</span>
            </div>
            <p className="text-xs text-gray-600">5% vs last period</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Employees to Pay</p>
                <p className="text-2xl font-bold text-gray-900">248</p>
              </div>
              <span className="material-icons text-gray-400">people</span>
            </div>
            <p className="text-xs text-gray-600">12 hires included</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Est. Total Taxes</p>
                <p className="text-2xl font-bold text-gray-900">₱420,150.00</p>
              </div>
              <span className="material-icons text-gray-400">account_balance_wallet</span>
            </div>
            <p className="text-xs text-gray-600">Employer & Employees Taxes</p>
          </div>
        </div>

        {/* Payroll Runs and Company Pay Snapshot */}
        <div className="grid grid-cols-3 gap-6">
          {/* Payroll Runs */}
          <div className="col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Payroll Runs</h2>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-emerald-50 text-sm font-medium shadow-sm">
                  <span className="material-icons text-base">filter_list</span>
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-1 bg-green-700 text-white rounded-lg hover:bg-green-800 text-sm font-medium shadow-sm">
                  <span className="material-icons text-base">play_arrow</span>
                  <span>Run Payroll</span>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-700 text-left border-b border-gray-200">
                    <th className="py-3 px-4 font-medium">Pay Period</th>
                    <th className="py-3 px-4 font-medium">Pay Date</th>
                    <th className="py-3 px-4 font-medium">Employee</th>
                    <th className="py-3 px-4 font-medium">Total Amount</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                    <th className="py-3 px-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payrollRuns.map((run) => (
                    <tr key={run.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-900">{run.period}</p>
                          <p className="text-xs text-gray-500">{run.type}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-800">{run.payDate}</td>
                      <td className="py-3 px-4 text-gray-800">{run.employees}</td>
                      <td className="py-3 px-4 text-gray-900 font-medium">₱{run.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          run.status === "Draft"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-teal-100 text-teal-700"
                        }`}>
                          {run.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Company Pay Snapshot */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Company Pay Snapshot</h2>
              <button className="text-gray-600 hover:text-gray-900">
                <span className="material-icons">more_vert</span>
              </button>
            </div>
            
            {/* Pie Chart Legend */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-600 mb-3">Current Draft</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  <span className="text-sm text-gray-700">Net Pay (70%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-teal-600"></span>
                  <span className="text-sm text-gray-700">Taxes (15%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-600"></span>
                  <span className="text-sm text-gray-700">Benefits (15%)</span>
                </div>
              </div>
            </div>

            {/* Pay Details */}
            <div className="space-y-4 border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-gray-400 text-sm">receipt</span>
                  <span className="text-sm text-gray-700">Total Net Pay</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">₱333,730.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-gray-400 text-sm">receipt</span>
                  <span className="text-sm text-gray-700">Employee Taxes</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">₱53,920.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-gray-400 text-sm">receipt</span>
                  <span className="text-sm text-gray-700">Employee Deductions</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">₱32,500.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-gray-400 text-sm">receipt</span>
                  <span className="text-sm text-gray-700">Employee Contributions</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">₱50,700.00</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <span className="font-semibold text-gray-900">Total Company Cost</span>
                <span className="text-xl font-bold text-gray-900">₱470,850.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}