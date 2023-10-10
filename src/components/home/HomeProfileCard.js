import Link from "next/link";
import React from "react";

export default function HomeProfileCard() {
  return (
    <div className="about-me-box shadow-box">
      <Link className="overlay-link" href="/about"></Link>
      <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
      <div className="img-box">
        <img src="/assets/images/me.png" alt="About Me" />
      </div>
      <div className="infos">
        <h4>A WEB DESIGNER</h4>
        <h1>David Henderson.</h1>
        <p>I am a Web Designer based in san francisco.</p>
        <a href="#" className="about-btn">
          <img src="/assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
}
