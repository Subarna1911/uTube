import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='inline-block px-6 py-2.5 bg-white text-black rounded-lg hover:bg-black hover:text-white transition-colors font-medium hover:cursor-pointer'>{name}</button>
    </div>
  )
}

export default Button
