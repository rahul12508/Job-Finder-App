import React from 'react'

function SearchBar() {
  return (
     <div className="bg-white p-4 shadow-md flex flex-col md:flex-row gap-4 items-center justify-center">
      <input
        type="text"
        placeholder="Job title, keywords"
        className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
      />
      <input
        type="text"
        placeholder="Location"
        className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Search</button>
    </div>
  )
}

export default SearchBar
