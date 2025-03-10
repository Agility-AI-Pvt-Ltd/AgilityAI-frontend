import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";

const WebinarsContext = createContext();

export const WebinarContextProvider = ({ children }) => {
  const [webinars, setWebinars] = useState([]);
  const [recordings, setRecordings] = useState([]);

  const [webinarsloading , setWebinarsloading] = useState(false);
  const [recordingsloading , setRecordingsloading] = useState(false);
  

  const fetchWebinars = async () => {
    setWebinarsloading(true);
    try {
      const { data } = await axios.get(`${server}/api/webinar/all`);
      setWebinars(data.webinars);
    } catch (error) {
      console.log(error);
    } finally{
      setWebinarsloading(false);
    }
  };

  const fetchRecordings = async () => {
    setRecordingsloading(true);
    try {
      const { data } = await axios.get(`${server}/api/recording/all`);
      setRecordings(data.recordings);
    } catch (error) {
      console.log(error);
    } finally{
      setRecordingsloading(false);
    }
  };

  useEffect(() => {
    fetchWebinars();
    fetchRecordings();
  }, []);

   return (
    <WebinarsContext.Provider value={{ webinars, fetchWebinars, recordings , fetchRecordings , webinarsloading, recordingsloading }}>
      {children}
    </WebinarsContext.Provider>
  );
};

 
export const WebinarsData = () => useContext(WebinarsContext);
