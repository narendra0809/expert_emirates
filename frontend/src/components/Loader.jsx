const Loader = ({ width = 20, height = 20 }) => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-full">
      <div
        style={{
          width: width,
          height: height,
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
