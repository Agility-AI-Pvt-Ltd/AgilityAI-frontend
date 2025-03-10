import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../main';
import toast from 'react-hot-toast';
import Spinner from '../components/UI/Spinner';

const Assignment = () => {
    const { user, role } = useAuth();
    const [assignments, setAssignments] = useState([]);
    const [assignment, setAssignment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [assignLoading, setAssignLoading] = useState(false);
    const [show, setShow] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [filePreview, setFilePreview] = useState("");
    const [btnLoading, setBtnLoading] = useState(false);

    // If not subscribed, redirect to AIacademy
    if (user && user.role !== "admin" && !user.subscription.includes(params.id))
        return navigate('/AIacademy');

    const fetchAssignments = async () => {
        try {
            const { data } = await axios.get(`${server}/api/assignments/${params.id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setAssignments(data.assignments);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const fetchAssignment = async (id) => {
        setAssignLoading(true);
        try {
            const { data } = await axios.get(`${server}/api/assignment/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setAssignment(data.assignment);
            setAssignLoading(false);
        } catch (error) {
            console.log(error);
            setAssignLoading(false);
        }
    };

    const changeFileHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFilePreview(reader.result);
            setFile(file);
        };
    };

    const submitHandler = async (e) => {
        setBtnLoading(true);
        e.preventDefault();
        const myForm = new FormData();

        myForm.append("title", title);
        myForm.append("file", file);

        try {
            const { data } = await axios.post(`${server}/api/course/assignment/${params.id}`, myForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            toast.success(data.message);
            setBtnLoading(false);
            setShow(false);
            fetchAssignments();
            setTitle("");

            setFile("");
            setFilePreview("");
        } catch (error) {
            toast.error(error.response.data.message);
            setBtnLoading(false);
        }
    };

    const deleteHandler = async (id) => {
        if (confirm("Are you sure you want to delete this assignment?")) {
            try {
                const { data } = await axios.delete(`${server}/api/assignment/${id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                toast.success(data.message);
                fetchAssignments();
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    };

    useEffect(() => { fetchAssignments(); }, []);

    return (
        <div className="max-w-7xl mx-auto pt-2 px-6 mt-12">
            {loading ? <div className="min-h-screen flex items-center justify-center">
                <Spinner />
            </div> :
                <div className='flex flex-col md:flex-row min-h-screen text-white gap-4'>

                    {/* PDF Viewer Section */}
                    <div className="w-full md:w-3/4 p-6 text-center min-h-screen bg-gray-900 rounded-lg shadow-2xl border border-gray-700">
                        {assignLoading ? (
                            <p className="text-lg font-semibold ">
                                Loading Assignment...
                            </p>
                        ) : assignment && assignment.docs ? (
                            <>
                                <h1 className="text-2xl font-bold mb-3">
                                    {assignment.title}
                                </h1>
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <iframe
                                        src={`${server}/${assignment.docs}`}
                                        className="w-full h-[80vh] md:h-[90vh] border-2 border-gray-700 rounded-lg shadow-lg transition-transform duration-300"
                                    />
                                </div>
                            </>
                        ) : (
                            <h1 className="text-gray-400 text-lg mt-10 animate-bounce">
                                Please click to select an assignment
                            </h1>
                        )}
                    </div>

                    {/* Assignment List & Controls */}
                    <div className='w-full md:w-1/4 p-4 flex flex-col gap-2'>
                        {user && role === "admin" && (
                            <button onClick={() => setShow(!show)}
                                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                {show ? "Close" : "Add Assignment"}
                            </button>
                        )}

                        {show && (
                            <div className='bg-gray-800 p-4 rounded-lg shadow-lg'>
                                <h2 className='text-lg font-bold text-white mb-2'>Add Assignment</h2>
                                <form onSubmit={submitHandler} className='text-gray-300'>
                                    <label className='block'>Title</label>
                                    <input type="text"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        className='w-full p-2 mb-2 bg-gray-700 rounded'
                                        required />
                                    <label className='block'>Upload Assignment</label>
                                    <input type="file"
                                        onChange={changeFileHandler}
                                        className='w-full p-2 mb-2 bg-gray-700 rounded'
                                        required />
                                    {filePreview && <p className="text-gray-400">File selected: {file?.name}</p>}

                                    <button disabled={btnLoading}
                                        type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'>
                                        {btnLoading ? "Please Wait" : "Add"}
                                    </button>
                                </form>
                            </div>
                        )}

                        {assignments.length > 0 ? assignments.map((e, i) => (
                            <div key={i} className='bg-gray-800 p-2 rounded-lg mt-2 cursor-pointer hover:bg-gray-700 flex justify-between items-center'
                                onClick={() => fetchAssignment(e._id)}>
                                <span>{i + 1}. {e.title}</span>
                                {user && role === "admin" && (
                                    <button className="bg-red-500 text-white font-semibold py-1 px-3 rounded-lg hover:bg-red-700"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            deleteHandler(e._id);
                                        }}>
                                        Delete
                                    </button>
                                )}
                            </div>
                        )) : <p className='text-gray-400'>No Assignments yet!</p>}
                    </div>
                </div>
            }
        </div>
    );
};

export default Assignment;