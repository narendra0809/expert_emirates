const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-full">
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid rgba(218, 165, 32, 0.3)",
          borderTop: "5px solid #daa520",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
