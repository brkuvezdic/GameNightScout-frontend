import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
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
  console.log(loading);
  return (
    <main className="flex flex-col items-center justify-start min-h-screen pt-10">
      {loading ? <p className="text-2xl my-7">Loading...</p> : null}
      {error ? (
        <p className="text-3xl my-6">Failed displaying the event!</p>
      ) : null}
      {listing && !loading && !error && (
        <div className="w-full max-w-screen-lg">
          <Swiper navigation>
            {listing.imageUrls.map((url, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </main>
  );
}
