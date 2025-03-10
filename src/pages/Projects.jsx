import ProjectCard from '../components/UI/ProjectCard';
import { ProjectsData } from '../context/ProjectContext';

const Projects = () => {
    const { projects } = ProjectsData();
    

    return (
        <div className="max-w-7xl mx-auto pt-2 px-6 mt-12 min-h-screen">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-3 tracking-wide">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
                    Projects
                </span>
            </h2>

            {/* Changed grid to flex for full-width cards */}
            <div className="flex flex-wrap justify-center gap-9 mt-9">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
