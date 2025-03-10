import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import { useAuth } from "./AuthContext";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState([]);
  const [mycourse, setMyCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();


  const fetchCourses = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/course/all`);
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); 
    }
  }

  const fetchMyCourse = async () => {
    try {
      const { data } = await axios.get(`${server}/api/mycourse`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      setMyCourse(data.courses);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCourses();

    if (user) {
      fetchMyCourse();
    }
  }, [])

  const fetchCourse = async (id) => {
    try {
      const { data } = await axios.get(`${server}/api/course/${id}`);
      setCourse(data.course);

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <CourseContext.Provider value={{ courses, fetchCourses, fetchCourse, course, mycourse, fetchMyCourse , loading }}>
      {children}
    </CourseContext.Provider>
  )
}

export const CourseData = () => useContext(CourseContext);