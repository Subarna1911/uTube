import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API, API_KEY } from "../utils/constant";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (!query) return;

    const normalizedQuery = query.toLowerCase();

    if (searchCache[normalizedQuery]) {
      setResults(searchCache[normalizedQuery]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${YOUTUBE_SEARCH_API}${encodeURIComponent(normalizedQuery)}&key=${API_KEY}`
        );
        const data = await res.json();
        const videoResults =
          data.items?.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          })) || [];

        setResults(videoResults);
      } catch (err) {
        console.error("Error fetching search results:", err);
        setError("Failed to fetch search results. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, searchCache]);

  return (
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-xl font-semibold mb-4">
        Search Results for "{query}"
      </h1>

      {loading && <p>Loading results...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && results.length === 0 && <p>No results found.</p>}

      {!loading && !error && results.length > 0 && (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {results.map((video, index) => (
            <Link
              to={`/watch/${video.id}`}
              key={video.id || index} // fallback key just in case
              className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h2 className="text-sm font-medium line-clamp-2">
                  {video.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
