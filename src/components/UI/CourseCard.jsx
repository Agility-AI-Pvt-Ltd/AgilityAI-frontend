import React from "react";
import { server } from "../../main";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course }) => {
    const { user, token, role } = useAuth();
    const navigate = useNavigate();

    const { fetchCourses } = CourseData();

    const deleteHandler = async(id)=>{
        if(confirm("Are you sure you want to delete this course")){
            try{
                const {data} = await axios.delete(`${server}/api/course/${id}`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                
                alert(data.message);
                fetchCourses();
            }catch(error){
                alert(error.response.data.message);
            }
        }
    }
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-5 rounded-lg text-center w-72 mx-auto">
            <img
                src={`${server}/${course.image}`}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {course.title}
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">Instructor:</span> {course.createdBy}
            </p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">Duration:</span> {course.duration} hours
            </p>
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-4">
                <span className="font-semibold text-gray-900 dark:text-white">Price:</span> ₹{course.price}
            </p>

            {/* Conditional Rendering Based on Authentication */}
            {token ? (
                <>
                    {user && role !== "admin" ? (
                        user.subscription.includes(course._id) ? (
                            // If the course is already purchased
                            <button
                                onClick={() => navigate(`/course/study/${course._id}`)}
                                className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                            >
                                Study
                            </button>
                        ) : (
                            // If the course is not purchased yet
                            <button
                                onClick={() => navigate(`/course/${course._id}`)}
                                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                            >
                                Get Started
                            </button>
                        )
                    ) : (
                        // If the user is an admin
                        <button
                            onClick={() => navigate(`/course/study/${course._id}`)}
                            className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                        >
                            Study
                        </button>
                    )}
                </>
            ) : (
                // If the user is not logged in
                <button
                    onClick={() => navigate("/login")}
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Get Started
                </button>
            )}

            <br />

            {/* Delete Course - Only for Admin */}
            {user && role === "admin" && (
                <button
                    className="w-full mt-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                    onClick={()=>deleteHandler(course._id)}
                >
                    Delete
                </button>
            )}
        </div>
    );
};

export default CourseCard;
