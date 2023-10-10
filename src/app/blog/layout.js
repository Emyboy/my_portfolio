import Footer from '@/components/layouts/Footer'
import NavBar from '@/components/layouts/NavBar'
import React from 'react'

export default function layout({ children }) {
	return (
		<main className="main-workdetails-page">
			<NavBar />
			{children}
			<Footer />
		</main>
	)
}
