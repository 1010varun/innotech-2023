import React, { useEffect } from "react";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span></span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">Team Divine</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
