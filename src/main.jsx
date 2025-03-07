import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";
import { CourseContextProvider } from './context/CourseContext.jsx';
import { WebinarContextProvider } from "./context/WebinarsContext";
import { ProjectsContextProvider } from './context/ProjectContext.jsx';

export const server = "https://agility-server.onrender.com";


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CourseContextProvider>
      <WebinarContextProvider>
        <ProjectsContextProvider>
          <App />
        </ProjectsContextProvider>
      </WebinarContextProvider>
    </CourseContextProvider>
  </AuthProvider>,
)
