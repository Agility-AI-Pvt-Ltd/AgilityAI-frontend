import HeroSection from "../components/UI/HeroSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSection />

      <section className="py-24 text-white relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center gap-12">
            <div className="w-full max-w-5xl mx-auto px-4 lg:px-0">
              <div className="flex flex-col gap-8 lg:items-start items-center text-center lg:text-left">
                <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold leading-normal">
                  Who we are?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                  At Agility AI Pvt Ltd, we integrate cutting-edge AI into
                  real-world applications, empowering businesses and individuals
                  to thrive in an AI-driven world. Our expert team bridges the
                  gap between AI technology and its practical use, enabling
                  smarter decision-making, automation, and innovation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                  From startups to enterprises, we deliver AI solutions,
                  research, and training programs that are accessible, ethical,
                  and transformative. With Agility AI, you stay ahead in the
                  future of intelligence.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-[500px] sm:max-w-[550px] h-auto rounded-3xl border border-gray-700 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="./about.png"
                  alt="About Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 text-white ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <video
              className="w-full max-w-xl h-auto rounded-lg shadow-2xl  transition-shadow duration-500 ease-in-out"
              autoPlay
              loop
              muted
            >
              <source
                src="https://videos.pexels.com/video-files/6963744/6963744-sd_640_360_25fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-6 rounded-lg">
            <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal text-center lg:text-left">
              Our Impact
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed text-lg text-justify">
              From startups to enterprises, our AI-powered solutions optimize
              operations, enhance decision-making, and drive scalable growth.
              Our training programs empower individuals with industry-ready AI
              skills for the future.
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed text-lg text-justify">
              At Agility AI, we don’t just create technology — we redefine
              intelligence. We are:
            </p>

            <ul className="text-gray-300 space-y-3 mt-4 text-lg text-justify">
              <li>
                <span className="text-gray-300 text-2xl">➤</span>{" "}
                <strong>Empowering Businesses :</strong> Integrating AI for
                automation, efficiency, and innovation.
              </li>
              <li>
                <span className="text-gray-300 text-2xl">➤</span>{" "}
                <strong>Bridging the AI Skill Gap :</strong> Providing hands-on
                AI training for all expertise levels.
              </li>
              <li>
                <span className="text-gray-300 text-2xl">➤</span>{" "}
                <strong>Shaping the Future :</strong> Developing ethical AI
                solutions that create positive societal change.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="flex justify-center lg:w-1/2">
              <img
                src="https://plus.unsplash.com/premium_photo-1661329955912-ebc4279f3b21?w=800&auto=format&fit=crop&q=60"
                alt="AI Innovation"
                className="w-full max-w-[600px] h-auto lg:h-[450px] object-cover rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-all duration-300"
              />
            </div>

            <div className="max-w-2xl lg:w-1/2">
              <h2 className="text-[#F5FCE1] text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope leading-normal text-center lg:text-left">
                Why choose AgilityAI?
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed text-center lg:text-left text-justify mt-4">
                Empowering businesses with cutting-edge AI solutions, hands-on
                learning, and ethical innovation for a future-ready world.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    text: " Industry-Specific AI Solutions : Tailored to your business needs.",
                  },
                  {
                    text: " Practical AI Training : Real-world applications for skill development.",
                  },
                  {
                    text: " End-to-End AI Services : Strategy, development, consulting & education.",
                  },
                  {
                    text: " Ethical & Transparent AI : Responsible, fair, and accountable AI practices.",
                  },
                  {
                    text: " Future-Ready Innovation : Stay ahead with continuous AI advancements.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="text-gray-300 text-3xl">➤</span>
                    <p className="text-gray-300 text-lg text-justify">
                      <strong>{item.text.split(":")[0]}:</strong>
                      {item.text.split(":")[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 blur-3xl"></div>

        <div className="relative container mx-auto px-6">
          <h2 className="text-4xl font-bold bg-clip-text text-white">
            Join the AI Revolution
          </h2>

          <div className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed space-y-3">
            <p>
              At{" "}
              <span className="text-blue-400 font-semibold">
                Agility AI Pvt Ltd
              </span>
              , we empower businesses and individuals with AI-driven solutions,
              hands-on learning, and future-ready innovation.
            </p>

            <ul className="list-disc list-inside text-gray-300">
              <li className="ml-2">
                Optimize Operations with AI-powered efficiency.
              </li>
              <li className="ml-5">
                Gain AI expertise through real-world applications.
              </li>
              <li>Unlock New Opportunities in an AI-driven world.</li>
            </ul>

            <p className="mt-4 text-blue-400 font-semibold text-center">
              Let&#39;s build the future together — connect with us today!
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block px-8 py-3 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
