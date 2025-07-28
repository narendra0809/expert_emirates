import shape from "../assets/shape.png"; // background shape

const Card = ({ number, text, img }) => {
  return (
    <div className="relative bg-[#0A090D] text-white rounded-xl p-5 w-72 h-28 overflow-hidden shadow-lg flex flex-col justify-between">
      {/* Text Content */}
      <div>
        <h2
          className="text-3xl font-bold text-yellow-300"
          style={{
            background:
              "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {number}
        </h2>
        <p className="text-sm text-gray-300">{text}</p>
      </div>

      {/* Background Shape with Icon inside */}
      <div
        className="absolute top-4 right-3 w-24 h-28 bg-no-repeat bg-contain bg-right transform rotate-12 translate-x-5 -translate-y-5 flex items-center justify-center"
        style={{ backgroundImage: `url(${shape})` }}
      >
        <div className="flex items-center justify-center -mt-9">
          <img src={img} alt={text} className="w-8 h-8 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Card;
