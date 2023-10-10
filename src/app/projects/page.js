import EachProjectCardSM from '@/components/EachProjectCardSM'
import React from 'react'

export default function page() {
	return (
		<section className="projects-area">
			<div className="container">
				<h1 className="section-heading aos-init aos-animate" data-aos="fade-up">
					<img src="/assets/images/star-2.png" alt="Star" /> All Projects{' '}
					<img src="assets/images/star-2.png" alt="Star" />
				</h1>
				<div className="row">
					<div className="col-md-4">
						<EachProjectCardSM />
						<EachProjectCardSM />
						<EachProjectCardSM />
					</div>
					<div className="col-md-8">
						<h1
							className="section-heading aos-init aos-animate"
							data-aos="fade-up"
						>
							<img src="assets/images/star-2.png" alt="Star" /> All Projects{' '}
							<img src="assets/images/star-2.png" alt="Star" />
						</h1>
						<div className="d-flex align-items-start gap-24">
							<EachProjectCardSM />
							<EachProjectCardSM />
						</div>
						<div className="d-flex align-items-start gap-24">
							<EachProjectCardSM />
							<EachProjectCardSM />
						</div>
						<div className="d-flex align-items-start gap-24">
							<EachProjectCardSM />
							<EachProjectCardSM />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
