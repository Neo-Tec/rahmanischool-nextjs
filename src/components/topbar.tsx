export function TopBar() {
  return (
    <div className="top_bar" style={{ backgroundColor: "aliceblue" }}>
      <div className="top_bar_container">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <div className="top_bar_content d-flex flex-row align-items-center justify-content-start"> */}
              {/* <ul className="top_bar_contact_list"> */}
              <span>
                <li>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      padding: "10px",
                    }}
                  >
                    <span> Have any questions?</span>

                    <a href="tel:+91-9835749990 ">
                      <i className="fa fa-phone"> </i>
                      +91 9835749990 / +91 8340713451
                    </a>
                    <a
                      href="mailto:rahmanieducationalt=''rust@gmail.com"
                      style={{ paddingLeft: 9 }}
                    >
                      <i className="fa fa-envelope-o" />
                      rahmanieducationaltrust@gmail.com
                    </a>
                    <a
                      href="https://www.facebook.com/Rahmanipublicschoolkne/"
                      style={{ paddingLeft: 9 }}
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="https://www.instagram.com/rahmanipublicschool/"
                      style={{ paddingLeft: 9 }}
                    >
                      <i className="fa fa-brand fa-instagram" />
                    </a>
                    <a
                      href="https://www.youtube.com/@rahmanipublicschool"
                      style={{ paddingLeft: 9 }}
                    >
                      <i className="fa fa-youtube-play" />
                    </a>
                  </div>
                </li>
              </span>
              {/* </ul>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
