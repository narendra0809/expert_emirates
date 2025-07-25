import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    const hasShownPopup = sessionStorage.getItem('popupShown');
    if (!hasShownPopup) {
      setShowPopup(true);
      sessionStorage.setItem('popupShown', 'true');
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
      {/* Popup Box */}
      <div
        className="relative bg-[#0d0d0d] rounded-2xl max-w-4xl w-full shadow-lg text-white p-6  flex flex-col gap-6"
        style={{ borderRadius: "20px" }}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
       className="absolute top-4 right-4 text-black text-2xl bg-gradient-to-r from-yellow-900 via-yellow-300 to-yellow-900 rounded-full p-1"

        >
          <IoClose />
        </button>

<div
  className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl min-h-[250px] sm:min-h-[300px]"
  style={{ backgroundColor: "#121117" }}
>
  {/* Left Content */}
  <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
    <h1 className="text-[34px] sm:text-[42px]  leading-tight mb-4 tracking-widest">
      <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-bold 	">$30,000</span> in <br /> Cash Prizes <br/> and More!
    </h1>
    <p className="text-gray-300 text-[14px] sm:text-[20px]  tracking-widest">
      Join the Global Demo trading <br/> Competition!
    </p>
  </div>

  {/* Right Image */}
  <div className="w-[150px] sm:w-[200px] flex-shrink-0 h-[150px] sm:h-[300px] flex items-center justify-center mr-5">
    <img
      src="images/f59e42b3d60dbb4ae877ad65ed3383b40d057434.png"
      alt="Cash Prizes"
      className="w-full h-full object-contain"
    />
  </div>
</div>



        {/* Terms and Conditions */}
        <div className="m-3 flex justify-around items-center flex-wrap text-[12px] sm:text-[14px] text-gray-300 gap-4">
  <span className="text-center sm:text-left text-[14px] sm:text-[22px]  tracking-widest ">
    Terms and Conditions Apply.
  </span>
  
{/* <div className="p-[2px] rounded-full ">
<div className="golden-button1-wrapper">
  <button className="golden-button1">
    JOIN DEMO COMPETITION
  </button>
</div>


</div> */}



</div>

      </div>
    </div>
  );
};

export default WelcomePopup;
