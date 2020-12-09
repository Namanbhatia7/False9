import React from "react";
import "./footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <h6 className="footer-text">
          Made using{" "}
          <a href="https://www.football-data.org/">Football-Data.org's API</a>
        </h6>
        <h6 className="footer-text">&#169; {date}</h6>
      </div>
    </footer>
  );
}

export default Footer;
