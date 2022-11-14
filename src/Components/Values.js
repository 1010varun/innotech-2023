import React, { useEffect } from "react";
import AOS from "aos";

import ValueCard from "./Value-Card";

const Values = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="values" className="values">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Mission Statement</p>
          <br></br>
          <br></br>
          <h2>
            We want people to atleast realise how their small<br></br> mistakes
            lead to the reduction in time that is left for us to live with peace
          </h2>
        </header>

        <div className="row">
          <ValueCard
            time="200"
            heading={"Climate"}
            image={
              "https://www.saveplanetearth.org/wp-content/uploads/elementor/thumbs/pexels-pixabay-314839_1-pm1b4zep1e9ks9mn7jxh59wtogv2qrbyoosaqu67xc.jpeg"
            }
            data={
              "The recent increase in greenhouse gas pollution is trapping excess heat and causing the climate to warm"
            }
          />
          <ValueCard
            time="400"
            heading={"Wildlife"}
            image={
              "https://www.saveplanetearth.org/wp-content/uploads/elementor/thumbs/pexels-alexas-fotos-2220336-scaled-pm1bz6xyopmbx3qxt40ts5h4z9yr4k9ei7l2zzdpy8.jpeg"
            }
            data={
              "When a habitat is destroyed, the plants, animals, and other organisms that occupied thehabitat have a reduced carrying capacity so that populations decline and extinction becomes more likely"
            }
          />
          <ValueCard
            time="600"
            heading={"Ocean"}
            image={
              "https://www.saveplanetearth.org/wp-content/uploads/elementor/thumbs/pexels-richard-segal-1618606-scaled-pm1b5lytlf4giwpvjtoit47vxprvvhtirsfy9h8rs0.jpeg"
            }
            data={"Global warming is causing sea levels to rise, threatening coastal population centers. Many pesticides and nutrients used in agriculture end up in the coastal waters, resulting in oxygen depletion that kills marine plants and shellfish."}
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
