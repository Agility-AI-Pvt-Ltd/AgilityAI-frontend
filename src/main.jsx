import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./context/AuthContext";
import { CourseContextProvider } from './context/CourseContext.jsx';

export const server = "http://localhost:5000";


createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <CourseContextProvider>
      <App />
    </CourseContextProvider>
  </AuthProvider>,
)
