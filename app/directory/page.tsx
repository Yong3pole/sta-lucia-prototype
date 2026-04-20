"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedStatus, setSelectedStatus] = useState("Active");

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
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu="directory" />

      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        <PageHeader 
          title="Employee Directory" 
          subtitle="Search and manage all employees in your organization."
        />

        <div className="flex-1 overflow-auto p-8">

        {/* Filters */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search employee by name, department, and title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-700"
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
            className="px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-700"
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
            className="px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option>Active</option>
            <option>On Leave</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Employee Grid */}
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
              <p className="text-sm text-blue-600 font-medium">{emp.title}</p>
              <p className="text-xs text-gray-600">{emp.department}</p>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <span className="material-icons text-sm">email</span>
                  <span>{emp.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <span className="material-icons text-sm">location_on</span>
                  <span>{emp.location}</span>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 px-3 py-2 text-xs font-medium text-green-700 border border-green-700 rounded hover:bg-green-50">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}