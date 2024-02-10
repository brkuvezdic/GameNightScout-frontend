import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Welcome to GameNightScout
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center">
        Find the best tabletop events in your area. Sign up to create or join an
        event.
      </p>
      <Link
        to="/search"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Browse
      </Link>
    </div>
  );
}
