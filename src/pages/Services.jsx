import React from "react";
import { features } from "../constants";

const projects = [
  {
    title: "Fairly Settled – AI-Powered Legal Dispute Resolution",
    description:
      "Fairly Settled is Agility AI’s flagship legal-tech platform built for lawyers and legal professionals. It uses AI to analyze case laws, generate drafts, and streamline arbitration workflows.",
    liveLink: "https://fairlysettled.com", // ← Replace with real link
  },
  {
    title: "Edumaniax – Gamified Learning for Future-Ready Students",
    description:
      "Edumaniax is an interactive platform offering gamified modules in finance, law, communication, and coding. It helps students learn through challenges aligned with NEP 2020.",
    liveLink: "https://edumaniax.com", // ← Replace with real link
  },
  {
    title: "Invoicing Tool for Chartered Accountants",
    description:
      "A powerful AI solution automating invoice processing using OCR and NLP. It ensures GST compliance, integrates with accounting systems, and delivers real-time analytics.",
    // liveLink: "https://invoicingtool.ai", // ← Replace with real link
  },
  {
    title: "OCR-Based Answer Sheet Evaluation Tool",
    description:
      "Designed for educational institutions, this OCR tool reads and scores handwritten answer sheets with AI-trained human-like evaluation for consistency and efficiency.",
    // liveLink: "https://ocrevaluator.com", // ← Replace with real link
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading Section */}
      <div className="text-center py-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
          What{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
            We Do
          </span>
        </h2>
      </div>

      {/* Features Section */}
      <section className="text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap mx-4 justify-center">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
                <div className="group bg-gray-800 p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-full transition duration-300 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500 hover:scale-[1.03]">
                  <div className="flex h-12 w-12 mb-4 bg-blue-600 text-white justify-center items-center rounded-full transition duration-300 group-hover:bg-white group-hover:text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.text}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="text-white py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-2">
            Explore our real-world AI solutions
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-xl shadow-lg overflow-hidden transition duration-300 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-500 hover:scale-[1.03]"
            >
              {/* Header Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-4 flex items-center gap-4">
                {index === 0 && (
                  <img
                    src="/fairlySettledLogo.jpg"
                    alt="Fairly Settled Logo"
                    className="h-16 w-16 object-contain rounded-xl shadow-md"
                  />
                )}
                {index === 1 && (
                  <img
                    src="/EduManiaxLogo.png"
                    alt="EduManiax Logo"
                    className="h-16 w-16 object-contain rounded-xl shadow-md"
                  />
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
                  {project.title}
                </h3>
              </div>

              {/* Description & Button */}
              <div className="p-6">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm px-4 py-2 bg-teal-400 text-black font-semibold rounded hover:bg-teal-300 transition"
                  >
                    Have a Look →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
