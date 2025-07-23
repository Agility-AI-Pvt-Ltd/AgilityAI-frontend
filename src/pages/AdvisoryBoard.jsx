import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Former IAS. Former MD & CEO at NCDEX. Chairman of the Board at National Commodity Clearing Limited.",
    name: "Sri R Ramaseshan",
    designation: "",
    src: "/advisory/R_Ramaseshan_sir.jpg",
  },
  {
    quote:
      "Assistant Professor at IRMA. Consultant to various government departments for over a decade.",
    name: "Prof. Aashish Argade",
    designation: "PhD from IIM Ahmedabad",
    src: "/advisory/aashish-argade.jpeg",
  },
  {
    quote:
      "Professor at IIT Roorkee. PhD from IIM Ahmedabad. BTech from IIT Bombay.",
    name: "Prof. Sumit Kumar Yadav",
    designation: "",
    src: "/advisory/Sumit Kumar Yadav.jpeg",
  },
  {
    quote:
      "Vice-Chancellor, NUSRL, Ranchi. Chair Professor, Chair of Consumer Law and Practice, NLSIU.",
    name: "Prof. (Dr.) Ashok R. Patil",
    designation: "",
    src: "/advisory/Prof_Ashok_R_Patil.jpg",
  },
  {
    quote:
      "Chief Information Security Officer at Nykaa. Cyber Security Transformation Evangelist at Indian Navy. Former Group CISO at Zee Entertainment Enterprises Ltd.",
    name: "Cdr Praveen Kumar",
    designation: "",
    src: "/advisory/Cdr_Praveen_kumar.jpg",
  },
];

const AdvisoryBoard = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 150);
    }
  };

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setIsAnimating(false);
      }, 150);
    }
  };

  const goToSlide = (slideIndex) => {
    if (!isAnimating && slideIndex !== index) {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex(slideIndex);
        setIsAnimating(false);
      }, 150);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(next, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section className="py-20 px-4 md:px-16 bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-tight">
            Advisory Board of{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 text-transparent bg-clip-text animate-pulse">
              AgilityAI
            </span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main card */}
          <div
            className={`bg-gradient-to-br from-white to-gray-50 text-black rounded-3xl shadow-2xl p-8 md:p-12 text-center transition-all duration-500 ease-out transform ${
              isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"
            } hover:shadow-3xl hover:-translate-y-2`}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            {/* Profile image with glow effect */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-30 scale-110"></div>
              <img
                src={testimonials[index].src}
                alt={testimonials[index].name}
                className="relative w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
                {testimonials[index].name}
              </h3>

              {testimonials[index].designation && (
                <p className="text-lg text-blue-600 font-semibold italic">
                  {testimonials[index].designation}
                </p>
              )}

              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                  {testimonials[index].quote}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => {
              prev();
              startAutoSlide();
            }}
            className="absolute -left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-300 z-10"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() => {
              next();
              startAutoSlide();
            }}
            className="absolute -right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-300 z-10"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                goToSlide(i);
                startAutoSlide();
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 scale-125 shadow-lg"
                  : "bg-gray-400 hover:bg-gray-300 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300"
              style={{ width: `${((index + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
