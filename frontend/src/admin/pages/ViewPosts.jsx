import { useEffect, useState } from "react";
import mainChart from "../assets/post/mainChart.png";
import api from "../../axios/api";
import Loader from "../../components/Loader";
import EditPostModal from "../components/EditPostModal";
import toast from "react-hot-toast";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [editModal, setEditModal] = useState({
    isOpen: false,
    post: null,
  });
  const handleEdit = (post) => {
    setEditModal({
      isOpen: true,
      post,
    });
  };
  const handleDelete = async (postId) => {
    try {
      const response = await api.delete(`/admin/blogs/${postId}`);
      if (!response.data.success) {
        throw new Error("Unable to delete post. Please try again");
      }
      toast.success("Post deleted successfully", {
        duration: 3000,
      });
      fetchPosts();
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
      });
      console.log(error);
    }
  };
  const handlePublish = async (postId) => {
    const fd = new FormData();
    fd.append("is_published", "published");
    try {
      const response = await api.patch(`/admin/blogs/${postId}`, fd);
      if (!response.data.success) {
        throw new Error("Unable to publish post. Please try again");
      }
      toast.success("Post published successfully", {
        duration: 3000,
      });
      fetchPosts();
    } catch (error) {
      toast.error(error.message, {
        duration: 3000,
      });
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    setLoadingPosts(true);
    try {
      const response = await api.get("/admin/blogs");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPosts(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, [editModal?.success]);
  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl font-bold text-white">All Posts</h1>
      </div>
      <div className="h-full rounded-2xl bg-[#121117] text-white space-y-6 px-4 py-4">
        {/* Table or Card Grid of Posts */}
        {loadingPosts ? (
          <Loader width={50} height={50} />
        ) : posts.length === 0 ? (
          <p className="sm:text-xl flex items-center justify-center w-full h-full min-h-full">
            You don't have any posts yet.
          </p>
        ) : (
          <div className="relative overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="text-xs uppercase bg-[#1d1b25] text-gray-400">
                <tr>
                  <th className="px-4 py-3">Cover</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Meta Title</th>
                  <th className="px-4 py-3">Meta Description</th>
                  <th className="px-4 py-3">Meta Keywords</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Assume 'posts' is an array of post objects */}
                {(posts || []).map((post) => (
                  <tr key={post.id} className="border-b border-gray-700">
                    <td className="px-4 py-2">
                      <img
                        src={post.blog_image || mainChart}
                        alt={post.title}
                        className="w-20 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-2">{post.title}</td>
                    <td className="px-4 py-2">{post.category}</td>
                    <td className="px-4 py-2">{post.meta_title}</td>
                    <td className="px-4 py-2">{post.meta_desc}</td>
                    <td className="px-4 py-2">{post.meta_key.join(",")}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs uppercase ${
                          post.is_published === "published"
                            ? "bg-green-700 text-white"
                            : "bg-yellow-700 text-white"
                        }`}
                      >
                        {post.is_published ? post.is_published : "draft"}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex gap-4 mt-4">
                      <button
                        onClick={() => handleEdit(post)}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white rounded"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handlePublish(post.id)}
                        className={`${
                          post.is_published === "published"
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-green-600 hover:bg-green-700"
                        } px-3 py-1 text-white rounded`}
                        disabled={post.is_published === "published"}
                      >
                        Publish
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {editModal.isOpen && (
        <EditPostModal editModal={editModal} setEditModal={setEditModal} />
      )}
    </>
  );
};

export default ViewPosts;
