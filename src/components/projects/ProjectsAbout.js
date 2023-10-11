import React from 'react'

let techs = [
	{
		img: 'react-query-icon',
		name: 'React Query',
	},
	{
		img: 'react',
		name: 'React',
	},
	{
		img: 'react-router',
		name: 'React Router',
	},
	{
		img: 'javascript',
		name: 'JavaScript',
	},
	{
		img: 'digital-ocean',
		name: 'Digital Ocean',
	},
]

export default function ProjectsAbout() {
	return (
		<div data-aos="zoom-in" class="aos-init aos-animate">
			<div class="project-about-2 d-flex shadow-box mb-24">
				<img src="/assets/images/bg1.png" alt="BG" class="bg-img" />
				<div class="left-details">
					<img src="/assets/images/icon3.png" alt="Icon" />
					<ul>
						<li>
							<p>Year</p>
							<h4>2023</h4>
						</li>
						<li>
							<p>Client</p>
							<h4>Raven Studio</h4>
						</li>
						<li>
							<p>Services</p>
							<h4>Web Design</h4>
						</li>
						<li>
							<p>Project</p>
							<h4>Dynamic</h4>
						</li>
					</ul>
				</div>
				<div class="right-details">
					<h3>Description</h3>
					<p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi sfejdis aliquam, purus sit amet luctus venenatis, lectus magna sansit trandis fringilla urna, porttitor rhoncus dolor purus non enim dollors praesent tabasi elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam facilisis dignissim diam quis enim lobortis scelerisque iin fermentumisa dui faucibus in ornare.Lorem ipsum dolor sit.`}</p>
					<div class="right-details">
						<h3>Technologies</h3>
						<div className="row align-items-end">
							{techs.map((val) => {
								return (
									<div className="col-4 col-md-2 h-100 mb-4" key={val.img}>
										<div className="d-flex flex-column gap-3 align-items-center h-100 justify-content-between">
											<img
												src={`https://cdn.svgporn.com/logos/${val.img}.svg`}
												width={50}
											/>
											<small>{val.name}</small>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
