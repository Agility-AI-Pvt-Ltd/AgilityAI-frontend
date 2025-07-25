import React from "react";

const founders = [
  {
    name: "Sharad Raj Ustav",
    role: "Founder & CEO",
    image: "/founders/sharad_sir.svg",
    linkedin: "https://www.linkedin.com/in/sharadrajutsav/",
  },
  {
    name: "Shreya Sinha",
    role: "Co-Founder",
    image: "/founders/shreya_maam.svg",
    linkedin: "https://www.linkedin.com/in/shreya-sinha2802/",
  },
  {
    name: "CA Saurabh Jain",
    role: "Co-Founder",
    image: "/founders/saurabh_sir.svg",
    linkedin: "https://www.linkedin.com/in/ca-saurabh-jain-8a014034/",
  },
];

const Founders = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="w-full flex justify-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
          People behind{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
            this Vision
          </span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-8">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 flex flex-col items-center text-center bg-blue-50 hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-56 h-56 object-contain mb-4 rounded-xl"
            />
            <p className="text-sm font-medium text-gray-600">{founder.role}</p>
            <div className="flex items-center gap-1 mt-1">
              <h3 className="text-xl font-bold text-gray-900">
                {founder.name}
              </h3>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 -ml-2"
              >
                <img
                  src="/LinkedIn-Icon-Logo.wine.svg"
                  alt="LinkedIn"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
