import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <a href="index.html" className="logo">
            <img src="/assets/images/logo.svg" alt="Logo" />
          </a>
          <ul className="footer-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="works.html">Works</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <p className="copyright">
            © All rights reserved by <span>iDegin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
