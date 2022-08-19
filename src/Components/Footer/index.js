import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <img
        src={process.env.PUBLIC_URL + "/images/logo2.png"}
        className="footer-logo"
        alt="Cool Summer"
      />
      <p>Buenos Aires, Argentina</p>
      <p>Tel / Whatsapp: +54 9 11 4494 9207</p>
      <a href="https://instagram.com/coolsummerok/">
        <i className="fab fa-instagram instagram"></i>
      </a>
    </div>
  );
}
