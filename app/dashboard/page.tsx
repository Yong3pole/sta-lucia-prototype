
"use client";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu="dashboard" />

      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        <PageHeader title="Dashboard Overview" subtitle="Welcome back! Here's your HRIS overview." />

        <div className="flex-1 overflow-auto p-8">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <div className="text-xs text-gray-600 mb-1">Time & Attendance</div>
            <div className="text-2xl font-bold mb-1 text-gray-900">96.8%</div>
            <div className="text-xs text-gray-700 mb-2">Company attendance rate this week</div>
            <div className="text-xs text-green-600">+12 this month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <div className="text-xs text-gray-600 mb-1">Payroll</div>
            <div className="text-2xl font-bold mb-1 text-gray-900">₱44K</div>
            <div className="text-xs text-gray-700 mb-2">Processed in current cycle</div>
            <div className="text-xs text-gray-600">Payroll closes in 2 days</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <div className="text-xs text-gray-600 mb-1">Performance</div>
            <div className="text-2xl font-bold mb-1 text-gray-900">84%</div>
            <div className="text-xs text-gray-700 mb-2">Average goal completion rate</div>
            <div className="text-xs text-green-600">Q4 review cycle on track</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <div className="text-xs text-gray-600 mb-1">Leaves</div>
            <div className="text-2xl font-bold mb-1 text-gray-900">18</div>
            <div className="text-xs text-gray-700 mb-2">Open leave application pending</div>
            <div className="text-xs text-red-600">6 require action today</div>
          </div>
        </div>

        {/* Recent Hires & Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Hires */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Hires</h2>
              <a href="#" className="text-xs text-green-700 font-medium hover:underline">View Directory</a>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-gray-700 text-left">
                    <th className="py-2 px-2 font-medium">Employee</th>
                    <th className="py-2 px-2 font-medium">Role</th>
                    <th className="py-2 px-2 font-medium">Department</th>
                    <th className="py-2 px-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Camille Perez", email: "camille.perez@spossnexus.com", role: "Recruiter", dept: "Human Resources", status: "Active", img: "https://randomuser.me/api/portraits/women/1.jpg" },
                    { name: "Lara Santos", email: "lara.santos@spossnexus.com", role: "Qa Engineer", dept: "Engineering", status: "Active", img: "https://randomuser.me/api/portraits/women/2.jpg" },
                    { name: "Grace Mendoza", email: "grace.mendoza@spossnexus.com", role: "Hr Assistant", dept: "Human Resources", status: "Active", img: "https://randomuser.me/api/portraits/women/3.jpg" },
                    { name: "Chris Navarro", email: "chris.navarro@spossnexus.com", role: "Security Officer", dept: "Security", status: "Active", img: "https://randomuser.me/api/portraits/men/1.jpg" },
                    { name: "Nina Garcia", email: "nina.garcia@spossnexus.com", role: "Marketing Specialist", dept: "Marketing", status: "Active", img: "https://randomuser.me/api/portraits/women/4.jpg" },
                    { name: "Faith Santiago", email: "faith.santiago@spossnexus.com", role: "Pr Coordinator", dept: "Marketing", status: "Active", img: "https://randomuser.me/api/portraits/women/5.jpg" },
                    { name: "Isabel Torres", email: "isabel.torres@spossnexus.com", role: "Content Writer", dept: "Marketing", status: "Active", img: "https://randomuser.me/api/portraits/women/6.jpg" },
                    { name: "Daniel Cruz", email: "daniel.cruz@spossnexus.com", role: "Ui UX Designer", dept: "Design", status: "Active", img: "https://randomuser.me/api/portraits/men/2.jpg" },
                  ].map((emp, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="py-2 px-2 flex items-center gap-2">
                        <img src={emp.img} alt={emp.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <div className="font-medium text-gray-900">{emp.name}</div>
                          <div className="text-xs text-gray-600">{emp.email}</div>
                        </div>
                      </td>
                      <td className="py-2 px-2 text-gray-800">{emp.role}</td>
                      <td className="py-2 px-2 text-gray-800">{emp.dept}</td>
                      <td className="py-2 px-2">
                        <span className="px-3 py-1 rounded-full border border-gray-300 text-xs font-medium text-gray-800">{emp.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Snapshot */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-base font-semibold mb-3 text-gray-900">Snapshot</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm">
                  <span className="bg-green-100 text-green-700 rounded-full w-7 h-7 flex items-center justify-center text-sm"><span className="material-icons" style={{fontSize: '16px'}}>fact_check</span></span>
                  <span className="text-gray-800">Missing check-ins</span>
                  <span className="ml-auto text-xs text-gray-600">7 employees</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="bg-red-100 text-red-700 rounded-full w-7 h-7 flex items-center justify-center text-sm"><span className="material-icons" style={{fontSize: '16px'}}>error</span></span>
                  <span className="text-gray-800">Payroll exceptions</span>
                  <span className="ml-auto text-xs text-gray-600">5 items</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-7 h-7 flex items-center justify-center text-sm"><span className="material-icons" style={{fontSize: '16px'}}>check_circle</span></span>
                  <span className="text-gray-800">Leave approvals</span>
                  <span className="ml-auto text-xs text-gray-600">6 urgent</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-7 h-7 flex items-center justify-center text-sm"><span className="material-icons" style={{fontSize: '16px'}}>notifications</span></span>
                  <span className="text-gray-800">Review reminders</span>
                  <span className="ml-auto text-xs text-gray-600">14 pending</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3 text-gray-900">Snapshot</h3>
              <ul className="space-y-1 text-xs text-gray-800">
                <li className="flex justify-between"><span>Attendance complience</span><span>96%</span></li>
                <li className="flex justify-between"><span>Payroll ready employees</span><span>94%</span></li>
                <li className="flex justify-between"><span>Leave capacity next week</span><span>82%</span></li>
              </ul>
              <ul className="space-y-1 text-xs mt-2 text-gray-700">
                <li>412 / 427 employees on time</li>
                <li>403 records verified</li>
                <li>Sales department nearing cap</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
