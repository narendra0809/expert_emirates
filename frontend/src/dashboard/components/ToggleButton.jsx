export default function ToggleButton({ text, clicked, setClicked, eText }) {
  let isActive = clicked === eText;
  if (clicked === "gold" && eText === "forex") {
    isActive = true;
  }

  const handleClick = () => {
    setClicked(eText);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300
        ${
          isActive
            ? "text-black btn-gradient btn-gradient-border"
            : "bg-[#1a1921] text-white"
        }`}
    >
      {text}
    </button>
  );
}
