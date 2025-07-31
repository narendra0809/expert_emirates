import { MdDiscount } from "react-icons/md";
import moneyBag from "../assets/dashboardhome/moneyBag.png";
import uploadImg from "../../public/images/upload.svg";
import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import api from "../axios/api";
import PaymentModal from "./components/PaymentModal";

export default function BuyPlan() {
  const { plans } = useOutletContext();
  const fileUploadRef = useRef(null);

  const [paymentDone, setPaymentDone] = useState(false);

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const fetchPaymentMethods = async () => {
    try {
      const response = await api.get("/payment-gateways");
      if (response.status !== 200) {
        throw new Error("Unable to fetch payment methods !");
      }
      console.log(response.data);
      setPaymentMethods(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  useEffect(() => {
    if (plans && Object.keys(plans).length > 0) {
      const defaultCategory = Object.keys(plans)[0];
      setSelectedCategory(defaultCategory);
      setSelectedType("");
      setSelectedDuration("");
      setPlanPrice("");
    }
  }, [plans]);

  useEffect(() => {
    if (selectedCategory) {
      setSelectedType("");
      setPlanPrice("");
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedType) {
      setPlanPrice("");
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedCategory && selectedType) {
      const plan = plans[selectedCategory].find(
        (item) => item.type === selectedType
      );
      setSelectedDuration(plan ? plan.duration : "");
      setPlanPrice(plan ? plan.price : "");
    } else {
      setPlanPrice("");
    }
  }, [selectedCategory, selectedType, plans]);

  if (!plans) return <div className="text-white p-6">Loading...</div>;

  const categoryList = Object.keys(plans);
  const typeList = selectedCategory
    ? [...new Set(plans[selectedCategory].map((item) => item.type))]
    : [];
  return (
    <div className="flex flex-col lg:flex-row gap-6 text-white min-h-screen">
      {openPaymentModal && (
        <PaymentModal
          isOpen={openPaymentModal}
          onClose={() => setOpenPaymentModal(false)}
          payment={selectedPayment}
          setPaymentDone={setPaymentDone}
        />
      )}
      {/* Left: Buy New Plan */}
      <div className="flex-1 bg-[#121117] p-6 rounded-2xl flex flex-col">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-['Poppins'] uppercase leading-relaxed tracking-[2.88px]">
            BUY NEW PLAN
          </h2>
          <p className="text-sm">
            Choose a plan that suits your trading needs.
          </p>
        </div>

        <div className="mt-10 bg-[#121117] border border-[#1D1B25] shadow-[0px_0px_10px_0px_rgba(145,158,171,0.20)] outline outline-1 outline-offset-[-1px] outline-[#1D1B25] p-6 rounded-md flex-1 flex flex-col">
          <div className="space-y-6 flex-1">
            {/* --- Category --- */}
            <div className="space-y-4 relative">
              <label className="text-sm text-[#919EAB] bg-[#121117] px-2 absolute bottom-10 left-4 z-10">
                Plan Category
              </label>
              <select
                name="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#121117] border border-gray-700 py-3 pl-3 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 appearance-none"
              >
                {categoryList.map((cate) => (
                  <option key={cate} value={cate} className="text-white">
                    {cate}
                  </option>
                ))}
              </select>
              {/* Chevron */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* --- Type --- */}
            <div className="space-y-4 relative">
              <label className="text-sm text-[#919EAB] bg-[#121117] px-2 absolute bottom-10 left-4 z-10">
                Plan Type
              </label>
              <select
                name="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                disabled={!typeList.length}
                className="w-full bg-[#121117] border border-gray-700 py-3 pl-3 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500 appearance-none"
              >
                <option value="" disabled>
                  {typeList.length ? "Select type" : "Select category first"}
                </option>
                {typeList.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* --- Price --- */}
            <div className="w-full text-center text-lg">
              <span className="text-yellow-500">Plan Price : </span>
              <span className="font-bold">
                {planPrice && selectedDuration
                  ? `$${planPrice}/${selectedDuration}`
                  : "--"}
              </span>
            </div>

            {/* --- Payment method & upload, same as before --- */}
            <div className="space-y-4">
              <label className="text-sm">
                Choose Payment Method from the list below *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#121117] p-3 rounded-md">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`bg-[#121117] border rounded-md p-3 flex items-center space-x-2  cursor-pointer transition-colors ${
                      selectedPayment?.name === method.name
                        ? "border-yellow-400"
                        : "border-gray-700"
                    }`}
                    onClick={() => setSelectedPayment(method)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedPayment?.name === method.name}
                      className="appearance-none w-4 h-4 border rounded bg-[#26242f] checked:bg-yellow-400 checked:border-yellow-400 focus:ring-0"
                      readOnly
                    />
                    <span className="text-gray-700">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {paymentDone && (
              <div
                onClick={() => fileUploadRef.current.click()}
                className="cursor-pointer w-full h-[40%] border border-[#282631] rounded-lg flex flex-col items-center justify-center gap-1 py-8"
              >
                <img src={uploadImg} alt="upload" className="w-12 h-12" />
                <p className="text-yellow-400 text-sm">Click to upload</p>
                <p className="text-gray-400 text-xs">
                  SVG, PNG, JPG or GIF (max. 800 x 400px)
                </p>
                <input
                  ref={fileUploadRef}
                  id="upload"
                  type="file"
                  className="hidden"
                />
              </div>
            )}
          </div>

          <button
            onClick={() => setOpenPaymentModal(true)}
            className="w-full bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-3 text-sm sm:text-base rounded-full shadow-md hover:brightness-110 transition-all duration-300"
          >
            {paymentDone ? "Submit" : "Next"}
          </button>
        </div>
      </div>

      {/* Right: Current Plans (copy unchanged from your code) */}
      <div className="w-full lg:w-1/3 flex flex-col">
        {/* ... keep your current plans code ... */}
        <div className="space-y-4 bg-[#121117]  p-4 sm:p-6 rounded-2xl sm:space-y-6 flex-1">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-semibold font-['Poppins'] uppercase leading-relaxed tracking-[2.88px] bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
              CURRENT PLAN
            </h2>
            <button className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              Filter
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-[#1D1B25] border border-gray-800 p-2 sm:p-2 rounded-md flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4"
              >
                <div className="flex sm:flex-col gap-2 w-full sm:w-1/2">
                  <div className="p-2 pr-3 rounded-3xl flex items-center gap-2 shadow-[inset_0px_2.158357858657837px_5.395894527435303px_0px_rgba(0,76,85,0.25),inset_0px_0.5395894646644592px_0px_0px_rgba(11,52,63,1.00)]">
                    <MdDiscount className="text-xl sm:text-2xl rounded-full p-1 rotate-90 bg-[#0C343C]" />
                    <p className="text-base sm:text-lg">Standard Plan</p>
                  </div>
                  <div className="flex items-center gap-2 sm:block">
                    <p className="text-xs text-white">Forex</p>
                    <p className="text-xl sm:text-2xl font-bold">
                      $199
                      <span className="text-xs sm:text-sm">/MONTHLY</span>
                    </p>
                  </div>
                </div>
                <div className="flex max-sm:items-center flex-col gap-2 w-full sm:w-1/2 sm:text-right">
                  <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg justify-start sm:justify-center">
                    <div className="w-1.5 h-1.5 relative flex-shrink-0">
                      <div className="w-0.5 h-0.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full" />
                    </div>
                    <span className="font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
                      Plan Active
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 my-1">
                    <span className="text-gray-400">Purchase Date</span>:
                    20/05/2003
                  </p>
                  <div className="btn-gradient text-black px-4 sm:px-6 py-1 text-xs sm:text-sm rounded-full shadow-md hover:brightness-110 transition-all duration-300 self-center sm:self-end">
                    Expires: <span className="font-semibold">25-11-2025</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center bg-black rounded-md mt-6 sm:mt-12 flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.4)_0%,transparent_70%)] blur-xl sm:blur-2xl z-0" />
            <img
              src={moneyBag}
              alt="Money Bag"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
