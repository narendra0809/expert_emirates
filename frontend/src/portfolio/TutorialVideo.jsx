import React from 'react';

const TutorialVideo = () => {
  return (
    <div className="bg-black flex items-center justify-center px-4 py-4 sm:py-6 md:py-10">
      <div className="w-full max-w-7xl relative rounded-xl shadow-lg overflow-hidden">
        <iframe
          className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Expert Emirates Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TutorialVideo;
