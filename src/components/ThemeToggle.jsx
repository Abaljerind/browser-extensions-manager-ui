import { useTheme } from "./themeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex items-center">
      <button
        className="focus-state bg-icon hover:bg-toggle-inactive cursor-pointer rounded-xl p-3 duration-300"
        onClick={() => setDarkMode((prevTheme) => !prevTheme)}
      >
        {!darkMode ? (
          <img src="./images/icon-moon.svg" alt="Icon Moon" />
        ) : (
          <img src="./images/icon-sun.svg" alt="Icon Sun" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
