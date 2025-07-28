import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/dashboard/logo.png";
import toggle from "../../assets/toggle.png";
import {
  FiSettings,
  FiLogOut,
  FiLayout,
  FiRepeat,
  FiPlus,
  FiX,
} from "react-icons/fi";
import { BiSolidDashboard } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
  isMobile,
  isAdmin,
}) {
  const location = useLocation();
  const dispatch = useDispatch();
  const UserMenuItems = [
    {
      icon: <BiSolidDashboard size={20} />,
      label: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: <FiRepeat size={20} />,
      label: "Transaction",
      url: "/dashboard/transaction-history",
    },
    {
      icon: <FiLayout size={20} />,
      label: "Buy Plan",
      url: "/dashboard/buy-plan",
    },
    {
      icon: <FiSettings size={20} />,
      label: "Settings",
      url: "/dashboard/setting",
    },
  ];

  const AdminMenuItems = [
    {
      icon: <BiSolidDashboard size={20} />,
      label: "Dashboard",
      url: "/admin",
    },
    {
      icon: <FiPlus size={20} />,
      label: "Add Plan",
      url: "/admin/add-plan",
    },
    {
      icon: <FiRepeat size={20} />,
      label: "Transaction",
      url: "/admin/transactions",
    },
    {
      icon: <FiLayout size={20} />,
      label: "Blog",
      url: "/admin/blog",
    },
    {
      icon: <FiSettings size={20} />,
      label: "Settings",
      url: "/admin/setting",
    },
  ];

  const isActive = (url) => location.pathname === url;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className="relative z-50 h-full">
        <aside
          className={`h-screen bg-[#0A090D] border-2 border-[#1D1B25] shadow-lg
          rounded-r-3xl text-white flex flex-col justify-between
          transition-all duration-300 ease-in-out
          ${isMobile ? "w-[280px]" : isCollapsed ? "w-[70px]" : "w-52"}
          ${
            isMobile
              ? mobileOpen
                ? "fixed translate-x-0"
                : "fixed -translate-x-full"
              : "fixed translate-x-0"
          }`}
        >
          {/* Mobile Close Button */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FiX size={24} />
            </button>
          )}

          <div className="flex flex-col h-full justify-start gap-48">
            <div>
              <div className="flex items-center justify-center py-4 border-b border-[#1a1a1a]">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img
                    src={logo}
                    alt="Logo"
                    className={`transition-all duration-300 ${
                      isCollapsed && !isMobile ? "w-10" : "w-32"
                    }`}
                  />
                </Link>
              </div>

              {!isMobile && (
                <div
                  className={`absolute hidden sm:flex justify-end transition-all duration-300 w-14 ${
                    isCollapsed ? "top-16 left-10" : "top-24 left-[180px]"
                  }`}
                >
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="cursor-pointer w-full"
                  >
                    <img src={toggle} alt="Toggle" className="w-full" />
                  </button>
                </div>
              )}

              <nav className="flex flex-col mt-8 space-y-4 px-2">
                {(isAdmin ? AdminMenuItems : UserMenuItems).map(
                  ({ icon, label, url }, index) => {
                    const active = isActive(url);
                    return (
                      <Link
                        key={index}
                        to={url}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
                        ${
                          active
                            ? "btn-gradient text-black font-bold"
                            : "hover:bg-[#1a1921] text-gray-400"
                        }`}
                        title={label}
                      >
                        <span>{icon}</span>
                        {(!isCollapsed || isMobile) && (
                          <span className="text-sm font-medium">{label}</span>
                        )}
                      </Link>
                    );
                  }
                )}
              </nav>
            </div>

            <div className="mt-auto mb-5">
              <button
                onClick={handleLogout}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#1a1921] text-gray-400 ${
                  isCollapsed && !isMobile ? "justify-center px-0" : ""
                }`}
                title="Logout"
              >
                <FiLogOut size={20} />
                {(!isCollapsed || isMobile) && (
                  <span className="text-sm font-medium">Logout</span>
                )}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
