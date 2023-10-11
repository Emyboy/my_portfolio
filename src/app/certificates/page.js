import CertificateInfoCard from '@/components/certificates/CertificateInfoCard'
import EachCertificateCard from '@/components/certificates/EachCertificateCard'
import React from 'react'

export default function page() {
	return (
		<section className="credential-area blog-area">
			<div className="container">
				<div className="gx-row d-flex">
					<CertificateInfoCard />
					<div className="credential-content flex-1">
						<div className="blog-items m-0">
							<EachCertificateCard />
							<EachCertificateCard />
							<EachCertificateCard />
							<EachCertificateCard />
							<EachCertificateCard />
							<EachCertificateCard />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
