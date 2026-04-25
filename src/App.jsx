import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./sections/Home";
import Navbar from "./ui/Navbar";
import Projects from "./sections/Projects";
import AboutContact from "./sections/AboutContact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutContact />} />
      </Routes>
    </>
  );
}

export default App;
