import BlogCategoryCard from '@/components/blog/BlogCategoryCard'
import BlogSideBar from '@/components/blog/BlogSideBar'
import EachBlogCardLG from '@/components/blog/EachBlogCardLG'
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
						<p>HOME - BLOG</p>
						<h1 class="section-heading">
							<img src="assets/images/star-2.png" alt="Star" /> Blog with
							rightsidebar <img src="assets/images/star-2.png" alt="Star" />
						</h1>
					</div>
				</div>
			</section>
			<section className="blog-area">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="blog-items">
								<EachBlogCardLG />
								<EachBlogCardLG />
								<EachBlogCardLG />
								<EachBlogCardLG />
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
