const events = [
  {
    id: 1,
    title: "Igraonica 1",
    description:
      "Igraonica u kojoj ćemo se zabavljati uz razne društvene igre.",
    organizer: "Pero",
    date: new Date(2024, 0, 30),
    city: "Zagreb",
  },
  {
    id: 2,
    title: "Igraonica 2",
    description:
      "Drugi po redu događaj igraonice. Pridružite nam se na večeri punoj igara.",
    organizer: "Bob",
    date: new Date(2024, 1, 15),
    city: "Split",
  },
  {
    id: 3,
    title: "Igraonica 3",
    description:
      "Treći događaj igraonice s mnoštvom novih igara za sve uzraste.",
    organizer: "Đuro",
    date: new Date(2024, 2, 5),
    city: "Rijeka",
  },
  {
    id: 4,
    title: "Board Game Night",
    description: "Opustite se uz društvene igre na ovom događaju.",
    organizer: "Bob4",
    date: new Date(2024, 2, 20),
    city: "Osijek",
  },
  {
    id: 5,
    title: "Game Night XL",
    description: "Velika noć igara za sve ljubitelje zabave.",
    organizer: "Bob5",
    date: new Date(2024, 3, 10),
    city: "Zadar",
  },
  {
    id: 6,
    title: "Retro Game Night",
    description: "Povratak u prošlost s retro igrama i dozom nostalgije.",
    organizer: "Bob6",
    date: new Date(2024, 4, 2),
    city: "Pula",
  },
  {
    id: 7,
    title: "Family Game Night",
    description: "Obiteljski događaj s igrama koje će zabaviti sve generacije.",
    organizer: "Bob7",
    date: new Date(2024, 5, 15),
    city: "Dubrovnik",
  },
  {
    id: 8,
    title: "Game Night Deluxe",
    description: "Ekskluzivna noć igara s raznovrsnim izborom.",
    organizer: "Bob8",
    date: new Date(2024, 6, 7),
    city: "Šibenik",
  },
  {
    id: 9,
    title: "Game Night 9",
    description:
      "Deveti po redu događaj igraonice. Pridružite nam se i budite dio zabave.",
    organizer: "Bob9",
    date: new Date(2024, 7, 1),
    city: "Varaždin",
  },
];

const exploreEvents = [
  {
    id: 10,
    title: "Kartanje s Prijateljima",
    description: "Opustite se uz večer kartanja s prijateljima i obitelji.",
    organizer: "Igrači u Srcu",
    date: new Date(2024, 8, 15),
    city: "Zagreb",
    genre: "Kartanje",
  },
  {
    id: 11,
    title: "Strategijski Turnir",
    description: "Testirajte svoje strategijske vještine na ovom turniru.",
    organizer: "Strategijski Majstori",
    date: new Date(2024, 9, 5),
    city: "Split",
    genre: "Strategijske Igre",
  },
  {
    id: 12,
    title: "Retro Gaming Night",
    description: "Povratak u prošlost uz klasike retro igara.",
    organizer: "Nostalgija Gamers",
    date: new Date(2024, 10, 20),
    city: "Rijeka",
    genre: "Retro Igre",
  },
  {
    id: 13,
    title: "Maraton Društvenih Igra",
    description: "Cijeli dan zabave s raznim društvenim igrama.",
    organizer: "Igrački Maratonci",
    date: new Date(2024, 11, 10),
    city: "Osijek",
    genre: "Društvene Igre",
  },
  {
    id: 14,
    title: "VR Igre Noć",
    description: "Iskusite virtualnu stvarnost u igrama različitih žanrova.",
    organizer: "VRXperience",
    date: new Date(2024, 12, 2),
    city: "Pula",
    genre: "Virtualna Stvarnost",
  },
  {
    id: 15,
    title: "Obiteljska Igračka Fešta",
    description: "Druženje i igre za cijelu obitelj!",
    organizer: "Igrači u Obitelji",
    date: new Date(2024, 1, 15),
    city: "Dubrovnik",
    genre: "Obiteljske Igre",
  },
];

export { events, exploreEvents };

export function getEvents() {
  return events;
}

export function getEventById(eventId) {
  return events.find((event) => event.id === eventId);
}
