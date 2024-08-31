import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";

const MainNav = () => {
  return (
    <div className="">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <Link href="/">Ticket Tracker</Link>
          </div>
          <div className="space-x-4">
            <Link href="/">
              <div className="text-white hover:text-gray-200">Home</div>
            </Link>
            <Link href="/tickets">
              <div className="text-white hover:text-gray-200">Tickets</div>
            </Link>
            <Link href="/about">
              <div className="text-white hover:text-gray-200">About</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
