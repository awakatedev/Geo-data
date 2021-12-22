import "../assets/styles/components/Header.scss";
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from "@iconify/react";

const Header = () => {
  // const [theme, setTheme] = useState(false);
  const [theme, setTheme] = useState("light");
  // const [colorTheme, setColorTheme] = useState("light");

  useEffect(() => {
    console.count("Header");
    const currentTheme = localStorage.getItem("Theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    document.body.className = theme;
  }, [theme]);

  const handleClick = async () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.setItem("Theme", theme);
    document.body.className = await theme;
  };

  return (
    <>
      <header className="header">
        <section className="header--container">
          <div className="header--logo">
            <Icon icon="noto:avocado" />
          </div>
          <div>
            <input
              type="text"
              autoComplete="off"
              placeholder="City name..."
              name="browser"
              defaultValue=""
            />
          </div>
          <div className="header--themeSwitch">
            <button
              type="button"
              onClick={() => {
                handleClick();
              }}
            >
              Theme
            </button>
          </div>
        </section>
      </header>
    </>
  );
};
export default Header;
