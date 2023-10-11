import React from 'react'
import BlogCategoryCard from './BlogCategoryCard'

export default function BlogSideBar() {
  return (
		<div className="blog-sidebar">
			<div className="blog-sidebar-inner">
				<div class="blog-sidebar-widget search-widget">
					<div
						class="blog-sidebar-widget-inner aos-init aos-animate"
						data-aos="zoom-in"
					>
						<form class="shadow-box">
							<input type="text" placeholder="Search Here..." />
							<button class="theme-btn">Search</button>
						</form>
					</div>
				</div>
				<BlogCategoryCard />
			</div>
		</div>
	)
}
