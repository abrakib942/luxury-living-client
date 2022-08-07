import "./App.css";
import Navbar from "./Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Book from "./Pages/Dashboard/Book";
import BookingList from "./Pages/Dashboard/BookingList";
import Review from "./Pages/Dashboard/Review";
import AllServices from "./Pages/AllServices";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/service" element={<AllServices />} />

        {/* nested */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="book/:id" element={<Book />} />
          {/* <Route path="book" element={<Book />} /> */}
          <Route path="booking-list" element={<BookingList />} />
          <Route path="add-review" element={<Review />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
