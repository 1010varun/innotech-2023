import React, { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>Who We Are</h3>
              <h2>
                Eco Superhero - a platform that brings together the synergies of
                making peace with nature and how we can change our ways of
                addressing the world around us in a more sustainable manner
              </h2>
              <p>
                We are a team of four committed to help change the world which
                is inclining towards it's own extinction! This project aims at
                raising awareness among the people to realise the seriousness of
                the scenario. We believe that if we are able to witness
                something infront of our eyes then we tend to empathise with it
                more easily, hence we bring to you Eco Superhero a journey how
                things will adversely affect us in the near future! But with a
                twist!
              </p>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
