import { useState } from "react";
import { FiInfo } from "react-icons/fi";

const PasswordResetTab = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full p-4 bg-[#121117] text-white rounded-2xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <p className="text-gray-400 text-sm flex items-center gap-2 mt-2 ml-3">
            <FiInfo className="text-blue-400" />
            Password must be minimum 6+
          </p>
        </div>
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
        <div className="w-full text-right">
          <button
            type="submit"
            className="text-sm font-semibold hover:brightness-110 text-gradient py-[10px] px-[35px] rounded-[40px]"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordResetTab;
