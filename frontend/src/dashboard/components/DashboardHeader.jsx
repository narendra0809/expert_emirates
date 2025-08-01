import { useState, useEffect, useRef } from "react";
import { FiBell, FiSettings, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "../../assets/dashboard/stack.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
export default function DashboardHeader({ onMenuClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
    dispatch(logout());
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
            {/* Settings */}
            <Link
              to={`/${
                currentUser.role === "user" ? "dashboard" : "admin"
              }/setting`}
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
                    👤 {currentUser.name}
                    <p className="text-xs text-gray-500 truncate">
                      {currentUser.email}
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
