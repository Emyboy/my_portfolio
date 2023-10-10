import { VARS } from '@/DATABASE'
import React from 'react'

export default function AboutContentCard() {
  return (
		<div class="about-details aos-init aos-animate" data-aos="zoom-in">
			<h1 class="section-heading aos-init aos-animate" data-aos="fade-up">
				<img src="assets/images/star-2.png" alt="Star" /> Self-summary{' '}
				<img src="assets/images/star-2.png" alt="Star" />
			</h1>
			<div class="about-details-inner shadow-box">
				<img src="assets/images/icon2.png" alt="Star" />
				<h1>{VARS.full_name}</h1>
				<p>
					I am a San francisco-based product designer with a focus on web
					design, illustration, a visual development. I have a diverse range of
					experience having worked across various fields and industries.
				</p>
			</div>
		</div>
	)
}
