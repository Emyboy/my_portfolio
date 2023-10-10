import Footer from '@/components/layouts/Footer'
import NavBar from '@/components/layouts/NavBar'
import React from 'react'

export default function layout({ children }) {
	return (
		<main className="main-aboutpage">
			<NavBar activePage={'About'} />
			{children}
			<Footer />
		</main>
	)
}
