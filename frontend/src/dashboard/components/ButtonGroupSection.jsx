import ToggleButton from "./ToggleButton";

export default function ButtonGroupSection({ clicked, setClicked }) {
  return (
    <div className="w-full mt-6">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <ToggleButton
          text="Forex + Gold"
          clicked={clicked}
          setClicked={setClicked}
          eText="Forex"
          className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base"
        />
        <ToggleButton
          text="Crypto"
          clicked={clicked}
          setClicked={setClicked}
          eText="Crypto Currency"
          className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base"
        />
        <ToggleButton
          text="Portfolio Management"
          clicked={clicked}
          setClicked={setClicked}
          eText="Portfolio Managment"
          className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base"
        />
      </div>
    </div>
  );
}
