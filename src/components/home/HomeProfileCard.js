import { VARS } from "@/DATABASE";
import Link from "next/link";
import React from "react";

export default function HomeProfileCard() {
  return (
    <div className="about-me-box shadow-box">
      <Link className="overlay-link" href="/about"></Link>
      <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
      <div className="img-box">
        <img src="/img/mee.jpg" alt="About Me" />
      </div>
      <div className="infos">
        <h4>FULL STACK DEV</h4>
        <h1>{VARS.full_name}</h1>
        <p>I am a full stack web developer with over 4+ years of experience.</p>
        <a href="#" className="about-btn">
          <img src="/assets/images/icon.svg" alt="Button" />
        </a>
      </div>
    </div>
  );
}
