import { FaSearch } from "react-icons/fa";
import { GiTabletopPlayers } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 text-gray-200 shadow-md">
      <div className="flex p-4 justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <GiTabletopPlayers className="text-3xl text-orange-500" />
          <h1 className="font-light text-2xl">GameNightScout</h1>
        </Link>

        <form className="flex items-center bg-blue-800 p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search events..."
            className="bg-transparent focus:outline-none text-white placeholder-gray-300 pl-4 pr-2 py-1 w-48"
          />
          <button type="submit" className="p-2">
            <FaSearch className="text-orange-500" />
          </button>
        </form>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className="hover:text-orange-500 transition duration-300"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
