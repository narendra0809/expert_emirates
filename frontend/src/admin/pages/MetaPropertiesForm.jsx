import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

export default function MetaPropertiesForm({ handleSubmit }) {
  const [meta, setMeta] = useState({
    title: "",
    description: "",
    keywords: ["Clothing", "Mens Fashion"],
    tags: ["Clothing", "Mens Fashion"],
    enableSocial: true,
    publish: true,
  });

  const [inputs, setInputs] = useState({
    tagInput: "",
    keywordInput: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTag = (type) => {
    const value = inputs[type + "Input"].trim();
    if (!value || meta[type].includes(value)) return;

    setMeta((prev) => ({
      ...prev,
      [type]: [...prev[type], value],
    }));
    setInputs((prev) => ({ ...prev, [type + "Input"]: "" }));
  };

  const handleKeyPress = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag(type);
    }
  };

  const removeItem = (type, value) => {
    setMeta((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">
      <div className="max-w-5xl mx-auto rounded-xl bg-[#121117] p-6 space-y-6 shadow-md">
        <h2 className="text-xl font-semibold">Properties</h2>
        <p className="text-sm text-gray-400 mb-4">Additional functions and attributes...</p>

        {/* Tags */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-gray-400">Tags</label>
          <div className="border border-gray-700 bg-[#121117] p-3 rounded-md">
            <div className="flex flex-wrap gap-2 mb-2">
              {meta.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-gray-700 text-sm px-3 py-1 rounded-full">
                  {tag}
                  <button onClick={() => removeItem("tags", tag)}>
                    <FaTimes size={10} />
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              name="tagInput"
              value={inputs.tagInput}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyPress(e, "tags")}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Meta Title */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-gray-400">Meta Title</label>
          <input
            className="w-full bg-[#121117] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none"
            value={meta.title}
            onChange={(e) => setMeta({ ...meta, title: e.target.value })}
          />
        </div>

        {/* Meta Description */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-gray-400">Meta Description</label>
          <input
            className="w-full bg-[#121117] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none"
            value={meta.description}
            onChange={(e) => setMeta({ ...meta, description: e.target.value })}
          />
        </div>

        {/* Meta Keywords */}
        <div className="relative mb-6">
          <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-gray-400">Meta Keywords</label>
          <div className="border border-gray-700 bg-[#121117] p-3 rounded-md">
            <div className="flex flex-wrap gap-2 mb-2">
              {meta.keywords.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-gray-700 text-sm px-3 py-1 rounded-full">
                  {tag}
                  <button onClick={() => removeItem("keywords", tag)}>
                    <FaTimes size={10} />
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              name="keywordInput"
              value={inputs.keywordInput}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyPress(e, "keywords")}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
            />
          </div>
        </div>

        {/* Enable Comments */}
        <div className="flex items-center gap-4">
          <label className="text-sm">Enable comments</label>
          <Switch
            checked={meta.enableSocial}
            onChange={(val) => setMeta({ ...meta, enableSocial: val })}
            className={`${
              meta.enableSocial ? "bg-green-500" : "bg-gray-600"
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                meta.enableSocial ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>
      </div>

      {/* Footer black section with publish & buttons */}
      <div className="max-w-5xl mx-auto bg-black px-6 py-6 rounded-b-xl mt-[-10px] flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Publish Switch */}
        <div className="flex items-center gap-4">
          <label className="text-sm text-white">Publish</label>
          <Switch
            checked={meta.publish}
            onChange={(val) => setMeta({ ...meta, publish: val })}
            className={`${
              meta.publish ? "bg-green-500" : "bg-gray-600"
            } relative inline-flex h-6 w-11 items-center rounded-full transition`}
          >
            <span
              className={`${
                meta.publish ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform bg-white rounded-full transition`}
            />
          </Switch>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full bg-black text-white border border-t-yellow-700 border-b-yellow-700 border-l-yellow-950 border-r-yellow-950 hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:to-[#452e06] hover:text-black font-semibold">
            Preview
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-3xl bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] text-black font-semibold"
          >
            Create post
          </button>
        </div>
      </div>
    </div>
  );
}
