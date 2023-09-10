import React from "react";
import girl from "../assets/img/Contactgirl.png";
import logo from "../assets/img/logo.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

// import colorSharp from './'
import colorSharp from "../assets/img/color-sharp.png";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Edu = () => {
  return (
    <section className="skill" id="education">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="edu-bx wow">
              <h2>Education</h2>
              <center>
                <p>
                  "Embarking on the path of Computer Science education, I delved
                  into a world of algorithms, networks, and creativity.
                  Nurturing my curiosity, this journey forged a deep connection
                  between theory and practice, equipping me to craft innovative
                  solutions in the digital landscape."
                </p>
                <ul className="education-boxes">
                  <TrackVisibility>
                    {({ isVisible }) => (
                      <section>
                        <img
                          className={
                            isVisible
                              ? "logo animate__animated flip-animation"
                              : "logo"
                          }
                          src={logo}
                        />

                        <section
                          id="CS-Hons"
                          data-aos="fade-left"
                          className={
                            isVisible ? "animate__animated animate__zoomIn" : ""
                          }
                        >
                          <li>BSC. COMPUTER SCIENCE HONS </li>
                          <li class="subname">
                            Indraprastha College for Women, University of Delhi
                          </li>
                          <li class="sub-subname">(2021-2024) </li>
                          <br />
                          <li class="sub-subname">
                            <b>CGPA: </b>9.14/10
                          </li>
                          <li class="sub-subname">
                            <b>Releavent Courses : </b>
                            <ul class="list-of-courses">
                              <li>Data Structures and Algorithms</li>
                              <li>Database Management Systems</li>
                              <li>Computer Networks</li>
                              <li>Operating Systems</li>
                              <li>Web Design and Development</li>
                              <li>Software Engineering</li>
                            </ul>
                          </li>
                        </section>
                      </section>
                    )}
                    {/* {({ isVisible }) =>
                        <section>
                             <img  className={isVisible ? "edugirl animate__animated animate__zoomIn" : ""} src={girl} alt="Contact Us"/>
                             </section>
                        }  */}
                  </TrackVisibility>
                </ul>
              </center>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
