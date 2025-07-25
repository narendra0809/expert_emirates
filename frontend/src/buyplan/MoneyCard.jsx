import React from "react";
import moneyImage from "../assets/buyplan/buycoin.png"; // Replace with your actual image path

const MoneyCard = () => {
  return (
    <div className="w-full max-w-xs mx-auto bg-[#1A1A1F] rounded-xl shadow-inner p-4 flex justify-center items-center">
      <img
        src={moneyImage}
        alt="money bag"
        className="h-32 object-contain"
      />
    </div>
  );
};

export default MoneyCard;
