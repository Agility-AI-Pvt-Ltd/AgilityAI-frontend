import React, { useRef, useState, useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const Webinar = () => {
    const APP_ID = 1907602911;
    const SERVER_SECRET = "6c996b4bf2e9601dc67930114653d538";
    const ROOM_ID = "WEBINAR_ROOM_123";
    const containerRef = useRef(null);


    const myMeeting = async (element) => {

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            APP_ID,
            SERVER_SECRET,
            ROOM_ID,
            Date.now().toString(),
            "YOUR_NAME"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy link",
                    url: `http://localhost:5173/webinar`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming,
                config: {
                    role: ZegoUIKitPrebuilt.Audience, // Ensures user joins as Audience
                },
            },
            onLeaveRoom: () => {
                window.location.href = "/AIacademy";
            },
        });
    };

    useEffect(() => {
        if (containerRef.current) {
            myMeeting(containerRef.current);
        }
    }, [])
    return (
        <div className="flex items-center justify-center w-full h-screen ">
            <div className="w-full h-full max-w-screen-xl">
                <div
                    ref={containerRef}
                    className="w-full h-full rounded-lg overflow-hidden shadow-lg"
                ></div>
            </div>
        </div>
    );
};

export default Webinar;
