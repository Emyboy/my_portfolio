import EachSkill from '@/components/skills/EachSkill'
import SkillLeftBar from '@/components/skills/SkillLeftBar'
import React from 'react'

export default function page() {
	return (
		<section className="service-area">
			<div className="service-area">
				<div className="container">
					<div className="row">
						<SkillLeftBar />
						<div className="col-md-8">
							<h1
								class="section-heading aos-init aos-animate"
								data-aos="fade-up"
							>
								<img src="assets/images/star-2.png" alt="Star" /> My Offerings{' '}
								<img src="assets/images/star-2.png" alt="Star" />
							</h1>
							<div className="service-content-wrap aos-init aos-animate">
								<div className="service-content-inner shadow-box">
									<div className="service-items">
										<EachSkill />
										<EachSkill />
										<EachSkill />
										<EachSkill />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
