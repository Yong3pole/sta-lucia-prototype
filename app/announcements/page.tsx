"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

export default function Announcements() {
  const [selectedDate, setSelectedDate] = useState(21); // April 21, 2026

  const announcements = [
    {
      id: 1,
      author: "Sarah Jenkins",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      date: "Oct 24, 2023",
      time: "09:30 AM",
      title: "System Maintenance Scheduled For This Weekend",
      content:
        "Please be advised that NexusHR will undergo scheduled system maintenance this Saturday, October 28th, from 10:00 PM to 2:00 AM EST. During this time, the platform will be unavailable. Please ensure all Friday tasks are completed beforehand.",
      badge: "Important",
      badgeColor: "red",
    },
    {
      id: 2,
      author: "Michael Chang",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      date: "Oct 23, 2023",
      time: "02:15 PM",
      title: "Q4 Company Town Hall Meeting",
      content:
        "We are excited to invite you to our Q4 Town Hall Meeting next Thursday at 2:00 PM EST. Leadership will discuss Q3 performance, upcoming launches, and priorities for the next quarter. A calendar invitation has been sent to all employees.",
      badge: "Event",
      badgeColor: "blue",
    },
    {
      id: 3,
      author: "Amanda Wright",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      date: "Oct 20, 2023",
      time: "11:00 AM",
      title: "Updated Work From Home Guidelines",
      content:
        "The revised work from home policy now includes updated equipment stipend limits, home workstation requirements, and core collaboration hours across time zones. Employees should review the revised handbook section before November payroll cut-off.",
      badge: "Policy Update",
      badgeColor: "orange",
    },
  ];

  const announcementTypes = [
    { name: "Important", color: "red", description: "Urgent notices and downtime", count: 4 },
    { name: "Events", color: "blue", description: "Town halls and gathering", count: 6 },
    { name: "Policies", color: "orange", description: "Handbook and process updates", count: 3 },
    { name: "General", color: "gray", description: "Company news and updates", count: 8 },
    { name: "Celebrations", color: "teal", description: "Birthdays and milestones", count: 5 },
  ];

  const highlightedDates = [10, 13, 18, 26, 27, 2]; // Dates with events

  return (
    <div className="flex h-screen bg-green-50">
      <Sidebar activeMenu="announcements" />

      <main className="flex-1 flex flex-col overflow-hidden">
        <PageHeader 
          title="Announcements" 
          subtitle="Stay updated with the latest company announcements and news."
          actions={
            <button className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium">
              <span className="material-icons text-base">add</span>
              New Announcement
            </button>
          }
        />

        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Left side announcements */}
            <div className="col-span-2">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <img
                      src={announcement.avatar}
                      alt={announcement.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{announcement.author}</p>
                      <p className="text-xs text-gray-600">
                        {announcement.date} at {announcement.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      announcement.badgeColor === "red"
                        ? "bg-red-100 text-red-700"
                        : announcement.badgeColor === "blue"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {announcement.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-3">{announcement.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{announcement.content}</p>

                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                  Read full announcement
                  <span className="material-icons text-base">chevron_right</span>
                </button>
              </div>
            ))}
          </div>

            </div>

            {/* Right side calendar and types */}
            <div>
            {/* Calendar */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-900">Small Calendar</h3>
                <div className="flex items-center gap-2">
                  <button className="p-1 text-gray-600 hover:text-gray-900">
                    <span className="material-icons text-base">chevron_left</span>
                  </button>
                  <button className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded hover:bg-purple-700">
                    Today
                  </button>
                  <button className="p-1 text-gray-600 hover:text-gray-900">
                    <span className="material-icons text-base">chevron_right</span>
                  </button>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-900 mb-4">April 2026</p>

              {/* Calendar Grid */}
              <div className="space-y-3">
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {[29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2].map((day, idx) => {
                    const isCurrentMonth = day >= 1 && day <= 30;
                    let dayColor = "";
                    let dotColor = null;

                    if (isCurrentMonth) {
                      if (day === 21) {
                        dayColor = "bg-purple-600 text-white font-semibold";
                      } else if ([10, 13, 18, 26, 27].includes(day)) {
                        const colors = [
                          { bg: "bg-blue-50", text: "text-blue-600", dot: "bg-blue-400" },
                          { bg: "bg-pink-50", text: "text-pink-600", dot: "bg-pink-400" },
                          { bg: "bg-green-50", text: "text-green-600", dot: "bg-green-400" },
                          { bg: "bg-purple-50", text: "text-purple-600", dot: "bg-purple-400" },
                          { bg: "bg-orange-50", text: "text-orange-600", dot: "bg-orange-400" },
                        ];
                        const colorIndex = [10, 13, 18, 26, 27].indexOf(day);
                        dayColor = `${colors[colorIndex].bg} ${colors[colorIndex].text}`;
                        dotColor = colors[colorIndex].dot;
                      }
                    }

                    return (
                      <div
                        key={idx}
                        className={`text-center py-2 text-xs font-medium rounded ${
                          isCurrentMonth ? dayColor : "text-gray-300"
                        }`}
                      >
                        <div>{day}</div>
                        {dotColor && day >= 1 && day <= 30 && (
                          <div className={`w-1 h-1 ${dotColor} rounded-full mx-auto mt-1`}></div>
                        )}
                        {day === 21 && <div className="w-1 h-1 bg-white rounded-full mx-auto mt-1"></div>}
                        {day === 21 && (
                          <>
                            <div className="w-1 h-1 bg-blue-400 rounded-full mx-auto mt-0.5"></div>
                            <div className="w-1 h-1 bg-pink-400 rounded-full mx-auto mt-0.5"></div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Announcement Types */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Announcement Types</h3>
              <div className="space-y-4">
                {announcementTypes.map((type) => (
                  <div key={type.name} className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                        type.color === "red"
                          ? "bg-red-500"
                          : type.color === "blue"
                          ? "bg-blue-500"
                          : type.color === "orange"
                          ? "bg-orange-500"
                          : type.color === "gray"
                          ? "bg-gray-500"
                          : "bg-teal-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{type.name}</p>
                      <p className="text-xs text-gray-600">{type.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{type.count} this month</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
