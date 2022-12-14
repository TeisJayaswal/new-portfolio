/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ReactPlayer from "react-player";
import Twitter from "../images/twitter.png";

export default function ContactPage() {
  return (
    <>
      <div id="contact" className="section contact">
        <div className="title">Contact</div>
        <div className="contact-text">
          <p>The easiest way to reach me is by email at: </p>
          <p>teisjayaswal at gmail dot com</p>
          <p className="contact-page-text">Find me on:</p>
          <div className="images">
            <a
              className="imagecaption"
              href="https://www.linkedin.com/in/teis-jayaswal-38b5a2141/"
            >
              <img
                className="contact-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              />
            </a>
            <a className="imagecaption" href="https://twitter.com/teis_tj">
              <img className="contact-logo" src={Twitter} />
            </a>
            <a className="imagecaption" href="https://github.com/TeisJayaswal">
              <img
                className="contact-logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              />
            </a>
          </div>
          <p className="contact-page-text">
            Lastly, go check out my electronic/piano music on SoundCloud.
          </p>
          <p>Hint: it's great to loop for a deep work session 😉</p>
          <ReactPlayer
            className="soundcloud-player"
            url="https://soundcloud.com/broken-pipes/39th-sonata"
          />
        </div>
      </div>
      <div className="line-1"></div>
    </>
  );
}
