import React, { useState, useEffect } from "react";
import {YOUTUBE_API_URL} from "../utils/constant";
import VideoCard from "./VideoCard";
import {Link} from 'react-router-dom'


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(YOUTUBE_API_URL);
      const json = await data.json();
     
      if (json.items) {
        setVideos(json.items);
      } else {
        console.log("No items found", json);
      }
    } catch (error) {
      console.log("Error fetching data from server", error);
    }
  };

  return (
    <div className="max-w-screen px-6 md:px-8 py-5">
      <div className="grid md:grid-cols-4 grid-cols-2 justify-center gap-5 items-center space-y-5 ">
          {videos.length > 0 ? (
        videos.map((video) => (
          <li className="list-none" key={video.id} >
                      <Link to={"/watch?v=" + video.id }><VideoCard info={video} /></Link>
          </li>

        ))
      ) : (
        <p>Loading videos...</p>
      )}
      </div>
     
    </div>
  );
};

export default VideoContainer;
