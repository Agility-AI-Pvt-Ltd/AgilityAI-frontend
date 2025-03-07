import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import CourseCard from '../../components/UI/CourseCard';
import { useNavigate } from 'react-router-dom';
import { CourseData } from '../../context/CourseContext';
import axios from 'axios';
import { server } from '../../main';
import AdminLayout from '../../components/Layout/AdminLayout';

const AdminCourses = () => {
    const { user, role, token } = useAuth();
    const navigate = useNavigate();

    if (user && role !== "admin") return navigate('/');

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [duration, setDuration] = useState("");
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);

    const { courses, fetchCourses } = CourseData();

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setBtnLoading(true);

        const myForm = new FormData();

        myForm.append("title", title);
        myForm.append("description", description);
        myForm.append("category", category);
        myForm.append("price", price);
        myForm.append("createdBy", createdBy);
        myForm.append("duration", duration);
        myForm.append("file", image);

        try {
            const { data } = await axios.post(`${server}/api/course/new`, myForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            alert(data.message);
            setBtnLoading(false);
            await fetchCourses();
            setImage("");
            setTitle("");
            setDescription("");
            setDuration("");
            setImagePrev("");
            setCreatedBy("");
            setPrice("");
            setCategory("");
        } catch {
            alert(error.response.data.message);
        }
    }

    return (
        <AdminLayout>


            <div className="min-h-screen text-white p-6">
                {/* Courses Section */}
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-6">All Courses</h1>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {courses && courses.length > 0 ? (
                            courses.map((course) => (
                                <div key={course._id} className="bg-gray-800 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-5 rounded-lg text-center">
                                    <img
                                        src={`${server}/${course.image}`}
                                        alt={course.title}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                                    <p className="text-sm text-gray-300">
                                        <span className="font-semibold text-white">Instructor:</span> {course.createdBy}
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        <span className="font-semibold text-white">Duration:</span> {course.duration} hours
                                    </p>
                                    <p className="text-sm font-medium text-blue-400 mb-4">
                                        <span className="font-semibold text-white">Price:</span> ₹{course.price}
                                    </p>

                                    {token ? (
                                        <>
                                            {user && role !== "admin" ? (
                                                user.subscription.includes(course._id) ? (
                                                    <button
                                                        onClick={() => navigate(`/course/study/${course._id}`)}
                                                        className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                                                    >
                                                        Study
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => navigate(`/course/${course._id}`)}
                                                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                                                    >
                                                        Get Started
                                                    </button>
                                                )
                                            ) : (
                                                <button
                                                    onClick={() => navigate(`/course/study/${course._id}`)}
                                                    className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                                                >
                                                    Study
                                                </button>
                                            )}
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => navigate("/login")}
                                            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                                        >
                                            Get Started
                                        </button>
                                    )}

                                    {user && role === "admin" && (
                                        <button
                                            className="w-full mt-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
                                            onClick={() => deleteHandler(course._id)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-center col-span-full">No Courses Yet!</p>
                        )}
                    </div>
                </div>

                {/* Form Section */}
                <div className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
                    <h2 className="text-xl font-semibold text-purple-400 mb-4 text-center">Add Course</h2>
                    <form className="space-y-4" onSubmit={submitHandler}>
                        <label className="text-gray-300">Title</label>
                        <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={title} onChange={e => setTitle(e.target.value)} required />

                        <label className="text-gray-300">Description</label>
                        <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={description} onChange={e => setDescription(e.target.value)} required />

                        <label className="text-gray-300">Price</label>
                        <input type="number" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={price} onChange={e => setPrice(e.target.value)} required />

                        <label className="text-gray-300">Created By</label>
                        <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={createdBy} onChange={e => setCreatedBy(e.target.value)} required />

                        <label className="text-gray-300">Category</label>
                        <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={category} onChange={e => setCategory(e.target.value)} required />

                        <label className="text-gray-300">Duration (hours)</label>
                        <input type="number" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={duration} onChange={e => setDuration(e.target.value)} required />

                        <label className="text-gray-300">Image</label>
                        <input type="file" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" onChange={changeImageHandler} required />
                        {imagePrev && <img src={imagePrev} alt="Preview" className="w-48 mx-auto mt-4 rounded-md" />}

                        <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300" disabled={btnLoading}>
                            {btnLoading ? "Please Wait..." : "Add"}
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminCourses;
