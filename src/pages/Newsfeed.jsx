import React, { useState, useEffect } from "react";
import Spinner from "../components/UI/Spinner";

const API_KEY = "0830fbab9c43b9309e23ab1d75bdfc06";
const API_URL = `https://gnews.io/api/v4/search?q=AI+OR+artificial+intelligence+OR+machine+learning&lang=en&max=10&token=${API_KEY}`;

const Newsfeed = () => {
  const [newsfeed, setNewsfeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          const uniqueArticles = [];
          const seenTitles = new Set();

          data.articles.forEach((article) => {
            if (!seenTitles.has(article.title)) {
              seenTitles.add(article.title);
              uniqueArticles.push(article);
            }
          });

          setNewsfeed(uniqueArticles);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-2 px-6">
      <header className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Latest{" "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
            AI News
          </span>
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Stay updated with the latest AI trends
        </p>
      </header>

      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {newsfeed.map((article, index) => (
            <div
              key={index}
              className="relative shine-effect rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Image */}
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              )}

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {article.description || "No description available."}
                </p>

                <div className="mt-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline font-medium text-sm"
                  >
                    Read more
                    <svg
                      className="ml-2 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Newsfeed;
