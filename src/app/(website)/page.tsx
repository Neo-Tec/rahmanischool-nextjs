import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TopBar } from "@/components/topbar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Nav />
      {/* End header */}
      <div
        id="carouselExampleControls"
        className="carousel slide bs-slider box-slider"
        data-ride="carousel"
        data-pause="hover"
        data-interval="false"
        // style={{ height: "80vw" }}
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleControls"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleControls" data-slide-to={1} />
          <li data-target="#carouselExampleControls" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div
              id="home"
              className="first-section"
              style={{ backgroundImage: 'url("images/home1.jpg")' }}
            >
              <div className="dtab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-right">
                      <div className="big-tagline">
                        <h2>
                          <strong>Rahmani</strong> Public School
                        </h2>
                        <p className="lead">Education is a part of life </p>
                        <a href="#" className="hover-btn-new">
                          <span>Contact Us</span>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" className="hover-btn-new">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
            </div>
            {/* end section */}
          </div>
          <div className="carousel-item">
            <div
              id="home"
              className="first-section"
              style={{ backgroundImage: 'url("images/mat1.jpg")' }}
            >
              <div className="dtab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-left">
                      <div className="big-tagline">
                        <h2 data-animation="animated zoomInRight">
                          RET <strong>Rahmani Maktab</strong>
                        </h2>
                        <p
                          className="lead"
                          data-animation="animated fadeInLeft"
                        >
                          {" "}
                        </p>
                        <h3 /> <p />
                        <a href="#" className="hover-btn-new">
                          <span>Contact Us</span>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" className="hover-btn-new">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
            </div>
            {/* end section */}
          </div>
          <div className="carousel-item">
            <div
              id="home"
              className="first-section"
              style={{ backgroundImage: 'url("images/gl26.jpg")' }}
            >
              <div className="dtab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-left">
                      <div className="big-tagline">
                        <h2 data-animation="animated zoomInRight">
                          RET <strong>Rahmani play School</strong>
                        </h2>
                        <p
                          className="lead"
                          data-animation="animated fadeInLeft"
                        >
                          {" "}
                        </p>
                        <h3>Suhail </h3> <p />
                        <a href="#" className="hover-btn-new">
                          <span>Contact Us</span>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" className="hover-btn-new">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
            </div>
            {/* end section */}
          </div>
          <div className="carousel-item">
            <div
              id="home"
              className="first-section"
              style={{ backgroundImage: 'url("images/rahani3.jpg")' }}
            >
              <div className="dtab">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                      <div className="big-tagline">
                        <h2 data-animation="animated zoomInRight">
                          <strong>RET</strong>Humanity
                        </h2>
                        <p
                          className="lead"
                          data-animation="animated fadeInLeft"
                        >
                          The desire for the well-being of one’s own nation can
                          be-and must be-made compatible with the welfare of all
                          humanity.
                        </p>
                        <a href="#" className="hover-btn-new">
                          <span>Contact Us</span>
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#" className="hover-btn-new">
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
            </div>
            {/* end section */}
          </div>
          {/* Left Control */}
          <a
            className="new-effect carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="fa fa-angle-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          {/* Right Control */}
          <a
            className="new-effect carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="fa fa-angle-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="all-title-box">
        <div className="container text-center">
          <h1>
            Welcome to Rahmani Educational Trust <br />
            Our Institutions
            <span className="m_1" />
          </h1>
        </div>
      </div>
      <div id="overviews" className="section wb">
        <div className="container">
          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2"></div>
          </div>
          {/* end title */}
          <hr className="invis" />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="course-item">
                <div className="image-blog">
                  <img src="images/schl.jpg" alt="" className="img-fluid" />
                </div>
                <div className="course-br">
                  <div className="course-title">
                    <h2>
                      <a href="#" title="" />
                    </h2>
                  </div>
                  <div className="course-desc">
                    <h1>Rahmani Public School</h1>
                    <p>
                      {" "}
                      Join Rahmani Public School for quality education and a
                      supportive learning environment where students thrive and
                      grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="course-item">
                <div className="image-blog">
                  <img src="images/rekj.jpg" alt="" className="img-fluid" />
                </div>
                <div className="course-br">
                  <div className="course-title">
                    <h2>
                      <a href="#" title="" />
                    </h2>
                  </div>
                  <div className="blog-desc">
                    <h1 style={{ margin: 0, padding: 0, marginTop: 0 }}>
                      Rahmani Play School
                    </h1>
                    <span style={{ margin: 0 }}>
                      At Rahmani Play School, children learn through play,
                      exploration and fun activities in a caring and nurturing
                      environment.
                    </span>
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
                  <img src="images/mtq.jpg" alt="" className="img-fluid" />
                </div>
                <div className="course-br">
                  <div className="course-title">
                    <h2>
                      <a href="#" title="" />
                    </h2>
                  </div>
                  <div className="course-desc">
                    <h1>Mahad the Tahfezul Quran</h1>
                    <p>
                      {" "}
                      where students learn to memorize and recite the Quran with
                      devotion and respect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="course-item">
                <div className="image-blog">
                  <img src="images/mas.jpg" alt="" className="img-fluid" />
                </div>
                <div className="course-br">
                  <div className="course-title">
                    <h2>
                      <a href="#" title="" />
                    </h2>
                  </div>
                  <div className="course-desc">
                    <h1>Rahmani Maktab</h1>
                    <p>
                      {" "}
                      In Rahmani Maktab where we impart religious education and
                      introduce moral values to help students grow spiritually
                      and ethically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
          <hr className="hr3" />
        </div>
      </div>
      {/* end col */}
      <div id="overviews" className="section wb">
        <div className="container">
          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2">
              <h3 />
              <p className="lead">
                At Rahmani, we are dedicated to empowering students to excel
                academically and personally. Through innovative programs and a
                nurturing environment, we inspire lifelong learners and
                compassionate leaders. Join us on the journey to success!
              </p>
            </div>
          </div>
          {/* end title */}
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h4>Er. Md Jamal Akhter</h4>
                <h2>Welcome to Rahmani Public school</h2>
                <p>
                  Dear Parents, Guardians, Teachers, Staff, Students, and
                  Well-wishers, It is my pleasure to send my warm regards to all
                  of you as we are together on the digital platform of Rahmani
                  Public School. As the head of this prestigious institution, I
                  am extremely proud to lead a team of passionate teachers and
                  dedicated staff dedicated to providing the best possible
                  educational experience for our students. Our mission is not
                  simply to share knowledge, but to ignite a lifelong love of
                  learning, foster creativity and develop essential life skills
                  that enable our students to thrive in an ever-changing world.
                  In Rahmani Public School, we firmly believe that every child
                  is unique and has untapped potential waiting to be unleashed.
                  As such, we strive to create a nurturing and inclusive
                  environment that encourages curiosity and exploration and
                  empowers each student to discover their strengths and
                  passions.
                </p>
                <a href="#" className="hover-btn-new orange">
                  <span>Learn More</span>
                </a>
              </div>
              {/* end messagebox */}
            </div>
            {/* end col */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn">
                <img
                  src="images/chrr.jpg"
                  alt=""
                  className="img-fluid img-rounded"
                />
              </div>
              {/* end media */}
            </div>
            {/* end col */}
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h4>ER. JAVED AKTER -</h4>
                <h2>Welcome To Rahmani Public school</h2>
                <p>
                  Rahmani Public School is a school where parents send their
                  children for the best education to help them work towards
                  success and prosperity as we strive to provide them with
                  excellent academic performance, communication skills and
                  effective preparation for competitive exams. In the vision of
                  our founder Er.Jamal Akhter, we prepare children for life
                  itself by developing their emotional intelligence, making them
                  God-fearing, flexible, caring, adaptable, thoughtful and open
                  to new situations. We want them to face challenges with
                  confidence and happiness. We understand that it is not always
                  good grades in school that make a child talented, but a
                  different way of looking at the world and learning. Therefore,
                  every child is our greatest asset and we try to take into
                  account his individuality, giving to he best opportunity to
                  become an independent and progressive citizen of the world .
                </p>
                <a href="#" className="hover-btn-new orange">
                  <span>Learn More</span>
                </a>
              </div>
              {/* end messagebox */}
            </div>
            {/* end col */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn">
                <img
                  src="images/director1.jpg"
                  alt=""
                  className="img-fluid img-rounded"
                />
              </div>
              {/* end media */}
            </div>
            {/* end col */}
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="post-media wow fadeIn">
                <img
                  src="images/rpbout.jpg"
                  alt=""
                  className="img-fluid img-rounded"
                />
              </div>
              {/* end media */}
            </div>
            {/* end col */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="message-box">
                <h2> SUHAIL AKHTER NADVI </h2>
                <p>
                  Principal’s Education is a shared responsibility of dedicated
                  teachers, motivated students and enthusiastic parents with
                  high expectations. The school&quot;s mission is not only to
                  pursue academic excellence, but also to motivate and empower
                  its students to be lifelong learners, critical thinkers and
                  productive members of a dynamic global society . School run by
                  the “RAHMANI PUBLIC SCHOOL” has earned its name and reputation
                  by providing excellent education for over 7 years. Within our
                  group of institutions, we provide an atmosphere of
                  multifaceted development where children are encouraged to
                  channel their potential in pursuit of excellence . The school
                  tries to do its best to in still strong values ​​in the
                  children that are linked to learning and extracurricular
                  activities. Making each individual an independent and
                  self-sufficient citizen, the school offers a mix of curricular
                  and co-curricular activities. While our main focus is on
                  academic excellence, the school is also committed to preparing
                  students for life, equipping them to meet the challenges of
                  tomorrow and encouraging them to be socially relevant.
                </p>
                <a href="#" className="hover-btn-new orange">
                  <span>Learn More</span>
                </a>
              </div>
              {/* end messagebox */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end section */}
      <section className="section lb page-section">
        <div className="container">
          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2">
              <h3>Our history</h3>
              <p className="lead">
                Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem!
              </p>
            </div>
          </div>
          {/* end title */}
          <div className="timeline">
            <div className="timeline__wrap">
              <div className="timeline__items">
                <div className="timeline__item">
                  <div className="timeline__content img-bg-01">
                    <h2>2023</h2>
                    <p>
                      Siliguri Science centre Tour*: Building on the success of
                      previous projects, Rahmani Public School organized an
                      immersive visit to the Siliguri Science Centre in 2023,
                      which offered students an engaging and interactive
                      encounter with scientific phenomena and technological
                      developments. The tour was a catalyst for student interest
                      in various fields and the promotion of critical thinking
                      and inquiry-based learning..
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__content img-bg-02">
                    <h2>2022</h2>
                    <p>
                      Study Tour: In 2022, Rahmani Public School organized an
                      enriching educational tour for its students, offering them
                      opportunities to explore new environments, cultures and
                      learning experiences outside the classroom. The purpose of
                      the training circle was to improve students&quot;
                      knowledge, broaden their perspectives and promote
                      curiosity and inquisitiveness.
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__content img-bg-03">
                    <h2>2021</h2>
                    <p>
                      Rahmani Public School in Belwa*: In 2021, Rahmani Public
                      School expanded its reach and impact by opening Rahman
                      Public School in Belwa, expanding its commitment to
                      provide quality education to a wider population. The
                      establishment of the new campus demonstrated the
                      school&quot;s commitment to serving the community and
                      promoting inclusion in education
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__content img-bg-04">
                    <h2>2019</h2>
                    <p>
                      Mahad La Tahfezul Quran*: Launched in 2019, Mahad La
                      Tahfezul Quran has become an integral part of Rahmani
                      Public School&quot;s educational efforts dedicated to
                      Quran memorization and recitation. The purpose of the
                      program was to instill in students a deep understanding
                      and respect for the scriptures, which promotes spiritual
                      growth and development of moral character.
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__content img-bg-01">
                    <h2>2018</h2>
                    <p>
                      Rahmani Maktab Launched: In 2018, Rahmani Public School
                      expanded its educational offerings by establishing Rahmani
                      Maktab, a platform to impart religious education and moral
                      values based on Islamic teachings. Maktab was an
                      additional part of the school&quot;s curriculum,
                      emphasizing the importance of spiritual growth along with
                      academic excellence
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__content img-bg-02">
                    <h2>2017</h2>
                    <p>
                      {" "}
                      Rahmani Play School : In 2017, Rahman Play School, a
                      precursor to formal education, was launched with the aim
                      of providing a stimulating and nurturing environment for
                      preschoolers. Using play learning approaches, the play
                      school aimed to create a strong foundation for the
                      cognitive, social and emotional development of young
                      children.
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__content img-bg-03">
                    <h2>2016</h2>
                    <p>
                      {" "}
                      Science Laboratory Started :- Rahmani Public School opened
                      in 2016 with a state-of-the-art science laboratory
                      equipped with modern amenities and resources to facilitate
                      hands-on learning for students. The introduction of the
                      science laboratory was an important milestone in the
                      promotion of scientific research and experimentation among
                      the student body.
                    </p>
                  </div>
                </div>
                <div className="timeline__item">
                  <div className="timeline__content img-bg-04">
                    <h2>2015</h2>
                    <p>
                      {" "}
                      Rahmani Public School was established in 2015 with the aim
                      of providing its students with quality education and ample
                      development opportunities. Since its foundation, the
                      school has been committed to nurturing the spirit of young
                      people and creating a conducive learning environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section cl">
        <div className="container">
          <div className="row text-left stat-wrap">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <span
                data-scroll
                className="global-radius icon_wrap effect-1 alignleft"
              >
                <i className="flaticon-study" />
              </span>
              <p className="stat_count">600</p>
              <h3>Students</h3>
            </div>
            {/* end col */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <span
                data-scroll
                className="global-radius icon_wrap effect-1 alignleft"
              >
                <i className="flaticon-online" />
              </span>
              <p className="stat_count">10</p>
              <h3>Class</h3>
            </div>
            {/* end col */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <span
                data-scroll
                className="global-radius icon_wrap effect-1 alignleft"
              >
                <i className="flaticon-years" />
              </span>
              <p className="stat_count">15</p>
              <h3>Years Completed</h3>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end section */}
      <div id="plan" className="section lb">
        <div className="container">
          <div className="section-title text-center">
            <h3 />
            <p> </p>
          </div>
          {/* end title */}
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="message-box">
                <ul className="nav nav-pills nav-stacked" id="myTabs">
                  <li>
                    <a className="active" href="#tab1" data-toggle="pill" />
                  </li>
                  <li>
                    <a href="#tab2" data-toggle="pill" />
                  </li>
                </ul>
              </div>
            </div>
            {/* end col */}
          </div>
          <hr className="invis" />
          <div className="row">
            <div className="col-md-12"></div>
            {/* end row */}
          </div>
          {/* end pane */}
          <div className="tab-pane fade" id="">
            <div className="row text-center">
              <div className="col-md-4"></div>
            </div>
            <div className="col-md-4">
              <div className="pricing-table pricing-table-highlighted">
                <div className="pricing-table-header grd1"></div>
                <div className="pricing-table-space" />
                <div className="pricing-table-features"></div>
                <div className="pricing-table-sign-up">
                  <a href="#" className="hover-btn-new orange">
                    <span />
                  </a>
                </div>
              </div>
            </div>
            <div className="pricing-table-sign-up">
              <a href="#" className="hover-btn-new orange">
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end section */}
      <div
        id="testimonials"
        className="parallax section db parallax-off"
        style={{ backgroundImage: 'url("images/parallax_04.jpg")' }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h3>Teams</h3>
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
                      src="images/director.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <h4>Director</h4>
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left" /> Wonderful Support!
                    </h3>
                    <p className="lead">
                      They have got my project on time with the competition with
                      a sed highly skilled, and experienced &amp; professional
                      team.
                    </p>
                  </div>
                  {/* end testi-meta */}
                </div>
                {/* end testimonial */}
                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img src="images/rpbout.jpg" alt="" className="img-fluid" />
                    <h4>Principal’s </h4>
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
                      src="images/chaiman.jpg"
                      alt=""
                      className="img-fluid "
                    />
                    <h4>Chairman </h4>
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left" /> Great &amp; Talented
                      Team!
                    </h3>
                    <p className="lead">
                      The master-builder of human happines no one rejects,
                      dislikes avoids pleasure itself, because it is very pursue
                      pleasure.{" "}
                    </p>
                  </div>
                  {/* end testi-meta */}
                </div>
                {/* end testimonial */}
                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/director.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <h4 />
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left" /> Wonderful Support!
                    </h3>
                    <p className="lead">
                      They have got my project on time with the competition with
                      a sed highly skilled, and experienced &amp; professional
                      team.
                    </p>
                  </div>
                  {/* end testi-meta */}
                </div>
                {/* end testimonial */}
                <div className="testimonial clearfix">
                  <div className="testi-meta">
                    <img
                      src="images/rahmani2.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <h4 />
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
                    <img src="images/rp2.jpg" alt="" className="img-fluid" />
                    <h4> </h4>
                  </div>
                  <div className="desc">
                    <h3>
                      <i className="fa fa-quote-left" /> Great &amp; Talented
                      Team!
                    </h3>
                    <p className="lead">
                      The master-builder of human happines no one rejects,
                      dislikes avoids pleasure itself, because it is very pursue
                      pleasure.{" "}
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
      <Footer />
    </div>
  );
}
