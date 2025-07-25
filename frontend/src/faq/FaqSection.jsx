import React, { useState } from "react";
import FeatureSection from "../homepage/FeatureSection";

const faqData = [
  {
    question: "How do I join the Expert Emirates team?",
    answer:
      "Simply visit our Careers page, find a role that suits you, and submit your application!",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We support multiple options, including bank transfers, credit cards, and cryptocurrencies.",
  },
  {
    question: "Can beginners apply?",
    answer:
      "Yes! We welcome all levels of experience and provide training to help you grow.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We provide demo accounts and training sessions to help you get started.",
  },
  {
    question: "Which trading platform do you recommend?",
    answer:
      "Our team uses and recommends industry-leading platforms like MetaTrader 4/5.",
  },
  {
    question: "Do you offer mentorship or training?",
    answer:
      "Yes! We provide in-depth training, webinars, and one-on-one mentorship.",
  },
  {
    question: "How often do you post job openings?",
    answer:
      "We update our open positions regularly, so keep an eye on our Careers page.",
  },
  {
    question: "What makes Expert Emirates different?",
    answer:
      "We focus on innovation, growth, and a supportive team environment, making sure our employees thrive.",
  },
  {
    question: "How can I track my application status?",
    answer:
      "Our HR team will contact shortlisted candidates. You can also follow up via email.",
  },
  {
    question: "Can I apply for remote positions?",
    answer:
      "Yes! Some of our roles offer remote or hybrid work options.",
  },
  {
    question: "Do you offer account management services?",
    answer:
      "Yes, we offer professional account management services to help you optimize your trading portfolio. Our experienced managers will handle your trades, ensuring that your investments are managed with the highest level of expertise.",
  },
  {
    question: "What trading platforms should I use?",
    answer:
      "We recommend using MetaTrader 5 (MT5), which is known for its advanced features and robust performance. However, we also support other popular platforms. For a detailed guide on the best platforms, visit our Trading Platforms page.",
  },
  {
    question: "What time do you send trading alerts?",
    answer:
      "Trading alerts are sent out at key market hours, typically between 8:00 AM and 4:00 PM GMT. You can customize your alert preferences in your account settings.",
  },
  {
    question: "Why do your alerts have 3 take profit levels?",
    answer:
      "Our alerts include 3 take profit levels to provide flexibility and help you manage your risk effectively. This strategy allows you to lock in profits at different stages, depending on your risk tolerance and trading goals.",
  },
  {
    question: "How can I trust your group?",
    answer:
      "Trust is our top priority. We are regulated by leading financial authorities and have a proven track record of success. You can read testimonials from satisfied clients and explore our transparent performance history on our Trust and Security page.",
  },
  {
    question: "How can I change my subscription plan?",
    answer:
      'You can easily change your subscription plan by logging into your account and navigating to the "Subscription" section. Choose the plan that best fits your needs and follow the prompts to complete the change.',
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      'To cancel your subscription, log into your account, go to the "Subscription" section, and select the "Cancel Subscription" option. We will process your request promptly, and you can continue to use our services until the end of your current billing cycle.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 lg:px-10 py-28">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6"
          style={{
            fontFamily: "Poppins",
            letterSpacing: "0.1em",
          }}
        >
          Frequently Asked Questions (FAQ)
        </h2>

        <p className="text-center text-gray-400 mb-10 text-sm md:text-base">
          Quick answers to help you get onboard
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`rounded-full sm:rounded-3xl md:rounded-[30px] ${
                openIndex === index ? "bg-gray-800" : "bg-[#121117]"
              } px-5 sm:px-6 py-4 border border-[#2c2b30] overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96" : "max-h-[60px]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center"
              >
                <span className="flex items-center text-sm sm:text-base font-medium">
                  <span className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] mr-3 rounded-sm"></span>
                  {faq.question}
                </span>
                <span
                  className={`ml-4 transform transition-transform duration-300 w-2.5 h-2.5 border-t-2 border-r-2 border-gray-500 ${
                    openIndex === index ? "rotate-135" : "rotate-45"
                  }`}
                ></span>
              </button>

              <div
                className={`mt-4 text-gray-300 text-sm sm:text-base transition-opacity duration-300 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <FeatureSection />
        </div>
      </div>
    </section>
  );
}
