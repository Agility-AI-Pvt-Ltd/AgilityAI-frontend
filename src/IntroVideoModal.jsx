import React, { useEffect, useRef } from "react";

const IntroVideoModal = ({ onClose }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.addEventListener("ended", onClose);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", onClose);
      }
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/LandingVideo.mp4" // make sure it's in /public folder
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
};

export default IntroVideoModal;
