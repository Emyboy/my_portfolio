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
			</head>
			<body data-aos-easing="ease" data-aos-duration="1500" data-aos-delay="0">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
