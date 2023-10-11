import Link from 'next/link'
import React from 'react'

export default function HomeCredentialsCard() {
	return (
		<div data-aos="zoom-in" className="aos-init aos-animate">
			<div className="about-crenditials-box info-box shadow-box h-full">
				<Link className="overlay-link" href="/certificates"></Link>
				<img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
				<img src="/assets/images/sign.png" alt="Sign" />
				<div className="d-flex align-items-center justify-content-between">
					<div className="infos">
						<h4>more about me</h4>
						<h1>Certificates</h1>
					</div>

					<Link href="/certificates" className="about-btn">
						<img src="/assets/images/icon.svg" alt="Button" />
					</Link>
				</div>
			</div>
		</div>
	)
}
