import { Nav } from "@/components/nav";
import { TopBar } from "@/components/topbar";
import { getTeachers } from "@cms/client";
import { urlForImage } from "@cms/image";

export default async function Teachers() {
  const teachers = await getTeachers();

  return (
    <>
      <div>
        <TopBar />
        <Nav />

        <div className="all-title-box">
          <div className="container text-center">
            <h1>
              Teachers
              <span className="m_1" /> The school tries to do its best to in
              still strong values ​​in the children that are linked to learning
            </h1>
          </div>
        </div>
        <div id="teachers" className="section wb">
          <div className="container">
            <div className="row">
              {teachers?.map((teacher: any, index: number) => {
                const imageProps = teacher?.image
                  ? urlForImage(teacher?.image)
                  : null;
                return (
                  <div key={index} className="col-lg-3 col-md-6 col-12">
                    <div className="our-team">
                      <div className="team-img">
                        <img src={imageProps?.src} />
                        <div className="social">
                          <ul>
                            <li>
                              <a href="#" className="fa fa-facebook" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-twitter" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-linkedin" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-skype" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-content">
                        <h3 className="title">{teacher?.name}</h3>
                        <span className="post">{teacher?.job_title}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="/images/rp10.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Md Amanullah</h3>
                    <span className="post">Science teacher</span>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="images/rp6.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Nazia Anjum Ansari</h3>
                    <span className="post">Hindi teacher</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="images/rp4.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Md.Moinul Haque</h3>
                    <span className="post">Mathematics teacher</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="images/rp5.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Pinky</h3>
                    <span className="post">social Teacher </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="images/rp1.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Md.Farooque Ansari</h3>
                    <span className="post">English teacher</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="images/rp3.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Md.Islam</h3>
                    <span className="post">Urdu Teacher</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="images/rp14.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Simran Parween</h3>
                    <span className="post">Science Teacher</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="our-team">
                  <div className="team-img">
                    <img src="images/rp16.jpg" />
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#" className="fa fa-facebook" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li>
                          <a href="#" className="fa fa-skype" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Moulana Sarfaraz Ahmad</h3>
                    <span className="post">Islamiyat Teacher</span>
                  </div>
                </div>
              </div> */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end section */}
        <div
          id="testimonials"
          className="parallax section db parallax-off"
          style={{ backgroundImage: 'url("images/parallax_04.jpg")' }}
        >
          <div className="container">
            <div className="section-title text-center">
              <h3>Testimonials</h3>
              <p>
                Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            {/* end title */}
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="testi-carousel owl-carousel owl-theme">
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img
                        src="images/testi_01.png"
                        alt=""
                        className="img-fluid"
                      />
                      <h4>James Fernando </h4>
                    </div>
                    <div className="desc">
                      <h3>
                        <i className="fa fa-quote-left" /> Wonderful Support!
                      </h3>
                      <p className="lead">
                        They have got my project on time with the competition
                        with a sed highly skilled, and experienced &amp;
                        professional team.
                      </p>
                    </div>
                    {/* end testi-meta */}
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img
                        src="images/testi_02.png"
                        alt=""
                        className="img-fluid"
                      />
                      <h4>Jacques Philips </h4>
                    </div>
                    <div className="desc">
                      <h3>
                        <i className="fa fa-quote-left" /> Awesome Services!
                      </h3>
                      <p className="lead">
                        Explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you
                        completed.
                      </p>
                    </div>
                    {/* end testi-meta */}
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img
                        src="images/testi_03.png"
                        alt=""
                        className="img-fluid "
                      />
                      <h4>Venanda Mercy </h4>
                    </div>
                    <div className="desc">
                      <h3>
                        <i className="fa fa-quote-left" /> Great &amp; Talented
                        Team!
                      </h3>
                      <p className="lead">
                        The master-builder of human happines no one rejects,
                        dislikes avoids pleasure itself, because it is very
                        pursue pleasure.{" "}
                      </p>
                    </div>
                    {/* end testi-meta */}
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img
                        src="images/testi_01.png"
                        alt=""
                        className="img-fluid"
                      />
                      <h4>James Fernando </h4>
                    </div>
                    <div className="desc">
                      <h3>
                        <i className="fa fa-quote-left" /> Wonderful Support!
                      </h3>
                      <p className="lead">
                        They have got my project on time with the competition
                        with a sed highly skilled, and experienced &amp;
                        professional team.
                      </p>
                    </div>
                    {/* end testi-meta */}
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img
                        src="images/testi_02.png"
                        alt=""
                        className="img-fluid"
                      />
                      <h4>Jacques Philips </h4>
                    </div>
                    <div className="desc">
                      <h3>
                        <i className="fa fa-quote-left" /> Awesome Services!
                      </h3>
                      <p className="lead">
                        Explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you
                        completed.
                      </p>
                    </div>
                    {/* end testi-meta */}
                  </div>
                  {/* end testimonial */}
                  <div className="testimonial clearfix">
                    <div className="testi-meta">
                      <img
                        src="images/testi_03.png"
                        alt=""
                        className="img-fluid"
                      />
                      <h4>Venanda Mercy </h4>
                    </div>
                    <div className="desc">
                      <h3>
                        <i className="fa fa-quote-left" /> Great &amp; Talented
                        Team!
                      </h3>
                      <p className="lead">
                        The master-builder of human happines no one rejects,
                        dislikes avoids pleasure itself, because it is very
                        pursue pleasure.{" "}
                      </p>
                    </div>
                    {/* end testi-meta */}
                  </div>
                  {/* end testimonial */}
                </div>
                {/* end carousel */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end section */}
        <div className="parallax section dbcolor">
          <div className="container">
            <div className="row logos">
              <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                <a href="#">
                  <img src="images/logo.jpg" alt="" width={80} height={50} />
                </a>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                <a href="#">
                  <img src="images/logo.jpg" alt="" width={80} height={50} />
                </a>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                <a href="#">
                  <img src="images/logo.jpg" alt="" width={80} height={50} />
                </a>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                <a href="#">
                  <img src="images/logo.jpg" alt="" width={80} height={50} />
                </a>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                <a href="#">
                  <img src="images/logo.jpg" alt="" width={80} height={50} />
                </a>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                <a href="#">
                  <img src="images/logo.jpg" alt="" width={80} height={50} />
                </a>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end section */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h3>About US</h3>
                  </div>
                  <p>
                    {" "}
                    Integer rutrum ligula eu dignissim laoreet. Pellentesque
                    venenatis nibh sed tellus faucibus bibendum. Sed fermentum
                    est vitae rhoncus molestie. Cum sociis natoque penatibus et
                    magnis dis montes.
                  </p>
                  <div className="footer-right">
                    <ul className="footer-links-soi">
                      <li>
                        <a href="https://www.facebook.com/Rahmanipublicschoolkne/">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-github" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/rahmanipublicschool/">
                          <i className="fa fa-brand fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@rahmanipublicschool">
                          <i className="fa fa-youtube-play" />
                        </a>
                      </li>
                    </ul>
                    {/* end links */}
                  </div>
                </div>
                {/* end clearfix */}
              </div>
              {/* end col */}
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h3>Information Link</h3>
                  </div>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                  {/* end links */}
                </div>
                {/* end clearfix */}
              </div>
              {/* end col */}
              <div className="col-lg-4 col-md-4 col-xs-12">
                <div className="widget clearfix">
                  <div className="widget-title">
                    <h3>Contact Details</h3>
                  </div>
                  <ul className="footer-links">
                    <li>
                      <a href="mailto:#">rahmanieducationaltrust@gmail.com</a>
                    </li>
                    <li>
                      <a href="www.youtube.com/@rahmanipublicschool">
                        www.youtube.com
                      </a>
                    </li>
                    <li>Rahmani Nagar,Teosa Road Kishanganj Bihar:855107</li>
                    <li>
                      +91 9835749990 <br /> +91 8340713451
                    </li>
                  </ul>
                  {/* end links */}
                </div>
                {/* end clearfix */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </footer>
        {/* end footer */}
        <div className="copyrights">
          <div className="container">
            <div className="footer-distributed">
              <div className="footer-center">
                <p className="footer-company-name">
                  All Rights Reserved. © 2018 <a href="#">SmartEDU</a> Design By
                  : <a href="https://html.design/">Asim tabrez</a>
                </p>
              </div>
            </div>
          </div>
          {/* end container */}
        </div>
        {/* end copyrights */}
        <a href="#" id="scroll-to-top" className="dmtop global-radius">
          <i className="fa fa-angle-up" />
        </a>
      </div>
    </>
  );
}
