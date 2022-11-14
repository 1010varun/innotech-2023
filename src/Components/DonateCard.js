import React, { useEffect } from "react";
import AOS from "aos";
import { AiOutlineArrowRight } from "react-icons/ai";

const DonateCard = ({ time, image, heading, data, link }) => {
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
        <img src={image} className="img-fluid" alt="" />
        <h3>{heading}</h3>
        <p>{data}</p>
        <div className="text-center d-flex flex-column">
          <a
            href={link}
            className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center btn btn-primary"
          >
            <span>Know More</span>
            <i className="bi bi-arrow-right"><AiOutlineArrowRight /></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
