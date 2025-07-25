import { useState } from "react";

import { MdSpaceDashboard } from "react-icons/md";
import { FiShare2, FiKey, FiCamera, FiInfo } from "react-icons/fi";

import DefaultAvatar from "../assets/dashboard/starticon.png";
import generalActiveIcon from "../assets/dashboard/starticon.png";
import shareActiveIcon from "../assets/share_active.png";
import generalIcon from "../assets/general.png";
import shareIcon from "../assets/share.png";
import securityIcon from "../assets/security.png";
import securityActiveIcon from "../assets/security_active.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function UserSettings() {
  const [activeTab, setActiveTab] = useState("General");

  const [formData, setFormData] = useState({
    name: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    phone: "365-374-4961",
    address: "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    country: "India",
    state: "Chalandri",
    city: "Chalandri",
    zip: "22000",
    photo: null,
    facebook: "https://www.facebook.com/caitlyn.kerluke",
    instagram: "https://www.instagram.com/caitlyn.kerluke",
    linkedin: "https://www.linkedin.com/caitlyn.kerluke",
    twitter: "https://www.twitter.com/caitlyn.kerluke",
  });

  const tabs = [
    { label: "General", icon: <MdSpaceDashboard /> },
    { label: "Social links", icon: <FiShare2 /> },
    { label: "Security", icon: <FiKey /> },
  ];

  const blurredValues = [
    "Jayvion Simon",
    "nannie.abernathy70@yahoo.com",
    "365-374-4961",
    "India",
    "Chalandri",
    "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
    "22000",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    alert("Changes saved!");
  };

  return (
    <main className="w-full sm:px-5 md:px-8 py-4">
      {/* Tabs */}
      <div className="bg-black rounded-xl py-3 mb-6">
        <div className="flex items-center">
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
      </div>

      {/* GENERAL TAB */}
      {activeTab === "General" && (
        <div className="w-full p-4 sm:p-6 rounded-xl bg-black">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            {/* Avatar Card */}
            <div className="w-full lg:w-[32%] text-center bg-[#121117] p-4 rounded-xl border border-[#29272e]">
              <label htmlFor="photo-upload" className="block cursor-pointer">
                <div className="w-28 h-28 mx-auto rounded-full bg-[#26242f] border border-gray-500 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={formData.photo || DefaultAvatar}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <FiCamera className="text-white text-xl" />
                  </div>
                </div>
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
              <p className="text-xs text-gray-500 mt-3">
                Allowed *.jpeg, *.jpg, *.png, *.gif <br /> Max size of 3.1 MB
              </p>

              {/* Centered Button */}
              {/* <div className="mt-4 flex justify-center">
                <button
                  onClick={handleDeleteUser}
                  className="bg-[#2a1212] hover:bg-red-700 px-4 py-2 rounded text-[#637381] text-sm flex items-center justify-center gap-2 w-full max-w-[200px]"
                >
                  <RiDeleteBin6Line /> Delete user
                </button>
              </div> */}
            </div>

            {/* Form Card */}
            <div className="w-full lg:w-[68%] bg-[#121117] p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "name",
                "email",
                "phone",
                "address",
                "country",
                "state",
                "city",
                "zip",
              ].map((field) => (
                <div key={field} className="relative">
                  <span className="text-sm text-[#637381] absolute -top-2 left-3 bg-[#121117] px-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </span>
                  <input
                    className={`bg-transparent px-4 py-2 rounded w-full placeholder-gray-400 focus:outline-none border border-[#383742] ${
                      blurredValues.includes(formData[field])
                        ? "text-[#454545]"
                        : "text-white"
                    }`}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <div className="col-span-1 md:col-span-2 text-right">
                <div className="inline-block p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
                  <button
                    onClick={handleSubmit}
                    className="h-[39px] px-[18px] py-[7px] rounded-full font-bold text-sm bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] text-black hover:bg-black hover:text-white transition duration-300"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SOCIAL LINKS TAB */}
      {activeTab === "Social links" && (
        <div className="w-full bg-[#121117] p-4 sm:p-6 rounded-xl border border-[#29272e] space-y-4">
          {["facebook", "instagram", "linkedin", "twitter"].map((name) => {
            const iconMap = {
              facebook: <FaFacebookF className="text-blue-500" />,
              instagram: <FaInstagram className="text-pink-500" />,
              linkedin: <FaLinkedinIn className="text-blue-400" />,
              twitter: <FaXTwitter className="text-gray-400" />,
            };

            return (
              <div
                key={name}
                className="flex flex-col sm:flex-row items-center bg-[#0F0E13] px-4 py-3 rounded-md border border-[#1e1e23] gap-3"
              >
                <div className="text-xl">{iconMap[name]}</div>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${name} URL`}
                  className="bg-transparent text-sm sm:text-base text-white placeholder-gray-500 w-full focus:outline-none"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* SECURITY TAB */}
      {activeTab === "Security" && (
        <div className="w-full bg-[#121117] text-white p-4 sm:p-6 rounded-2xl shadow-md space-y-6">
          <input
            type="password"
            placeholder="Old password"
            className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
          <div>
            <input
              type="password"
              placeholder="New password"
              className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
            <p className="text-gray-400 text-sm flex items-center gap-2 mt-2">
              <FiInfo className="text-blue-400" />
              Password must be minimum 6+
            </p>
          </div>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
        </div>
      )}
    </main>
  );
}
