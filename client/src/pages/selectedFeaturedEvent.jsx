import React from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../store/store";
function SelectedFeaturedEvent() {
  const { eventId } = useParams();
  const event = getEventById(Number(eventId));

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-sky-300 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
      <p className="text-gray-700 mb-4">{event.description}</p>
      <p className="text-gray-600">Organizirao/la: {event.organizer}</p>
    </div>
  );
}

export default SelectedFeaturedEvent;
