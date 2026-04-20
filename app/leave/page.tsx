"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/navigation";

// Under Construction Icon Component
function ConstructionIcon() {
  return (
    <svg className="w-24 h-24 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.452a6 6 0 00-3.036 0l-2.387.452a2 2 0 00-1.022.547m19.5-11.757l-8.806-4.702a2 2 0 00-1.994 0L2.5 3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  );
}

// Under Construction Component
function UnderConstructionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md text-center">
        <ConstructionIcon />
        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">This Page is Under Construction</h3>
        <p className="text-gray-600 text-center">
          We are currently working on this section of the website. We're putting the final touches in place and will be ready soon.
        </p>
      </div>
    </div>
  );
}

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
    <div className="flex h-screen bg-green-50">
      <Sidebar activeMenu="leave" />

      <main className="flex-1 flex flex-col overflow-hidden">
        <PageHeader 
          title="Leave Management" 
          subtitle="Request, track, and manage employee leave."
        />

        <div className="flex-1 overflow-auto p-4 md:p-8">
          
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
                {tab === "overview" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                  </svg>
                )}
                {tab === "myLeaves" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {tab === "teamLeaves" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 8.048M12 4.354c1.791 0 3.39.513 4.776 1.404m0 0a8 8 0 00-5.776-1.404m0 0c-1.791 0-3.39.513-4.776 1.404m5.776-1.404a4 4 0 110 8.048M9 20H5a2 2 0 01-2-2v-1a6 6 0 0112 0v1a2 2 0 01-2 2h-4zm0 0h8a2 2 0 002-2v-1a6 6 0 00-12 0v1a2 2 0 002 2h4z" />
                  </svg>
                )}
                {tab === "calendar" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
                {tab === "policies" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
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

          {/* Content based on active tab */}
          {activeTab === "overview" ? (
            <>
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
                    <a href="#" className="bg-white border border-gray-300 rounded-xl hover:bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-2 shadow-sm">View All(22)</a>
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
                    <button className="w-full text-emerald-700 bg-white border border-gray-300 rounded-xl hover:bg-emerald-50 font-medium py-2 shadow-sm">
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
                    <button className="bg-white border border-gray-300 rounded-xl hover:bg-emerald-50 text-emerald-700 text-sm font-medium px-4 py-2 shadow-sm">Detailed Report</button>
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
            </>
          ) : (
            <UnderConstructionPage />
          )}
        </div>
      </main>
    </div>
  );
}