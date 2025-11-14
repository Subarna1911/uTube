import React from 'react'
import {fallback} from '../utils/constant'

const VideoCard = ({info}) => {

if(!info || !info.snippet || !info.statistics) return null;

  const{snippet, statistics} = info;
  const{thumbnails, channelTitle, title} = snippet;
  const{viewCount, commentCount}         = statistics;

  if(!title || !thumbnails) return null;
   
  return (
    <div>
      <div className='w-full max-w-[300px] bg-gray-100 shadow-2xl rounded-lg md:min-h-[300px] min-h-[250px]  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '>
      <img
  className="rounded-t-lg"
  src={thumbnails?.high?.url || fallback}
  alt={title}
/>
       <div className='px-3 py-4 space-y-4'>
       <div>
        <h1 className='text-md md:font-semibold font-medium text-sm '>{channelTitle}</h1>
       </div>

       <div className='flex justify-between '>
        <p className='text-sm'>{viewCount}</p>
        <p className='text-sm'>{commentCount}</p>
       </div>
       </div>
      </div>
    </div>
  )
}

export default VideoCard
