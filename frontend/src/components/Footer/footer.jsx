import React from "react";
import "./footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-text">© {date} made with React.Js</span>
      </div>
    </footer>
  );
}

export default Footer;
