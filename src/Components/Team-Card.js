import React, { useEffect } from "react";
import AOS from "aos";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"

const TeamCard = ({time}) => {
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
            src="https://images.pexels.com/photos/61120/pexels-photo-61120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="img-fluid"
            alt=""
          />
          <div className="social">
            <a href="logo">
              <i className="bi bi-twitter">
                <AiOutlineTwitter />
              </i>
            </a>
            <a href="logo">
              <i className="bi bi-facebook">
                <BsFacebook />
              </i>
            </a>
            <a href="logo">
              <i className="bi bi-instagram">
                <AiFillInstagram />
              </i>
            </a>
            <a href="logo">
              <i className="bi bi-linkedin">
                <AiFillLinkedin />
              </i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <p>
            Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur
            ipsa quae aut. Ipsum exercitationem iure minima enim corporis et
            voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
