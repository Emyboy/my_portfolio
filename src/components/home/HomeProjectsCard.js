import Link from 'next/link';
import React from 'react'

export default function HomeProjectCard () {
  return (
    <div data-aos="zoom-in" className="aos-init aos-animate">
      <div className="about-project-box info-box shadow-box h-full">
        <Link className="overlay-link" href="/projects"></Link>
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <img src="/assets/images/my-works.png" alt="My Works" />
        <div className="d-flex align-items-center justify-content-between">
          <div className="infos">
            <h4>SHOWCASE</h4>
            <h1>Projects</h1>
          </div>

          <Link href="/projects" className="about-btn">
            <img src="/assets/images/icon.svg" alt="Button" />
          </Link>
        </div>
      </div>
    </div>
  );
};