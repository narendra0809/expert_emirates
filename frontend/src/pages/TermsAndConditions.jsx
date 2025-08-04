import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center font-poppins">
      <div className="mt-10 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms&nbsp;
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #281000 0%, #C0971C 25%, #FFE976 50%, #C0971C 75%, #281000 100%)",
            }}
          >
            & Conditions
          </span>
        </h1>
        <div className="bg-[#1d1b25] rounded-2xl p-8 shadow-lg space-y-6 text-base leading-relaxed">
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            1. Introduction
          </h2>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of{" "}
            <span className="text-[#FFE976] font-semibold">Exper Emirates</span>
            's website.
          </p>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            2. Acceptance of Terms
          </h2>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use this site if you do not agree to
            all the terms and conditions stated on this page.
          </p>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            3. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, Exper Emirates and/or its licensors own the
            intellectual property rights for all material on the site. All
            intellectual property rights are reserved.
          </p>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            4. Restrictions
          </h2>
          <ul className="list-disc list-inside ml-2">
            <li>You must not republish material without permission</li>
            <li>You must not sell, rent, or sub-license material</li>
            <li>You must not use the website contrary to applicable laws</li>
          </ul>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            5. Limitation of Liability
          </h2>
          <p>
            Exper Emirates shall not be held liable for any damages arising out
            of or in connection with your use of this website.
          </p>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            6. Changes to Terms
          </h2>
          <p>
            We reserve the right to revise these terms at any time. By using our
            website you are expected to review these terms regularly.
          </p>
          <p>
            <span className="font-bold" style={{ color: "#FFE976" }}>
              Effective Date:
            </span>{" "}
            August 4, 2025
          </p>
        </div>
      </div>
    </div>
  );
}
