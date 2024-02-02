import React, { useState } from "react";

export default function CreateListing() {
  const [selectedGenre, setSelectedGenre] = useState(""); // State to track selected genre

  // Function to handle genre selection
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const genreOptions = [
    "Cooperative games",
    "Role-playing game",
    "Board games",
    "Dexterity",
    "Card games",
    "Chess",
    "Dice games",
    "Drafting",
    "Eurogame",
    "Wargame",
    "Worker placement",
    "Area control",
  ];

  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create an Event
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="32"
            minLength="1"
            required
          />
          <input
            type="text"
            placeholder="City"
            className="border p-3 rounded-lg"
            id="city"
            maxLength="32"
            minLength="1"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="ageover18" className="w-5" />
              <span>Age over 18</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              id="slot"
              min="6"
              required
              className="p-3 border border-color-gray-500 rounded-lg"
            />
            <p>Player slots</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="genre" className="font-semibold">
              Genre:
            </label>
            <select
              id="genre"
              value={selectedGenre}
              onChange={handleGenreChange}
              className="border p-3 rounded-lg"
              required
            >
              <option value="">Select Genre</option>
              {genreOptions.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-500 ml-2">
              The first image will be the cover image (max 3)
            </span>
          </p>
          <div className="flexe gap-4">
            <input
              className="p-3 border border-gray-400 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-green-600 border border-green-600 rounded-lg uppercase hover:shadow-lg disabled:opacity-80 my-5">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-600 text-white rounded-lg uppercase hover:opacity-96 disabled:opacity-80">
            Create Event
          </button>
        </div>
      </form>
    </main>
  );
}
