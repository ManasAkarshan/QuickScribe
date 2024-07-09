import React from 'react'

const Header = ({handleLightMode}) => {
  return (
    <div className="header flex justify-between mb-6 px-2">
        <h1 className='text-3xl'>QuickScribe</h1>
        <button onClick={()=>{handleLightMode((prevMode)=>!prevMode)}} className="btn save border-none rounded-xl bg-white text-black px-3 py-2.5 text-sm ">Toggle Mode</button>
    </div>
  )
}

export default Header