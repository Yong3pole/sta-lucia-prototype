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

  // Mock data for attendance trends table
  const attendanceTrendsTable = [
    { 
      id: 1, 
      name: "Jessica Alby", 
      department: "Sales", 
      earlyIn: "8h 15m", 
      overtime: "12h 30m", 
      tardiness: "0 Incidents", 
      score: "9.8/10"
    },
    { 
      id: 2, 
      name: "Robert Smith", 
      department: "Security", 
      earlyIn: "14h 00m", 
      overtime: "32h 00m", 
      tardiness: "0 Incidents", 
      score: "9.6/10"
    },
    { 
      id: 3, 
      name: "Jessica Alby", 
      department: "Sales", 
      earlyIn: "8h 15m", 
      overtime: "12h 30m", 
      tardiness: "3 Lates", 
      score: "7.2/10"
    },
    { 
      id: 4, 
      name: "Maria Santos", 
      department: "Operations", 
      earlyIn: "10h 45m", 
      overtime: "18h 15m", 
      tardiness: "1 Late", 
      score: "8.9/10"
    },
    { 
      id: 5, 
      name: "James Wilson", 
      department: "Engineering", 
      earlyIn: "12h 30m", 
      overtime: "28h 00m", 
      tardiness: "0 Incidents", 
      score: "9.4/10"
    },
  ];

  const maxOvertimeHours = Math.max(...overtimeByDept.map(d => d.hours));

  return (
    <div className="flex h-screen bg-green-50">
      <Sidebar activeMenu="performance" />

      <main className="flex-1 flex flex-col overflow-hidden">
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

        <div className="flex-1 overflow-auto p-4 md:p-8">
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
            <div className="flex gap-4 h-80">
              {/* Y-axis labels */}
              <div className="flex flex-col justify-between text-xs text-gray-500 w-12 text-right pr-4 flex-shrink-0">
                <span>150</span>
                <span>120</span>
                <span>90</span>
                <span>60</span>
                <span>30</span>
                <span>0</span>
              </div>

              {/* Chart area with bars */}
              <div className="flex-1 flex gap-6 items-end border-l border-b border-gray-200 pl-4 pb-4 relative">
                {attendanceTrends.map((trend, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center justify-end">
                    {/* Bar group */}
                    <div className="flex gap-1 h-56 items-end w-full justify-center">
                      {/* Early In - Orange */}
                      <div
                        className="flex-1 bg-orange-500 rounded-t hover:bg-orange-600 transition-colors"
                        style={{ height: `${(trend.earlyIn / 150) * 100}%`, minHeight: '4px' }}
                        title={`Early In: ${trend.earlyIn}`}
                      ></div>
                      {/* Overtime - Blue */}
                      <div
                        className="flex-1 bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                        style={{ height: `${(trend.overtime / 150) * 100}%`, minHeight: '4px' }}
                        title={`Overtime: ${trend.overtime}`}
                      ></div>
                      {/* Late Deductions - Green */}
                      <div
                        className="flex-1 bg-green-600 rounded-t hover:bg-green-700 transition-colors"
                        style={{ height: `${(trend.lateDeductions / 150) * 100}%`, minHeight: '4px' }}
                        title={`Late Deductions: ${trend.lateDeductions}`}
                      ></div>
                    </div>
                    {/* Week label */}
                    <span className="text-xs text-gray-600 font-medium mt-3">{trend.week}</span>
                  </div>
                ))}
              </div>
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

          {/* Attendance Trends Table */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-semibold text-gray-900">Attendance Trends (Hours)</h3>
              <button className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">View Full Report</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Employee</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Department</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Early In (Total)</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Overtime (Total)</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Tardiness</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">Performance Score</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceTrendsTable.map((employee, idx) => (
                    <tr key={employee.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">{employee.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{employee.department}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-orange-600">{employee.earlyIn}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-blue-600">{employee.overtime}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-medium ${employee.tardiness === "0 Incidents" ? "text-green-600" : "text-red-600"}`}>
                          {employee.tardiness}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-semibold ${
                          parseFloat(employee.score) >= 9 ? "text-green-600" :
                          parseFloat(employee.score) >= 8 ? "text-blue-600" :
                          "text-orange-600"
                        }`}>
                          {employee.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
