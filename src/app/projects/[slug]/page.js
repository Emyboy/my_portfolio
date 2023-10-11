import ProjectsAbout from '@/components/projects/ProjectsAbout'
import ProjectsDemoVideo from '@/components/projects/ProjectsDemoVideo'
import ProjectsGallery from '@/components/projects/ProjectsGallery'
import React from 'react'

export default function page() {
  return (
		<>
			<section class="breadcrumb-area">
				<div class="container">
					<div
						class="breadcrumb-content aos-init aos-animate"
						data-aos="fade-up"
					>
						<p>BRANDING - RAVEN STUDIO</p>
						<h1 class="section-heading">
							<img src="/assets/images/star-2.png" alt="Star" /> Aesthetic
							design for brand <br />
							new startup <img src="/assets/images/star-2.png" alt="Star" />
						</h1>
					</div>
				</div>
			</section>
			<section className="project-details-wrap">
                <ProjectsDemoVideo />
                <div className='container'>
                    <ProjectsAbout />
                    <ProjectsGallery />
                </div>
            </section>
		</>
	)
}
