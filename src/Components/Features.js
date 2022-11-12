import React, { useEffect } from "react";
import AOS from "aos";

import FeatureCard from "./Feature-Card";

const Features = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="features" class="features">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Features</h2>
          <p>Laboriosam et omnis fuga quis dolor direda fara</p>
        </header>

        <div class="row">
          <div class="col-lg-6">
            <img
              src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="img-fluid"
              alt=""
            />
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div class="row align-self-center gy-4">
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
