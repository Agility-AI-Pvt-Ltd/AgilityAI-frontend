import ProjectCard from '../components/UI/ProjectCard';
import { ProjectsData } from '../context/ProjectContext';
import Spinner from '../components/UI/Spinner';

const Projects = () => {
    const { projects, loading } = ProjectsData();


    return (
        <div className="max-w-7xl mx-auto pt-2 px-6 mt-12 min-h-screen">

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-3 tracking-wide">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
                    Offerings
                </span>
            </h2>

            
            {
                loading ?
                    <div className="flex justify-center items-center min-h-[200px]">
                        <Spinner />
                    </div> :
                    <div className="flex flex-wrap justify-center gap-9 mt-9">
                        {projects.map((project) => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
                    </div>
            }

        </div>
    );
};

export default Projects;
