import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import SelectedFeaturedEvent from "./pages/selectedFeaturedEvent";
import AddEvent from "./pages/AddEvent";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-event" element={<AddEvent />} />

        <Route
          path="/selected-featured-event/:eventId"
          element={<SelectedFeaturedEvent />}
        />
      </Routes>
    </BrowserRouter>
  );
}
