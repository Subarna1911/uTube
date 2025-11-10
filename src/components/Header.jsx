import React, { useState, useEffect } from "react";
import logo from "../assets/YtLogo.png";
import { Menu, Search, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../app/navSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { API_KEY } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchQuery) return;
    const timer = setTimeout(() => {
      getSearchData();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchData = async () => {
    console.log("API CALL-", searchQuery);
    try {
      const data = await fetch(
        `${YOUTUBE_SEARCH_API}${encodeURIComponent(searchQuery)}&key=${API_KEY}`
      );
      const json = await data.json();
      if (json.items) {
        setSuggestions(json.items.map(item => item.snippet.title));
      } else if (Array.isArray(json[1])) {
        setSuggestions(json[1]);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.log("Error fetching search data", error);
    }
  };

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-100 shadow-md border-b border-slate-300 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Menu className="cursor-pointer" onClick={handleClick} size={20} />
          <Link to="/">
            <img
              className="md:w-28 w-24 object-contain"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            className="w-full border border-gray-200 rounded-full py-2 px-4 outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full cursor-pointer">
            <Search size={18} />
          </div>

          {/* Suggestions */}
          {showSuggestions && suggestions && suggestions.length > 0 && (
            <ul className="absolute left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2 max-h-64 overflow-y-auto z-50 list-none">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  onMouseDown={() => setSearchQuery(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Section */}
        <div>
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
