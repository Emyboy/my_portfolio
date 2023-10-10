import '../../public/assets/css/aos.css'
import '../../public/assets/css/bootstrap.min.css'
import '../../public/assets/css/style.css'
import Providers from './Providers'

import './globals.css'


export const metadata = {
  title: 'Chukwuemeka S. Ifeora',
  description: 'My Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
				/>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
			</head>
			<body
				data-aos-easing="ease"
				data-aos-duration="1500"
				data-aos-delay="0"
				style={{ background: '#0F0F0F' }}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
