"use client";

import { useRouter } from "next/navigation";

interface SidebarProps {
  activeMenu: string;
}

export default function Sidebar({ activeMenu }: SidebarProps) {
  const router = useRouter();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { id: "directory", label: "Directory", icon: "people", path: "/directory" },
    { id: "departments", label: "Departments", icon: "apartment", path: "/departments" },
    { id: "attendance", label: "Attendance", icon: "access_time", path: "/attendance" },
    { id: "payroll", label: "Payroll", icon: "payments", path: "/payroll" },
    { id: "leave", label: "Leave", icon: "event", path: "/leave" },
    { id: "performance", label: "Performance", icon: "trending_up", path: "/performance" },
    { id: "manuals", label: "Manuals", icon: "menu_book", path: "/manuals" },
    { id: "announcements", label: "Announcements", icon: "campaign", path: "/announcements" },
  ];

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center gap-2 px-6 py-6 border-b">
        <span className="font-bold text-lg text-gray-900">SPOSS Nexus HR</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4">
        <div className="mb-6">
          <div className="text-xs text-gray-600 font-semibold mb-2">HRIS</div>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer ${
                  activeMenu === item.id
                    ? "bg-gray-100 font-medium text-green-700"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
                onClick={() => router.push(item.path)}
              >
                <span className="material-icons text-base">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <span className="rounded-full bg-gray-200 w-7 h-7 flex items-center justify-center text-xs font-bold text-gray-900">RS</span>
          <div className="flex-1">
            <div className="text-xs font-medium text-gray-900">Sarah Adkins</div>
            <div className="text-xs text-gray-600">hr@spossnexus.com</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-gray-600 hover:text-gray-900 p-1"
          title="Logout"
        >
          <span className="material-icons text-lg">logout</span>
        </button>
      </div>
    </div>
  );
}
