import Link from 'next/link'
import React from 'react'

export default function EachProjectCardSM() {
	return (
		<div data-aos="zoom-in" className="aos-init aos-animate">
			<div className="project-item shadow-box">
				<Link className="overlay-link" href="/projects/45=234=52353"></Link>
				<img src="assets/images/bg1.png" alt="BG" className="bg-img" />
				<div className="project-img">
					<img src="assets/images/project1.jpg" alt="Project" />
				</div>
				<div className="d-flex align-items-center justify-content-between">
					<div className="project-info">
						<p>WEB DESIGNING</p>
						<h1>Dynamic</h1>
					</div>
					<Link href="/projects/45=234=52353" className="project-btn">
						<img src="assets/images/icon.svg" alt="Button" />
					</Link>
				</div>
			</div>
		</div>
	)
}
