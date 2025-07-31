import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import api from "../axios/api";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordResetTab = () => {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const [formErrors, setFormErrors] = useState(null);
  const [toggleEyes, setToggleEyes] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.new_password !== formData.new_password_confirmation) {
      setFormErrors({ noMatch: "Password do not match !" });
      return;
    }
    try {
      const response = await api.post("/change-password", formData);
      if (response.status !== 201) {
        toast.error("Unable to change password !", { duration: 3000 });
        return;
      }
      toast.success("Password Changed Successfully !", {
        duration: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleEye = (field) => {
    setToggleEyes({ ...toggleEyes, [field]: !toggleEyes[field] });
  };
  return (
    <div className="w-full p-4 bg-[#121117] text-white rounded-2xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex relative">
          <input
            type={toggleEyes.currentPassword ? "text" : "password"}
            name="current_password"
            onChange={handleChange}
            value={formData.current_password}
            placeholder="Old password"
            className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
          <span
            onClick={() => handleToggleEye("currentPassword")}
            className="absolute right-4 top-4 cursor-pointer"
          >
            {toggleEyes.currentPassword ? (
              <FaEyeSlash fill="gray" />
            ) : (
              <FaEye fill="gray" />
            )}
          </span>
        </div>
        <div className="flex relative">
          <input
            type={toggleEyes.newPassword ? "text" : "password"}
            name="new_password"
            onChange={handleChange}
            value={formData.new_password}
            placeholder="New password"
            className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
          <span
            onClick={() => handleToggleEye("newPassword")}
            className="absolute right-4 top-4 cursor-pointer"
          >
            {toggleEyes.newPassword ? (
              <FaEyeSlash fill="gray" />
            ) : (
              <FaEye fill="gray" />
            )}
          </span>
        </div>
        <p className="text-gray-400 text-sm flex items-center gap-2 mt-2 ml-3">
          <FiInfo className="text-blue-400" />
          Password must be minimum 6+
        </p>
        <div className="felx relative">
          <input
            type={toggleEyes.confirmPassword ? "text" : "password"}
            name="new_password_confirmation"
            onChange={handleChange}
            value={formData.new_password_confirmation}
            placeholder="Confirm new password"
            className="w-full bg-transparent border border-[#2a2a2a] text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
          <span
            onClick={() => handleToggleEye("confirmPassword")}
            className="absolute right-4 top-4 cursor-pointer"
          >
            {toggleEyes.confirmPassword ? (
              <FaEyeSlash fill="gray" />
            ) : (
              <FaEye fill="gray" />
            )}
          </span>
        </div>
        <p className="text-red-700 text-sm">
          {formErrors ? formErrors?.noMatch : ""}
        </p>
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
