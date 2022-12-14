/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Netlify from "../images/netlify.svg";
const About = () => {
  return (
    <>
      <div className="section about">
        <div className="title">About</div>
        <div className="about-text">
          <p>
            Hi! I’m Teis Jayaswal, a web developer. I grew up in Portland, OR
            and graduated from The University of Chicago. After graduating, I
            joined a video startup called ImageUnion and helped to guide the
            company from concept to launch. I started programming and really
            enjoy the level of problem-solving and creativity that web
            development involves. When I'm not programming, you might find me
            baking, reading, making music or hanging out with dogs.
          </p>
        </div>
        <div className="skills">
          <div className="skill-box frontend">
            <div className="skill-title">Frontend</div>
            <div className="images">
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />

                <div>HTML5</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

                <div>CSS</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

                <div>JAVASCRIPT</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

                <div>REACT</div>
              </div>
            </div>
          </div>
          <div className="skill-box backend">
            <div className="skill-title">Backend</div>

            <div className="images">
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

                <div>NODEJS</div>
              </div>
              <div className="imagecaption">
                <img
                  style={{ filter: "invert(100%)" }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                />
                <div>EXPRESS</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

                <div>MONGODB</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />

                <div>FIREBASE</div>
              </div>
            </div>
          </div>
          <div className="skill-box other-tools">
            <div className="skill-title">Other Tools</div>
            <div className="images">
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

                <div>GIT</div>
              </div>
              <div className="imagecaption">
                <img
                  style={{ filter: "invert(100%)" }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                />

                <div>GITHUB</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />

                <div>NPM</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />

                <div>WEBPACK</div>
              </div>
              <div className="imagecaption">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />

                <div>HEROKU</div>
              </div>
              <div className="imagecaption">
                <img src={Netlify} />

                <div>NETLIFY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-1"></div>
    </>
  );
};

export default About;
