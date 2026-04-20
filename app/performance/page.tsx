"use client";

import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function Performance() {
  const router = useRouter();

  // Mock data for attendance trends
  const attendanceTrends = [
    { week: "Week 1", earlyIn: 80, overtime: 110, lateDeductions: 20 },
    { week: "Week 2", earlyIn: 85, overtime: 150, lateDeductions: 15 },
    { week: "Week 3", earlyIn: 115, overtime: 100, lateDeductions: 40 },
    { week: "Week 4", earlyIn: 130, overtime: 80, lateDeductions: 10 },
  ];

  // Mock data for overtime by department
  const overtimeByDept = [
    { dept: "Engineering", hours: 142 },
    { dept: "Operations", hours: 95 },
    { dept: "Sale", hours: 64 },
    { dept: "Marketing", hours: 41 },
  ];

  // Mock data for top early arrivals
  const topEarlyArrivals = [
    { id: 1, name: "David Rodriguez", avatar: "https://randomuser.me/api/portraits/men/1.jpg", avg: "25m early" },
    { id: 2, name: "Anna Lee", avatar: "https://randomuser.me/api/portraits/women/2.jpg", avg: "20m early" },
    { id: 3, name: "Michael Chen", avatar: "https://randomuser.me/api/portraits/men/3.jpg", avg: "18m early" },
  ];

  const maxOvertimeHours = Math.max(...overtimeByDept.map(d => d.hours));

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu="performance" />

      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        <PageHeader 
          title="Performance Analytics" 
          subtitle="Track attendance trends and performance metrics across your organization."
          actions={
            <>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <span className="material-icons text-base">calendar_today</span>
                This Month
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium">
                <span className="material-icons text-base">download</span>
                Export Report
              </button>
            </>
          }
        />

        <div className="flex-1 overflow-auto p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Overall Attendance */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-600">Overall Attendance</h3>
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <span className="material-icons text-blue-600 text-lg">calendar_month</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">96.4%</div>
              <div className="text-sm text-green-600">↑ +5% vs last month</div>
            </div>

            {/* Avg. Early In */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-600">Avg. Early In</h3>
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <span className="material-icons text-amber-600 text-lg">person</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">14m</div>
              <div className="text-sm text-green-600">↑ +5m vs last month</div>
            </div>

            {/* Total Overtime */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-600">Total Overtime</h3>
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <span className="material-icons text-purple-600 text-lg">schedule</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">342h</div>
              <div className="text-sm text-green-600">↑ -2h vs last month</div>
            </div>

            {/* Tardiness Rate */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-600">Tardiness Rate</h3>
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <span className="material-icons text-red-600 text-lg">alarm</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.2%</div>
              <div className="text-sm text-red-600">🔴 2% needs attention</div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Attendance Trends Chart */}
            <div className="col-span-2 bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-gray-900">Attendance Trends (Hours)</h3>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  <span>Monthly</span>
                  <span className="material-icons text-base">expand_more</span>
                </button>
              </div>

              {/* Simple Bar Chart */}
              <div className="flex items-end justify-between gap-4 h-64 relative">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between text-xs text-gray-500 absolute -left-8 h-full">
                  <span>170.5</span>
                  <span>148.2</span>
                  <span>127.9</span>
                  <span>106.6</span>
                  <span>85.2</span>
                  <span>63.9</span>
                  <span>42.6</span>
                  <span>21.3</span>
                  <span>0.0</span>
                </div>

                {/* Bars for each week */}
                {attendanceTrends.map((trend, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex gap-1 h-full items-end w-full">
                      {/* Early In - Orange */}
                      <div
                        className="flex-1 bg-orange-500 rounded-t"
                        style={{ height: `${(trend.earlyIn / 150) * 100}%` }}
                      ></div>
                      {/* Overtime - Blue */}
                      <div
                        className="flex-1 bg-blue-500 rounded-t"
                        style={{ height: `${(trend.overtime / 150) * 100}%` }}
                      ></div>
                      {/* Late Deductions - Green */}
                      <div
                        className="flex-1 bg-green-600 rounded-t"
                        style={{ height: `${(trend.lateDeductions / 150) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600">{trend.week}</span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-orange-500"></div>
                  <span className="text-xs text-gray-600">Early In</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-500"></div>
                  <span className="text-xs text-gray-600">Overtime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-600"></div>
                  <span className="text-xs text-gray-600">Late Deductions</span>
                </div>
              </div>
            </div>

            {/* Overtime by Department */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-gray-900">Overtime by Department</h3>
                <button className="text-sm text-teal-600 hover:text-teal-700 font-medium">View All</button>
              </div>

              <div className="space-y-4">
                {overtimeByDept.map((dept, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{dept.dept}</span>
                      <span className="text-sm font-semibold text-gray-900">{dept.hours} hrs</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(dept.hours / maxOvertimeHours) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Early Arrivals */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold text-gray-900">Top Early Arrivals</h3>
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold">This Month</span>
            </div>

            <div className="space-y-4">
              {topEarlyArrivals.map((employee, idx) => (
                <div key={employee.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-500 w-6">{idx + 1}</span>
                    <img
                      src={employee.avatar}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                      <div className="text-xs text-gray-500">{employee.avg}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-teal-600">{idx + 1}{idx === 0 ? "st" : idx === 1 ? "nd" : "rd"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
