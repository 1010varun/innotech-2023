import React, { useEffect } from "react";
import AOS from "aos";

import DonateCard from "./DonateCard";

const Donate = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="donate" className="values">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <p>Donate</p>
          <br></br>
          <br></br>
          <h2>
            You can donate on following sites these are registered
            non-profitable organisations
          </h2>
        </header>

        <div className="row">
          <DonateCard
            time="200"
            heading={"Rally for Rivers"}
            image={
              "https://media.istockphoto.com/id/478587627/photo/dry-lake.jpg?s=612x612&w=0&k=20&c=9jdPx_wKuplRFJvVsdnRTkRsalXPEIkP05tuVOsisrA="
            }
            data={
              "Supported by 162 million people, RfR is the largest ecological movement in the world, offering a sustainable long-term solution to water flow depletion. RfR recommendations, changing the national discourse on how India handles her natural resources"
            }
            link={
              "https://isha.sadhguru.org/rally-for-rivers/volunteer-rally-rivers/"
            }
          />
          <DonateCard
            time="400"
            heading={"Act Now"}
            image={
              "https://miro.medium.com/max/1400/1*lL_JIyJt9VHaYa6PRx-bEw.jpeg"
            }
            data={
              "ActNow is the United Nations campaign for individual action on climate change and sustainability. By making choices that have less harmful effects on the environment, we can be part of the solution and influence change."
            }
            link={"https://www.un.org/en/actnow"}
          />
          <DonateCard
            time="600"
            heading={"Earth Justice"}
            image={"https://i.ytimg.com/vi/3omd8Ilj6I4/maxresdefault.jpg"}
            data={
              "Earthjustice is a environmental law organization.We wield the power of law and the strength of partnership to protect people’s health, to preserve magnificent places and wildlife, to advance clean energy, and to combat climate change."
            }
            link={
              "https://earthjustice.org/?_ga=2.85226905.1632577125.1668448859-1117400618.1668448856&_gac=1.15904068.1668448859.CjwKCAiA68ebBhB-EiwALVC-NiMSX2t-Inj8XLDRuN2nqjm4CDtEhu2zfFpSZSHG9XSENk1rRnTD6BoCi0IQAvD_BwE"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Donate;
