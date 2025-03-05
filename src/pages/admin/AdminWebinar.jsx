import React, { useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const Webinar = () => {
  const [isStarted, setIsStarted] = useState(false);
  const videoRef = useRef(null);

  const APP_ID = 1907602911;
  const SERVER_SECRET = "6c996b4bf2e9601dc67930114653d538";
  const ROOM_ID = "WEBINAR_ROOM_123";

  function randomID(len = 5) {
    const chars =
      "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
    return Array.from({ length: len }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  }

  const startWebinar = () => {
    setIsStarted(true);

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      APP_ID,
      SERVER_SECRET,
      ROOM_ID,
      randomID(),
      randomID()
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: videoRef.current,
      sharedLinks: [
        {
          name: "Copy link",
          url: "http://localhost:5173/webinar",
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
      },
      showPreJoinView: false, // Bypass pre-join screen
      showExitDialog: false, // Prevent Zego’s default exit dialog
      onLeaveRoom: () => {
        window.location.href = "/AIacademy";
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      {!isStarted ? (
        <button
          onClick={startWebinar}
          className="px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Start Webinar
        </button>
      ) : (
        <div className="relative w-4/5 h-4/5 rounded-lg shadow-lg overflow-hidden">
          <div ref={videoRef} className="w-full h-full"></div>
        </div>
      )}
    </div>
  );
};

export default Webinar;
