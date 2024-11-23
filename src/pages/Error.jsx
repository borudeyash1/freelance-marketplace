import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <section className="text-center px-4">
        <h1 className="text-white text-4xl font-bold">PAGE NOT FOUND</h1>
        <h2 className="text-red-600 text-2xl mt-5">ERROR 404</h2>
        <p className="text-gray-300 mt-4">Sorry, the page you are looking for does not exist!</p>
        <Link to="/">
          <button className="mt-6 px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition duration-200">
            Go Back Home
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Error;