import React from "react";

function Featured() {
  const events = [
    { title: "Game Night 1", description: "Opis događaja 1" },
    { title: "Game Night 2", description: "Opis događaja 2" },
    { title: "Game Night 3", description: "Opis događaja 3" },
    { title: "Game Night 4", description: "Opis događaja 4" },
    { title: "Game Night 5", description: "Opis događaja 5" },
    { title: "Game Night 6", description: "Opis događaja 6" },
    { title: "Game Night 7", description: "Opis događaja 7" },
    { title: "Game Night 8", description: "Opis događaja 8" },
    { title: "Game Night 9", description: "Opis događaja 9" },
  ];

  while (events.length < 9) {
    events.push({ title: "New Event", description: "Opis novog događaja" });
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Istaknuti događaji</h2>
      <div className="grid grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg p-4"
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
