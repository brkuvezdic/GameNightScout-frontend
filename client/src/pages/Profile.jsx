import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profil</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          E-mail:
        </label>
        <input
          type="text"
          value="testmail@example.com"
          readOnly
          className="bg-gray-200 px-4 py-2 w-full rounded-lg"
        />
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Pregledaj moje evente
        </button>
      </div>
      <div>
        <Link to="/add-event">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Dodaj event
          </button>
        </Link>
      </div>
    </div>
  );
}
