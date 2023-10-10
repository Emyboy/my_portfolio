import React from "react";

export default function HomeProfileCard() {
  return (
    <div class="about-me-box shadow-box">
      <a class="overlay-link" href="about.html"></a>
      <img src="/assets/images/bg1.png" alt="BG" class="bg-img" />
      <div class="img-box">
        <img src="/assets/images/me.png" alt="About Me" />
      </div>
      <div class="infos">
        <h4>A WEB DESIGNER</h4>
        <h1>David Henderson.</h1>
        <p>I am a Web Designer based in san francisco.</p>
        <a href="#" class="about-btn">
          <img src="/assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
}
