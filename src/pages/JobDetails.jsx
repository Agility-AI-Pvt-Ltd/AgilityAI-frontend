import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from '../main';
import toast from "react-hot-toast";
import Spinner from "../components/UI/Spinner";


const JobDetails = () => {
    const [jobListings, setJobListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { jobId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`${server}/api/joblistings`)
            .then((res) => setJobListings(res.data))
            .catch((err) => toast.error("Error fetching jobs:", err))
            .finally(() => setLoading(false));
    }, []);

    const job = jobListings.find((job) => job._id.toString() === jobId);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedIn: "",
        resume: "",
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const applicationData = {
            ...formData,
            jobtitle: job?.title,
        };


        try {
            await axios.post(`${server}/api/jobapplications`, applicationData);
            // console.log("Response:", response.data);
            toast.success("Application Submitted Successfully!");

            // Navigate to /careers after successful submission
            navigate("/careers");
        } catch (error) {
            // console.error("Error submitting application:", error);
            toast.error("Failed to submit application.");
        }
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#44515A] rounded-lg shadow-lg text-white mt-2">
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Spinner />
                </div>
            ) : job ? (
                <>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
                        {job.title}
                    </h2>
                    <p className="mt-4 flex items-center text-lg text-[#F5FCE1]">
                        📍 <span className="ml-2">{job.location}</span>
                    </p>
                    <p className="mt-6 text-gray-300 leading-relaxed text-lg">{job.description}</p>

                    <h5 className="mt-6 text-2xl font-semibold">💡 Skills Required:</h5>
                    <ul className="mt-3 space-y-2 text-gray-300">
                        {job.skills?.map((skill, index) => (
                            <li key={index} className="flex items-center gap-2">
                                🔹 <span>{skill}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Application Form */}
                    <h3 className="mt-8 text-3xl font-bold text-[#F5FCE1]">📄 Apply for this Job</h3>
                    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                        <label className="block">
                            <span className="text-[#F5FCE1]">Job Title</span>
                            <input
                                type="text"
                                value={job?.title}
                                disabled
                                className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white cursor-not-allowed"
                            />
                        </label>
                        
                        <label className="block">
                            <span className="text-[#F5FCE1]">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                                placeholder="Enter your full name"
                            />
                        </label>

                        <label className="block">
                            <span className="text-[#F5FCE1]">Email Address</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                                placeholder="Enter your email"
                            />
                        </label>

                        <label className="block">
                            <span className="text-[#F5FCE1]">Phone Number</span>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                                placeholder="Enter your phone number"
                            />
                        </label>

                        <label className="block">
                            <span className="text-[#F5FCE1]">LinkedIn URL</span>
                            <input
                                type="url"
                                name="linkedIn"
                                value={formData.linkedIn}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                                placeholder="Enter your LinkedIn profile link"
                            />
                        </label>

                        <label className="block">
                            <span className="text-[#F5FCE1]">Resume Link (Google Drive)</span>
                            <input
                                type="url"
                                name="resume"
                                value={formData.resume}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
                                placeholder="Enter Google Drive resume link"
                            />
                        </label>

                        <button
                            type="submit"
                            className="mt-6 w-full py-3 bg-gradient-to-r from-teal-400 to-blue-600 text-white text-lg font-semibold rounded-lg hover:scale-105 transition"
                        >
                            Submit Application 🚀
                        </button>
                    </form>
                </>
            ) : (
                <p className="text-center text-gray-400">Job not found.</p>
            )}
        </div>
    );
};

export default JobDetails;
