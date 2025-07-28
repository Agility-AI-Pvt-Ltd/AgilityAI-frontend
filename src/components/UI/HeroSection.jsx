import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-screen h-screen text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bgVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl w-full px-4">
          <div className="w-full flex justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[Anton] leading-tight bg-gradient-to-r from-teal-200 to-white text-transparent bg-clip-text drop-shadow-lg tracking-wide text-center mx-auto px-4">
              Evolving Intelligence & Innovation
            </h1>
          </div>

          <div className="w-full flex justify-center">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white drop-shadow-lg mix-blend-screen mt-4 tracking-wide text-center mx-auto px-4">
              Built for What’s Next, Fast and Adaptable
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
