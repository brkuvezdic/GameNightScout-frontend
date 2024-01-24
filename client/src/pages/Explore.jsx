import React, { useState, useEffect } from "react";
import { exploreEvents } from "../store/store";

const Explore = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(exploreEvents);
  }, []);

  const filteredEvents = selectedCity
    ? events.filter((event) => event.city === selectedCity)
    : events;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Svi događaji</h2>
      <select
        onChange={(e) => setSelectedCity(e.target.value)}
        value={selectedCity}
        className="mb-4"
      >
        <option value="">Odaberite Grad</option>
        {/* Dodajte opcije za gradove */}
        {Array.from(new Set(events.map((event) => event.city))).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-3 gap-4">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-4 cursor-pointer"
            onClick={() => handleEventClick(event.id)}
          >
            <div className="bg-white h-32 w-32 flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl font-bold text-gray-800">
                #{index + 1}
              </span>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">{event.title}</div>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
