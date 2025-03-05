import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";
import Courses from "./Courses";

const AIacademy = () => {
    const [events, setEvents] = useState([]);
    const [webinars, setWebinars] = useState([]);
    const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     // Fetch Events
    //     fetch("http://localhost:5000/events")
    //         .then((res) => res.json())
    //         .then((data) => setEvents(data))
    //         .catch((err) => console.error("Error fetching events:", err));

    //     // Fetch Webinars
    //     fetch("http://localhost:5000/webinars")
    //         .then((res) => res.json())
    //         .then((data) => setWebinars(data))
    //         .catch((err) => console.error("Error fetching webinars:", err));

    //     // Fetch Courses
    //     fetch("http://localhost:5000/courses")
    //         .then((res) => res.json())
    //         .then((data) => setCourses(data))
    //         .catch((err) => console.error("Error fetching courses:", err));
    // }, []);

    return (
        <div>
            <div className="min-h-screen text-white p-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 mb-12 tracking-wide">
                    Welcome {" "}
                    <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
                        to AIacademy
                    </span>
                </h1>

                {/* Courses Section */}
                <Courses/>


                {/* Events Section */}
                {/* <section>
                    <h2 className="text-2xl font-semibold mb-4">Our Upcoming Events</h2>
                    <div className="flex flex-wrap gap-6">
                        {events.map((event) => (
                            <Card key={event.id} {...event} />
                        ))}
                    </div>
                </section> */}

                {/* Webinars Section */}
                {/* <section className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Upcoming Webinars</h2>
                    <div className="flex flex-wrap gap-6">
                        {webinars.map((webinar) => (
                            <Card key={webinar.id} {...webinar} />
                        ))}
                    </div>
                </section> */}

                
            </div>
        </div>
    );
};

export default AIacademy;



