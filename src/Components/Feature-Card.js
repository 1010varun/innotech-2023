import React, { useEffect } from "react";
import AOS from "aos";
import { AiOutlineCheck } from "react-icons/ai";

const FeatureCard = ({time}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])
    console.log("time" , time);
    return (
      <div class="col-md-6" data-aos="zoom-out" data-aos-delay={time}>
        <div class="feature-box d-flex align-items-center">
          <i class="bi bi-check"><AiOutlineCheck/></i>
          <h3>Eos aspernatur rem</h3>
        </div>
      </div>
    );
}

export default FeatureCard;