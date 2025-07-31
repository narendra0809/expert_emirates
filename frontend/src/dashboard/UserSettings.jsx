import { useEffect, useState } from "react";
import generalActiveIcon from "../assets/dashboard/starticon.png";
import shareActiveIcon from "../assets/share_active.png";
import generalIcon from "../assets/general.png";
import shareIcon from "../assets/share.png";
import securityIcon from "../assets/security.png";
import securityActiveIcon from "../assets/security_active.png";
import { MdSpaceDashboard } from "react-icons/md";
import { FiShare2, FiKey } from "react-icons/fi";
import PasswordResetTab from "../components/PasswordResetTab";
import SocialLinksTab from "../components/SocialLinksTab";
import GeneralTab from "../components/GeneralTab";
import api from "../axios/api";
export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("General");
  const tabs = [
    { label: "General", icon: <MdSpaceDashboard /> },
    { label: "Social links", icon: <FiShare2 /> },
    { label: "Security", icon: <FiKey /> },
  ];

  const [socialLinks, setSocialLinks] = useState();

  const fetchSettings = async () => {
    try {
      const response = await api.get("/settings");
      setSocialLinks(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, [activeTab]);

  return (
    <main className="flex flex-col gap-5">
      <h4 className="mt-3 pl-2 justify-start text-white text-2xl font-bold font-['DM_Sans'] leading-9">
        Setting
      </h4>
      {/* Tabs */}
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`relative flex items-center gap-2 py-2 px-2 font-bold whitespace-nowrap rounded-full transition-all duration-300 text-sm sm:text-base ${
              activeTab === tab.label
                ? "bg-clip-text text-transparent bg-[linear-gradient(180deg,_#281000_5.95%,_#C0971C_29.93%,_#FFE976_52.51%,_#C0971C_76.02%,_#281000_100%)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.label === "General" ? (
              activeTab === tab.label ? (
                <img
                  src={generalActiveIcon}
                  alt={tab.label}
                  className="w-6 h-6"
                />
              ) : (
                <img src={generalIcon} alt={tab.label} />
              )
            ) : tab.label === "Social links" ? (
              activeTab === tab.label ? (
                <img
                  src={shareActiveIcon}
                  alt={tab.label}
                  className="w-6 h-6"
                />
              ) : (
                <img src={shareIcon} alt={tab.label} className="text-xl" />
              )
            ) : activeTab === tab.label ? (
              <img
                src={securityActiveIcon}
                alt={tab.label}
                className="w-4 h-4"
              />
            ) : (
              <img src={securityIcon} alt={tab.label} className="w-4 h-4" />
            )}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* GENERAL TAB */}
      {activeTab === "General" && <GeneralTab />}

      {/* SOCIAL LINKS TAB */}
      {activeTab === "Social links" && (
        <SocialLinksTab socialLinks={socialLinks} />
      )}

      {/* SECURITY TAB */}
      {activeTab === "Security" && <PasswordResetTab />}
    </main>
  );
}
