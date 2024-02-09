import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [filterData, setFilterData] = useState({
    searchTerm: "",
    city: "",
    genre: "",
    ageOver18: false,
    sort: "createdAt",
    order: "desc",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [availableCities, setAvailableCities] = useState([]);

  useEffect(() => {
    if (!submitted) return;

    const urlParams = new URLSearchParams(location.search);
    const fetchEvents = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      setLoading(false);

      const cities = [...new Set(data.map((event) => event.city))];
      setAvailableCities(cities);

      const filteredEvents = data.filter((event) => {
        let isFiltered = true;

        if (
          filterData.searchTerm &&
          !event.name
            .toLowerCase()
            .includes(filterData.searchTerm.toLowerCase())
        ) {
          isFiltered = false;
        }

        if (
          filterData.city &&
          event.city.toLowerCase() !== filterData.city.toLowerCase()
        ) {
          isFiltered = false;
        }

        if (
          filterData.genre &&
          event.genre.toLowerCase() !== filterData.genre.toLowerCase()
        ) {
          isFiltered = false;
        }

        if (filterData.ageOver18 && event.ageLimit < 18) {
          isFiltered = false;
        }

        return isFiltered;
      });

      console.log(filteredEvents);
    };

    fetchEvents();
  }, [location.search, filterData, submitted]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    // Special handling for the sort filter
    if (id === "sort") {
      const [sortValue, orderValue] = value.split("_");
      setFilterData((prevState) => ({
        ...prevState,
        sort: sortValue,
        order: orderValue,
      }));
    } else {
      setFilterData((prevState) => ({
        ...prevState,
        [id]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    Object.entries(filterData).forEach(([key, value]) => {
      if (value !== "" && value !== false) {
        urlParams.append(key, value);
      }
    });
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen w-full md:w-1/3">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Event Name:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search events..."
              className="border rounded-lg p-3 flex-grow"
              value={filterData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Genre:</label>
            <select
              id="genre"
              className="border rounded-lg p-3 flex-grow"
              value={filterData.genre}
              onChange={handleChange}
            >
              <option value="">Any</option>
              <option value="Cooperative games">Cooperative games</option>
              <option value="Role-playing game">Role-playing game</option>
              <option value="Board games">Board games</option>
              <option value="Dexterity">Dexterity</option>
              <option value="Card games">Card games</option>
              <option value="Chess">Chess</option>
              <option value="Dice games">Dice games</option>
              <option value="Drafting">Drafting</option>
              <option value="Eurogame">Eurogame</option>
              <option value="Wargame">Wargame</option>
              <option value="Worker placement">Worker placement</option>
              <option value="Area control">Area control</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">City:</label>
            <select
              id="city"
              className="border rounded-lg p-3 flex-grow"
              value={filterData.city}
              onChange={handleChange}
            >
              <option value="">Any</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Age Restriction:</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="ageOver18"
                className="w-5"
                checked={filterData.ageOver18}
                onChange={handleChange}
              />
              <span className="ml-2">Over 18</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="font-semibold">Sort:</label>
            <select
              id="sort"
              className="border rounded-lg p-3 flex-grow"
              onChange={handleChange}
              value={`${filterData.sort}_${filterData.order}`}
            >
              <option value="createdAt_desc">Newest first</option>
              <option value="createdAt_asc">Oldest first</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg uppercase">
            Search
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-semibold border-b p-3 text-gray-700 mt-5">
          Event results:
        </h1>
      </div>
    </div>
  );
}
