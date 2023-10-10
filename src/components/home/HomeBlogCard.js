import Link from "next/link";
import React from "react";

export default function HomeBlogCard() {
  return (
    <div data-aos="zoom-in" className="aos-init aos-animate">
      <div className="about-blog-box info-box shadow-box h-full">
        <Link href="/blog" className="overlay-link"></Link>
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <img src="/assets/images/gfonts.png" alt="GFonts" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="infos">
            <h4>Blog</h4>
            <h1>GFonts</h1>
          </div>

          <Link href="/blog" className="about-btn">
            <img src="/assets/images/icon.svg" alt="Button" />
          </Link>
        </div>
      </div>
    </div>
  );
}
