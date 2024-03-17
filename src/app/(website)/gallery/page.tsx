/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TopBar } from "@/components/topbar";
import { getGalleryItems } from "@cms/client";
import { urlForImage } from "@cms/image";

export default async function Gallery() {
  const galleryItems = await getGalleryItems();

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
            <hr className="invis" />
            <div className="row">
              {galleryItems?.map((image: any, index: number) => {
                const imageProps = image?.image
                  ? urlForImage(image?.image)
                  : null;

                return (
                  <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                    <div className="course-item">
                      <div className="image-blog">
                        <img
                          src={imageProps?.src}
                          alt=""
                          width={500}
                          height={200}
                        />
                      </div>
                      <div className="course-br">
                        <div className="course-title">
                          <h2>
                            <a href="#" title="" />
                          </h2>
                        </div>
                        <div className="course-desc">
                          <p>{image?.description}</p>
                        </div>
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
