import React from 'react'
import { CourseData } from '../context/CourseContext'
import CourseCard from '../components/UI/CourseCard';

const Dashboard = () => { 
    const { mycourse } = CourseData();

    return (
        <div className="max-w-7xl mx-auto pt-2 px-6 mt-12 text-center text-white">
            <h2 className="text-3xl font-semibold mb-6">All Enrolled Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mycourse && mycourse.length > 0 ? (
                    mycourse.map((course) => <CourseCard key={course._id} course={course} />)
                ) : (
                    <p className="text-lg text-gray-400">No course enrolled yet</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard
