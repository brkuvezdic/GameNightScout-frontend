import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function EventItem({ event }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[320px]">
      <Link to={`/listing/${event._id}`} className="block">
        <img
          src={event.imageUrls[0]}
          alt="Event cover image"
          className="h-[329px] w-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-3">
          <p className="text-lg font-semibold text-gray-900 truncate">
            {event.name}
          </p>
          <div className="flex items-center gap-1 text-gray-600">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm truncate">{event.address}</p>
          </div>
          <p className="text-sm text-gray-600 truncate">{event.description}</p>
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-sm text-gray-600">{event.city}</p>
              <p className="text-sm">
                {event.ageOver18 ? "Over 18" : "Under 18"}
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
