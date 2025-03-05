import React from 'react'
import { CourseData } from '../context/CourseContext'
import CourseCard from '../components/UI/CourseCard';

const Dashboard = () => {
    const { mycourse } = CourseData();

    return (
        <div className="py-20 min-h-[55vh] text-center  text-white">
            <h2 className="text-3xl font-semibold">All Enrolled Courses</h2>
            <div className="flex justify-center flex-wrap gap-5 mt-10">
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
