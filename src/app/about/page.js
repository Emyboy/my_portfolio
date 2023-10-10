import AboutAvatarCard from '@/components/about/AboutAvatarCard'
import AboutContentCard from '@/components/about/AboutContentCard'
import AboutEducationCard from '@/components/about/AboutEducationCard'
import AboutExperienceCard from '@/components/about/AboutExperienceCard'
import HomeContactCard from '@/components/home/HomeContactCard'
import HomeCredentialsCard from '@/components/home/HomeCredentialsCard'
import HomeLetsWorkCard from '@/components/home/HomeLetsWorkCard'
import React from 'react'

export default function page() {
	return (
		<section className="about-area">
			<div className="container">
				<div class="d-flex about-me-wrap align-items-start gap-24">
					<AboutAvatarCard />
					<AboutContentCard />
				</div>
				<div className="row mt-24">
					<div class="col-md-6 aos-init aos-animate" data-aos="zoom-in">
						<AboutExperienceCard />
					</div>
					<div class="col-md-6 aos-init aos-animate" data-aos="zoom-in">
						<AboutEducationCard />
					</div>
				</div>
				<div className="row mt-24">
					<div className="col-md-12">
						<div className="d-flex profile-contact-credentials-wrap gap-24">
							<HomeContactCard />
							<div className="flex-1">
								<HomeLetsWorkCard />
							</div>
							<HomeCredentialsCard />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
