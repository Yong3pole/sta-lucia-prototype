"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BiometricsSidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Sync Network Rules", path: "/attendance/biometrics/SyncNetworkRules", icon: "sync_alt" },
    { name: "Mobile Geofencing (Add Ons)", path: "/attendance/biometrics/MobileGeofencing", icon: "location_on" },
    { name: "Data Privacy Security", path: "/attendance/biometrics/DataPrivacySecurity", icon: "security" },
    { name: "Logs Diagnostics", path: "/attendance/biometrics/LogsDiagnostic", icon: "bug_report" },
  ];

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-full shadow-sm font-sans">
      {/* Back button – refined typography */}
      <div className="px-5 py-5 border-b border-gray-200">
        <Link href="/attendance">
          <button className="flex items-center gap-2.5 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-semibold text-sm tracking-tight">
            <span className="material-icons text-base">arrow_back</span>
            <span>Back to Attendance</span>
          </button>
        </Link>
      </div>

      {/* Navigation – cleaner spacing and font weights */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link href={item.path}>
                  <span
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium tracking-tight cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "bg-green-50 text-green-700 shadow-sm font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className={`material-icons text-base ${isActive ? "text-green-600" : "text-gray-500"}`}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

    </aside>
  );
}