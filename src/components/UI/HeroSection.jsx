import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="mx-auto ">
      <section className="relative  text-white overflow-hidden ">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1
                className="w-full max-w-[90%] md:max-w-[80%] text-4xl md:text-5xl lg:text-6xl font-[Anton] 
    mb-6 leading-snug sm:leading-normal bg-gradient-to-r from-teal-200 to-white text-transparent 
    bg-clip-text drop-shadow-lg tracking-wide transform origin-left scale-x-120 "
              >
                Evolving
                <br />
                Intelligence &<br />
                Innovation
              </h1>

              <p className="text-base min-[375px]:text-lg sm:text-lg md:text-xl lg:text-2xl font-medium text-white brightness-200 drop-shadow-lg mix-blend-screen mb-6 sm:mb-8 tracking-wide">
                Built for What’s Next,
                <br />
                Fast and Adaptable
              </p>

              <div className="flex flex-row flex-wrap justify-center md:justify-start space-y-0 sm:space-x-4 gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-teal-400 to-blue-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-xl text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
