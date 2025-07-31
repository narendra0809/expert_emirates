import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import api from "../axios/api";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const SocialLinksTab = ({ socialLinks }) => {
  const { role } = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({
    instagram: "",
    twitter: "",
    linkedin: "",
    facebook: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const checkDataExist = async () => {
    try {
      const response = await api.get("/admin/settings");
      return { data: response.data, exist: response.data.length !== 0 };
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const { data, exist } = await checkDataExist();
      if (exist) {
        await api.patch(`/admin/settings/${data[0].id}`, formData);
      } else {
        await api.post("/admin/settings", formData);
      }
      toast.success(`Social lins updated successfully`, { duration: 3000 });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFormData({
      facebook: socialLinks.facebook,
      instagram: socialLinks.instagram,
      twitter: socialLinks.twitter,
      linkedin: socialLinks.linkedin,
    });
  }, [socialLinks]);
  return (
    <div className="w-full p-4 bg-[#121117] rounded-xl border border-[#29272e] space-y-4">
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
            className="flex flex-col sm:flex-row items-center bg-[#0F0E13] px-3 py-3 rounded-md border border-[#1e1e23] gap-3"
          >
            <div className="text-xl">{iconMap[name]}</div>
            <input
              type="text"
              value={formData[name]}
              disabled={role !== "admin"}
              onChange={handleChange}
              name={name}
              placeholder={`Enter ${name} URL`}
              className="bg-transparent text-sm sm:text-base text-white placeholder-gray-500 w-full focus:outline-none"
            />
          </div>
        );
      })}
      {role === "admin" && (
        <div className="w-full text-right">
          <button
            onClick={handleSubmit}
            className="text-sm font-semibold hover:brightness-110 text-gradient py-[10px] px-[35px] rounded-[40px]"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialLinksTab;
