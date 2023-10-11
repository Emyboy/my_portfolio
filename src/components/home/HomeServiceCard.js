import Link from "next/link";
import React from "react";

export default function HomeServiceCard() {
  return (
    <div data-aos="zoom-in" class="flex-1 aos-init aos-animate">
      <div class="about-services-box info-box shadow-box h-full">
        <Link href="/skills" class="overlay-link"></Link>
        <img src="/assets/images/bg1.png" alt="BG" class="bg-img" />
        <div class="icon-boxes">
          <i class="iconoir-camera"></i>
          <i class="iconoir-design-pencil"></i>
          <i class="iconoir-color-filter"></i>
          <i class="iconoir-dev-mode-phone"></i>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <div class="infos">
            <h4>specialization</h4>
            <h1>Services Offering</h1>
          </div>

          <Link href="/skills" class="about-btn">
            <img src="/assets/images/icon.svg" alt="Button" />
          </Link>
        </div>
      </div>
    </div>
  );
}
