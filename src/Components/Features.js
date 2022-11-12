import React, { useEffect } from "react";
import AOS from "aos";

import FeatureCard from "./Feature-Card";

const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Features</h2>
          <p>Laboriosam et omnis fuga quis dolor direda fara</p>
        </header>

        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              <FeatureCard time = "200"/>
              <FeatureCard time = "350"/>
              <FeatureCard time = "500"/>
              <FeatureCard time = "650"/>
              <FeatureCard time = "800"/>
              <FeatureCard time = "950"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
