import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import api from "../../axios/api";
import toast from "react-hot-toast";

const EditPostModal = ({ editModal, setEditModal }) => {
  const [formData, setFormData] = useState(editModal.post);
  const [keywordInput, setKeywordInput] = useState("");
  const [metaKey, setMetaKey] = useState(editModal.post.meta_key || []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "blog_image" && value instanceof File) {
        fd.append("blog_image", value);
      } else if (key === "blog_image" && typeof value === "string") {
        //
      } else if (key !== "meta_key") {
        fd.append(key, value);
      }
    });
    metaKey.forEach((kw) => fd.append("meta_key[]", kw));
    try {
      const response = await api.patch(`/admin/blogs/${formData.id}`, fd);
      if (!response.data.success) {
        throw new Error("Unable to update post. Please try again");
      }
      toast.success("Post updated successfully", {
        duration: 3000,
      });
      setEditModal({
        isOpen: false,
        post: null,
        success: true,
      });
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
      });
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "blog_image" ? files[0] : value,
    });
  };
  const handleAddKeyword = () => {
    const newKey = keywordInput.trim();
    if (newKey && !metaKey.includes(newKey)) {
      setMetaKey([...metaKey, newKey]);
    }
    setKeywordInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddKeyword();
    }
  };

  const handleRemoveKeyword = (keyToRemove) => {
    setMetaKey(metaKey.filter((k) => k !== keyToRemove));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#121117] rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
        {/* Modal header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Edit Post</h2>
          <button
            className="text-gray-400 hover:text-white text-2xl font-bold"
            onClick={() => setEditModal(null)}
            type="button"
          >
            &times;
          </button>
        </div>
        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold text-sm text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Post Title"
              className="w-full bg-[#0f0e13] text-white p-2 border border-gray-700 rounded"
              value={formData.title}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-sm text-white">
              Category
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full bg-[#0f0e13] text-white p-2 border border-gray-600 rounded"
              value={formData.category}
            >
              <option>Forex Forecast</option>
              <option>Gold Forecast</option>
              <option>Crypto Forecast</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold text-sm text-white">
              Content
            </label>
            {/* Replace this with RichEditor as needed */}
            <textarea
              onChange={handleChange}
              name="content"
              className="w-full bg-[#0f0e13] text-white p-2 border border-gray-700 rounded h-28"
              placeholder="Content"
              value={formData.content}
            />
          </div>
          {/* Blog Image Upload */}
          <div>
            <label className="block mb-1 font-semibold text-sm text-white">
              Blog Image
            </label>
            <input
              onChange={handleChange}
              type="file"
              name="blog_image"
              accept="image/*"
              className="w-full text-white p-2 bg-[#0f0e13] border border-gray-700 rounded"
            />
          </div>
          {/* Meta Title */}
          <div>
            <label className="block mb-1 font-semibold text-sm text-white">
              Meta Title
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="meta_title"
              className="w-full bg-[#0f0e13] text-white p-2 border border-gray-700 rounded"
              placeholder="Meta Title"
              value={formData.meta_title}
            />
          </div>
          {/* Meta Description */}
          <div>
            <label className="block mb-1 font-semibold text-sm text-white">
              Meta Description
            </label>
            <textarea
              onChange={handleChange}
              name="meta_desc"
              className="w-full bg-[#0f0e13] text-white p-2 border border-gray-700 rounded h-16"
              placeholder="Meta Description"
              value={formData.meta_desc}
            />
          </div>
          {/* Meta Keywords */}
          <div className="relative mb-1">
            <label className="block mb-1 font-semibold text-sm text-white">
              Meta Keywords
            </label>
            <div className="border border-gray-700 bg-[#121117] p-3 rounded-md">
              <div className="flex flex-wrap gap-2 mb-2">
                {metaKey.map((tag) => (
                  <span
                    key={tag}
                    className="text-white flex items-center gap-1 text-sm px-3 py-1 rounded-full font-medium font-['Public_Sans'] leading-none bg-[#1D1D23]"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveKeyword(tag)}
                      className="hover:text-red-400"
                    >
                      <FaTimes size={10} />
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyDown={handleKeyPress}
                onBlur={handleAddKeyword}
                placeholder="Type a keyword and press Enter"
                className="w-full bg-transparent text-white outline-none placeholder-gray-400"
              />
            </div>
          </div>
          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white"
              onClick={() =>
                setEditModal({
                  isOpen: false,
                  post: null,
                })
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;
