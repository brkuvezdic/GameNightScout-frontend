import React from "react";

export default function Search() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen w-full md:w-1/3">
        <form className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <label className="font-semibold">Event Name:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search events..."
              className="border rounded-lg p-3 flex-grow"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Genre:</label>
            <select id="genre" className="border rounded-lg p-3 flex-grow">
              <option value="">Any</option>
              <option value="Cooperative games">Cooperative games</option>
              <option value="Role-playing game">Role-playing game</option>
              <option value="Board games">Board games</option>
              <option value="Dexterity">Dexterity</option>
              <option value="Card games">Card games</option>
              <option value="Chess">Chess</option>
              <option value="Dice games">Dice games</option>
              <option value="Drafting">Drafting</option>
              <option value="Eurogame">Eurogame</option>
              <option value="Wargame">Wargame</option>
              <option value="Worker placement">Worker placement</option>
              <option value="Area control">Area control</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">City:</label>
            <input
              type="text"
              id="city"
              placeholder="City"
              className="border rounded-lg p-3 flex-grow"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Player Slots:</label>
            <input
              type="number"
              id="slot"
              placeholder="Minimum slots"
              className="border rounded-lg p-3 flex-grow"
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Age Restriction:</label>
            <div className="flex items-center">
              <input type="checkbox" id="parking" className="w-5" />
              <span className="ml-2">Over 18</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Sort:</label>
            <select id="sort_order" className="border rounded-lg p-3 flex-grow">
              <option>Newest first</option>
              <option>Oldest first</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg uppercase">
            Search
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-semibold border-b p-3 text-gray-700 mt-5">
          Event results:
        </h1>
        {}
      </div>
    </div>
  );
}
