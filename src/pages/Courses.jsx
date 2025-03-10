import React from "react";
import { CourseData } from "../context/CourseContext";
import CourseCard from "../components/UI/CourseCard";
import Spinner from "../components/UI/Spinner";

const Courses = () => {
  const { courses, loading } = CourseData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <h2 className="text-3xl font-bold dark:text-white mb-8 text-center">
        Available Courses
      </h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Spinner/>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses && courses.length > 0 ? (
            courses.map((e) => (
              <div key={e._id} className="flex justify-center">
                <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-xs lg:max-w-sm bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                  <CourseCard course={e} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-300 col-span-full text-lg">
              No Courses Available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Courses;
