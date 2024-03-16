export function Nav() {
  return (
    <header className="top-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
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
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                >
                  Gallery{" "}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <a className="dropdown-item" href="course-grid-2.html">
                    Gallery 1
                  </a>
                  <a className="dropdown-item" href="course-grid-3.html">
                    Gallery 2{" "}
                  </a>
                  <a className="dropdown-item" href="course-grid-4.html">
                    Gallery 3
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown-a"
                  data-toggle="dropdown"
                >
                  Blog{" "}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown-a">
                  <a className="dropdown-item" href="blog.html">
                    Blog{" "}
                  </a>
                  <a className="dropdown-item" href="blog-single.html">
                    Blog single{" "}
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="teachers.html">
                  Teachers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
