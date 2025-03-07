import React, {  useState } from "react";
import Courses from "./Courses";
import WebinarList from "./WebinarList";
import Recording from "./Recording";

const AIacademy = () => {
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

                {/* Webinars Section */}
                <WebinarList/>

                {/* Recordings Section */}
                <Recording/>
                

            </div>
        </div>
    );
};

export default AIacademy;



