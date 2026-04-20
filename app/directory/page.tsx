"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

// Employee Profile Modal Component
function EmployeeModal({ employee, onClose }: { employee: any; onClose: () => void }) {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-8">
          <div className="flex items-start gap-6 mb-6">
            <img src={employee.img} alt={employee.name} className="w-20 h-20 rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-semibold text-gray-900">{employee.name}</h2>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                  employee.status === "Active" ? "bg-teal-600" :
                  employee.status === "On Leave" ? "bg-orange-500" :
                  "bg-gray-500"
                }`}>
                  {employee.status}
                </span>
              </div>
              <p className="text-sm text-emerald-700 font-medium">{employee.title}</p>
              <p className="text-sm text-gray-600">{employee.department}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✕
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{employee.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span>{employee.location}</span>
            </div>
          </div>
        </div>

        {/* Content - Two Column */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Educational Background */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                    </svg>
                    Educational Background
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">Master of Business Administration (MBA)</p>
                    <p className="text-xs text-gray-600">University of Visayas</p>
                    <p className="text-xs text-gray-500 mt-1">2017</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">B.S in Computer Science</p>
                    <p className="text-xs text-gray-600">University of Visayas</p>
                    <p className="text-xs text-gray-500 mt-1">2014</p>
                  </div>
                </div>
              </div>

              {/* Past Employment */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.582a2 2 0 00-1.897 1.13A6.002 6.002 0 006.75 21H4" />
                    </svg>
                    Past Employment
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">Senior UX Researcher</p>
                    <p className="text-xs text-gray-600">TechFlow Inc</p>
                    <p className="text-xs text-gray-500 mt-1">2021</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">Product Analyst</p>
                    <p className="text-xs text-gray-600">DataCorp</p>
                    <p className="text-xs text-gray-500 mt-1">2018</p>
                  </div>
                </div>
              </div>

              {/* Career Development */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Career Development
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">Current Career Goal</p>
                    <p className="text-gray-600">Director of Product by Q4 2026</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Recent Training</p>
                    <p className="text-gray-600">Advanced Product Strategy (Completed Oct 2024)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mentorship</p>
                    <p className="text-gray-600">Mentoring 2 junior designers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Eligibility Records */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Eligibility Records
                  </h3>
                  <button className="text-xs font-medium text-emerald-700 hover:text-emerald-800">Update</button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Work Authorization</p>
                      <p className="text-xs text-gray-600">Filipino Citizen</p>
                    </div>
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded">Verified</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Form 201 Verification</p>
                      <p className="text-xs text-gray-600">Verified on Jan 15, 2025</p>
                    </div>
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded">Completed</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Employment Documentation</p>
                      <p className="text-xs text-gray-600">Verified on Jan 15, 2025</p>
                    </div>
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded">Completed</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Background Check</p>
                      <p className="text-xs text-gray-600">Verified on Jan 10, 2022</p>
                    </div>
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded">Cleared</span>
                  </div>
                </div>
              </div>

              {/* Separation & Legal Action */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m-6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Separation & Legal Action
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm mb-2">Disciplinary Actions</p>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-teal-500">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      </span>
                      <p className="text-xs text-gray-600">No Actions on record</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm mb-2">Legal Notices</p>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-teal-500">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      </span>
                      <p className="text-xs text-gray-600">None</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm mb-2">Separation Date</p>
                    <p className="text-xs text-gray-600">N/A (Active Employee)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
          >
            Close
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-700 rounded-xl hover:bg-emerald-800 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const employees = [
    { id: 1, name: "Alicia Reyes", title: "Frontend Developer", department: "Engineering", email: "alicia.reyes@spossnexus.com", location: "Cebu", status: "Active", img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Marcus Tan", title: "Backend Engineer", department: "Engineering", email: "marcus.tan@spossnexus.com", location: "Manila", status: "Active", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Sofia Lim", title: "HR Manager", department: "Human Resources", email: "sofia.lim@spossnexus.com", location: "Cebu", status: "On Leave", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Daniel Cruz", title: "UI/UX Designer", department: "Design", email: "daniel.cruz@spossnexus.com", location: "Davao", status: "Active", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 5, name: "Karen Bautista", title: "Accountant", department: "Finance", email: "karen.bautista@spossnexus.com", location: "Cebu", status: "Inactive", img: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 6, name: "Joshua Villanueva", title: "DevOps Engineer", department: "Infrastructure", email: "joshua.villanueva@spossnexus.com", location: "Remote", status: "Active", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 7, name: "Maria Santos", title: "Product Manager", department: "Product", email: "maria.santos@spossnexus.com", location: "Manila", status: "Active", img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 8, name: "James Wilson", title: "QA Engineer", department: "Engineering", email: "james.wilson@spossnexus.com", location: "Cebu", status: "Active", img: "https://randomuser.me/api/portraits/men/4.jpg" },
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
            <button className="px-6 py-2 bg-emerald-700 text-white font-medium rounded-xl hover:bg-emerald-800 text-sm shadow-sm flex items-center gap-2">
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
      </main>
    </div>
  );
}