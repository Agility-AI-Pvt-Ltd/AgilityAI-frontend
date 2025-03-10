import RecordingCard from "../components/UI/RecordingCard";
import { WebinarsData } from "../context/WebinarsContext";
import Spinner from "../components/UI/Spinner";



const Recording = () => {
  const { recordings, recordingsloading } = WebinarsData();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Past Webinars</h1>

      {
        recordingsloading ?
          <div className="flex justify-center items-center min-h-[200px]">
            <Spinner />
          </div> :
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
            {recordings.map((recording) => (
              <div className="w-full max-w-[400px]" key={recording._id}>
                <RecordingCard recording={recording} />
              </div>
            ))}
          </div>
      }
    </div>
  );
};

export default Recording;
