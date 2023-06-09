import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
    <button onClick={() => navigate('/')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Go back to Home
    </button>
  </div>
  )
}

export default NotFound