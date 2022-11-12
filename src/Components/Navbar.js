import React from "react";
import {Link} from "react-scroll"

const Navbar = () => {
    return (
      <header id="header" class="header fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/314/440/small/earth-globe-clip-art-vector-illustration-isolated-free-png.png"
              alt=""
            />
            <span>Save the Earth</span>
          </a>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto">
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <a class="nav-link scrollto">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </a>
              </li>
              <li>
                <a class="nav-link scrollto">
                  <Link
                    to="values"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Statement
                  </Link>
                </a>
              </li>
              <li>
                <a href="blog.html">
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    eco Facts
                  </Link>
                </a>
              </li>
              <li>
                <a class="nav-link scrollto">
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Team
                  </Link>
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
}

export default Navbar;