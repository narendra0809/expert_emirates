import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const SocialLinksTab = () => {
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
              name={name}
              placeholder={`Enter ${name} URL`}
              className="bg-transparent text-sm sm:text-base text-white placeholder-gray-500 w-full focus:outline-none"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinksTab;
