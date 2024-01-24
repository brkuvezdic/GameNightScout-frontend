import React, { useState } from "react";
import { getEvents } from "../store/store";

function Filter() {
  const events = getEvents();
  const allCities = [...new Set(events.map((event) => event.city))];
  const allGenres = [...new Set(events.map((event) => event.genre))];

  const [selectedCity, setSelectedCity] = useState("Svi gradovi");
  const [selectedGenre, setSelectedGenre] = useState("Svi žanrovi");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const filteredEvents = events.filter(
    (event) =>
      (selectedCity === "Svi gradovi" || event.city === selectedCity) &&
      (selectedGenre === "Svi žanrovi" || event.genre === selectedGenre)
  );

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Filtriraj događaje
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-white">Grad:</label>
            <select
              onChange={handleCityChange}
              value={selectedCity}
              className="w-full p-2 rounded bg-gray-100"
            >
              <option value="Svi gradovi">Svi gradovi</option>
              {allCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-white">Žanr:</label>
            <select
              onChange={handleGenreChange}
              value={selectedGenre}
              className="w-full p-2 rounded bg-gray-100"
            >
              <option value="Svi žanrovi">Svi žanrovi</option>
              {allGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
