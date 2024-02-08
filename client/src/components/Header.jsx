import { FaSearch, FaUser } from "react-icons/fa";
import { GiTabletopPlayers } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <header className="bg-blue-900 text-gray-200 shadow-md">
      <div className="flex p-4 justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <GiTabletopPlayers className="text-3xl text-orange-500" />
          <h1 className="font-light text-2xl">GameNightScout</h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-blue-800 p-2 rounded-lg"
        >
          <input
            type="text"
            placeholder="Search events..."
            className="bg-transparent focus:outline-none text-white placeholder-gray-300 pl-4 pr-2 py-1 w-48"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-orange-500" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li>
              <span className="hover:text-orange-500 transition duration-300">
                Home
              </span>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <span className="hover:text-orange-500 transition duration-300">
                About
              </span>
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <li>
                <FaUser className="text-orange-500" />
              </li>
            ) : (
              <li>
                <span className="hover:text-orange-500 hover:underline">
                  Sign in
                </span>
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
