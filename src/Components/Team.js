import React, { useEffect } from "react";
import AOS from "aos";
import Mrigya from "../images/mrigya.jpeg";
import Kapil from "../images/kapil.jpeg";
import Parag from "../images/parag.jpeg";
import Varun from "../images/varun.jpg";

import TeamCard from "./Team-Card";

const Team = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Team</h2>
          <p>Our Team</p>
        </header>

        <div className="row gy-4">
          <TeamCard
            time="200"
            imageurl={Mrigya}
            name={"Mrigya Sahai"}
            about={"AR-VR enthusiast"}
            twitter={"https://twitter.com/mrigyasahai"}
            linkedin={"https://in.linkedin.com/in/mrigya-sahai-246842196"}
          />
          <TeamCard
            time="400"
            imageurl={Kapil}
            name={"Kapil Kumar Singh"}
            about={"AR-VR enthusiast"}
            twitter={
              "https://twitter.com/896Kapilsingh?t=zZG4NcIBwZYLEnLwog4feg&s=09"
            }
            linkedin={
              "https://www.linkedin.com/in/kapil-kumar-singh-680aaa242/"
            }
          />
          <TeamCard
            time="600"
            imageurl={Parag}
            name={"Parag Gupta"}
            about={"AR-VR enthusiast"}
            twitter={
              "https://twitter.com/sup_dante?t=Hfza_kCpZsuEw1Q-0Ivtzg&s=09"
            }
            linkedin={"https://www.linkedin.com/in/parag-gupta-9b979323b"}
          />
          <TeamCard
            time="800"
            imageurl={Varun}
            name={"Varun Agarwal"}
            about={"Wed developer(full stack developer)"}
            twitter={"https://twitter.com/varunag979311"}
            linkedin={"https://www.linkedin.com/in/varun-agarwal-b91518226/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
