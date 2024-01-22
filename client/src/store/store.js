const events = [
  {
    id: 1,
    title: "Game Night 1",
    description: "Detalji o Game Night 1",
    organizer: "Pero",
  },
  {
    id: 2,
    title: "Game Night 2",
    description: "Detalji o Game Night 2",
    organizer: "Bob",
  },
  {
    id: 3,
    title: "Game Night 3",
    description: "Detalji o Game Night 2",
    organizer: "Đuro",
  },
  {
    id: 4,
    title: "Game Night 4",
    description: "Detalji o Game Night 2",
    organizer: "Bob4",
  },
  {
    id: 5,
    title: "Game Night 5",
    description: "Detalji o Game Night 2",
    organizer: "Bob5",
  },
  {
    id: 6,
    title: "Game Night 6",
    description: "Detalji o Game Night 2",
    organizer: "Bob6",
  },
  {
    id: 7,
    title: "Game Night 7",
    description: "Detalji o Game Night 2",
    organizer: "Bob7",
  },
  {
    id: 8,
    title: "Game Night 8",
    description: "Detalji o Game Night 2",
    organizer: "Bob8",
  },
  {
    id: 9,
    title: "Game Night 9",
    description: "Detalji o Game Night 2",
    organizer: "Bob9",
  },
];

export function getEvents() {
  return events;
}

export function getEventById(eventId) {
  return events.find((event) => event.id === eventId);
}
