export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex flex-col items-center font-poppins">
      <div className="mt-10 max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy&nbsp;
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #281000 0%, #C0971C 25%, #FFE976 50%, #C0971C 75%, #281000 100%)",
            }}
          >
            Policy
          </span>
        </h1>
        <div className="bg-[#1d1b25] rounded-2xl p-8 shadow-lg space-y-6 text-base leading-relaxed">
          <p>
            At{" "}
            <span className="text-[#FFE976] font-semibold">
              Expert Emirates
            </span>
            , your privacy is important to us. This Privacy Policy explains what
            information we collect, how we use it, and your rights regarding
            your personal data.
          </p>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            Information We Collect
          </h2>
          <ul className="list-disc list-inside ml-2">
            <li>
              Personal identification information (Name, email, phone, etc.)
            </li>
            <li>Usage data (pages visited, actions on site, etc.)</li>
            <li>Cookies and tracking data</li>
          </ul>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside ml-2">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our services</li>
            <li>To allow participation in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather valuable analytics</li>
          </ul>
          <h2 className="text-xl font-bold" style={{ color: "#FFE976" }}>
            Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            For requests, contact us at{" "}
            <span className="underline text-[#C0971C]">
              support@experemirates.com
            </span>
            .
          </p>
          <p>
            We regularly review this policy to ensure it meets legal and ethical
            standards. Any updates will be posted to this page.
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
