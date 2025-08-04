const NotFound = () => {
  const goHome = () => (window.location.href = "/");

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center font-sans">
      <div className="text-7xl mb-4 text-yellow-400 drop-shadow-lg">🪙</div>
      <h1 className="text-4xl font-bold mb-2 tracking-wide text-yellow-600">
        404 – Page Not Found
      </h1>
      <p className="text-lg text-yellow-100 mb-8">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
        <br />
        Let&#39;s get you back on track!
      </p>
      <button
        className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 font-semibold rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-400 transition-all focus:outline-none"
        onClick={goHome}
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
