import HomeAboutCard from '@/components/home/HomeAboutCard'
import HomeBlogCard from '@/components/home/HomeBlogCard'
import HomeContactCard from '@/components/home/HomeContactCard'
import HomeCredentialsCard from '@/components/home/HomeCredentialsCard'
import HomeLetsWorkCard from '@/components/home/HomeLetsWorkCard'
import HomeNumbersCard from '@/components/home/HomeNumbersCard'
import HomeProfileCard from '@/components/home/HomeProfileCard'
import HomeProjectsCard from '@/components/home/HomeProjectsCard'
import HomeServiceCard from '@/components/home/HomeServiceCard'
import Footer from '@/components/layouts/Footer'
import NavBar from '@/components/layouts/NavBar'

export default function Home() {
	return (
		<>
			<main className="main-homepage">
				<NavBar activePage={'Home'} />
				<section className="about-area">
					<div className="container">
						<div className="row">
							<div class="col-md-6 aos-init aos-animate" data-aos="zoom-in">
								<HomeProfileCard />
							</div>
							<div className="col-md-6">
								<div className="about-credentials-wrap">
									<HomeAboutCard />
									<div className="gx-row d-flex gap-24">
										<HomeCredentialsCard />
										<HomeProjectsCard />
									</div>
								</div>
							</div>
							<div className="row mt-24">
								<div className="col-md-12">
									<div className="blog-service-profile-wrap d-flex gap-24">
										<HomeBlogCard />
										<HomeServiceCard />
										<HomeContactCard />
									</div>
								</div>
							</div>
							<div className="row mt-24">
								<div class="col-md-6 aos-init aos-animate" data-aos="zoom-in">
									<HomeNumbersCard />
								</div>
								<div class="col-md-6 aos-init aos-animate" data-aos="zoom-in">
									<HomeLetsWorkCard />
								</div>
							</div>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	)
}
