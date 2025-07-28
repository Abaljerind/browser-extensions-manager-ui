import { createContext, useContext, useEffect, useState } from "react";

// Buat context
const ThemeContext = createContext();

// Fungsi untuk mendapatkan tema awal untuk user
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false; // secara default atur tema ke light mode jika pengecekan value window adalah undefined
};

// provider yang akan membungkus seluruh komponen website dengan tema yang sesuai
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // dengan useEffect, kita update class pada documentElemet atau <html> dan localStorage nya
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook / function agar bisa digunakan di komponen lain
export const useTheme = () => useContext(ThemeContext);
