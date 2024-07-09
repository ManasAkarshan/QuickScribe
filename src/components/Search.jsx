import React from 'react'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search flex items-center justify-start py-2 bg-[#1F2937] mb-4 rounded-md px-3'>
        <i className="fa-solid fa-magnifying-glass pr-3"></i>
        <input onChange={(e)=>{handleSearchNote(e.target.value)}} type="text" placeholder='Search note...' className='border-none outline-none bg-[#1F2937] flex-1 text-base'/>
        
    </div>
  )
}

export default Search