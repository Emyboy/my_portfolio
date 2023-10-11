import Footer from '@/components/layouts/Footer'
import NavBar from '@/components/layouts/NavBar'
import React from 'react'

export default function layout({ children }) {
	return <>{children}</>
	// <main className="main-workdetails-page">
	// 	<NavBar activePage={'Blog'} />
	// 	<Footer />
	// </main>
}
