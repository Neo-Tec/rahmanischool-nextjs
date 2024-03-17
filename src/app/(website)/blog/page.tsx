import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TopBar } from "@/components/topbar";
import { getBlogs } from "@cms/client";
import { urlForImage } from "@cms/image";

/* eslint-disable @next/next/no-img-element */
export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <>
      <div>
        <TopBar />
        <Nav />
        <div className="all-title-box">
          <div className="container text-center">
            <h1>
              Blog
              <span className="m_1">
                Lorem Ipsum dolroin gravida nibh vel velit.
              </span>
            </h1>
          </div>
        </div>
        <div id="overviews" className="section wb">
          <div className="container">
            <div className="section-title row text-center">
              <div className="col-md-8 offset-md-2">
                <p className="lead" />
              </div>
            </div>
            {/* end title */}
            <hr className="invis" />
            <div className="row">
              {blogs?.map((blog: any, index: number) => {
                const imageProps = blog?.image
                  ? urlForImage(blog?.image)
                  : null;

                return (
                  <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                    <div className="blog-item">
                      <div className="image-blog">
                        <img
                          src={imageProps?.src}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="meta-info-blog">
                        <span>
                          <i className="fa fa-calendar" />{" "}
                          <a href="#">
                            {new Date(blog?.publishedAt)?.toDateString()}
                          </a>{" "}
                        </span>
                      </div>
                      <div className="blog-title">
                        <h2>
                          <a href="#" title="">
                            {blog?.title}
                          </a>
                        </h2>
                      </div>
                      <div className="blog-desc">
                        <p>{blog?.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* end container */}
        </div>
        {/* end section */}
        <div className="parallax section dbcolor">
          <div className="container">
            <div className="row logos"></div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        <Footer />
        <a href="#" id="scroll-to-top" className="dmtop global-radius">
          <i className="fa fa-angle-up" />
        </a>
      </div>
    </>
  );
}
