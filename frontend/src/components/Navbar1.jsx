import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/navlogo.png";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      sublinks: [
        { name: "Forex + Gold ", path: "/forex" },
        { name: "Crypto", path: "/cryptocurrency" },
        { name: "Portfolio Management", path: "/portfolio-management" },
        { name: "Crpto Trading", path: "/cryptocurrency" },
      ],
    },
    {
      name: "Forecasts",
      sublinks: [
        { name: "Company News", path: "/company-news" },
        { name: "Award", path: "/Forecasts" },
      ],
    },
    { name: "FAQ", path: "/faq" },
    { name: "Support", path: "/support" },
    { name: "About us", path: "/about" },
  ];

  return (
    <nav
      className="absolute top-0 right-0 w-full z-20 text-white font-poppins text-base tracking-[0.12em] transition-all duration-300"
    >
      <div className="flex justify-between items-center p-2 md:px-15 px-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-between items-center w-full">
          <ul className="flex gap-6 text-md font-semibold justify-center text-center w-full">
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative">
                {link.sublinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center gap-1 hover:text-yellow-400"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </button>
                    {activeDropdown === link.name && (
                      <ul className="absolute text-md py-3 rounded-xl font-normal left-0 mt-2 bg-black border-2 border-black z-30 w-56 tracking-normal border-l-yellow-600 border-r-yellow-600">
                        {link.sublinks.map((sublink, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={sublink.path}
                              className="block px-4 py-2 hover:bg-[#121117] rounded-xl hover:text-yellow-400"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <div className="ml-auto pl-6">
            <Link
              to="/login"
              className="px-6 py-1.5 rounded-full font-semibold text-sm text-black bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 shadow-[0_0_20px_rgba(255,222,89,0.6)] transition"
            >
              LOGIN
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#080C12] bg-opacity-95 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              {link.sublinks ? (
                <details>
                  <summary className="cursor-pointer hover:text-yellow-400">
                    {link.name}
                  </summary>
                  <ul className="ml-4 mt-2 border-l-2 border-yellow-400 pl-2 space-y-2 text-left">
                    {link.sublinks.map((sublink, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={sublink.path}
                          onClick={() => setIsOpen(false)}
                          className="block hover:text-yellow-400"
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-yellow-400 transition"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}

          {/* Login */}
          <li>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 text-black font-bold shadow-[0_0_20px_rgba(255,222,89,0.6)]"
            >
              LOGIN
            </Link>
          </li>
        </ul>
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
