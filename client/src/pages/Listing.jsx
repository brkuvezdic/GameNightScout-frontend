import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaCity,
} from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { SiRiotgames } from "react-icons/si";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const params = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchListing() {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }

        if (data.time) {
          data.time = new Date(data.time).toLocaleString();
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.listingId]);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-10 bg-gray-100">
      {loading && <p className="text-2xl my-7">Loading...</p>}
      {error && (
        <p className="text-3xl my-6 text-red-600">
          Failed displaying the event!
        </p>
      )}
      {listing && !loading && !error && (
        <div className="w-full max-w-screen-lg bg-white shadow-lg rounded-lg overflow-hidden">
          <Swiper navigation className="swiper-container">
            {listing.imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-2">{listing.name}</h2>
            <p className="text-lg">{listing.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center">
                <FaCity className="mr-2 text-gray-600" />
                <p className="font-semibold">{listing.city}</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-600" />
                <p className="font-semibold">{listing.address}</p>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2 text-gray-600" />
                <p className="font-semibold">{listing.time}</p>
              </div>
              <div className="flex items-center">
                <HiOutlineIdentification className="mr-2 text-gray-600" />
                <p className="font-semibold">
                  {listing.ageOver18 ? "Over 18" : "Under 18"}
                </p>
              </div>
              <div className="flex items-center">
                <FaUserFriends className="mr-2 text-gray-600" />
                <p className="font-semibold">{listing.slot}</p>
              </div>
              <div className="col-span-2 flex items-center">
                <SiRiotgames className="mr-2 text-gray-600" />
                <p className="font-semibold">Genre: {listing.genre}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
