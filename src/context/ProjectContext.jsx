import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";

const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading , setLoading] = useState(false);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${server}/api/projects/all`);
            setProjects(data.project);
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

   return (
    <ProjectsContext.Provider value={{ projects, fetchProjects , loading}}>
      {children}
    </ProjectsContext.Provider>
  );
};

 
export const ProjectsData = () => useContext(ProjectsContext);
