import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./sections/Home";
import Navbar from "./ui/Navbar";
import Projects from "./sections/Projects";
import AboutContact from "./sections/AboutContact";
import { useEffect, useState } from "react";
import Loader from "./pages/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed inset-0 z-50`}
      >
        <Loader />
      </div>
      <div
        className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutContact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
