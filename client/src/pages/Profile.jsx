import React from "react";
import { FaUser } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center my-6">Profile</h1>

      <form className="flex flex-col gap-4">
        <ul className="flex justify-center">
          <li>
            {}
            <FaUser className="text-orange-500 text-6xl object-cover cursor-pointer self-center mt-3" />
          </li>
        </ul>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg "
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg "
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg "
        />
        <button className="bg-orange-500 text-white rounded-lg p-2 uppercase hover:opacity-95 disabled-80">
          Update
        </button>
      </form>

      <div className="flex justify-between mt-4">
        <span className="text-red-600 cursor-pointer">Delete account</span>
        <span className="text-red-600 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
