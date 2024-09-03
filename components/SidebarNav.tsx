"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  CheckboxIcon,
  PlusIcon,
  CalendarIcon,
  BarChartIcon,
  FileIcon,
  GroupIcon,
} from "@radix-ui/react-icons"; // Ensure these icons exist in the package

const SidebarNav: React.FC = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <aside className="w-full h-screen bg-gray-900 text-white">
      <nav className="p-4">
        {/* Dashboard */}
        <div className="logo">
          <div className="uppercase text-2xl font-bold my-5">
            Ticket Tracker
          </div>
        </div>
        <div className="mb-2">
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <HomeIcon className="mr-2" />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Tickets */}
        <div className="mb-2">
          <div className="flex items-center p-2 hover:bg-gray-800 rounded-md">
            <CheckboxIcon className="mr-2" />
            <span>Tickets</span>
          </div>
          <ul className="pl-6">
            <li className="mb-1">
              <Link
                href="/tickets/"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <CheckboxIcon className="mr-2" />
                All Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/my"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <CheckboxIcon className="mr-2" />
                My Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/open"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <CheckboxIcon className="mr-2" />
                Open Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/closed"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <CheckboxIcon className="mr-2" />
                Closed Tickets
              </Link>
            </li>
            <li className="mb-1">
              <Link
                href="/tickets/overdue"
                className="flex items-center p-1 hover:bg-gray-800 rounded-md"
              >
                <CheckboxIcon className="mr-2" />
                Overdue Tickets
              </Link>
            </li>
          </ul>
        </div>

        {/* Create Ticket */}
        <div className="mb-2">
          <Link
            href="/tickets/new"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <PlusIcon className="mr-2" />
            <span>Create Ticket</span>
          </Link>
        </div>

        {/* Projects */}
        <div className="mb-2">
          <Link
            href="/projects"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <FileIcon className="mr-2" />
            <span>Projects</span>
          </Link>
        </div>

        {/* Teams */}
        <div className="mb-2">
          <Link
            href="/teams"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <GroupIcon className="mr-2" />
            <span>Teams</span>
          </Link>
        </div>

        {/* Calendar / Timeline */}
        <div className="mb-2">
          <button
            onClick={toggleCalendar}
            className="flex items-center p-2 hover:bg-gray-800 rounded-md w-full text-left"
          >
            <CalendarIcon className="mr-2" />
            <span>{isCalendarVisible ? "Timeline" : "Calendar"}</span>
          </button>
        </div>

        {/* Reports */}
        <div className="mb-2">
          <Link
            href="/reports"
            className="flex items-center p-2 hover:bg-gray-800 rounded-md"
          >
            <BarChartIcon className="mr-2" />
            <span>Reports</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarNav;
