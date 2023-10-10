import Link from 'next/link'
import React from 'react'

export default function BlogCategoryCard() {
  return (
		<div
			className="blog-sidebar-widget categories-widget aos-init aos-animate"
			data-aos="zoom-in"
		>
			<div className="blog-sidebar-widget-inner shadow-box">
				<h3>Categories</h3>

				<ul>
					<li>
						<Link href="/blog">-Analysis</Link>
					</li>
					<li>
						<Link href="/blog">-Firewall</Link>
					</li>
					<li>
						<Link href="/blog">-IT Solutions</Link>
					</li>
					<li>
						<Link href="/blog">-Security</Link>
					</li>
					<li>
						<Link href="/blog">-Technology</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
