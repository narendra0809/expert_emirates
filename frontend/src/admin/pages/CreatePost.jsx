import { useRef, useState } from "react";
import uploadImage1 from "../assets/post/container.png";
import mainChart from "../assets/post/mainChart.png";
import { useNavigate } from "react-router-dom";
import MetaPropertiesForm from "./MetaPropertiesForm";
import toast from "react-hot-toast";
import RichEditor from "../components/Editor";
import api from "../../axios/api";
export default function CreatePost() {
  const mainImageRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "Forex Forecast",
    content: "",
    meta_title: "",
    meta_desc: "",
    meta_key: [],
    blog_image: null,
    is_published: "draft",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "blog_image" ? files[0] : value,
    });
  };
  const handleSubmit = async () => {
    try {
      const response = await api.post(
        "/admin/blogs",
        {
          ...formData,
          meta_key: formData.meta_key,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status !== 201) {
        throw new Error("Unable to create post. Please try again");
      }
      toast.success("Post created successfully", { duration: 3000 });
      navigate("/admin/blog/view");
    } catch (error) {
      toast.error(error.message, { duration: 3000 });
      console.log(error);
    }
  };

  const handleEditorChange = (content) => {
    setFormData({ ...formData, content });
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-3xl font-bold text-white">Create a new post</h1>
      </div>
      <div className="rounded-2xl bg-[#121117] text-white space-y-6 px-4 py-4">
        <div className="flex flex-col gap-2 p-4">
          <span className="text-lg font-semibold">Details</span>
          <p className="text-[#637381]">Title, short description, image...</p>
        </div>
        <div className="w-full h-[1px] bg-gray-600" />
        {/* Details */}
        <div className="bg-[#121117] p-6 rounded space-y-6">
          <label className="">Post Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-[#0f0e13] text-[#919EAB] p-2 border border-gray-600 rounded"
          >
            <option>Forex Forecast</option>
            <option>Gold Forecast</option>
            <option>Crypto Forecast</option>
          </select>

          <input
            type="text"
            name="title"
            placeholder="Post Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-[#0f0e13] text-white p-2 border border-gray-700 rounded"
          />
        </div>

        {/* Content */}

        <RichEditor
          initialValue={formData.content}
          onChange={handleEditorChange}
        />

        {/* Cover Uploads */}
        <div className="bg-[#121117] w-full mx-auto rounded flex flex-col items-center justify-center space-y-8">
          <h4 className="w-full text-left text-White text-sm font-semibold font-['DM_Sans'] leading-snug">
            Main Cover
          </h4>
          <div className="flex gap-5 w-full">
            <div className="border w-[50%] sm:w-1/4 sm:h-72 border-gray-700 bg-[#1d1b25] rounded  text-center">
              {formData.blog_image ? (
                <img
                  src={
                    formData.blog_image
                      ? URL.createObjectURL(formData.blog_image)
                      : "#"
                  }
                  alt="main-cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={mainChart}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </>
              )}
            </div>
            <div
              onClick={() => mainImageRef.current.click()}
              className="border flex-1 h-72 border-gray-700 bg-[#1d1b25] rounded p-4 text-center"
            >
              <div className="flex flex-col gap-7">
                <img
                  src={uploadImage1}
                  alt="upload image 1"
                  className="w-full h-28 object-contain"
                />
                <p className="gradient-text text-stone-900 text-lg font-bold font-['DM_Sans'] leading-7">
                  Drop or select file
                </p>
              </div>
              <div className="self-stretch text-center justify-start cursor-pointer">
                <span className="text-[#637381] text-sm font-medium font-['DM_Sans'] leading-snug">
                  Drop files here or click to{" "}
                </span>
                <span className="text-[#00A76F] text-sm font-medium font-['DM_Sans'] leading-snug">
                  browse
                </span>
                <span className="text-[#637381] text-sm font-medium font-['DM_Sans'] leading-snug">
                  {" "}
                  through your machine.
                </span>
              </div>
              <input
                hidden
                ref={mainImageRef}
                type="file"
                name="blog_image"
                onChange={handleChange}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
      <MetaPropertiesForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
