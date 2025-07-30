import { useState } from "react";
import DefaultAvatar from "../assets/dashboard/starticon.png";
import { FiCamera } from "react-icons/fi";
const GeneralTab = () => {
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
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
      {/* Avatar Card */}
      <div className="w-full flex flex-col justify-center gap-4 lg:w-[32%] text-center bg-[#121117] p-4 rounded-xl border border-[#29272e]">
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
      </div>

      {/* Form Card */}
      <div className="w-full lg:w-[68%] bg-[#121117] p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4">
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
  );
};

export default GeneralTab;
