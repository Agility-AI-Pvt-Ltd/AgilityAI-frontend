import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import RecordingCard from '../../components/UI/RecordingCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../main';
import AdminLayout from '../../components/Layout/AdminLayout';
import { WebinarsData } from '../../context/WebinarsContext';


const AdminRecording = () => {
    const { user, role } = useAuth();
    const navigate = useNavigate();

    if (user && role !== "admin") return navigate('/');

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [time, setTime] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);

    const { recordings, fetchRecordings } = WebinarsData();

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
        myForm.append("createdBy", createdBy);
        myForm.append("time", time);
        myForm.append("link", link);
        myForm.append("file", image);

        try {
            const { data } = await axios.post(`${server}/api/recording/new`, myForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            alert(data.message);
            setBtnLoading(false);
            await fetchRecordings();
            setImage("");
            setTitle("");
            setDescription("");
            setTime("");
            setLink("");
            setImagePrev("");
            setCreatedBy("");
        } catch {

            alert(error.response?.data?.message || "An error occurred");

        }
    }

    return (
        <AdminLayout>

            <div className="max-w-7xl mx-auto pt-2 px-6 mt-12">
                {/* All Recordings Section */}
                <div className="flex flex-wrap justify-center gap-6">
                    <h1 className="text-2xl font-bold text-white mb-4 text-center">All Recordings</h1>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                        {recordings && recordings.length > 0 ? (
                            recordings.map((recording) => (
                                <RecordingCard key={recording._id} recording={recording} />
                            ))
                        ) : (
                            <p className="text-gray-400">No Recordings Yet!</p>
                        )}
                    </div>
                </div>

                {/* Add Recordings Form - Centered Below Recordings */}
                <div className="flex justify-center mt-12">
                    <div className="w-full lg:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-purple-400 mb-4 text-center">Add Recordings</h2>
                        <form className="space-y-4" onSubmit={submitHandler}>
                            <label className="text-gray-300">Title</label>
                            <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={title} onChange={e => setTitle(e.target.value)} required />

                            <label className="text-gray-300">Description</label>
                            <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={description} onChange={e => setDescription(e.target.value)} required />

                            <label className="text-gray-300">Hosted by</label>
                            <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={createdBy} onChange={e => setCreatedBy(e.target.value)} required />

                            <label className="text-gray-300">Recording Link</label>
                            <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={link} onChange={e => setLink(e.target.value)} required />

                            <label className="text-gray-300">Date and Time</label>
                            <input type="text" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" value={time} onChange={e => setTime(e.target.value)} required />

                            <label className="text-gray-300">Image</label>
                            <input type="file" className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-purple-400" onChange={changeImageHandler} required />
                            {imagePrev && <img src={imagePrev} alt="Preview" className="w-48 mx-auto mt-4 rounded-md" />}

                            <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300" disabled={btnLoading}>
                                {btnLoading ? "Please Wait..." : "Add"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminRecording;
