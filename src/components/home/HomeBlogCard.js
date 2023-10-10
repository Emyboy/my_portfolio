import React from "react";

export default function HomeBlogCard() {
  return (
    <div data-aos="zoom-in" class="aos-init aos-animate">
      <div class="about-blog-box info-box shadow-box h-full">
        <a href="blog.html" class="overlay-link"></a>
        <img src="/assets/images/bg1.png" alt="BG" class="bg-img" />
        <img src="/assets/images/gfonts.png" alt="GFonts" />
        <div class="d-flex align-items-center justify-content-between">
          <div class="infos">
            <h4>Blog</h4>
            <h1>GFonts</h1>
          </div>

          <a href="blog.html" class="about-btn">
            <img src="/assets/images/icon.svg" alt="Button" />
          </a>
        </div>
      </div>
    </div>
  );
}
