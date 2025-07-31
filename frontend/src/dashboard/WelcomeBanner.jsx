import heroImage from "../assets/dashboard/heroImage.png";

export default function WelcomeBanner() {
  return (
    <div className="w-full bg-black">
      <div className="pt-4 pb-4 w-full rounded-2xl bg-[#1D1B25] text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6 pr-5 pl-5">
        {/* Text Section */}
        <div className="w-full md:flex-1 text-center md:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 leading-snug tracking-[2.88px]">
            WELCOME TO{" "}
            <span className="bg-[linear-gradient(180deg,#281000_5.95%,#C0971C_29.93%,#FFE976_52.51%,#C0971C_76.02%,#281000_100%)] bg-clip-text text-transparent font-bold">
              EXPERT EMIRATES
            </span>
          </h2>

          <p className="self-stretch justify-start text-white text-sm font-normal font-['Poppins'] leading-relaxed sm:text-base  mb-4 w-full max-w-full md:max-w-2xl mx-auto md:mx-0 px-2 sm:px-0">
            The welcome mail has been sent to you. Please check the mail for
            your account credentials and start your trading journey.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-sm">
            {/* NEED HELP / Plan Active */}
            <span className="bg-[linear-gradient(180deg,#281000_5.95%,#C0971C_29.93%,#FFE976_52.51%,#C0971C_76.02%,#281000_100%)] bg-clip-text text-transparent font-semibold text-sm">
              • Plan Active
            </span>

            <span className="btn-gradient text-black pt-2 pb-2 pl-3 pr-3 rounded-full shadow-md hover:brightness-110 transition-all duration-300 btn-gradient-border">
              Expire:{" "}
              <span className="text-black font-semibold">28-Oct-2025</span>
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full hidden sm:block max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[260px] 2xl:max-w-[280px]">
          <img
            src={heroImage}
            alt="Welcome graphic illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
