import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TopBar } from "@/components/topbar";

export default function Contact() {
  return (
    <>
      <div>
        <TopBar />
        <Nav />
        <div
          className="modal fade"
          id="login"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header tit-up">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title">Customer Login</h4>
              </div>
              <div className="modal-body customer-box">
                {/* Nav tabs */}
                <ul className="nav nav-tabs">
                  <li>
                    <a className="active" href="#Login" data-toggle="tab">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#Registration" data-toggle="tab">
                      Registration
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div className="tab-pane active" id="Login">
                    <form role="form" className="form-horizontal">
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="email1"
                            placeholder="Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-10">
                          <button
                            type="submit"
                            className="btn btn-light btn-radius btn-brd grd1"
                          >
                            Submit
                          </button>
                          <a className="for-pwd" href="javascript:;">
                            Forgot your password?
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane" id="Registration">
                    <form role="form" className="form-horizontal">
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            placeholder="Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="mobile"
                            placeholder="Mobile"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            type="password"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-10">
                          <button
                            type="button"
                            className="btn btn-light btn-radius btn-brd grd1"
                          >
                            Save &amp; Continue
                          </button>
                          <button
                            type="button"
                            className="btn btn-light btn-radius btn-brd grd1"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-title-box">
          <div className="container text-center">
            <h1>
              Contact
              <span className="m_1">
                Lorem Ipsum dolroin gravida nibh vel velit.
              </span>
            </h1>
          </div>
        </div>
        <div id="contact" className="section wb">
          <div className="container">
            <div className="section-title text-center">
              <h3>Need Help? Sure we are Online!</h3>
              <p className="lead">
                Let us give you more details about the special offer website you
                want us. Please fill out the form below. <br />
                We have million of website owners who happy to work with us!
              </p>
            </div>
            {/* end title */}
            <div className="row">
              <div className="col-xl-6 col-md-12 col-sm-12">
                <div className="contact_form">
                  <div id="message" />
                  <form
                    id="contactform"
                    className=""
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    name="contactform"
                  >
                    <div className="row row-fluid">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="hidden"
                          name="access_key"
                          defaultValue="abb76553-727f-4598-ba16-cabf60d85065"
                        />
                        <input
                          type="text"
                          name="first_name"
                          id="first_name"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="last_name"
                          id="last_name"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          className="form-control"
                          name="comments"
                          id="comments"
                          rows={6}
                          placeholder="Give us more details.."
                          defaultValue={""}
                        />
                      </div>
                      <div className="text-center pd">
                        <button
                          type="submit"
                          value="SEND"
                          id="submit"
                          className="btn btn-light btn-radius btn-brd grd1 btn-block"
                        >
                          Get a Quote
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* end col */}
              <div className="col-xl-6 col-md-12 col-sm-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d57318.370013784406!2d87.91433510569726!3d26.118558944851237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39e51742a95b7517%3A0x6eb4fd9a2122ca29!2s4X94%2BC6F%20Rahmani%20Public%20School%2C%20Balichukka%20road%2C%20Dheksara%2C%20Bihar%20855107!3m2!1d26.118564799999998!2d87.95553489999999!5e0!3m2!1sen!2sin!4v1707757907622!5m2!1sen!2sin"
                  width={600}
                  height={500}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
        {/* end section */}
        <div className="parallax section dbcolor">
          <div className="container">{/* end row */}</div>
          {/* end container */}
        </div>
        {/* end section */}
        <Footer />
      </div>
    </>
  );
}
