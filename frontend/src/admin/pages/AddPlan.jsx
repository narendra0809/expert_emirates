import { useEffect, useState } from "react";
import { FaEdit, FaFilter, FaRegEdit, FaSave, FaTrash } from "react-icons/fa";
import api from "../../axios/api";
import Loader from "../../components/Loader";

export default function AddPlan() {
  const [formData, setFormData] = useState({
    category: "Forex",
    type: "Standard Plan",
    description: "",
    price: "",
    duration: "Monthly",
  });
  const [plans, setPlans] = useState([]);
  const [loadingPlans, setLoadingPlans] = useState(false);

  const [features, setFeatures] = useState([]);

  const deletePlan = (index) => {
    const updated = plans.filter((_, i) => i !== index);
    setPlans(updated);
  };
  const handleSaveChanges = async () => {
    console.log({
      ...formData,
      features: features.map((feature) => feature.value),
    });
    const planData = {
      ...formData,
      price: Number(formData.price),
      features: JSON.stringify(features.map((feature) => feature.value)),
    };
    try {
      const response = await api.post(`/admin/plans`, planData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddFeature = () => {
    setFeatures([
      ...features,
      {
        id: Date.now(),
        value: "",
        isEditing: true, // Changed from 'editing' to 'isEditing' for consistency
      },
    ]);
  };

  const handleFeatureChange = (id, newValue) => {
    setFeatures(
      features.map((f) => (f.id === id ? { ...f, value: newValue } : f))
    );
  };

  const handleSaveFeature = (id) => {
    setFeatures(
      features.map((f) => (f.id === id ? { ...f, isEditing: false } : f))
    );
  };

  const handleEditFeature = (id) => {
    setFeatures(
      features.map((f) => (f.id === id ? { ...f, isEditing: true } : f))
    );
  };

  const handleDeleteFeature = (id) => {
    setFeatures(features.filter((f) => f.id !== id));
  };

  const fetchAllPlans = async () => {
    try {
      setLoadingPlans(true);
      const response = await api.get("/admin/plans");
      console.log(response.data);
      setPlans(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingPlans(false);
    }
  };
  useEffect(() => {
    fetchAllPlans();
  }, []);
  return (
    <div className="mt-5  bg-black text-white flex flex-col lg:flex-row gap-6">
      {/* Add Plan Section */}
      <div className="w-full lg:w-1/2 bg-[#121117] p-6 rounded-xl shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] bg-clip-text text-transparent mb-6 tracking-wider">
          ADD PLAN
        </h1>
        <div className="border border-[#1D1B25] p-6 rounded-xl">
          {/* SELECT PLAN - big width */}
          <div className="relative mb-4">
            <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
              Select Plan
            </label>
            <select
              value={formData.type}
              name="type"
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-transparent text-gray-200 border border-[#2c2c2e] rounded-md focus:outline-none"
            >
              <option className="bg-[#121117] text-gray-200">
                Standard Plan
              </option>
              <option className="bg-[#121117] text-gray-200">Pro Plan</option>
              <option className="bg-[#121117] text-gray-200">Ultra Plan</option>
            </select>
          </div>
          <div className="relative mb-4">
            <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
              Select Category
            </label>
            <select
              value={formData.category}
              name="category"
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 bg-transparent text-gray-200 border border-[#2c2c2e] rounded-md focus:outline-none"
            >
              <option className="bg-[#121117] text-gray-200">Forex</option>
              <option className="bg-[#121117] text-gray-200">Gold</option>
              <option className="bg-[#121117] text-gray-200">
                Crypto Currency
              </option>
              <option className="bg-[#121117] text-gray-200">
                Portfolio Managment
              </option>
            </select>
          </div>

          {/* Plan Time + Plan Amount in same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
                Plan Time
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 bg-transparent text-gray-200 border border-[#2c2c2e] rounded-md focus:outline-none"
              >
                <option className="bg-[#121117] text-gray-200">Monthly</option>
                <option className="bg-[#121117] text-gray-200">
                  Quartarly
                </option>
                <option className="bg-[#121117] text-gray-200">
                  Half Yearly
                </option>
                <option className="bg-[#121117] text-gray-200">Yearly</option>
              </select>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
                Plan Amount
              </label>
              <div className="flex items-center relative">
                <span className="absolute left-3 bottom-[10px]">$</span>
                <input
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-6 py-2 mt-1 bg-transparent text-gray-200 border border-[#2c2c2e] rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative mb-4">
            <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
              Description
            </label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              type="text"
              className="w-full px-4 py-2 mt-1 bg-transparent text-gray-200 border border-[#2c2c2e] rounded-md focus:outline-none"
            />
          </div>

          {/* ADD FEATURE BUTTON RIGHT */}
          <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
            <span className="text-white font-medium text-sm">
              Add features for your plan
              <span className="text-red-500">*</span>
            </span>
            <button
              onClick={handleAddFeature}
              className="px-3 py-1 bg-transparent border border-gray-600 text-white rounded-full text-sm hover:bg-yellow-400 hover:text-black transition h-8"
            >
              + Add Features
            </button>
          </div>

          {/* FEATURES LIST */}
          <div className="space-y-2 mb-6">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-2">
                <input
                  type="text"
                  value={feature.value}
                  onChange={(e) =>
                    handleFeatureChange(feature.id, e.target.value)
                  }
                  className={`flex-1 px-4 py-2 bg-transparent border rounded-md focus:outline-none ${
                    feature.isEditing
                      ? "text-white border-yellow-500"
                      : "text-gray-400 border-gray-700 bg-gray-800 cursor-not-allowed"
                  }`}
                  readOnly={!feature.isEditing}
                />

                {/* Save Button - Only shows when editing */}
                {feature.isEditing && (
                  <button
                    onClick={() => handleSaveFeature(feature.id)}
                    className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
                    disabled={!feature.value.trim()} // Disable if empty
                  >
                    <FaSave />
                  </button>
                )}

                {/* Edit Button - Only shows when not editing */}
                {!feature.isEditing && (
                  <button
                    onClick={() => handleEditFeature(feature.id)}
                    className="p-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                  >
                    <FaEdit />
                  </button>
                )}

                {/* Delete Button - Always shows */}
                <button
                  onClick={() => handleDeleteFeature(feature.id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* SAVE BUTTON - small and left aligned */}
          {/* Save Changes Button - No extra padding */}
          <div className="rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)] w-fit">
            <button
              onClick={handleSaveChanges}
              className="h-[38px] px-6 py-[6px] rounded-full text-sm font-bold text-black bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] hover:bg-black hover:text-white transition duration-300"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>

      {/* Current Plan Section */}
      <div className="w-full lg:w-1/2 bg-[#121117] p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] bg-clip-text text-transparent">
            CURRENT PLAN
          </h1>
          <button className="text-gray-400 flex items-center gap-2">
            <FaFilter /> Filter
          </button>
        </div>

        <div className="w-full h-full space-y-4 max-h-[550px] pr-2">
          {loadingPlans ? (
            <Loader />
          ) : (
            plans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#1d1b25] border border-gray-800 p-4 rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-400">{plan.type}</p>
                  <p className="text-xl font-bold">
                    ${plan.price}
                    <span className="text-sm ml-1 font-medium">
                      /{plan.duration}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">{plan.category}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-black p-2 rounded-full bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] hover:brightness-110 transition">
                    <FaRegEdit size={20} />
                  </button>
                  <button
                    onClick={() => deletePlan(index)}
                    className="border border-yellow-600 bg-transparent text-yellow-400 px-5 py-1 rounded-full hover:bg-gradient-to-b hover:from-[#281000] hover:via-[#C0971C] hover:to-[#FFE976] hover:text-black"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
