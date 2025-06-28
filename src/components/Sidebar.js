import React from 'react'

function Sidebar() {
  return (
    <aside className="col-span-12 md:col-span-3 bg-white p-4 shadow-md rounded-md space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Experience</h3>
        <ul className="space-y-1 text-sm">
          <li><input type="checkbox" /> 0-1 Years</li>
          <li><input type="checkbox" /> 1-3 Years</li>
          <li><input type="checkbox" /> 3-5 Years</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Salary</h3>
        <ul className="space-y-1 text-sm">
          <li><input type="checkbox" /> 3-6 LPA</li>
          <li><input type="checkbox" /> 6-10 LPA</li>
          <li><input type="checkbox" /> 10+ LPA</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Location</h3>
        <ul className="space-y-1 text-sm">
          <li><input type="checkbox" /> Bangalore</li>
          <li><input type="checkbox" /> Delhi NCR</li>
          <li><input type="checkbox" /> Remote</li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
