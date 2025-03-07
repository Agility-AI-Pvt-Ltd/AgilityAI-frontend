import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";

const WebinarsContext = createContext();

export const WebinarContextProvider = ({ children }) => {
  const [webinars, setWebinars] = useState([]);
  const [recordings, setRecordings] = useState([]);

  const fetchWebinars = async () => {
    try {
      const { data } = await axios.get(`${server}/api/webinar/all`);
      setWebinars(data.webinars);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecordings = async () => {
    try {
      const { data } = await axios.get(`${server}/api/recording/all`);
      setRecordings(data.recordings);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWebinars();
    fetchRecordings();
  }, []);

   return (
    <WebinarsContext.Provider value={{ webinars, fetchWebinars, recordings , fetchRecordings }}>
      {children}
    </WebinarsContext.Provider>
  );
};

 
export const WebinarsData = () => useContext(WebinarsContext);
