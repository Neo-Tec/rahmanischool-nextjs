import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TopBar } from "@/components/topbar";

export default function Gallery() {
  return (
    <>
      <div>
        <TopBar />
        <Nav />
        <div className="all-title-box">
          <div className="container text-center">
            <h1>
              Gallery
              <span className="m_1">Pictures evoke strong emotions</span>
            </h1>
          </div>
        </div>
        <div id="overviews" className="section wb">
          <div className="container">
            {/* <div className="section-title row text-center">
              <div className="col-md-8 offset-md-2">
                <p className="lead">
                  Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem!
                </p>
              </div>
            </div> */}
            {/* end title */}
            <hr className="invis" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="course-item">
                  <div className="image-blog">
                    <img src="images/gl1.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="course-br">
                    <div className="course-title">
                      <h2>
                        <a href="#" title="" />
                      </h2>
                    </div>
                    <div className="course-desc">
                      <p>
                        Lorem ipsum door sit amet, fugiat deicata avise id cum,
                        no quo maiorum intel ogrets geuiat operts elicata libere
                        avisse id cumlegebat, liber regione eu sit....{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="course-item">
                  <div className="image-blog">
                    <img src="images/gl2.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="course-br">
                    <div className="course-title">
                      <h2>
                        <a href="#" title="" />
                      </h2>
                    </div>
                    <div className="blog-desc">
                      <p>
                        Lorem ipsum door sit amet, fugiat deicata avise id cum,
                        no quo maiorum intel ogrets geuiat operts elicata libere
                        avisse id cumlegebat, liber regione eu sit....{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <hr className="hr3" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="course-item">
                  <div className="image-blog">
                    <img src="/images/gl3.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="course-br">
                    <div className="course-title">
                      <h2>
                        <a href="#" title="" />
                      </h2>
                    </div>
                    <div className="course-desc">
                      <p>
                        Lorem ipsum door sit amet, fugiat deicata avise id cum,
                        no quo maiorum intel ogrets geuiat operts elicata libere
                        avisse id cumlegebat, liber regione eu sit....{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="course-item">
                  <div className="image-blog">
                    <img src="/images/gl4.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="course-br">
                    <div className="course-title">
                      <h2>
                        <a href="#" title="" />
                      </h2>
                    </div>
                    <div className="course-desc">
                      <p>
                        Lorem ipsum door sit amet, fugiat deicata avise id cum,
                        no quo maiorum intel ogrets geuiat operts elicata libere
                        avisse id cumlegebat, liber regione eu sit....{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <hr className="hr3" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="course-item">
                  <div className="image-blog">
                    <img src="/images/gl5.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="course-br">
                    <div className="course-title">
                      <h2>
                        <a href="#" title="" />
                      </h2>
                    </div>
                    <div className="course-desc">
                      <p>
                        Lorem ipsum door sit amet, fugiat deicata avise id cum,
                        no quo maiorum intel ogrets geuiat operts elicata libere
                        avisse id cumlegebat, liber regione eu sit....{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="course-item">
                  <div className="image-blog">
                    <img src="/images/gl18.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="course-br">
                    <div className="course-title">
                      <h2>
                        <a href="#" title="" />
                      </h2>
                    </div>
                    <div className="course-desc">
                      <p>
                        Lorem ipsum door sit amet, fugiat deicata avise id cum,
                        no quo maiorum intel ogrets geuiat operts elicata libere
                        avisse id cumlegebat, liber regione eu sit....{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end section */}
        <div className="parallax section dbcolor">
          <div className="container"></div>
          {/* end row */}
        </div>
        {/* end container */}
        {/* end section */}
        <Footer />
        {/* end copyrights */}
        <a href="#" id="scroll-to-top" className="dmtop global-radius">
          <i className="fa fa-angle-up" />
        </a>
      </div>
    </>
  );
}
