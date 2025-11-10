import React from 'react'
import ButtonList from '../components/ButtonList'
import VideoContainer from '../components/VideoContainer'
import SideIcons from '../components/SideIcons'

const MainContainer = () => {
  return (
    <>    
    <div>
       <div className='bg-slate-100 md:py-3  py-2 px-6 md:px-8'>
        <ButtonList/>
    </div>

    <div>
       <VideoContainer/>
    </div>
   
    </div>
  
    </>

  )
};

export default MainContainer
