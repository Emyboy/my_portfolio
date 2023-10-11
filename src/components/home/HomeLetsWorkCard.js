import Link from "next/link";
import React from "react";

export default function HomeLetsWorkCard() {
  return (
    <div class="about-contact-box info-box shadow-box">
      <Link class="overlay-link" href="/contact"></Link>
      <img src="/assets/images/bg1.png" alt="BG" class="bg-img" />
      <img src="/assets/images/icon2.png" alt="Icon" class="star-icon" />
      <h1>
        {`Let's`} <br />
        work <span>together.</span>
      </h1>
      <Link href="/contact" class="about-btn">
        <img src="/assets/images/icon.svg" alt="Button" />
      </Link>
    </div>
  );
}
