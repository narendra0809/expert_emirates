import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/navlogo.png";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      key: "services",
      sublinks: [
        { name: "Forex + Gold", path: "/forex" },
        { name: "Crypto", path: "/cryptocurrency" },
        { name: "Portfolio Management", path: "/portfolio-management" },
        { name: "Copy Trading", path: "/funded-accounts" },
      ],
    },
    {
      name: "Forecasts",
      key: "forecast",
      sublinks: [
        { name: "Company News", path: "/company-news" },
        { name: "Award", path: "/forecasts" },
      ],
    },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
    { name: "About us", path: "/about" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth > 768 &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-0 right-0 w-full z-20 text-white font-poppins text-base tracking-[0.12em] transition-all duration-300">
      <div className="flex justify-between items-center p-4 md:px-16 px-4 my-4">
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop menu */}
 
    <div
      ref={dropdownRef}
      className="flex-1 hidden md:flex justify-center items-center"
    >
      <ul className="flex gap-6 text-md font-semibold text-center">
        {navLinks.map((link, idx) => {
          // Check if current page is active
          const isLinkActive = link.path === location.pathname;
          const isSublinkActive =
            link.sublinks &&
            link.sublinks.some((sublink) => sublink.path === location.pathname);

          return (
            <li key={idx} className="relative">
              {link.sublinks ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center gap-1 transition-colors duration-200 ${
                      isSublinkActive
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="relative rounded-xl hover:shadow-lg transition-all duration-300 group">
                    <ul
                      className="custom-dropdown"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {link.sublinks.map((sublink, subIdx) => {
                        const isActive = location.pathname === sublink.path;
                        return (
                          <li key={subIdx}>
                            <Link
                              to={sublink.path}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-4 py-2 rounded-xl transition-all duration-300 ${
                                isActive
                                  ? "text-yellow-400 bg-[#121117]"
                                  : "text-white hover:text-yellow-400 hover:bg-[#121117]"
                              }`}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`transition-colors duration-200 ${
                    isLinkActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>

        {/* Desktop login */}
        <div className="hidden md:flex golden-button1-wrapper px-5">
          <Link to="/login">
            <button className="golden-button1  px-5 "> LOGIN </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
   <div
  className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="flex flex-col h-full justify-between">
    {/* Top section (Close button + user profile + nav links) */}
    <div>
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleMenu}
          className="bg-gradient-to-r from-yellow-900 via-yellow-300 to-yellow-900 rounded-full p-1 text-black"
        >
          <X size={20} />
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-yellow-400 mb-2"
        />
        <h3 className="font-semibold">Hudson Alvarez</h3>
        <p className="text-gray-400 text-sm">HudsonAlvarez12@gmail.com</p>
      </div>

      {/* Dashed Divider */}
      <div className="w-full border-t border-dashed border-gray-400 my-4"></div>

      {/* Navigation Links */}
      <ul className="flex flex-col px-4 py-4 space-y-2 text-left">
        {navLinks.map((link, idx) => {
          const isParentActive =
            link.sublinks &&
            link.sublinks.some(
              (sublink) => sublink.path === location.pathname
            );

          const isLinkActive = location.pathname === link.path;

          return (
            <li key={idx}>
              {link.sublinks ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.key)}
                    className={`flex justify-between items-center w-full px-3 py-4 rounded font-medium transition-all duration-200 ${
                      isParentActive
                        ? "bg-[#121117] text-yellow-400"
                        : "text-white hover:bg-[#121117] hover:text-yellow-400"
                    }`}
                  >
                    {link.name}
                    {activeDropdown === link.key ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {activeDropdown === link.key && (
                    <ul className="ml-4 mt-2 space-y-2 text-sm">
                      {link.sublinks.map((sublink, subIdx) => {
                        const isSubActive =
                          location.pathname === sublink.path;
                        return (
                          <li
                            key={subIdx}
                            className={`flex items-center space-x-2 py-2 ${
                              isSubActive ? "text-yellow-400" : ""
                            }`}
                          >
                            <span className="w-4 h-4 border-l-4 border-b-4 border-gray-400 rounded-bl-xl" />
                            <Link
                              to={sublink.path}
                              onClick={() => {
                                toggleMenu();
                                setActiveDropdown(null);
                              }}
                              className={`transition-all duration-200 ${
                                isSubActive
                                  ? "text-yellow-400"
                                  : "text-white hover:text-yellow-400"
                              }`}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className={`block px-3 py-2 rounded font-medium transition-all duration-200 ${
                    isLinkActive
                      ? "bg-[#121117] text-yellow-400"
                      : "text-white hover:bg-[#121117] hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>

    {/* Bottom logout button */}
    <div className="golden-button1-wrapper p-5 mb-6">

      <Link to="/logout">
        <button className="golden-button1 px-5"> LOGOUT </button>
      </Link>
    </div>
  </div>
</div>


      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
