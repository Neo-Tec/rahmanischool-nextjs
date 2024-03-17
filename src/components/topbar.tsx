"use client";

import useWindowDimensions from "@/hooks/useDimension";

export function TopBar() {
  const dimension = useWindowDimensions();

  return (
    <div className="top_bar" style={{ backgroundColor: "aliceblue" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "5px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          fontSize: dimension.width < 490 ? "0.8rem" : "1.4rem",
        }}
      >
        <a href="tel:+91-9835749990 " style={{ paddingLeft: 9 }}>
          <i className="fa fa-phone mr-2"> </i>
          +91 9835749990 / +91 8340713451
        </a>
        <a
          href="mailto:rahmanieducationalt=''rust@gmail.com"
          style={{ paddingLeft: 9 }}
        >
          <i className="fa fa-envelope-o mr-2" />
          rahmanieducationaltrust@gmail.com
        </a>
        <a
          href="https://www.facebook.com/Rahmanipublicschoolkne/"
          style={{ paddingLeft: 9, paddingBottom: "10px" }}
        >
          <i className="fa fa-facebook" />
        </a>

        <div>
          <a
            href="https://www.instagram.com/rahmanipublicschool/"
            style={{ padding: 9 }}
          >
            <i className="fa fa-brand fa-instagram" />
          </a>
          <a
            href="https://www.youtube.com/@rahmanipublicschool"
            style={{ padding: 9 }}
          >
            <i className="fa fa-youtube-play" />
          </a>
        </div>
      </div>
    </div>
  );
}
