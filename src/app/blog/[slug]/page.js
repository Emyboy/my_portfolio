import BlogContent from '@/components/blog/BlogContent'
import BlogSideBar from '@/components/blog/BlogSideBar'
import React from 'react'

export default function page() {
	return (
		<>
			<section className="breadcrumb-area">
				<div className="container">
					<div
						className="breadcrumb-content aos-init aos-animate"
						data-aos="fade-up"
					>
						<p>HOME - BLOG DETAILS</p>
						<h1 className="section-heading">
							<img src="/assets/images/star-2.png" alt="Star" /> Blog Details{' '}
							<img src="/assets/images/star-2.png" alt="Star" />
						</h1>
					</div>
				</div>
			</section>
			<section className="blog-details-area">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="blog-details-content">
								<BlogContent />
							</div>
						</div>
						<div className="col-md-4">
							<BlogSideBar />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
