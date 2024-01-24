import React, { useState } from "react";

export default function MyEvents() {
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Dodaj novi događaj:",
      eventName,
      eventCategory,
      eventLocation,
      eventTime
    );
    console.log("Naslovna slika:", coverImage);
  };

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setCoverImage(selectedImage);
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Dodaj Novi Event
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Ime eventa:
          </label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="bg-gray-200 px-4 py-2 w-full rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Kategorija eventa:
          </label>
          <input
            type="text"
            value={eventCategory}
            onChange={(e) => setEventCategory(e.target.value)}
            className="bg-gray-200 px-4 py-2 w-full rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Lokacija:
          </label>
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            className="bg-gray-200 px-4 py-2 w-full rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Vrijeme:
          </label>
          <input
            type="datetime-local"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="bg-gray-200 px-4 py-2 w-full rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Naslovna slika:
          </label>
          <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 text-center cursor-pointer">
            {coverImage ? (
              <img
                src={URL.createObjectURL(coverImage)}
                alt="Cover"
                className="w-full h-auto mb-2"
              />
            ) : (
              <div>
                <p>Kliknite da biste dodali sliku</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Dodaj Event
          </button>
        </div>
      </form>
    </div>
  );
}
