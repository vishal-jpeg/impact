import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            {" "}
            <img src="img/1.png" className="img-responsive" alt="" />{" "}
          </div>
          <div
            className="col-xs-12 col-md-6"
            data-aos="fade-left"
          >
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
