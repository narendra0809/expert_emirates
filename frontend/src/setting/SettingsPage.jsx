import React from "react";
import { FaCamera, FaUser, FaLink, FaLock } from "react-icons/fa";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <h2 className="text-xl font-semibold mb-6">Setting</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-[#2a2a2a] pb-2">
        <div className="flex items-center gap-2 text-yellow-400 border-b-2 border-yellow-400 pb-1">
          <FaUser />
          <span>General</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <FaLink />
          <span>Social links</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <FaLock />
          <span>Security</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Upload + Delete */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl flex flex-col items-center w-full md:w-1/3">
          <div className="relative w-32 h-32 mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="rounded-full w-full h-full object-cover border-4 border-[#333]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer">
              <FaCamera className="text-white text-xl" />
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-4 text-center">
            Allowed *.jpeg, *.jpg, *.png, *.gif<br />Max size of 3.1 MB
          </p>
          <button className="bg-red-600 px-4 py-2 rounded-md text-sm">
            Delete user
          </button>
        </div>

        {/* Form */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                value="Jayvion Simon"
                className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="text"
                value="nannie.abernathy70@yahoo.com"
                className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Phone number</label>
              <input
                type="text"
                value="365-374-4961"
                className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Address</label>
              <input
                type="text"
                value="19034 Verna Unions Apt. 164 - Honolulu, RI / 87535"
                className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Country</label>
              <select className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md text-sm text-white">
                <option>Chalandri</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400">State/region</label>
              <input
                type="text"
                value="Chalandri"
                className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">City</label>
              <input
                type="text"
                value="Chalandri"
                className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md outline-none text-white text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Zip code</label>
              <input
                type="text"
                value="22000"
                className="mt-1 w-full px-3 py-2 bg-[#121212] border border-[#333] rounded-md outline-none text-white text-sm"
              />
            </div>
          </div>

          <div className="mt-6 text-right">
            <button className="px-6 py-2 text-sm font-medium rounded-md text-black bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 shadow-lg">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
