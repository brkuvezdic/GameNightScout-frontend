import React from "react";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../store/store";

function Featured() {
  const navigate = useNavigate();
  const events = getEvents();

  while (events.length < 9) {
    events.push({
      id: events.length + 1,
      title: "New Event",
      description: "Opis novog događaja",
    });
  }

  function handleEventClick(eventId) {
    navigate(`/selected-featured-event/${eventId}`);
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Istaknuti događaji</h2>
      <div className="grid grid-cols-3 gap-4">
        {events.map((event, index) => (
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
}

export default Featured;
