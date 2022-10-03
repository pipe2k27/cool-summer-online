import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [clicked, clicker] = useState(false);
  const size = useWindowSize();

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  let wide = {
    bottom: -56 + size.width * 0.01,
  };

  return (
    <div className="header" id="header">
      {/* <img
        src={process.env.PUBLIC_URL + "/images/blob-bar.png"}
        className="blob-bar"
        style={size.width > 530 ? wide : null}
      ></img> */}

      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/images/logo2.png"}
          alt="logo-word"
          className="logo-word"
        ></img>
      </Link>

      <div className={clicked ? "navbar drop" : "navbar colapse"}>
        <Link to="/" className="nav-element">
          <p>Home</p>
          <span className="nav-span"></span>
        </Link>
        <Link to="/construccion" className="nav-element">
          <p>Construcción</p>
          <span className="nav-span"></span>
        </Link>
        <Link to="/luces" className="nav-element">
          <p>Luces</p>
          <span className="nav-span"></span>
        </Link>
        <Link to="/solar" className="nav-element">
          <p>Calefacción Solar</p>
          <span className="nav-span"></span>
        </Link>
        <Link to="/baby-safe" className="nav-element">
          <p>Baby Safe</p>
          <span className="nav-span"></span>
        </Link>
      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
