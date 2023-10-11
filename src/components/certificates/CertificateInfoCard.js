import { VARS } from '@/DATABASE'
import Link from 'next/link'
import React from 'react'

export default function CertificateInfoCard() {
	return (
		<div
			className="credential-sidebar-wrap aos-init aos-animate"
			data-aos="zoom-in"
		>
			<div className="credential-sidebar text-center">
				<div className="shadow-box">
					<img src="assets/images/bg1.png" alt="BG" className="bg-img" />
					<div className="img-box">
						<img src="assets/images/me.png" alt="About Me" />
					</div>
					<h2>{VARS.full_name}</h2>
					<p>@emeka_ifeora</p>

					<ul className="social-links d-flex justify-content-center">
						<li>
							<a href="#">
								<i className="iconoir-dribbble"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="iconoir-twitter"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="iconoir-instagram"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="iconoir-facebook-tag"></i>
							</a>
						</li>
					</ul>

					<Link href="/contact" className="theme-btn">
						Contact Me
					</Link>
				</div>
			</div>
		</div>
	)
}
