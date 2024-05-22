import React, { useState, useEffect } from "react";
import { IoMdMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";
import Logo from "../Assests/logo.png"

export const Navigation = (props) => {
  const [isContactBarVisible, setIsContactBarVisible] = useState(true);

  const handleScroll = () => {
    const headerHeight = document.querySelector('.header-container')?.offsetHeight || 0;
    if (window.scrollY > headerHeight) {
      setIsContactBarVisible(false);
    } else {
      setIsContactBarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <nav
        id="menu"
        className={`navbar navbar-default navbar-fixed-top ${isContactBarVisible ? 'with-contact-bar' : 'without-contact-bar'}`}
      >
      <div className="container">
        <div className={`contact-bar ${isContactBarVisible ? '' : 'hidden'}`}>

         <a href="mailto:impautosys@yahoo.com" className="contact-bar-links"><IoMdMail className="contact-bar-icons"/>impautosys@yahoo.com</a>
          <a href="https://wa.me/+918939424505" className="contact-bar-links"><RiWhatsappFill className="contact-bar-icons"/>+91 8939424505</a>
          <a href="#contact" className="contact-bar-links"><FaMessage className="contact-bar-icons"/>Message Us</a>

         {/* <p>Contact us: +1 234 567 890 | email@example.com</p> */}
        </div>
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div className="disp-flex">
          <img src={Logo} className="me-1 navbar-logo " ></img>
          <a className="navbar-brand page-scroll" href="#page-top">
            IAC
          </a>
          </div>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};
