import React, { useEffect } from "react";
import AOS from "aos";
import { AiOutlineCheck } from "react-icons/ai";

const FeatureCard = ({time, data}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    return (
      <div className="col-md-6" data-aos="zoom-out" data-aos-delay={time}>
        <div className="feature-box d-flex align-items-center">
          <i className="bi bi-check"><AiOutlineCheck/></i>
          <h3>{data}</h3>
        </div>
      </div>
    );
}

export default FeatureCard;