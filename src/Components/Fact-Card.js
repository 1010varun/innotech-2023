import React, { useEffect } from "react";
import AOS from "aos";
// import { AiOutlinePlus, AiOutlineLink } from "react-icons/ai";

const FactCard = ({imageSrc, data}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-wrap">
          <img
            src={imageSrc}
            class="img-fluid"
            alt=""
          />
          <div class="portfolio-info">
            <p>{data}</p>
          </div>
        </div>
      </div>
    );
}

export default FactCard;