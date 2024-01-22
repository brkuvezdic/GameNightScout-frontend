// SelectedFeaturedEvent.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../store/store"; // Ažurirajte putanju prema vašem direktoriju
function SelectedFeaturedEvent() {
  const { eventId } = useParams();
  const event = getEventById(Number(eventId)); // Pretpostavljamo da je eventId broj

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Organizirao/la: {event.organizer}</p>
      {/* Dodajte ostale informacije koje želite prikazati */}
    </div>
  );
}

export default SelectedFeaturedEvent;
