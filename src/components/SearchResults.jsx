import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_URL, API_KEY } from "../utils/constant";


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      if (!query) {
        setVideos([]); 
        return;
      }
      
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${YOUTUBE_API_URL}&q=${encodeURIComponent(query)}&key=${API_KEY}`
        );
        const json = await response.json();

        if (json.items) {
          setVideos(json.items);
        } else {
          // Fallback to mock data if needed
          console.log("No items found for query:", query);
          setVideos(mockVideos);
        }
      } catch (err) {
        console.log("Error fetching videos:", err);
        setError("Failed to fetch videos. Showing fallback.");
        setVideos(mockVideos);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();

  }, [query]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">
        { query ? `Results for "${query}"` : "Search for videos" }
      </h2>

      {loading && <p>Loading videos…</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId || video.id} className="shadow-md rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={video.snippet.thumbnails?.medium?.url}
              alt={video.snippet.title}
            />
            <div className="p-3">
              <h3 className="font-semibold">{video.snippet.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {video.snippet.channelTitle}
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {video.statistics?.viewCount
                  ? `${video.statistics.viewCount} views`
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
