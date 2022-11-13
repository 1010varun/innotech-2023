import React, { useEffect } from "react";
import AOS from "aos";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"

const TeamCard = ({time, imageurl, name, about, twitter, linkedin}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="col-lg-3 col-md-6 d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay={time}
    >
      <div className="member">
        <div className="member-img">
          <img
            src={imageurl}
            className="img-fluid"
            alt=""
          />
          <div className="social">
            <a href={twitter}>
              <i className="bi bi-twitter">
                <AiOutlineTwitter />
              </i>
            </a>
            <a href={linkedin}>
              <i className="bi bi-linkedin">
                <AiFillLinkedin />
              </i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span></span>
          <p>
            {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
