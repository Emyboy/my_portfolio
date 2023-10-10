import Link from 'next/link'
import React from 'react'

export default function EachBlogCardLG() {
	return (
		<div className="blog-item aos-init aos-animate" data-aos="zoom-in">
			<div className="img-box">
				<img src="/assets/images/blog1.jpg" alt="Blog" />
			</div>
			<div className="content">
				<span className="meta">{`25 March 2022 - Comments (4) - Share (7)`}</span>
				<h1>
					<Link href="/blog/452-34-452">
						Consulted admitting is power acuteness.
					</Link>
				</h1>
				<p>
					{`Sit amet luctussd fav venenatis, lectus magna fringilla inis urna,
					porttitor rhoncus dolor purus non enim praesent in elementum sahas
					facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
					etisam dignissim diam quis enim lobortis viverra orci sagittis eu
					volutpat odio facilisis mauris sit.`}
				</p>
				<Link href="/blog/5243-523442-3434" className="theme-btn">
					Read More
				</Link>
			</div>
		</div>
	)
}
