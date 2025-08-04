import { useEffect, useState } from "react";
// import logoImage from "../assets/setting/image1.png";
// import faviconImage from "../assets/setting/logo.png";
import Favicon from "react-favicon";
import api from "../../axios/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  addIconsFailure,
  addIconsStart,
  addIconsSuccess,
} from "../../features/icons/iconsSlice";

const UploadCard = ({ title, imgSrc, name, onUpload, onSave }) => {
  const url =
    typeof imgSrc === "string" ? imgSrc : imgSrc && URL.createObjectURL(imgSrc);
  return (
    <div className="bg-[#121117] border border-[#1e1e25] rounded-xl p-4 w-full md:w-[48%] shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left Side: Larger Image */}
        <div className="bg-[#1d1b25] w-2/3  h-60 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={url} alt={title} className="" />
        </div>

        {/* Right Side: Text + Buttons center aligned */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="mb-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-400">Size: 194 Width * 53 Height</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <label className="px-4 py-1.5 rounded-full text-sm font-semibold text-black cursor-pointer bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] hover:opacity-90">
              Upload
              <input
                type="file"
                name={name}
                onChange={onUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={() => onSave()}
              className="font-semibold text-gradient py-2 px-4 rounded-xl text-sm hover:underline hover:brightness-110"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LogoFaviconUpload({ iconsUrl, fetchSettings }) {
  const [icons, setIcons] = useState({
    logo: null,
    favicon: null,
  });
  const dispatch = useDispatch();
  const checkDataExist = async () => {
    try {
      const response = await api.get("/admin/settings");
      return { data: response.data, exist: response.data.length !== 0 };
    } catch (error) {
      console.log(error);
    }
  };
  const handleIconUplaod = (e) => {
    const { name, files } = e.target;
    setIcons({ ...icons, [name]: files[0] });
  };
  const handleSave = async () => {
    if (!icons.logo || !icons.favicon) {
      return;
    }
    const updatedIcons = { ...icons };
    if (typeof updatedIcons.logo === "string") {
      updatedIcons.logo = null;
    }
    if (typeof updatedIcons.favicon === "string") {
      updatedIcons.favicon = null;
    }
    dispatch(addIconsStart());
    try {
      const { data, exist } = await checkDataExist();
      let res = null;
      if (exist) {
        res = await api.patch(`/admin/settings/${data[0].id}`, updatedIcons, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        res = await api.post("/admin/settings/", updatedIcons, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
      dispatch(
        addIconsSuccess({
          logo: res.data.data.logo,
          favicon: res.data.data.favicon,
        })
      );
      fetchSettings();
      toast.success(
        `${
          !updatedIcons.logo
            ? "Favicon"
            : !updatedIcons.favicon
            ? "Logo"
            : "Icons"
        } updated successfully`,
        { duration: 3000 }
      );
    } catch (error) {
      dispatch(addIconsFailure(error.message));
      console.log(error);
    }
  };

  useEffect(() => {
    setIcons({ logo: iconsUrl?.logo, favicon: iconsUrl?.favicon });
  }, [iconsUrl]);
  return (
    <div className="flex flex-col md:flex-row justify-between flex-wrap gap-6 md:gap-4">
      <UploadCard
        title="Logo Change"
        imgSrc={icons.logo}
        name="logo"
        onUpload={handleIconUplaod}
        onSave={handleSave}
      />
      <UploadCard
        title="Favicon Change"
        imgSrc={icons.favicon}
        name="favicon"
        onUpload={handleIconUplaod}
        onSave={handleSave}
      />
    </div>
  );
}
