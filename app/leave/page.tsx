"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/navigation";

export default function LeavePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  const pendingRequests = [
    {
      id: 1,
      name: "Marcus Johnson",
      department: "Engineering",
      leaveType: "Annual Leave",
      startDate: "Apr 12",
      endDate: "Apr 18",
      duration: "5 days",
      status: "5 days",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Chloe Chen",
      department: "Marketing",
      leaveType: "Sick Leave",
      startDate: "Apr 11 (Today)",
      endDate: "",
      duration: "Bal. 8 days left",
      status: "1 day",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "David Smith",
      department: "Sales",
      leaveType: "Parental Leave",
      startDate: "May 1",
      endDate: "June 15",
      duration: "Special Leave",
      status: "32 days",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 4,
      name: "David Smith",
      department: "Sales",
      leaveType: "Parental Leave",
      startDate: "May 1",
      endDate: "June 15",
      duration: "Special Leave",
      status: "32 days",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  const upcomingLeaves = [
    {
      month: "OCT",
      day: 25,
      title: "Company Retreat",
      description: "All Employees (2days)",
    },
    {
      month: "OCT",
      day: 25,
      title: "4 People Away",
      description: "",
      type: "people",
      avatars: [
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/men/4.jpg",
      ],
    },
    {
      month: "NOV",
      day: 1,
      title: "Public Holiday",
      description: "All Saints' Day",
    },
  ];

  const departmentUsage = [
    { name: "Engineering", used: 78 },
    { name: "Sale", used: 62 },
    { name: "Marketing", used: 45 },
    { name: "HR & Admin", used: 55 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu="leave" />

      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        <PageHeader 
          title="Leave Management" 
          subtitle="Request, track, and manage employee leave."
        />

        <div className="flex-1 overflow-auto p-8">
          
          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-gray-200 mb-8">
            {["overview", "myLeaves", "teamLeaves", "calendar", "policies"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-1 py-3 border-b-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-green-700 text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab === "overview" && <span className="material-icons text-base">grid_view</span>}
                {tab === "myLeaves" && <span className="material-icons text-base">assignment</span>}
                {tab === "teamLeaves" && <span className="material-icons text-base">people</span>}
                {tab === "calendar" && <span className="material-icons text-base">calendar_today</span>}
                {tab === "policies" && <span className="material-icons text-base">description</span>}
                <span className="hidden sm:inline">
                  {tab === "overview" && "Overview"}
                  {tab === "myLeaves" && "My Leaves"}
                  {tab === "teamLeaves" && "Team Leaves"}
                  {tab === "calendar" && "Calendar"}
                  {tab === "policies" && "Policies"}
                </span>
              </button>
            ))}
          </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Pending Requests</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <span className="material-icons text-gray-400">cloud_queue</span>
            </div>
            <p className="text-xs text-gray-600">Across 4 departments</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">On Leave Today</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <span className="material-icons text-gray-400">people</span>
            </div>
            <p className="text-xs text-red-600">-2 from yesterday</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Avg. Annual Leave Used</p>
                <p className="text-3xl font-bold text-gray-900">65%</p>
              </div>
              <span className="material-icons text-gray-400">trending_up</span>
            </div>
            <p className="text-xs text-gray-600">Year to date</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-gray-600 text-xs mb-1">Upcoming Holidays</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <span className="material-icons text-gray-400">flag</span>
            </div>
            <p className="text-xs text-blue-600">Next: Thanksgiving</p>
          </div>
        </div>

        {/* Pending Requests and Upcoming Leaves */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Pending Requests */}
          <div className="col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Pending Requests</h2>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View All(22)</a>
            </div>
            <div className="space-y-3">
              {pendingRequests.map((req) => (
                <div key={req.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <img src={req.avatar} alt={req.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{req.name}</p>
                      <p className="text-xs text-gray-600">{req.department}</p>
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <p className="font-medium text-gray-900">{req.leaveType}</p>
                    <p className="text-xs text-gray-600">{req.startDate} - {req.endDate}</p>
                  </div>
                  <div className="text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      req.status.includes("5 days")
                        ? "bg-blue-100 text-blue-700"
                        : req.status.includes("1 day")
                        ? "bg-orange-100 text-orange-700"
                        : "bg-teal-100 text-teal-700"
                    }`}>
                      {req.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                      <span className="material-icons text-base">check</span>
                    </button>
                    <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                      <span className="material-icons text-base">close</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Leaves */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Leaves</h2>
              <span className="material-icons text-gray-400">calendar_today</span>
            </div>
            <div className="space-y-4">
              {upcomingLeaves.map((leave, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-100 rounded text-center py-2 px-3 min-w-fit">
                      <p className="text-xs font-semibold text-gray-600">{leave.month}</p>
                      <p className="text-lg font-bold text-gray-900">{leave.day}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{leave.title}</p>
                      {leave.type === "people" ? (
                        <div className="flex -space-x-2 mt-2">
                          {leave.avatars.map((avatar, i) => (
                            <img key={i} src={avatar} alt={`person-${i}`} className="w-6 h-6 rounded-full object-cover border border-white" />
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-600">{leave.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full text-blue-600 hover:text-blue-800 text-sm font-medium py-2">
                View Full Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Leave Usage and Quick Links */}
        <div className="grid grid-cols-3 gap-6">
          {/* Leave Usage by Department */}
          <div className="col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Leave Usage by Department</h2>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Detailed Report</button>
            </div>
            <div className="space-y-4">
              {departmentUsage.map((dept, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-900">{dept.name}</p>
                    <p className="text-sm text-gray-600">{dept.used}% Used</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-700 h-2 rounded-full"
                      style={{ width: `${dept.used}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <span className="material-icons text-gray-400">description</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Leave Policy 2024</p>
                  <p className="text-xs text-gray-500">Updated Jan 2024</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <span className="material-icons text-gray-400">calendar_month</span>
                <div>
                  <p className="text-sm font-medium text-gray-900">Holiday Calendar</p>
                  <p className="text-xs text-gray-500">Company-wide observances</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}