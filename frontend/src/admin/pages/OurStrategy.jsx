import React, { useState, useEffect } from "react";
import vthumb from "../assets/homapage/our.png";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Modal Component
function VideoModal({ isEditing, formData, onChange, onSave, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#030B2B] text-white p-6 rounded-2xl w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-center text-xl font-semibold mb-6">
          {isEditing ? "Edit Video" : "Add Video"}
        </h3>
        <div className="space-y-5">
          <div>
            <label className="text-blue-400 text-sm">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              placeholder="Enter Video Title"
              className="w-full mt-1 px-4 py-2 rounded-md bg-transparent border border-blue-400 placeholder-blue-300 outline-none"
            />
          </div>
          <div>
            <label className="text-blue-400 text-sm">Link</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={onChange}
              placeholder="Enter YouTube Video Link"
              className="w-full mt-1 px-4 py-2 rounded-md bg-transparent border border-blue-400 placeholder-blue-300 outline-none"
            />
          </div>
          <div className="text-center">
            <button
              onClick={onSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md mt-4"
            >
              {isEditing ? "Update Video" : "Add Video"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurStrategy() {
  const [videos, setVideos] = useState([
    {
      title: "Our Strategy",
      link: "https://www.youtube.com/watch?v=_qvBMaYc02E",
      thumbnail: vthumb,
    },
    {
      title: "Market Analysis",
      link: "https://www.youtube.com/watch?v=abcd1234",
      thumbnail: vthumb,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", link: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("videos");
    if (saved) setVideos(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("videos", JSON.stringify(videos));
  }, [videos]);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openAddModal = () => {
    setFormData({ title: "", link: "" });
    setIsEditing(false);
    setModalOpen(true);
  };

  const openEditModal = (index) => {
    setFormData({ title: videos[index].title, link: videos[index].link });
    setIsEditing(true);
    setEditIndex(index);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      setVideos((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidYouTubeLink = (url) => {
    return /^https:\/\/(www\.)?youtube\.com\/watch\?v=/.test(url);
  };

  const saveVideo = () => {
    const { title, link } = formData;
    if (!title.trim() || !link.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    if (!isValidYouTubeLink(link)) {
      alert("Please enter a valid YouTube link.");
      return;
    }
    const newVideo = { ...formData, thumbnail: vthumb };
    if (isEditing) {
      const updated = [...videos];
      updated[editIndex] = newVideo;
      setVideos(updated);
    } else {
      setVideos((prev) => [...prev, newVideo]);
    }
    setModalOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6 sm:p-10">
      <h2 className="text-2xl font-semibold mb-6">Our Strategy</h2>

      <div className="bg-[#101223] rounded-xl p-5 overflow-x-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={openAddModal}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
          >
            Add Video
          </button>
        </div>

        <table className="w-full min-w-[600px] text-left text-sm sm:text-base">
          <thead>
            <tr className="text-blue-400 border-b border-blue-900">
              <th className="py-3 px-4">Thumbnail</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Video Link</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={index} className="border-b border-blue-900">
                <td className="py-3 px-4">
                  <img
                    src={video.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-3 px-4">{video.title}</td>
                <td className="py-3 px-4 break-all text-blue-300">
                  <a href={video.link} target="_blank" rel="noopener noreferrer">
                    {video.link}
                  </a>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(index)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <VideoModal
          isEditing={isEditing}
          formData={formData}
          onChange={handleChange}
          onSave={saveVideo}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
