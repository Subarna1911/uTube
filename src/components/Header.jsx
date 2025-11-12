import React, { useState, useEffect } from "react";
import logo from "../assets/YtLogo.png";
import { Menu, Search, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../app/navSlice";
import { Link, useNavigate } from "react-router-dom";
import { YOUTUBE_SEARCH_API, API_KEY } from "../utils/constant";
import { cacheResults } from "../app/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      const normalizedQuery = searchQuery.toLowerCase();

      if (searchCache[normalizedQuery]) {
        setSuggestions(searchCache[normalizedQuery]);
      } else {
        getSearchData(normalizedQuery);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache]);

  const getSearchData = async (query) => {
    try {
      const response = await fetch(
        `${YOUTUBE_SEARCH_API}${encodeURIComponent(query)}&key=${API_KEY}`
      );
      const json = await response.json();

      let results = [];
      if (json.items) {
        results = json.items.map((item) => item.snippet.title);
      } else if (Array.isArray(json[1])) {
        results = json[1];
      }

      setSuggestions(results);

      dispatch(
        cacheResults({
          [query]: results,
        })
      );
    } catch (error) {
      console.log("Error fetching search data:", error);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) return;
    const normalized = query.toLowerCase();
    navigate(`/search?q=${encodeURIComponent(normalized)}`);
    setShowSuggestions(false);
    setSearchQuery(normalized);
  };

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-100 shadow-md border-b border-slate-300 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Menu className="cursor-pointer" onClick={handleMenuClick} size={20} />
          <Link to="/">
            <img className="md:w-28 w-24 object-contain" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="relative w-full max-w-xl">
          <input
            type="text"
            className="w-full border border-gray-200 rounded-full py-2 px-4 outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(searchQuery)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white rounded-full cursor-pointer">
            <button className="p-2" onClick={() => handleSearch(searchQuery)}>
              <Search size={18} />
            </button>
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 w-full bg-slate-100 border border-gray-200 rounded-lg shadow-lg mt-2 max-h-64 overflow-y-auto z-50 list-none">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-white cursor-pointer flex justify-between items-center"
                  onMouseDown={() => handleSearch(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
