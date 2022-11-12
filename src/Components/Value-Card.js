import React, { useEffect } from "react";
import AOS from "aos";

const ValueCard = ({ time }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={time}>
      <div className="box">
        <img
          src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="img-fluid"
          alt=""
        />
        <h3>Ad cupiditate sed est odio</h3>
        <p>
          Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit.
          Et veritatis id.
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
