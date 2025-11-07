import React from 'react'
import { useSearchParams } from 'react-router-dom'


const Watch = ({info}) => {
    console.log("in watch page:", info);
const[searchParams] = useSearchParams();

  return (
<div className='max-w-screen min-h-screen bg-slate-100'>
  <div className='container mx-auto px-4'>
    <div className='py-4'>
           <iframe className='rounded-3xl' width="750" height="380" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>

    <div>
        <h2></h2>
    </div>

  </div>
</div>

  )
}

export default Watch
