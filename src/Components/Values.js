import React, { useEffect } from "react";
import AOS from "aos";

import ValueCard from "./Value-Card";

const Values = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="values" class="values">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Our Values</h2>
          <p>Odit est perspiciatis laborum et dicta</p>
        </header>

        <div class="row">
          <ValueCard time="200" />
          <ValueCard time="400" />
          <ValueCard time="600" />
        </div>
      </div>
    </section>
  );
};

export default Values;
