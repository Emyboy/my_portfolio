import React from 'react'

export default function BlogContent() {
	return (
		<>
			<div class="img-box">
				<img src="/assets/images/blog2.jpg" alt="Blog" />
			</div>
			<span class="meta">{`25 March 2022 - Comments (4) - Share (7)`}</span>
			{/* the content goes here */}
			<div class="tags">
				<a href="#" class="theme-btn">
					SASS
				</a>
				<a href="#" class="theme-btn">
					Development
				</a>
			</div>
		</>
	)
}
