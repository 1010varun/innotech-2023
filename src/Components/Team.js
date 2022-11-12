import React, { useEffect } from "react";
import AOS from "aos";

import TeamCard from "./Team-Card";

const Team = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="team" class="team">
      <div class="container" data-aos="fade-up">
        <header class="section-header">
          <h2>Team</h2>
          <p>Our Team</p>
        </header>

        <div class="row gy-4">
          <TeamCard time="200" />
          <TeamCard time="400" />
          <TeamCard time="600" />
          <TeamCard time="800" />
        </div>
      </div>
    </section>
  );
};

export default Team;
