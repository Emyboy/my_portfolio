import { NAV_LINKS } from "@/DATABASE";
import Link from "next/link";
import React from "react";

export default function NavBar({ activePage }) {
  return (
		<header className="header-area">
			<div className="container">
				<div className="gx-row d-flex align-items-center justify-content-between">
					<Link href="/" className="logo">
						<img src="/logo_fill.png" alt="Logo" width={80} />
					</Link>

					<nav className="navbar">
						<ul className="menu">
							{
								NAV_LINKS.map(link => {
									return (
										<li className={activePage === link.name && `active`} key={link.name}>
											<Link href={link.route}>{link.name}</Link>
										</li>
									)
								})
							}
						</ul>
						<Link href="/contact" className="theme-btn">
							{`Let's talk`}
						</Link>
					</nav>

					<Link href="/contact" className="theme-btn">
						{`Let's talk`}
					</Link>

					<div className="show-menu">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	)
}
