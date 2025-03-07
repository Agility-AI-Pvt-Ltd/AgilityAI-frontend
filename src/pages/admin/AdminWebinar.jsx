import React, { useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Webinar = () => {
  const [isStarted, setIsStarted] = useState(false); 
  const videoRef = useRef(null);

  const APP_ID = 1907602911;
  const SERVER_SECRET = "6c996b4bf2e9601dc67930114653d538";
  const { ROOM_ID } = useParams();

  const startWebinar = () => {
    setIsStarted(true);

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      APP_ID,
      SERVER_SECRET,
      ROOM_ID,
      Date.now().toString(),  
      "Host" 
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: videoRef.current,
      sharedLinks: [
        {
          name: "Copy link",
          url: `http://localhost:5173/webinar/${ROOM_ID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,  // Change from LiveStreaming to VideoConference
      },
      config: {
        role: "Host",  
        turnOnMicrophoneWhenJoining: true,  
        turnOnCameraWhenJoining: true,  
        showScreenSharingButton: true,  
        showTextChat: true,  
        showUserList: true,  
        showLeaveRoomConfirmDialog: true,  
        enableUserToChangeName: false,  
      },
      showPreJoinView: true,  // Show join options before entering
      onLeaveRoom: () => {
        window.location.href = "/admin/dashboard";
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <div className="w-full text-center py-3">
        <p className="text-xl font-semibold">Webinar ID: {ROOM_ID}</p>
      </div>

      {!isStarted ? (
        <button
          onClick={startWebinar}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
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
