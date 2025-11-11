import React from 'react'
import ButtonList from '../components/ButtonList'
import VideoContainer from '../components/VideoContainer'

const MainContainer = () => {
  return (
    <div className="pt-16 bg-slate-100 min-h-screen">

      <div className='md:py-3 py-2 px-6 md:px-8'>
        <ButtonList />
      </div>
      <div>
        <VideoContainer />
      </div>
    
    </div>
  )
}

export default MainContainer
