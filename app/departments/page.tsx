"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const departments = [
    {
      id: 1,
      name: "Engineering",
      icon: "code",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      head: "Marcus Johnson",
      headImg: "https://randomuser.me/api/portraits/men/1.jpg",
      members: 64,
      openRoles: 8,
      memberImages: [
        "https://randomuser.me/api/portraits/men/2.jpg",
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
      ],
    },
    {
      id: 2,
      name: "Product",
      icon: "shopping_bag",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      head: "Jose Carlos",
      headImg: "https://randomuser.me/api/portraits/men/4.jpg",
      members: 64,
      openRoles: 8,
      memberImages: [
        "https://randomuser.me/api/portraits/women/3.jpg",
        "https://randomuser.me/api/portraits/men/5.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg",
        "https://randomuser.me/api/portraits/men/6.jpg",
      ],
    },
    {
      id: 3,
      name: "Sales",
      icon: "trending_up",
      color: "bg-green-100",
      iconColor: "text-green-600",
      head: "David Castro",
      headImg: "https://randomuser.me/api/portraits/men/7.jpg",
      members: 64,
      openRoles: 8,
      memberImages: [
        "https://randomuser.me/api/portraits/women/5.jpg",
        "https://randomuser.me/api/portraits/men/8.jpg",
        "https://randomuser.me/api/portraits/women/6.jpg",
        "https://randomuser.me/api/portraits/men/9.jpg",
      ],
    },
    {
      id: 4,
      name: "Design",
      icon: "palette",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      head: "Juan Tamad",
      headImg: "https://randomuser.me/api/portraits/men/10.jpg",
      members: 64,
      openRoles: 8,
      memberImages: [
        "https://randomuser.me/api/portraits/women/7.jpg",
        "https://randomuser.me/api/portraits/men/11.jpg",
        "https://randomuser.me/api/portraits/women/8.jpg",
        "https://randomuser.me/api/portraits/men/12.jpg",
      ],
    },
    {
      id: 5,
      name: "Marketing",
      icon: "campaign",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      head: "Kim Jhon",
      headImg: "https://randomuser.me/api/portraits/women/9.jpg",
      members: 64,
      openRoles: 8,
      memberImages: [
        "https://randomuser.me/api/portraits/men/13.jpg",
        "https://randomuser.me/api/portraits/women/10.jpg",
        "https://randomuser.me/api/portraits/men/14.jpg",
        "https://randomuser.me/api/portraits/women/11.jpg",
      ],
    },
    {
      id: 6,
      name: "Finance",
      icon: "account_balance",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
      head: "Rachel Berdin",
      headImg: "https://randomuser.me/api/portraits/women/12.jpg",
      members: 64,
      openRoles: 8,
      memberImages: [
        "https://randomuser.me/api/portraits/women/13.jpg",
        "https://randomuser.me/api/portraits/men/15.jpg",
        "https://randomuser.me/api/portraits/women/14.jpg",
        "https://randomuser.me/api/portraits/men/16.jpg",
      ],
    },
  ];

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-green-50">
      <Sidebar activeMenu="departments" />

      <main className="flex-1 flex flex-col overflow-hidden">
        <PageHeader 
          title="Departments" 
          subtitle="Manage and view all departments in your organization."
        />

        <div className="flex-1 overflow-auto p-4 md:p-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Departments</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="material-icons text-blue-600">apartment</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Employees</p>
                <p className="text-3xl font-bold text-gray-900">248</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-lg">
                <span className="material-icons text-teal-600">people</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Open Roles</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <span className="material-icons text-amber-600">work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-6 items-center">
          <input
            type="text"
            placeholder="Filter departments"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 bg-white rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 font-medium"
          />
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-emerald-50 font-medium shadow-sm">
            <span className="material-icons text-base">filter_list</span>
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 hover:bg-emerald-50 font-medium shadow-sm">
            <span className="material-icons text-base">sort</span>
            <span>Sort by Name</span>
          </button>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepartments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`${dept.color} p-3 rounded-lg`}>
                    <span className={`material-icons ${dept.iconColor}`}>{dept.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <span className="material-icons">more_vert</span>
                </button>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-1">Department Head</p>
                <div className="flex items-center gap-2">
                  <img src={dept.headImg} alt={dept.head} className="w-8 h-8 rounded-full object-cover" />
                  <p className="font-medium text-gray-900">{dept.head}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
                <div>
                  <p className="text-2xl font-bold text-gray-900">{dept.members}</p>
                  <p className="text-xs text-gray-600">Members</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{dept.openRoles}</p>
                  <p className="text-xs text-gray-600">Open Roles</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {dept.memberImages.slice(0, 4).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`member-${idx}`}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                    +6
                  </div>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1">
                  View Details
                  <span className="material-icons text-base">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}