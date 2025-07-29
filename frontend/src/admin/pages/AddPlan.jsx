import { useEffect, useState } from "react";
import { FaEdit, FaFilter, FaRegEdit, FaSave, FaTrash } from "react-icons/fa";
import api from "../../axios/api";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
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
  const [deletingPlan, setDeletingPlan] = useState({
    value: false,
    id: null,
  });
  const [savingChanges, setSavingChanges] = useState(false);

  const [features, setFeatures] = useState([]);
  const [isEditing, setIsEditing] = useState({
    value: false,
    id: null,
  });

  const handleEditPlan = (planId) => {
    const editingPlan = plans.find((plan) => plan.id === planId);
    if (!editingPlan) {
      toast.error("Unable to edit plan. Please try again", {
        duration: 3000,
      });
      setIsEditing({
        value: false,
        id: null,
      });
      return;
    }
    setFormData({
      category: editingPlan.category,
      description: editingPlan.description,
      duration: editingPlan.duration,
      price: editingPlan.price,
      type: editingPlan.type,
    });
    setFeatures(
      editingPlan.features.map((feature) => ({
        id: Date.now(),
        value: feature,
        isEditing: false,
      }))
    );
    setIsEditing({
      value: true,
      id: planId,
    });
  };
  const deletePlan = async (planId) => {
    try {
      setDeletingPlan({ value: true, id: planId });
      const response = await api.delete(`/admin/plans/${planId}`);
      if (response.status === 200) {
        toast.success("Plan deleted successfully", {
          duration: 3000,
        });
        fetchAllPlans();
        return;
      }
      throw new Error("Unable to delete plan. Please try again later");
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        duration: 3000,
      });
    } finally {
      setDeletingPlan({ value: false, id: null });
    }
  };
  const handleSaveChanges = async () => {
    const planData = {
      ...formData,
      price: Number(formData.price),
      features: JSON.stringify(features.map((feature) => feature.value)),
    };
    setSavingChanges(true);
    if (isEditing.value) {
      await editPlan(planData);
    } else {
      await addNewPlan(planData);
    }
    setSavingChanges(false);
  };

  const addNewPlan = async (planData) => {
    try {
      const response = await api.post(`/admin/plans`, planData);
      if (response.status === 201) {
        toast.success("Plan added successfully", {
          duration: 3000,
        });
        fetchAllPlans();
        return;
      }
      throw new Error("Failed to add plan. Please try again");
    } catch (error) {
      console.log(error.response.data.errors);
      toast.error(error.message, {
        duration: 3000,
      });
    }
  };
  const editPlan = async (planData) => {
    try {
      const response = await api.patch(
        `/admin/plans/${isEditing.id}`,
        planData
      );
      if (response.status === 200) {
        toast.success("Plan edited successfully", {
          duration: 3000,
        });
        fetchAllPlans();
        return;
      }
      throw new Error("Unable to edit plan. Please try again");
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        duration: 3000,
      });
    } finally {
      setIsEditing({ value: false, id: null });
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
        isEditing: true,
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
      if (response.status !== 200) {
        throw new Error("Unable to fetch plans. Please try again");
      }
      const parsedPlans = response.data.map((plan) => ({
        ...plan,
        features: JSON.parse(plan.features),
      }));
      setPlans(parsedPlans);
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        duration: 3000,
      });
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
          {isEditing.value ? "EDIT PLAN" : "ADD PLAN"}
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
          <div className="rounded-full w-fit bg-black">
            <button
              onClick={handleSaveChanges}
              disabled={savingChanges}
              className={`h-[38px] border border-yellow-600 ${
                savingChanges ? "bg-[#121117]" : "text-gradient-2"
              } px-6 py-[6px] rounded-full text-sm font-bold text-black  hover:bg-black hover:text-white transition duration-300`}
            >
              {savingChanges ? (
                <Loader width={20} height={20} />
              ) : (
                "SAVE CHANGES"
              )}
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
            <Loader width={50} height={50} />
          ) : plans.length === 0 ? (
            <p className="text-xl text-gray-400 flex items-center justify-center w-full h-full min-h-full">
              You didn't add any plans yet
            </p>
          ) : (
            plans.map((plan) => (
              <div
                key={plan.id}
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
                  <button
                    onClick={() => handleEditPlan(plan.id)}
                    className="text-black p-2 rounded-full bg-gradient-to-b from-[#281000] via-[#C0971C] to-[#FFE976] hover:brightness-110 transition"
                  >
                    <FaRegEdit size={20} />
                  </button>
                  <button
                    onClick={() => deletePlan(plan.id)}
                    disabled={deletingPlan.value && deletingPlan.id === plan.id}
                    className={`disabled:opacity-85 border border-yellow-600 bg-transparent text-yellow-400 px-5 py-1 rounded-full hover:${
                      !deletingPlan.value &&
                      deletingPlan.id === plan.id &&
                      "bg-gradient-to-b"
                    } hover:from-[#281000] hover:${
                      !deletingPlan.value &&
                      deletingPlan.id === plan.id &&
                      "via-[#C0971C]"
                    } hover:${
                      !deletingPlan.value &&
                      deletingPlan.id === plan.id &&
                      "to-[#FFE976]"
                    } hover:text-black`}
                  >
                    {deletingPlan.value && plan.id === deletingPlan.id ? (
                      <Loader width={20} height={20} />
                    ) : (
                      "Delete"
                    )}
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
