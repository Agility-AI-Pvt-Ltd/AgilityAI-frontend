import React from "react";
import { server } from "../../main";
import { useAuth } from "../../context/AuthContext";
import { ProjectsData } from "../../context/ProjectContext";
import axios from "axios";


const ProjectCard = ({ project }) => {
  const { user, role } = useAuth();
  const { fetchProjects } = ProjectsData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        const response = await axios.delete(`${server}/api/projects/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        alert(response?.data?.message || "Project deleted successfully.");
        await fetchProjects();
      } catch (error) {
        console.error("Delete error:", error);
        alert(error.response?.data?.message || "Failed to delete Project.");
      }
    }
  };


  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-stretch bg-[#0F172A] bg-opacity-80 rounded-2xl overflow-hidden shadow-lg transition-transform transform shadow-cyan-500/50 backdrop-blur-lg w-full max-w-6xl min-h-[25rem]">
      {/* Image Section */}
      <div className="w-full md:w-[40%] flex-shrink-0 overflow-hidden">
        <img
          src={`${server}/${project.image}`}
          alt="Project Cover"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 md:w-[60%] flex flex-col">
        {/* Title */}
        <h2 className="text-cyan-400 text-3xl font-bold font-orbitron text-center">
          {project.title}
        </h2>

        {/* Description with controlled spacing */}
        <p className="text-gray-300 text-lg mt-1 mb-4 md:mb-0 max-h-[14rem] overflow-y-auto w-full flex-grow">
          {project.description}
        </p>

        {/* Button Section */}
        <div className="mt-auto flex justify-center gap-4 flex-wrap">
          {/* Try It Now Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#4EE4E4] to-[#1E88E5] text-white font-bold 
               uppercase text-lg rounded-full transition-transform duration-300 hover:-translate-y-1 
               hover:shadow-lg"
          >
            <i className="fab fa-github mr-2"></i> Try It Now!
          </a>

          {/* Delete Button (Visible only for Admins) */}
          {user && role === "admin" && (
            <button
              className="px-6 py-3 bg-red-600 text-white font-bold uppercase text-lg 
                 rounded-full transition-transform duration-300 hover:-translate-y-1 
                 hover:shadow-lg"
              onClick={() => deleteHandler(project._id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;

