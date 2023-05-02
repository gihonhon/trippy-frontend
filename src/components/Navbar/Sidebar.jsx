import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsGrid3X3GapFill, BsPeople, BsBox } from 'react-icons/bs';


const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <nav className="mt-10">
        <NavLink
          to="/"
          activeClassName="text-indigo-500"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <BsGrid3X3GapFill className="w-6 h-6" />
          <span className="mx-3">Dashboard</span>
        </NavLink>
        <NavLink
          to="/users"
          activeClassName="text-indigo-500"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <BsPeople className="w-6 h-6" />
          <span className="mx-3">Users</span>
        </NavLink>
        <NavLink
          to="/products"
          activeClassName="text-indigo-500"
          className="flex items-center px-6 py-2 text-gray-600 hover:bg-gray-100"
        >
          <BsBox className="w-6 h-6" />
          <span className="mx-3">Products</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar