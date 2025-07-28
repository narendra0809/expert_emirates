import { useState } from "react";
import { FaFilter, FaRegEdit } from "react-icons/fa";

export default function AddPlan() {
  const [selectedPlan, setSelectedPlan] = useState("Evaluation");
  const [planAmount, setPlanAmount] = useState(150);
  const [planTime, setPlanTime] = useState("Monthly");
  const [content, setContent] = useState(
    "Perfect for small teams or unlimited evaluation."
  );
  const [features, setFeatures] = useState([
    "Perfect for small teams or unlimited evaluation.",
    "Perfect for small teams or unlimited evaluation.",
    "Perfect for small teams or unlimited evaluation.",
  ]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [plans, setPlans] = useState([
    {
      type: "Standard Plan",
      price: 199,
      duration: "MONTHLY",
      category: "Forex",
    },
    {
      type: "Standard Plan",
      price: 199,
      duration: "MONTHLY",
      category: "Forex",
    },
    {
      type: "Standard Plan",
      price: 199,
      duration: "MONTHLY",
      category: "Forex",
    },
    {
      type: "Standard Plan",
      price: 199,
      duration: "MONTHLY",
      category: "Forex",
    },
  ]);

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const handleSaveChanges = () => {
    const payload = {
      selectedPlan,
      planAmount,
      planTime,
      content,
      features,
      paymentMethod,
    };
    console.log("Saving Plan:", payload);
  };

  const deletePlan = (index) => {
    const updated = plans.filter((_, i) => i !== index);
    setPlans(updated);
  };

  return (
    <div className="mt-5 sm:pr-10 bg-black text-white flex flex-col lg:flex-row gap-6">
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
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-transparent text-[#454545] border border-[#2c2c2e] rounded-md focus:outline-none"
            >
              <option>Evaluation</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>

          {/* Plan Time + Plan Amount in same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
                Plan Time
              </label>
              <select
                value={planTime}
                onChange={(e) => setPlanTime(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-transparent text-[#454545] border border-[#2c2c2e] rounded-md focus:outline-none"
              >
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
                Plan Amount
              </label>
              <input
                type="text"
                value={`(Exp: $ ${planAmount})`}
                onChange={(e) =>
                  setPlanAmount(Number(e.target.value.replace(/[^\d]/g, "")))
                }
                className="w-full px-4 py-2 mt-1 bg-transparent text-[#454545] border border-[#2c2c2e] rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative mb-4">
            <label className="absolute -top-2 left-3 px-1 text-xs bg-[#121117] text-[#637381]">
              Content
            </label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-transparent text-[#454545] border border-[#2c2c2e] rounded-md focus:outline-none"
            />
          </div>

          {/* ADD FEATURE BUTTON RIGHT */}
          <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
            <span className="text-white font-medium text-sm">
              Add features for your plan
              <span className="text-red-500">*</span>
            </span>
            <button
              onClick={addFeature}
              className="px-3 py-1 bg-transparent border border-gray-600 text-white rounded-full text-sm hover:bg-yellow-400 hover:text-black transition h-8"
            >
              + Add Features
            </button>
          </div>

          {/* FEATURES LIST */}
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <input
                key={index}
                type="text"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                className="w-full px-4 py-2 bg-transparent text-[#454545] border border-[#2c2c2e] rounded-md focus:outline-none"
              />
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

        <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2">
          {plans.map((plan, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
