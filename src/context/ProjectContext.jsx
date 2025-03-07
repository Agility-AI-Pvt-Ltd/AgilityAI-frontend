import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";

const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const { data } = await axios.get(`${server}/api/projects/all`);
            setProjects(data.project);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

   return (
    <ProjectsContext.Provider value={{ projects, fetchProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

 
export const ProjectsData = () => useContext(ProjectsContext);
