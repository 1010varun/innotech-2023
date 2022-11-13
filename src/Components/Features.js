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
          <h2>Save Earth</h2>
          <p>We can save our Mother Earth by Following these steps</p>
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
              <FeatureCard time="200" data={"Conserve Water"} />
              <FeatureCard time="350" data={"Reduce, Reuse, Recycle"} />
              <FeatureCard time="500" data={"Give Composting a Try"} />
              <FeatureCard time="650" data={"Eat Sustainable Foods"} />
              <FeatureCard time="800" data={"Plant Trees"} />
              <FeatureCard time="950" data={"Give Up Plastics"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
