import React from 'react'
 
function Header() {

  return (
    <div>
       <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">JobFinderApp</h1>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">Login</a>
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">Register</a>
      </nav>
    </header>

    </div>
  )
}

export default Header
