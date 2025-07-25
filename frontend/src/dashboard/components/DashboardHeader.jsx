import { useState, useEffect, useRef } from "react";
import { FiBell, FiSettings, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "../../assets/dashboard/stack.png";

export default function DashboardHeader({ onMenuClick }) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* Header Container */}
      <div className="w-full bg-black py-2 px-2 sm:px-4 lg:px-16">
        <header className="mx-auto h-24 bg-[#0d0c11] flex items-center justify-between px-3 sm:px-5 py-2 sm:py-3 rounded-3xl shadow-md z-50 border-2 border-[#1D1B25]">
          {/* Left Side: Logo + Menu */}
          <div className="flex items-center gap-2 min-w-0">
            <button className="md:hidden" onClick={onMenuClick}>
              <FiMenu className="text-white w-6 h-6" />
            </button>
            <Link
              to="/"
              className="btn-gradient btn-gradient-border text-black text-sm font-semibold font-['Poppins'] uppercase leading-relaxed tracking-widest sm:text-sm px-3 sm:px-4 py-1.5 hover:brightness-110 transition whitespace-nowrap"
            >
              GO TO WEBSITE
            </Link>
          </div>

          {/* Right Side: Search, Icons, Profile */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Search - Desktop */}
            <div className="relative hidden sm:flex items-center">
              {showSearch ? (
                <>
                  <input
                    type="text"
                    autoFocus
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="bg-[#1a1921] text-white text-sm px-3 py-1.5 rounded-md placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500 w-40 sm:w-56 md:w-64"
                  />
                  <button
                    onClick={() => setShowSearch(false)}
                    className="absolute right-2 text-gray-400 hover:text-white"
                  >
                    <FiX size={16} />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-white hover:text-yellow-400 transition"
                >
                  <FiSearch size={20} />
                </button>
              )}
            </div>

            {/* Mobile Search Icon */}
            <button
              className="sm:hidden text-white hover:text-yellow-400 transition"
              onClick={() => setMobileSearchOpen(true)}
            >
              <FiSearch size={20} />
            </button>

            {/* Notifications */}
            <div className="relative">
              <FiBell className="text-white w-5 h-5 cursor-pointer hover:text-yellow-400 transition" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </div>

            {/* Settings */}
            <Link
              to="/dashboard/setting"
              className="text-white hover:text-yellow-400 transition"
            >
              <FiSettings className="w-5 h-5" />
            </Link>

            {/* Profile Avatar with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <img
                src={profilePic}
                alt="Profile"
                onClick={() => setProfileDropdownOpen((prev) => !prev)}
                className="h-8 w-8 rounded-full border-2 border-green-500 object-cover cursor-pointer"
              />
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b text-sm font-medium">
                    👤 user
                    <p className="text-xs text-gray-500 truncate">
                      user@example.com
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Search Overlay */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 sm:hidden">
          <div className="w-full max-w-md relative">
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full bg-[#1a1921] text-white text-base px-4 py-3 rounded-lg placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={() => setMobileSearchOpen(false)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
