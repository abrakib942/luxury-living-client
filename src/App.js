import "./App.css";
import Navbar from "./Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
