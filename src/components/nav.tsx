export function Nav() {
  return (
    <>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src="images/logo@2x.jpg"
                alt=""
                width={30}
                height={30}
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
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link dropdown-toggle" href="/gallery">
                    Gallery{" "}
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/blog"
                    id="dropdown-a"
                  >
                    Blog{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/teachers">
                    Teachers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
              {/* <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  className="hover-btn-new log orange"
                  href="#"
                  data-toggle="modal"
                  data-target="#login"
                >
                  <span>Admission now</span>
                </a>
              </li>
            </ul> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
