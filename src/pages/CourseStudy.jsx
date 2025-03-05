import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CourseData } from '../context/CourseContext';
import { useAuth } from '../context/AuthContext';
import { server } from '../main';


const CourseStudy = () => {
    const params = useParams();
    const {fetchCourse , course} = CourseData();
    const {user ,role} = useAuth();
    const navigate = useNavigate();

    if(user && role !== "admin" && !user.subscription.includes(params.id)) return navigate('/courses');


    useEffect(()=>{
        fetchCourse(params.id);
    })
  return (
    course && (
        <div className="py-12  text-white flex flex-col items-center min-h-[80vh]">
          <img 
            src={`${server}/${course.image}`} 
            alt={course.title} 
            width={350} 
            className="rounded-lg shadow-lg"
          />
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
        </div>
      )
  )
}

export default CourseStudy
