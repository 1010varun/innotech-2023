import React, { useEffect } from "react";
import AOS from "aos";

const ValueCard = ({ time, image, heading, data }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="col-lg-4 mt-4 mt-lg-0"
      data-aos="fade-up"
      data-aos-delay={time}
    >
      <div className="box">
        <img
          src={image}
          className="img-fluid"
          alt=""
        />
        <h3>{heading}</h3>
        <p>
          {data}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
