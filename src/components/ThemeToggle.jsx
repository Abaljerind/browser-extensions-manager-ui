import { useTheme } from "./themeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex items-center">
      <button
        className="bg-icon cursor-pointer rounded-xl p-3"
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
