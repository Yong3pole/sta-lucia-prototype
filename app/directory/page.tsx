"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import { AddEmployeeModal } from "./components/AddEmployeeModal";
import { EmployeeModal } from "./components/EmployeeModal";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

  const employees = [
    { id: 1, name: "Alicia Reyes", title: "Frontend Developer", department: "Engineering", email: "alicia.reyes@forensync.com", location: "Cebu", status: "Active", img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Marcus Tan", title: "Backend Engineer", department: "Engineering", email: "marcus.tan@forensync.com", location: "Manila", status: "Active", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Sofia Lim", title: "HR Manager", department: "Human Resources", email: "sofia.lim@forensync.com", location: "Cebu", status: "On Leave", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Daniel Cruz", title: "UI/UX Designer", department: "Design", email: "daniel.cruz@forensync.com", location: "Davao", status: "Active", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Karen Bautista", title: "Accountant", department: "Finance", email: "karen.bautista@forensync.com", location: "Cebu", status: "Inactive", img: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 6, name: "Joshua Villanueva", title: "DevOps Engineer", department: "Infrastructure", email: "joshua.villanueva@forensync.com", location: "Remote", status: "Active", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 7, name: "Maria Santos", title: "Product Manager", department: "Product", email: "maria.santos@forensync.com", location: "Manila", status: "Active", img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 8, name: "James Wilson", title: "QA Engineer", department: "Engineering", email: "james.wilson@forensync.com", location: "Cebu", status: "Active", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  ];

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         emp.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "Active" ? true : emp.status === selectedStatus;
    const matchesDepartment = selectedDepartment === "All Departments" ? true : emp.department === selectedDepartment;
    const matchesLocation = selectedLocation === "All Locations" ? true : emp.location === selectedLocation;
    
    return matchesSearch && matchesStatus && matchesDepartment && matchesLocation;
  });

  return (
    <div className="flex h-screen bg-green-50">
      <Sidebar activeMenu="directory" />

      <main className="flex-1 flex flex-col overflow-hidden">
        <PageHeader 
          title="Employee Directory" 
          subtitle="Search and manage all employees in your organization."
        />

        <div className="flex-1 overflow-auto p-4 md:p-8">

        {/* Filters and Actions */}
        <div className="flex flex-col gap-4 mb-6">
          {/* Search and Dropdowns */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search employee by name, department, and title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 font-medium"
            />
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 font-medium shadow-sm appearance-none cursor-pointer pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23374151'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 14l-7 7m0 0l-7-7m7 7V3'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: 'right 8px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20px',
              }}
            >
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Human Resources</option>
              <option>Finance</option>
              <option>Product</option>
              <option>Infrastructure</option>
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 font-medium shadow-sm appearance-none cursor-pointer pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23374151'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 14l-7 7m0 0l-7-7m7 7V3'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: 'right 8px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20px',
              }}
            >
              <option>All Locations</option>
              <option>Cebu</option>
              <option>Manila</option>
              <option>Davao</option>
              <option>Remote</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-700 font-medium shadow-sm appearance-none cursor-pointer pr-8"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23374151'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 14l-7 7m0 0l-7-7m7 7V3'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: 'right 8px center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '20px',
              }}
            >
              <option>Active</option>
              <option>On Leave</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* View Mode and Add Employee */}
          <div className="flex gap-3 items-center justify-between">
            <div className="flex gap-2 bg-white rounded-xl shadow-sm p-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  viewMode === "grid"
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  viewMode === "list"
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                List
              </button>
            </div>
            <button 
              onClick={() => setShowAddEmployeeModal(true)}
              className="px-6 py-2 bg-emerald-700 text-white font-medium rounded-xl hover:bg-emerald-800 text-sm shadow-sm flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Employee
            </button>
          </div>
        </div>

        {/* Employee Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((emp) => (
              <div key={emp.id} className="bg-white rounded-lg shadow p-6 text-center">
                <div className="relative flex justify-center mb-4">
                  <img src={emp.img} alt={emp.name} className="w-20 h-20 rounded-full object-cover" />
                  <span className={`absolute top-0 right-12 px-2 py-1 rounded text-xs font-semibold text-white ${
                    emp.status === "Active" ? "bg-teal-600" :
                    emp.status === "On Leave" ? "bg-orange-500" :
                    "bg-gray-500"
                  }`}>
                    {emp.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{emp.name}</h3>
                <p className="text-sm text-emerald-700 font-medium">{emp.title}</p>
                <p className="text-xs text-gray-600">{emp.department}</p>
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{emp.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{emp.location}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setSelectedEmployee(emp)}
                    className="flex-1 px-3 py-2 text-xs font-medium text-emerald-700 border border-emerald-700 rounded-xl hover:bg-emerald-50"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900">Title</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900">Department</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900">Location</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={emp.img} alt={emp.name} className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-sm font-medium text-gray-900">{emp.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-emerald-700 font-medium">{emp.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{emp.department}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{emp.location}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold text-white ${
                        emp.status === "Active" ? "bg-teal-600" :
                        emp.status === "On Leave" ? "bg-orange-500" :
                        "bg-gray-500"
                      }`}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedEmployee(emp)}
                        className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        </div>

        {/* Employee Profile Modal */}
        {selectedEmployee && (
          <EmployeeModal employee={selectedEmployee} onClose={() => setSelectedEmployee(null)} />
        )}

        {/* Add Employee Modal */}
        {showAddEmployeeModal && (
          <AddEmployeeModal onClose={() => setShowAddEmployeeModal(false)} />
        )}
      </main>
    </div>
  );
}
