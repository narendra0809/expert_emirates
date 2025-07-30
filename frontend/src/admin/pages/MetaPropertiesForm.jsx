import { useState } from "react";
import { Switch } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

export default function MetaPropertiesForm({
  formData,
  setFormData,
  handleSubmit,
}) {
  const [keywordInput, setKeywordInput] = useState("");

  // Handle adding a new keyword
  const handleAddKeyword = () => {
    if (
      keywordInput.trim() &&
      !formData.meta_key.includes(keywordInput.trim())
    ) {
      setFormData({
        ...formData,
        meta_key: [...formData.meta_key, keywordInput.trim()],
      });
      setKeywordInput("");
    }
  };

  // Handle removing a keyword
  const handleRemoveKeyword = (keywordToRemove) => {
    setFormData({
      ...formData,
      meta_key: formData.meta_key.filter(
        (keyword) => keyword !== keywordToRemove
      ),
    });
  };

  // Handle key press in keyword input
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      handleAddKeyword();
    }
  };

  // Handle other form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle switch toggle
  const handleSwitchChange = (checked) => {
    setFormData({
      ...formData,
      is_published: checked ? "published" : "draft",
    });
  };

  return (
    <div className="w-full bg-black text-white py-6">
      <div className="rounded-xl bg-[#121117] p-6 space-y-6 shadow-md">
        <h2 className="text-xl font-semibold">Properties</h2>
        <p className="text-sm text-[#637381] mb-4">
          Additional functions and attributes...
        </p>

        {/* Meta Title */}
        <div className="mb-6">
          <input
            name="meta_title"
            className="w-full bg-[#121117] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none"
            value={formData.meta_title}
            placeholder="Meta title"
            onChange={handleChange}
          />
        </div>

        {/* Meta Description */}
        <div className="mb-6">
          <textarea
            name="meta_desc"
            className="w-full bg-[#121117] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none"
            value={formData.meta_desc}
            placeholder="Meta description"
            onChange={handleChange}
            rows={4}
          />
        </div>

        {/* Meta Keywords */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-gray-400">
            Meta Keywords
          </label>
          <div className="border border-gray-700 bg-[#121117] p-3 rounded-md">
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.meta_key.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 text-sm px-3 py-1 rounded-full font-medium font-['Public_Sans'] leading-none bg-[#1D1D23]"
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
      </div>

      {/* Footer black section with publish & buttons */}
      <div className="bg-black rounded-b-xl mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Publish Switch */}
        <div className="flex items-center gap-4">
          <Switch
            checked={formData.is_published === "published"}
            onChange={handleSwitchChange}
            className={`${
              formData.is_published === "published"
                ? "bg-green-500"
                : "bg-gray-600"
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                formData.is_published === "published"
                  ? "translate-x-6"
                  : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
          <label className="text-sm text-white">Publish</label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            className="px-6 py-2 rounded-full bg-black text-white border border-t-yellow-700 border-b-yellow-700 border-l-yellow-950 border-r-yellow-950 hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:to-[#452e06] hover:text-black font-semibold"
          >
            Preview
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-gradient-2 px-6 py-2 rounded-3xl text-black font-semibold hover:brightness-110"
          >
            Create post
          </button>
        </div>
      </div>
    </div>
  );
}
