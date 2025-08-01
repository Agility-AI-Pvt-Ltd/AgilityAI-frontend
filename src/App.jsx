import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import Newsfeed from "./pages/Newsfeed";
import AIAcademy from "./pages/AIacademy";
import TermsOfService from "./pages/TermsOfService";
import Policy from "./pages/Policy";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Account from "./pages/Account";
import Courses from "./pages/Courses";
import CourseDescription from "./pages/CourseDescription";
import { useAuth } from "./context/AuthContext";
import PaymentSuccess from "./pages/PaymentSuccess";
import Dashboard from "./pages/Dashboard";
import CourseStudy from "./pages/CourseStudy";
import Lecture from "./pages/Lecture";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminEnquiries from "./pages/admin/AdminEnquiries";
import AdminJobListings from "./pages/admin/AdminJobListings";
import AdminJobApplications from "./pages/admin/AdminJobApplications";
import AdminProjects from "./pages/admin/AdminProjects";

import Webinar from "./pages/Webinar";
import AdminWebinar from "./pages/admin/AdminWebinar";
import AdminWebinarListing from "./pages/admin/AdminWebinarListing";
import AdminRecording from "./pages/admin/AdminRecording";
import Projects from "./pages/Projects";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Assignment from "./pages/Assignment";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import Founders from "./pages/Founders";
import { useEffect, useState } from "react";
import IntroVideoModal from "./IntroVideoModal";

const App = () => {
  const { token, user } = useAuth();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("introVideoLastShown");
    const now = Date.now();
    const ONE_HOUR = 60 * 60 * 1000;

    if (!lastShown || now - parseInt(lastShown) > ONE_HOUR) {
      setShowVideo(true);
      localStorage.setItem("introVideoLastShown", now.toString());
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about/company",
          element: <About />,
        },
        {
          path: "/about/advisory-board",
          element: <AdvisoryBoard />,
        },
        {
          path: "about/founders",
          element: <Founders />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "AIacademy",
          element: <AIAcademy />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "/jobs/:jobId",
          element: <JobDetails />,
        },
        {
          path: "/newsfeed",
          element: <Newsfeed />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/course/:id",
          element: token ? <CourseDescription user={user} /> : <Login />,
        },
        {
          path: "/payment-success/:id",
          element: token ? <PaymentSuccess /> : <Login />,
        },
        {
          path: "/:id/dashboard",
          element: token ? <Dashboard /> : <Login />,
        },
        {
          path: "/course/study/:id",
          element: token ? <CourseStudy /> : <Login />,
        },
        {
          path: "/lectures/:id",
          element: token ? <Lecture /> : <Login />,
        },
        {
          path: "/assignments/:id",
          element: token ? <Assignment /> : <Login />,
        },
        {
          path: "/webinar/:ROOM_ID",
          element: <Webinar />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },

        {
          path: "/termsofservice",
          element: <TermsOfService />,
        },
        {
          path: "/privacy-policy",
          element: <Policy />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password/:token",
      element: <ResetPassword />,
    },
    {
      path: "/admin/dashboard",
      element: token ? <AdminDashboard /> : <Login />,
    },
    {
      path: "/admin/course",
      element: token ? <AdminCourses /> : <Login />,
    },
    {
      path: "/admin/users",
      element: token ? <AdminUsers /> : <Login />,
    },
    {
      path: "/admin/enquiries",
      element: token ? <AdminEnquiries /> : <Login />,
    },
    {
      path: "/admin/joblistings",
      element: token ? <AdminJobListings /> : <Login />,
    },
    {
      path: "/admin/jobapplications",
      element: token ? <AdminJobApplications /> : <Login />,
    },
    {
      path: "/admin/webinarlisting",
      element: token ? <AdminWebinarListing /> : <Login />,
    },
    {
      path: "/admin/recordings",
      element: token ? <AdminRecording /> : <Login />,
    },
    {
      path: "/admin/projects",
      element: token ? <AdminProjects /> : <Login />,
    },
    {
      path: "/admin/webinar/:ROOM_ID",
      element: token ? <AdminWebinar /> : <Login />,
    },
  ]);

  return (
    <>
      {showVideo && <IntroVideoModal onClose={() => setShowVideo(false)} />}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
