import React, { useState } from "react";

const faqs = [
  {
    question: "Do you offer the MT4 Trading Platform?",
    answer:
      "Yes, Expert Emirates provides MT4 trading across our Standard, Pro, and ECN trading accounts.",
  },
  {
    question: "How can I trade on MT4 with Expert Emirates?",
    answer:
      "You can trade by opening an account, downloading MT4, and logging in using your credentials.",
  },
  {
    question: "What features will I get with the MT4 platform at Expert Emirates?",
    answer:
      "You get real-time quotes, advanced charting tools, EAs, and fast execution.",
  },
  {
    question: "How can I download the Expert Emirates trading app?",
    answer:
      "Visit our website or the Play Store/App Store and search 'Expert Emirates'.",
  },
  {
    question: "Do you offer social trading with an MT4 account?",
    answer:
      "Yes, social trading is available through our MT4 plugin integration.",
  },
  {
    question: "Can I trade on MT4 with my existing MT5 real account?",
    answer:
      "No, MT4 and MT5 accounts are separate. You need to open an MT4-specific account.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 px-4 font-[Poppins] text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <h2 className="text-center font-semibold text-[28px] md:text-[32px] leading-[42px] tracking-[0.12em] mb-10">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-[35px] transition-all duration-300"
            style={{ backgroundColor: "#121117" }}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-5 md:px-6 py-5 flex justify-between items-center text-white text-left font-medium text-sm sm:text-base"
            >
              {/* Perfectly aligned diamond + question */}
              <span className="flex items-center gap-2 text-left">
                <span className="text-blue-400 text-sm">◆</span>
                {faq.question}
              </span>

              {/* Arrow rotating up/down */}
              <span
                className={`ml-4 transition-transform duration-300 w-2.5 h-2.5 border-b-2 border-r-2 border-white transform ${
                  openIndex === index ? "rotate-[-135deg]" : "rotate-45"
                }`}
              ></span>
            </button>

            <div
              className={`transition-all duration-300 px-5 md:px-6 text-gray-300 text-sm overflow-hidden ${
                openIndex === index ? "max-h-[500px] py-3" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
