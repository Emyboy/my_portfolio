import { NAV_LINKS } from "@/DATABASE";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/logo_fill.png" alt="Logo" width={150} />
          </Link>
          <ul className="footer-menu">
            {NAV_LINKS.map(val => {
              return (
								<li key={`nav-${val.name}`}>
									<a href={val.route}>{val.name}</a>
								</li>
							)
            })}
          </ul>
          <p className="copyright">
            © All rights reserved by <span>iDegin</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
