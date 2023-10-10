import React from "react";

export default function HomeNumbersCard() {
  return (
    <div class="about-client-box info-box shadow-box">
      <img src="/assets/images/bg1.png" alt="BG" class="bg-img" />
      <div class="clients d-flex align-items-start gap-24 justify-content-center">
        <div class="client-item">
          <h1>04+</h1>
          <p>
            Years <br />
            Experience
          </p>
        </div>

        <div class="client-item">
          <h1>13+</h1>
          <p>
            CLIENTS <br />
            WORLDWIDE
          </p>
        </div>

        <div class="client-item">
          <h1>4+</h1>
          <p>
            Total <br />
            Projects
          </p>
        </div>
      </div>
    </div>
  );
}
