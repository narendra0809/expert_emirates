
import React, { useState } from "react";

const faqs = [
  {
    question: "Do you offer the MT5 Trading Platform?",
    answer:
      "Yes, Expert Emirates provides MT5 trading across our Standard, Pro, and ECN trading accounts, offering enhanced features and advanced trading tools.",
  },
  {
    question: "How can I trade on MT5 with Expert Emirates?",
    answer: "You can trade on MT5 by opening an account with Expert Emirates and downloading the MT5 platform.",
  },
  {
    question: "What features will I get with the MT5 platform at Expert Emirates?",
    answer: "You will get advanced charting, multiple order types, indicators, and fast execution with Expert Emirates' MT5.",
  },
  {
    question: "I need more trading tools. Can my MT5 trading account with Expert Emirates provide that?",
    answer: "Yes, MT5 at Expert Emirates supports advanced tools including Expert Advisors (EAs), VPS hosting, and more.",
  },
  {
    question: "Do you offer social trading with an MT5 account?",
    answer: "Currently, social trading is available through third-party integrations compatible with MT5 accounts.",
  },
  {
    question: "Can I trade on MT5 with my existing MT4 account?",
    answer: "MT4 and MT5 accounts are separate. You will need to create an MT5 account for MT5 trading.",
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
