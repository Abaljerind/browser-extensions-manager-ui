import { useTheme } from "./themeContext";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-card-filter flex items-center justify-between rounded-lg p-3 shadow-md">
      <img
        src={!darkMode ? "./images/logo.svg" : "./images/logo-dark.svg"}
        alt="logo extensions"
      />
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
