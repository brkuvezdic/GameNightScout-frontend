import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center mt-10 mb-5">
        Dobrodošli u GameNightScout
      </h1>
      <p className="text-xl text-center mb-10">
        Pronađite ili organizirajte društvene igre i druženja u svojoj
        zajednici.
      </p>
      <div className="flex justify-center">
        <Link
          to="/signup"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pridružite se sada
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
