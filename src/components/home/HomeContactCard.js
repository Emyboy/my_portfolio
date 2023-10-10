import Link from "next/link";
import React from "react";

export default function HomeContactCard() {
  return (
    <div data-aos="zoom-in" className="aos-init aos-animate">
      <div className="about-profile-box info-box shadow-box h-full">
        <img src="assets/images/bg1.png" alt="BG" className="bg-img" />
        <div className="inner-profile-icons shadow-box">
          <a href="#">
            <i className="iconoir-github"></i>
          </a>
          <a href="#">
            <i className="iconoir-twitter"></i>
          </a>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="infos">
            <h4>Stay with me</h4>
            <h1>Profiles</h1>
          </div>

          <Link href="/contact" className="about-btn">
            <img src="assets/images/icon.svg" alt="Button" />
          </Link>
        </div>
      </div>
    </div>
  );
}
