import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-gray-900 p-4">
      <div className="text-center">
        {/* Big, eye-catching 404 number with a gradient */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mb-4">
          404
        </h1>

        {/* Heading and a sub-heading for context */}
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-700">
          Oops, page not found!
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-lg mx-auto">
          We could not find the page you were looking for. It might have been
          moved or deleted.
        </p>

        {/* A stylish button to go back to the home page */}
        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
