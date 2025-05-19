import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { server } from '../main';
import Spinner from '../components/UI/Spinner';


const CourseStudy = () => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const { user, role } = useAuth();
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);


  if (user && role !== "admin" && !user.subscription.includes(params.id)) return navigate('/courses');


  useEffect(() => {
    fetchCourse(params.id);
  })
  return (
    course && (
      <div className="py-12  text-white flex flex-col items-center min-h-[80vh]">

<div className="relative w-[350px] h-[200px] flex justify-center items-center">
        {/* Spinner while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <Spinner />
          </div>
        )}
        <img
          src={`${course.image}`}
          alt={course.title}
          width={350}
          height={200} 
          className={`rounded-lg shadow-lg transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)} // Mark as loaded when image loads
        />
      </div>




        <h2 className="text-2xl font-semibold text-[#70FCEF]">{course.title}</h2>
        <h4 className="text-xl text-[#70FCEF]">{course.description}</h4>
        <h5 className="text-lg text-[#70FCEF] mt-2">by - {course.createdBy}</h5>
        <h5 className="text-lg text-[#70FCEF] mt-2">Duration - {course.duration} weeks</h5>
        <Link
          to={`/lectures/${course._id}`}
          className="mt-4 px-4 py-2 bg-white text-black rounded-lg border border-gray-400 hover:bg-gray-200 transition"
        >
          <h2 className="text-lg font-semibold">Lectures</h2>
        </Link>

        <Link
          to={`/assignments/${course._id}`}
          className="mt-2 px-4 py-2 bg-white text-black rounded-lg border border-gray-400 hover:bg-gray-200 transition"
        >
          <h2 className="text-lg font-semibold">Assignments</h2>
        </Link>
      </div>
    )
  )
}

export default CourseStudy
