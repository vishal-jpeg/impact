import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image } from "./image";

export const Gallery = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only once animation
    });
  }, []);

  const openModal = (largeImage) => {
    setSelectedImage(largeImage);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>
            Here are some of the pictures of our company. Click on the images
            to view the larger version.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    data-aos="zoom-in"
                  >
                    <div onClick={() => openModal(d.largeImage)}>
                      <Image
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                        alt={d.alt}
                      />
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={selectedImage} alt="Large view" />
        </div>
      )}
    </div>
  );
};
