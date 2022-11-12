import React, { useEffect } from "react";
import AOS from "aos";
import FactCard from "./Fact-Card";

const Facts = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Facts</h2>
          <p>Facts about Eco system</p>
        </header>

        <div
          className="row gy-4 portfolio-container"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FactCard
            imageSrc={
              "https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            data={
              "The coming decade is crucial. Society needs to reduce carbon dioxide emissions by 45 per cent by 2030 compared to 2010 levels and reach net-zero emissions by 2050 to limit warning to 1.5 °C"
            }
          />
          <FactCard
            imageSrc={
              "https://images.pexels.com/photos/2591408/pexels-photo-2591408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            data={
              "Pollution causes some 9 million premature deaths annually and millions more die every year from other environment-related health risks."
            }
          />
          <FactCard
            imageSrc={
              "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            data={
              "Of 45 megacities with measurements, only four satisfied World Health Organization (WHO) guidelines for air quality. Currently, more than 90 per cent of the world’s population lives in places breaching WHO guidelines for particulate matter."
            }
          />
          <FactCard
            imageSrc={
              "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            data={
              "Other major environmental health risks include lack of access to clean drinking water and sanitation services, causing 1.7 million deaths per year from diarrheal diseases, many of which are deaths of children under the age of five."
            }
          />
          <FactCard
            imageSrc={
              "https://images.pexels.com/photos/775200/pexels-photo-775200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            data={
              "Based on current national commitments, global emissions are set to increase by almost 14 per cent over the current decade, which could lead to a climate catastrophe."
            }
          />
          <FactCard
            imageSrc={
              "https://images.pexels.com/photos/1632793/pexels-photo-1632793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            data={
              "over 9 per cent of animal breeds have become extinct and at least another 17 per cent are threatened with extinction."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Facts;
