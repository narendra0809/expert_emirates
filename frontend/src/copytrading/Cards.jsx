import React from "react";
import shield1 from "../assets/copyimage/card1.png";
import shield2 from "../assets/copyimage/card2.png";
import shield3 from "../assets/copyimage/card3.png";
import shield4 from "../assets/copyimage/card4.png";
import shield5 from "../assets/copyimage/card5.png";

const features = [
  {
    title: "Follow the Pros",
    desc: "Our expert traders are like the rock stars of the trading world. Pick your favorite and copy their every move. It’s like air-guitar, but with real money!",
    img: shield1,
  },
  {
    title: "Hands-Free Trading",
    desc: "Forget stress. Our automated system copies the trades of your chosen expert, so you can spend more time binge-watching your favorite shows.",
    img: shield2,
  },
  {
    title: "Simple Platform",
    desc: "Our interface is as easy as ordering pizza online. No complicated setups—just quick, tasty results.",
    img: shield3,
  },
  {
    title: "Real-Time Thrills",
    desc: "Get live updates on your trades. It’s like having a front-row seat to the greatest show in finance.",
    img: shield4,
  },
  {
    title: "Learn and Laugh",
    desc: "With our Forex education resources, you’ll be trading-savvy in no time. It’s learning with a dash of fun!",
    img: shield5,
  },
];

const Cards = () => {
  return (
    <div className="bg-black text-white px-4 md:px-12 py-16">
      {/* Top 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {features.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#121117] border-y border-yellow-500 rounded-xl p-6 text-center flex flex-col items-center min-h-[200px] transition-transform duration-300 hover:shadow-yellow-500/20"
          >
            <img
              src={item.img}
              alt="shield"
              className="w-32 transition-all duration-300 group-hover:animate-bounce -mt-16 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid md:grid-cols-3 gap-20 mt-20">
        {features.slice(2).map((item, index) => (
          <div
            key={index}
            className="group relative bg-[#121117] border-y border-yellow-500 rounded-xl p-6 text-center flex flex-col items-center min-h-[200px] transition-transform duration-300 hover:shadow-yellow-500/20"
          >
            <img
              src={item.img}
              alt="shield"
              className={`transition-all duration-300 group-hover:animate-bounce -mt-16 mb-4 ${index === 2 ? 'w-36' : 'w-32'}`}
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Headings Above Buttons */}
      <div className="mt-16 flex flex-col md:flex-row justify-around text-center md:text-left gap-4">
        <h2 className="text-lg font-bold">
          Start your Dynamic Journey in the Trading World.
        </h2>
        <h2 className="text-lg font-bold">
          Follow <span className="text-white">"Expert Emirates"</span> and copy our trades with one click
        </h2>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row justify-around gap-4">
        <button className="bg-black border border-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition w-full md:w-auto">
          TO OPEN AN ACCOUNT
        </button>
        <button className="bg-black border border-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition w-full md:w-auto">
          TO ACTIVATE COPY TRADER
        </button>
      </div>
    </div>
  );
};

export default Cards;
