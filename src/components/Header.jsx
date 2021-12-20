import "../assets/styles/components/Header.scss";
import React, { useState, useEffect } from "react";
import { Icon, InlineIcon } from "@iconify/react";

const Header = () => {
  const [theme, setTheme] = useState(false);

  useEffect = () => {
    const currentTheme = localStorage.getItem("Theme");
    if (currentTheme) {
      setTheme(currentTheme);
    }
  };

  let themeColor = "light";
  // document.body.className=(themeColor);
  const handleClick = (themeColor) => {
    setTheme(themeColor);
    localStorage.setItem("Theme", themeColor);
    document.body.className = themeColor;
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
              autocomplete="off"
              placeholder="City name..."
              name="browser"
              value=""
            />
          </div>
          <div className="header--themeSwitch">
            <button
              onClick={() =>
                handleClick(
                  themeColor === "light"
                    ? (themeColor = "dark")
                    : (themeColor = "light")
                )
              }
            >
              theme
            </button>
          </div>
        </section>
      </header>
      <button></button>
    </>
  );
};
export default Header;
