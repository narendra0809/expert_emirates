import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import Editor from "../components/Editor";
import uploadImage1 from "../assets/post/container.png";
import mainChart from "../assets/post/mainChart.png";
import MetaPropertiesForm from "./MetaPropertiesForm";
export default function CreatePost() {
  const [forecast, setForecast] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [mainCover, setMainCover] = useState(null);
  const [detailCover, setDetailCover] = useState(null);
  const [category, setCategory] = useState("Select Category");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [author, setAuthor] = useState("Select Author");
  const [isPublished, setIsPublished] = useState(false);

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
  };

  const handleSubmit = () => {
    const payload = {
      forecast,
      title,
      description,
      content,
      mainCover,
      detailCover,
      category,
      metaTitle,
      metaDescription,
      author,
      isPublished,
    };
    console.log("Create Post:", payload);
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-3xl font-bold text-white">Create a new post</h1>
      </div>
      <div className="min-h-screen rounded-2xl bg-[#121117] text-white space-y-6 px-4 py-4">
        <div className="flex flex-col gap-2 p-4">
          <span className="text-lg font-semibold">Details</span>
          <p className="text-[#637381]">Title, short description, image...</p>
        </div>
        <div className="w-full h-[1px] bg-gray-600" />
        {/* Details */}
        <div className="bg-[#121117] p-6 rounded space-y-6">
          <select
            value={forecast}
            onChange={(e) => setForecast(e.target.value)}
            className="w-full bg-[#0f0e13] text-[#919EAB] p-2 border border-gray-600 rounded"
          >
            <option value="">Select Forecast</option>
            <option value="Nifty">Nifty</option>
            <option value="Bank Nifty">Bank Nifty</option>
          </select>

          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#0f0e13] text-white p-2 border border-gray-700 rounded"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#0f0e13] text-white p-2 border border-gray-700 rounded"
          />
        </div>

        {/* Content */}

        <Editor />

        {/* Cover Uploads */}
        <div className="bg-[#121117] w-full mx-auto rounded flex flex-col items-center justify-center space-y-8">
          <h4 className="w-full text-left text-White text-sm font-semibold font-['DM_Sans'] leading-snug">
            Main Cover
          </h4>
          <div className="flex gap-5 w-full">
            <div className="border w-[50%] sm:w-1/4 sm:h-72 border-gray-700 bg-[#1d1b25] rounded  text-center">
              {mainCover ? (
                <img
                  src={URL.createObjectURL(mainCover)}
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
            <div className="border flex-1 h-72 border-gray-700 bg-[#1d1b25] rounded p-4 text-center">
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
              <div class="self-stretch text-center justify-start cursor-pointer">
                <span class="text-[#637381] text-sm font-medium font-['DM_Sans'] leading-snug">
                  Drop files here or click to{" "}
                </span>
                <span class="text-[#00A76F] text-sm font-medium font-['DM_Sans'] leading-snug">
                  browse
                </span>
                <span class="text-[#637381] text-sm font-medium font-['DM_Sans'] leading-snug">
                  {" "}
                  through your machine.
                </span>
              </div>
              <input
                hidden
                type="file"
                onChange={(e) => handleFileChange(e, setMainCover)}
                className="mt-2"
              />
            </div>
          </div>
          <h4 className="w-full text-White text-sm font-semibold font-['DM_Sans'] leading-snug">
            Details Page Cover
          </h4>
          <div className="flex gap-5 w-full">
            <div className="border w-[50%] sm:w-1/4 sm:h-72 border-gray-700 bg-[#1d1b25] rounded  text-center">
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
              <div class="self-stretch text-center justify-start cursor-pointer">
                <span class="text-[#637381] text-sm font-medium font-['DM_Sans'] leading-snug">
                  Drop files here or click to{" "}
                </span>
                <span class="text-[#00A76F] text-sm font-medium font-['DM_Sans'] leading-snug">
                  browse
                </span>
                <span class="text-[#637381] text-sm font-medium font-['DM_Sans'] leading-snug">
                  {" "}
                  through your machine.
                </span>
              </div>
              <input
                hidden
                type="file"
                onChange={(e) => handleFileChange(e, setMainCover)}
                className="mt-2"
              />
            </div>
            <div className="border flex-1 h-72 border-gray-700 bg-[#1d1b25] rounded p-4 text-center">
              {detailCover ? (
                <img
                  src={URL.createObjectURL(detailCover)}
                  alt="main-cover"
                  className="w-full h-full object-contain"
                />
              ) : (
                <>
                  <img
                    src={mainChart}
                    alt=""
                    className="h-full w-full  object-center"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <MetaPropertiesForm handleSubmit={handleSubmit} />
    </div>
  );
}
