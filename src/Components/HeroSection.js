import React, { useEffect } from "react";
import AOS from "aos";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">We can change the World together</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              Helps to change the world which is inclining towards it's own
              extinction
            </h2>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a
                  href="#about"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Know More
                    </Link>
                  </span>
                  <i className="bi bi-arrow-right">
                    <AiOutlineArrowRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
