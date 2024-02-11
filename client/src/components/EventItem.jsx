import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";

export default function EventItem({ event }) {
  console.log("Event added and displayed:", event);
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[320px]">
      <Link to={`/listing/${event._id}`} className="block">
        <img
          src={event.imageUrls[0]}
          alt="Event cover image"
          className="h-[329px] w-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="p-3">
          <p className="text-lg font-semibold text-gray-900 ">{event.name}</p>
          <div className="flex items-center gap-1 text-gray-600">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm truncate">{event.address}</p>
          </div>
          <p className="text-sm text-gray-600 truncate">{event.description}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center text-sm text-gray-600">
              <FaCity className="h-4 w-4 mr-1" />
              <p>{event.city}</p>
            </div>
            <div className="flex items-center text-sm">
              <HiOutlineIdentification className="h-4 w-4 mr-1" />
              <p>{event.ageOver18 ? "18+" : "All ages"}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
