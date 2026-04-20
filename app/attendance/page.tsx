"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function AttendancePage() {

  const punches = [
    {
      id: 1,
      name: "Michael Chen",
      empId: "EMP-001",
      avatar: "MC",
      avatarColor: "bg-green-600",
      department: "Engineering",
      time: "08:52 AM",
      method: "Face ID",
      methodColor: "bg-green-100 text-green-700",
      action: "Clock In",
    },
    {
      id: 2,
      name: "Jessica Alby",
      empId: "EMP-002",
      avatar: "JA",
      avatarColor: "bg-yellow-700",
      department: "Sales",
      time: "08:45 AM",
      method: "Fingerprint",
      methodColor: "bg-yellow-100 text-yellow-700",
      action: "Clock In",
    },
    {
      id: 3,
      name: "David Rodriguez",
      empId: "EMP-003",
      avatar: "DR",
      avatarColor: "bg-purple-600",
      department: "Warehouse",
      time: "08:39 AM",
      method: "Face ID",
      methodColor: "bg-green-100 text-green-700",
      action: "Clock In",
    },
    {
      id: 4,
      name: "Avata",
      empId: "EMP-004",
      avatar: "AV",
      avatarColor: "bg-blue-600",
      department: "Marketing",
      time: "08:15 AM",
      method: "Mobile GPS",
      methodColor: "bg-blue-100 text-blue-700",
      action: "Clock In",
    },
    {
      id: 5,
      name: "Robert Smith",
      empId: "EMP-005",
      avatar: "RS",
      avatarColor: "bg-orange-600",
      department: "Security",
      time: "06:00 AM",
      method: "Face ID",
      methodColor: "bg-green-100 text-green-700",
      action: "Clock Out",
    },
  ];

  const terminals = [
    {
      id: 1,
      name: "HQ Main Entrance",
      status: "Online",
      synced: "Just now",
      ip: "192.168.1.101",
    },
    {
      id: 2,
      name: "Floor 3 Lobby",
      status: "Online",
      synced: "2 mins ago",
      ip: "192.168.1.102",
    },
    {
      id: 3,
      name: "Warehouse A East",
      status: "Online",
      synced: "5 mins ago",
      ip: "192.168.1.103",
    },
    {
      id: 4,
      name: "Warehouse B West",
      status: "Offline",
      synced: "2 hours ago",
      ip: "192.168.1.104",
    },
  ];


  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu="attendance" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Time & Attendance</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
              <span className="material-icons text-base">download</span>
              <span>Export CSV</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
              <span className="material-icons text-base">settings</span>
              <span>Biometric Settings</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              <span className="material-icons text-base">touch_app</span>
              <span>Manual Punch Entry</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Clocked In</p>
                <p className="text-3xl font-bold text-gray-900">215</p>
              </div>
              <span className="material-icons text-gray-400">person</span>
            </div>
            <p className="text-xs text-gray-600">95% on-time rate</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Late Arrivals</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <span className="material-icons text-gray-400">schedule</span>
            </div>
            <p className="text-xs text-gray-600">5% vs yesterday</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Absent</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <span className="material-icons text-gray-400">person_off</span>
            </div>
            <p className="text-xs text-gray-600">3 on approved leave</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Devices</p>
                <p className="text-3xl font-bold text-gray-900">5</p>
              </div>
              <span className="material-icons text-red-500">devices</span>
            </div>
            <p className="text-xs text-red-600">Needs attention</p>
          </div>
        </div>

        {/* Live Punches and Terminals */}
        <div className="grid grid-cols-3 gap-6">
          {/* Live Punches */}
          <div className="col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Live Punches</h2>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Log</a>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-700 text-left border-b border-gray-200">
                    <th className="py-3 px-4 font-medium">Employee</th>
                    <th className="py-3 px-4 font-medium">Department</th>
                    <th className="py-3 px-4 font-medium">Time</th>
                    <th className="py-3 px-4 font-medium">Method</th>
                    <th className="py-3 px-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {punches.map((punch) => (
                    <tr key={punch.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className={`${punch.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                            {punch.avatar}
                          </span>
                          <div>
                            <p className="font-medium text-gray-900">{punch.name}</p>
                            <p className="text-xs text-gray-600">ID: {punch.empId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-800">{punch.department}</td>
                      <td className="py-3 px-4 text-gray-800">{punch.time}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${punch.methodColor}`}>
                          {punch.method}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button className={`px-3 py-1 rounded border text-xs font-medium ${
                          punch.action === "Clock In"
                            ? "border-teal-500 text-teal-600 hover:bg-teal-50"
                            : "border-orange-500 text-orange-600 hover:bg-orange-50"
                        }`}>
                          {punch.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Biometric Terminals */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Biometric Terminals</h2>
              <button className="text-gray-600 hover:text-gray-900">
                <span className="material-icons">refresh</span>
              </button>
            </div>
            <div className="space-y-3">
              {terminals.map((terminal) => (
                <div key={terminal.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-icons text-lg text-gray-400">devices</span>
                      <h3 className="font-medium text-gray-900">{terminal.name}</h3>
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-semibold ${
                      terminal.status === "Online"
                        ? "text-teal-600"
                        : "text-red-600"
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        terminal.status === "Online" ? "bg-teal-600" : "bg-red-600"
                      }`}></span>
                      {terminal.status}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Synced: {terminal.synced}</p>
                  <p className="text-xs text-gray-500">IP: {terminal.ip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}