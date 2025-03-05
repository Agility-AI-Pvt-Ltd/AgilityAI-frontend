import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../main';

const Lecture = () => {
    const { user, role } = useAuth();
    const [lectures, setLectures] = useState([]);
    const [lecture, setLecture] = useState(null);
    const [loading, setLoading] = useState(true);
    const [lecLoading, setLecLoading] = useState(false);
    const [show, setShow] = useState(false);
    const params = useParams();

    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [video,setvideo] = useState("");
    const [videoPrev,setVideoPrev] = useState("");
    const [btnLoading,setBtnLoading] = useState(false);
    
    //if not subscribed then redirect to AIacademy
    if(user && user.role !=="admin" && !user.subscription.includes(params.id))
     return navigate('/AIacademy');

    const fetchlectures = async () => {
        try {
            const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setLectures(data.lectures);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const fetchlecture = async (id) => {
        setLecLoading(true);
        try {
            const { data } = await axios.get(`${server}/api/lecture/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setLecture(data.lecture);
            setLecLoading(false);
        } catch (error) {
            console.log(error);
            setLecLoading(false);
        }
    };

    const changeVideoHandler = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = ()=>{
            setVideoPrev(reader.result);
            setvideo(file);
        }
    }


    const submitHandler = async(e)=>{
        setBtnLoading(true);
        e.preventDefault();
        const myForm = new FormData();

        myForm.append("title",title);
        myForm.append("description",description);
        myForm.append("file",video);

        try{
            const {data} = await axios.post(`${server}/api/course/${params.id}`,myForm,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })

            alert(data.message);
            setBtnLoading(false);
            setShow(false);
            fetchlectures();
            setTitle("");
            setDescription("");
            setvideo("");
            setVideoPrev("");
        }catch(error){
            alert(error.response.data.message);
            setBtnLoading(false);
        }
    }

    const deleteHandler = async(id) =>{
        if(confirm("Are you sure you want to delete this lecture")){
            try{
                const {data} = await axios.delete(`${server}/api/lecture/${id}`,{
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                })
                alert(data.message);
                fetchlectures();
            }catch{
                alert(error.response.data.message);
            }
        }
    }

    useEffect(() => { fetchlectures(); }, []);

    return (
        <div className="max-w-7xl mx-auto pt-2 px-6 mt-12">
            {loading ? <p className='text-white'>Loading...</p> :
                <div className='flex flex-col md:flex-row min-h-screen text-white'>
                    <div className='w-full md:w-2/3 p-4'>
                        {lecLoading ? <p className='text-gray-400'>Loading Lecture...</p> :
                            lecture && lecture.video ? (
                                <>
                                    <video src={`${server}/${lecture.video}`} width="100%" className='rounded-lg shadow-lg' controlsList="nodownload noremoteplayback" disablePictureInPicture disableRemotePlayback autoPlay controls />
                                    <h1 className='text-xl font-bold mt-4'>{lecture.title}</h1>
                                    <h3 className='text-gray-400'>{lecture.description}</h3>
                                </>
                            ) : <h1 className='text-gray-400'>Please select a lecture</h1>
                        }
                    </div>
                    <div className='w-full md:w-1/3 p-4'>
                        {user && role === "admin" && (
                            <button onClick={()=>setShow(!show)}
                            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                {show?"Close":"Add Lecture"}
                            </button>
                        )}
                        {show && (
                            <div className='bg-gray-800 p-4 rounded-lg shadow-lg mt-4'>
                                <h2 className='text-xl font-bold text-white mb-2'>Add Lecture</h2>
                                <form onSubmit={submitHandler} className='text-gray-300'>
                                    <label className='block'>Title</label>
                                    <input type="text"
                                     value={title}
                                     onChange={e=>setTitle(e.target.value)}
                                     className='w-full p-2 mb-2 bg-gray-700 rounded'
                                     required />
                                    <label className='block'>Description</label>
                                    <input type="text"
                                    value={description}
                                    onChange={e=>setDescription(e.target.value)}
                                     className='w-full p-2 mb-2 bg-gray-700 rounded'
                                     required />
                                    <label className='block'>Upload Video</label>
                                    <input type="file" 
                                    onChange={changeVideoHandler}
                                    className='w-full p-2 mb-2 bg-gray-700 rounded'
                                    required />

                                    {/* // for video preview while adding new lecture */}
                                    {
                                        videoPrev && <video src = {videoPrev} alt="" width={300} controls></video>
                                    }


                                    <button disabled={btnLoading} 
                                    type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'>
                                        {btnLoading ?"Please Wait":"Add"}
                                    </button>
                                </form>
                            </div>
                        )}
                        {lectures.length > 0 ? lectures.map((e, i) => (
                            <>
                                <div key={i} className='bg-gray-800 p-3 rounded-lg mt-2 cursor-pointer hover:bg-gray-700' onClick={() => fetchlecture(e._id)}>
                                    {i + 1}. {e.title}
                                </div>

                                {/* //delete button for admin */}
                                {
                                    user && role === "admin" && <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                    onClick={()=>deleteHandler(e._id)}
                                    >Delete {e.title}</button>
                                }
                            </>
                        )) : <p className='text-gray-400'>No Lectures yet!</p>}

                    </div>
                </div>
            }
        </div>
    );
};

export default Lecture;
