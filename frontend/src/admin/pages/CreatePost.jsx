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
    <div className="md:mr-12">
      <div className="my-5">
        <h1 className="text-3xl font-bold text-white">Create a new post</h1>
      </div>
      <div className="min-h-screen rounded-2xl bg-[#0f0e13] text-white space-y-6">
        <div className="flex flex-col gap-2 p-4">
          <span className="text-lg font-semibold">Details</span>
          <p className="text-[#637381]">Title, short description, image...</p>
        </div>
        <div className="w-full h-[1px] bg-gray-600" />
        {/* Details */}
        <div className="bg-[#121117] p-6 rounded space-y-4">
          <select
            value={forecast}
            onChange={(e) => setForecast(e.target.value)}
            className="w-full bg-[#0f0e13] text-[#919EAB] p-2 border border-gray-700 rounded"
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
        <div className="bg-[#121117] w-full  mx-auto rounded flex flex-col items-center justify-center space-y-10">
          <div className="flex items-start justify-start gap-2 w-full ">
            <div className="w-1/3 border h-60 border-gray-700 bg-[#1d1b25] rounded  text-center">
              {mainCover ? (
                <img
                  src={URL.createObjectURL(mainCover)}
                  alt="main-cover"
                  className="w-full h-full object-contain"
                />
              ) : (
                <>
                  <img
                    src={mainChart}
                    alt=""
                    className="h-full  object-center"
                  />
                </>
              )}
            </div>
            <div className="border w-2/3 h-60 border-gray-700 bg-[#1d1b25] rounded p-4 text-center">
              {mainCover ? (
                <img
                  src={URL.createObjectURL(mainCover)}
                  alt="main-cover"
                  className="w-full h-full object-contain"
                />
              ) : (
                <>
                  <img
                    src={uploadImage1}
                    alt="upload image 1"
                    className="w-full h-28 object-contain"
                  />
                  <p
                    className=" text-yellow-300"
                    style={{
                      background:
                        "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Drop or select file
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setMainCover)}
                    className="mt-2"
                  />
                </>
              )}
            </div>
          </div>

          <div className="flex items-start justify-start gap-2 w-full ">
            <div className="border w-1/3 h-60 border-gray-700 bg-[#1d1b25] rounded p-4 text-center">
              {mainCover ? (
                <img
                  src={URL.createObjectURL(mainCover)}
                  alt="main-cover"
                  className="w-full h-full object-contain"
                />
              ) : (
                <>
                  <img
                    src={uploadImage1}
                    alt="upload image 1"
                    className="w-full h-28 object-contain"
                  />
                  <p
                    className=" text-yellow-300"
                    style={{
                      background:
                        "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Drop or select file
                  </p>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setDetailCover)}
                    className="mt-2"
                  />
                </>
              )}
            </div>
            <div className="w-2/3 border h-60 border-gray-700 bg-[#1d1b25] rounded  text-center">
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
          {/* <div className="border border-gray-700 bg-[#1d1b25] rounded p-4 text-center">
          {detailCover ? (
            <img
              src={URL.createObjectURL(detailCover)}
              alt="detail-cover"
              className="w-full h-48 object-contain"
              />
              ) : (
                <>
                <p>Drop or select file</p>
                <input
                
                
                
                
                
                
                
                
                
                
                
                
                type="file"
                onChange={(e) => handleFileChange(e, setDetailCover)}
                className="mt-2"
                />
                </>
                )}
                </div> */}
        </div>

        {/* Properties */}
        {/* <div className="bg-[#121117] p-6 rounded space-y-4">
        <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full bg-[#1d1b25] text-white p-2 border border-gray-700 rounded"
        >
        <option value="Select Category">Select Category</option>
        <option value="Forex">Forex</option>
        <option value="Equity">Equity</option>
        </select>
        
        <input
        type="text"
        placeholder="Meta Title"
        value={metaTitle}
        onChange={(e) => setMetaTitle(e.target.value)}
        className="w-full bg-[#1d1b25] text-white p-2 border border-gray-700 rounded"
        />
        
        <input
        type="text"
        placeholder="Meta Description"
        value={metaDescription}
        onChange={(e) => setMetaDescription(e.target.value)}
        className="w-full bg-[#1d1b25] text-white p-2 border border-gray-700 rounded"
        />
        
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full bg-[#1d1b25] text-white p-2 border border-gray-700 rounded"
        >
        <option value="Select Author">Select Author</option>
        <option value="Admin">Admin</option>
        <option value="Guest">Guest</option>
        </select>
        
        <div className="flex items-center gap-2">
        <input
        type="checkbox"
        checked={isPublished}
        onChange={() => setIsPublished(!isPublished)}
        className="accent-yellow-400"
        />
        <label>Publish immediately</label>
        </div>
        
        <div className="flex justify-end gap-10">
        <button className="px-6 py-2 rounded-full  text-white border border-t-yellow-700 border-b-yellow-700 border-l-yellow-950 border-r-yellow-950 hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:to-[#452e06] hover:text-black font-semibold">
        Preview
        </button>
        <button
        onClick={handleSubmit}
        className="px-6 py-2 rounded-3xl bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black font-semibold"
        >
        Create post
        </button>
        </div>
        </div> */}
        <MetaPropertiesForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
