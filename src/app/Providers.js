'use client'
import React from 'react'
import { Next13ProgressBar } from 'next13-progressbar'

const Providers = ({ children }) => {
	return (
		<>
			{/* {children} */}
			<>
				{children}
				<Next13ProgressBar
					height="4px"
					color="#ffff"
					// options={{ showSpinner: true }}
					showOnShallow
				/>
			</>
		</>
	)
}

export default Providers
