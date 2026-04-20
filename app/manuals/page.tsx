"use client";

import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function Manuals() {
  const quickAccessFolders = [
    { id: 1, name: "HR Policies", icon: "folder" },
    { id: 2, name: "Onboarding Materials", icon: "folder" },
    { id: 3, name: "Benefits & Perks", icon: "folder" },
    { id: 4, name: "Department OKRs", icon: "folder" },
  ];

  const recentFiles = [
    {
      id: 1,
      name: "Q3 Performance Review Guidelines",
      icon: "description",
      owner: "Sarah Jenkins",
      ownerAvatar: "https://randomuser.me/api/portraits/women/1.jpg",
      lastModified: "Oct 15, 2025",
    },
    {
      id: 2,
      name: "Employee Handbook 2025",
      icon: "description",
      owner: "Maria Garcia",
      ownerAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
      lastModified: "Oct 10, 2025",
    },
    {
      id: 3,
      name: "Holiday Schedule 2026",
      icon: "event",
      owner: "Jessica Wong",
      ownerAvatar: "https://randomuser.me/api/portraits/women/3.jpg",
      lastModified: "Oct 2, 2025",
    },
    {
      id: 4,
      name: "Expense Policy Update - Oct",
      icon: "description",
      owner: "Mark Davis",
      ownerAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
      lastModified: "Oct 1, 2025",
    },
    {
      id: 5,
      name: "All-Hands Deck - October",
      icon: "slideshow",
      owner: "Richard Sterling",
      ownerAvatar: "https://randomuser.me/api/portraits/men/2.jpg",
      lastModified: "Sep 28, 2024",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeMenu="manuals" />

      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        <PageHeader 
          title="Company Manuals" 
          subtitle="Access and manage company documents synced from Google Drive."
          actions={
            <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium">
              <span className="material-icons text-base">cloud_upload</span>
              Upload Manual
            </button>
          }
        />

        <div className="flex-1 overflow-auto p-8">
          {/* Google Drive Section */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <span className="material-icons text-blue-600 text-2xl">cloud</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">Google Drive Connected</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Connected</span>
                  </div>
                  <p className="text-sm text-gray-600">Company Shared Drive / HRIS / Manuals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 text-sm font-medium">
                  <span className="material-icons text-base">sync</span>
                  Sync Now
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 text-sm font-medium">
                  <span className="material-icons text-base">open_in_new</span>
                  Open in Drive
                </button>
              </div>
            </div>
          </div>

          {/* Quick Access Folders */}
          <div className="mb-8">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Quick Access Folders</h2>
            <div className="grid grid-cols-4 gap-4">
              {quickAccessFolders.map((folder) => (
                <button
                  key={folder.id}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow text-left"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="material-icons text-gray-400 text-2xl">folder</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{folder.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Files */}
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-4">Recent Files</h2>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Filename</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Owner</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Last Modified</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {recentFiles.map((file, idx) => (
                    <tr key={file.id} className={`${idx !== recentFiles.length - 1 ? "border-b border-gray-200" : ""} hover:bg-gray-50`}>
                      <td className="px-6 py-4 flex items-center gap-3">
                        <span className="material-icons text-gray-400">{file.icon}</span>
                        <span className="text-sm font-medium text-gray-900">{file.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img
                            src={file.ownerAvatar}
                            alt={file.owner}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-700">{file.owner}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600">{file.lastModified}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-gray-400 hover:text-gray-600">
                          <span className="material-icons text-lg">more_vert</span>
                        </button>
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
