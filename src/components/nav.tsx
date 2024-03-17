"use client";

/* eslint-disable @next/next/no-img-element */
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", slug: "/" },
  { name: "About Us", slug: "/about" },
  { name: "Gallery", slug: "/gallery" },
  { name: "Blog", slug: "/blog" },
  { name: "Teachers", slug: "/teachers" },
  { name: "Contact", slug: "/contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="images/logo@2x.jpg"
                alt=""
                width={70}
                height={70}
                style={{ borderRadius: 5 }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbars-host"
              aria-controls="navbars-rs-food"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse" id="navbars-host">
              <span>
                <h4 style={{ color: "forestgreen" }}>
                  Rahmani Education Trust <br /> Kishanganj
                </h4>
              </span>
              <ul className="navbar-nav ml-auto">
                {NAV_LINKS.map((nav_item, index) => (
                  <li
                    key={nav_item.slug}
                    className={`nav-item ${
                      pathname === nav_item.slug ? "active" : ""
                    }`}
                  >
                    <a className="nav-link" href={nav_item.slug}>
                      {nav_item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
