import React, { useEffect } from "react";
import AOS from "aos";
// import { AiOutlinePlus, AiOutlineLink } from "react-icons/ai";

const FactCard = ({imageSrc, data}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img
            src={imageSrc}
            className="img-fluid"
            alt=""
          />
          <div className="portfolio-info">
            <p>{data}</p>
          </div>
        </div>
      </div>
    );
}

export default FactCard;