
"use client";
import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";

type EventType = "birthday" | "anniversary" | "regularization";

type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  type: EventType;
};

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EVENT_TYPE_STYLES: Record<EventType, { chip: string; label: string; emptyText: string }> = {
  birthday: {
    chip: "bg-pink-100 text-pink-700",
    label: "Birthdays",
    emptyText: "No birthdays today",
  },
  anniversary: {
    chip: "bg-blue-100 text-blue-700",
    label: "Work Anniversaries",
    emptyText: "No anniversaries today",
  },
  regularization: {
    chip: "bg-green-100 text-green-700",
    label: "Regularizations",
    emptyText: "No regularizations today",
  },
};

function toDateKey(year: number, monthOneBased: number, day: number) {
  return `${year}-${String(monthOneBased).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getDemoEvents(year: number): CalendarEvent[] {
  return [
    { id: "apr-6-regularization", title: "Employee 21", date: toDateKey(year, 4, 6), type: "regularization" },
    { id: "apr-10-birthday", title: "Employee 3", date: toDateKey(year, 4, 10), type: "birthday" },
    { id: "apr-10-anniversary", title: "Employee 3", date: toDateKey(year, 4, 10), type: "anniversary" },
    { id: "apr-18-birthday", title: "Employee 15", date: toDateKey(year, 4, 18), type: "birthday" },
    { id: "apr-18-anniversary", title: "Employee 15", date: toDateKey(year, 4, 18), type: "anniversary" },
    { id: "apr-26-birthday", title: "Employee 27", date: toDateKey(year, 4, 26), type: "birthday" },
    { id: "apr-26-anniversary", title: "Employee 27", date: toDateKey(year, 4, 26), type: "anniversary" },
    { id: "apr-26-regularization", title: "Employee 9", date: toDateKey(year, 4, 26), type: "regularization" },
    { id: "may-1-birthday", title: "Employee 28", date: toDateKey(year, 5, 1), type: "birthday" },
    { id: "may-1-anniversary", title: "Employee 28", date: toDateKey(year, 5, 1), type: "anniversary" },
    { id: "may-2-regularization", title: "Employee 10", date: toDateKey(year, 5, 2), type: "regularization" },
    { id: "mar-20-birthday", title: "Employee 11", date: toDateKey(year, 3, 20), type: "birthday" },
    { id: "mar-20-anniversary", title: "Employee 11", date: toDateKey(year, 3, 20), type: "anniversary" },
    { id: "jun-8-regularization", title: "Employee 5", date: toDateKey(year, 6, 8), type: "regularization" },
    { id: "jun-14-birthday", title: "Employee 34", date: toDateKey(year, 6, 14), type: "birthday" },
    { id: "jun-19-anniversary", title: "Employee 19", date: toDateKey(year, 6, 19), type: "anniversary" },
  ];
}

function formatDateKey(date: Date) {
  return toDateKey(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

export default function DashboardPage() {
  const today = useMemo(() => new Date(), []);
  const [activeMonth, setActiveMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const mockEvents = useMemo(() => getDemoEvents(today.getFullYear()), [today]);
  const eventsByDate = useMemo(() => {
    const mapped: Record<string, CalendarEvent[]> = {};
    for (const item of mockEvents) {
      if (!mapped[item.date]) {
        mapped[item.date] = [];
      }
      mapped[item.date].push(item);
    }
    return mapped;
  }, [mockEvents]);

  const monthLabel = activeMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const activeYear = activeMonth.getFullYear();
  const activeMonthIndex = activeMonth.getMonth();
  const firstWeekDay = new Date(activeYear, activeMonthIndex, 1).getDay();

  const calendarDates = Array.from({ length: 42 }, (_, index) => {
    const dayOffset = index - firstWeekDay + 1;
    const date = new Date(activeYear, activeMonthIndex, dayOffset);
    const key = formatDateKey(date);
    return {
      date,
      key,
      day: date.getDate(),
      isCurrentMonth: date.getMonth() === activeMonthIndex,
      isToday: key === formatDateKey(today),
      events: eventsByDate[key] ?? [],
    };
  });

  const todayKey = formatDateKey(today);
  const todaysEvents = eventsByDate[todayKey] ?? [];
  const todayDateLabel = today.toLocaleDateString("en-CA");

  const groupedTodayEvents: Record<EventType, CalendarEvent[]> = {
    birthday: todaysEvents.filter((event) => event.type === "birthday"),
    anniversary: todaysEvents.filter((event) => event.type === "anniversary"),
    regularization: todaysEvents.filter((event) => event.type === "regularization"),
  };

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
              <ul className="space-y-3 text-xs text-gray-800">
                <li>
                  <div>Attendance complience</div>
                  <div className="flex justify-between gap-3 text-gray-700">
                    <span>412 / 427 employees on time</span>
                    <span className="font-semibold text-gray-900">96%</span>
                  </div>
                </li>
                <li>
                  <div>Payroll ready employees</div>
                  <div className="flex justify-between gap-3 text-gray-700">
                    <span>403 records verified</span>
                    <span className="font-semibold text-gray-900">94%</span>
                  </div>
                </li>
                <li>
                  <div>Leave capacity next week</div>
                  <div className="flex justify-between gap-3 text-gray-700">
                    <span>Sales department nearing cap</span>
                    <span className="font-semibold text-gray-900">82%</span>
                  </div>
                </li>
                <li>
                  <div>Goal completion</div>
                  <div className="flex justify-between gap-3 text-gray-700">
                    <span>3 teams above target</span>
                    <span className="font-semibold text-gray-900">84%</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Events Calendar */}
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6 pb-8">
          <div className="xl:col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6 pb-3">
              <div className="text-2xl font-semibold text-gray-900">Events Calendar</div>
            </div>

            <div className="px-6 pb-3 flex items-center justify-between gap-3">
              <div className="text-3xl font-semibold text-gray-900">{monthLabel}</div>
              <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveMonth(new Date(activeYear, activeMonthIndex - 1, 1))}
                  className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  &lt;
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMonth(new Date(today.getFullYear(), today.getMonth(), 1))}
                  className="px-4 py-2 bg-green-700 text-white text-sm font-medium hover:bg-green-800"
                >
                  Today
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMonth(new Date(activeYear, activeMonthIndex + 1, 1))}
                  className="px-3 py-2 text-gray-700 hover:bg-gray-100"
                >
                  &gt;
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 border-t border-gray-200">
              {WEEK_DAYS.map((day) => (
                <div key={day} className="p-3 text-xs text-gray-500 border-r last:border-r-0 border-gray-200">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 border-t border-gray-200">
              {calendarDates.map((cell, idx) => (
                <div
                  key={`${cell.key}-${idx}`}
                  className="min-h-28 p-2 border-r border-b border-gray-200 last:border-r-0"
                >
                  <div className="mb-2">
                    <span
                      className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-xs ${
                        cell.isToday
                          ? "bg-green-700 text-white"
                          : cell.isCurrentMonth
                            ? "text-gray-800"
                            : "text-gray-400"
                      }`}
                    >
                      {cell.day}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {cell.events.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className={`rounded px-2 py-1 text-[11px] truncate ${EVENT_TYPE_STYLES[event.type].chip}`}
                        title={`${EVENT_TYPE_STYLES[event.type].label}: ${event.title}`}
                      >
                        {event.title}
                      </div>
                    ))}

                    {cell.events.length > 3 && (
                      <div className="text-[11px] text-gray-500">+{cell.events.length - 3} more</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-fit">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-2xl font-semibold text-gray-900">Today's Events</h3>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Today</span>
            </div>
            <div className="mb-4 text-sm text-gray-500">{todayDateLabel}</div>

            <div className="space-y-4">
              {(["birthday", "anniversary", "regularization"] as EventType[]).map((type) => {
                const config = EVENT_TYPE_STYLES[type];
                const items = groupedTodayEvents[type];
                return (
                  <div key={type}>
                    <div className={`font-semibold ${config.chip} inline-flex rounded px-2 py-1 text-sm`}>
                      {config.label}
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      {items.length > 0 ? items.map((item) => item.title).join(", ") : config.emptyText}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
