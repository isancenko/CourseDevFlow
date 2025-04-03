"use client";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div>
      <h1 className="background-light900_dark200">Hello</h1>
      <h1 className="background-light900_dark200">Hello</h1>
      <button
        onClick={toggleDarkMode}
        className="mt-4 px-4 py-2 text-black rounded-lg cursor-pointer"
      >
        {darkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
};

export default Home;
