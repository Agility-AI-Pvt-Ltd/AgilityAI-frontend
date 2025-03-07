import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import ScrollToTop from "../UI/ScrollToTop";

export const AppLayout = () => {
    return (
      <>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    );
  };