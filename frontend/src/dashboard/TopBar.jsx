import React from "react";
import profile from "../assets/dashboardhome/profile.png"; // Replace with your profile image

const TopBar = () => {
  return (
    <div className="w-full bg-[#0d0d0d] px-4 py-3 flex items-center justify-between rounded-full shadow-md">
      {/* Left: Golden Button */}
      <button className="bg-gradient-to-br from-[#FFD700] to-[#a67c00] text-black text-sm font-semibold px-4 py-2 rounded-full shadow-yellow-400 shadow-md hover:opacity-90 transition duration-300">
        GO TO WEBSITE
      </button>

      {/* Right: Search + Icons */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-1 bg-[#1a1a1f] text-sm text-white rounded-full placeholder:text-gray-400 focus:outline-none"
          />
          {/* Search Icon (SVG) */}
          <div className="absolute left-2 top-1.5 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
              />
            </svg>
          </div>
        </div>

        {/* Notification Icon (with dot) */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-600 rounded-full" />
        </div>

        {/* Chevron Down Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>

        {/* Profile Picture */}
        <img
          src={profile}
          alt="Profile"
          className="h-8 w-8 rounded-full border border-white"
        />
      </div>
    </div>
  );
};

export default TopBar;
