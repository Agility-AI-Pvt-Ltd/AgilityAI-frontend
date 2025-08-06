import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { server } from "../main";
import axios from "axios";
import Spinner from "../components/UI/Spinner";

const Careers = () => {
  const navigate = useNavigate();
  const [jobListings, setjobListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const { data } = await axios.get(`${server}/api/joblistings`);
      setjobListings(data);
      setLoading(false);
    } catch (err) {
      // console.error("Error fetching jobs:", err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
            Join{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're looking for talented individuals to help us shape the future.
            Explore our current opportunities and find your perfect role.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="mt-12">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Spinner />
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {jobListings.map((job, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 min-h-[420px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/30"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

                  <div className="relative z-10">
                    {/* Job Title */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-lg font-medium">
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            💡
                          </span>
                        </div>
                        <h5 className="text-xl font-semibold text-white">
                          Skills Required
                        </h5>
                      </div>

                      <div className="max-h-[140px] overflow-y-auto custom-scrollbar">
                        {job.skills.length > 0 ? (
                          <div className="grid grid-cols-1 gap-2">
                            {job.skills.map((skill, skillIndex) => (
                              <div
                                key={skillIndex}
                                className="flex items-center gap-3 p-2 rounded-lg bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 group-hover:border-cyan-500/30 transition-all duration-300"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                                <span className="text-slate-200 font-medium">
                                  {skill}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-slate-400 italic text-center py-4">
                            No specific skills mentioned
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="relative z-10 mt-auto">
                    <button
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                      onClick={() => navigate(`/jobs/${job._id}`)}
                    >
                      {/* Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      <span className="relative flex items-center justify-center gap-2">
                        Apply Now
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                  <div className="absolute bottom-20 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #2563eb);
        }
      `}</style>
    </section>
  );
};

export default Careers;
