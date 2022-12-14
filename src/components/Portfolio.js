/* eslint-disable react/no-unescaped-entities */
import React from "react";
import IMUPIC from "../images/awkward-imu.png";
import JobSearch from "../images/job-search-whole.png";
import Popcorn from "../images/popcornsample.png";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="section project">
        <div className="title">Portfolio</div>
        <div className="singleproject">
          <div className="imageunion">
            <h4>ImageUnion</h4>
            <div className="project-text">
              <span>Built with: Javascript, HTML, CSS and Wordpress API</span>
              <div>
                A consumer-facing video streaming website created for a media
                startup in Chicago. With over 66% of traffic coming on mobile,
                website is built with mobile responsive design. Published using
                Netlify.
              </div>
              <div className="links">
                <a href="https://imageunion.tv/">Live Site ↗</a>
              </div>
            </div>
          </div>
          <img className="project-image" src={IMUPIC} />
        </div>

        <div className="singleproject">
          <div className="job-search">
            <h4>Job Search Helper</h4>
            <div className="project-text">
              <span>
                Built with: NodeJS, Express, MongoDB, React and JSON Web Token
              </span>
              <div>
                A simple, user-friendly tool that helps people actively seeking
                jobs stay organized as they browse for jobs. The web app lets
                users keep track of job listings by inputting the title,
                company, link to the listing, whether or not they've applied
                plus any other relevant notes. Users can filter through added
                listings by most recent, oldest and applied status.
              </div>

              <div className="links">
                <a href="https://jobsearch-helper.herokuapp.com/login">
                  Live Site ↗
                </a>
                <a href="https://github.com/TeisJayaswal/job-search-helper">
                  Code ↗
                </a>
              </div>
            </div>
          </div>
          <img className="project-image" src={JobSearch} />
        </div>
        <div className="singleproject popcorn-project">
          <div className="popcorn">
            <h4>Popcorn Social</h4>
            <div className="project-text">
              <span>
                Built with: React, Firebase and The Movie Database (TMDB) API
              </span>
              <div>
                A social network for friends and family to post about movies and
                televison. Users can follow each other and react and comment to
                each others posts in the feed. Designed to offer simple,
                mobile-friendly user experience
              </div>
              <div className="links">
                <a href="https://popcorn-social.com/">Live Site ↗</a>
                <a href="https://github.com/TeisJayaswal/popcorn-social">
                  Code ↗
                </a>
              </div>
            </div>
          </div>
          <img className="project-image" src={Popcorn} />
        </div>
        <div className="singleproject popcorn-project">
          <div className="popcorn">
            <h4>This Website!</h4>
            <div className="project-text">
              <span>Built with: React</span>
              <div className="links">
                <a href="https://github.com/TeisJayaswal/new-portfolio">
                  Code ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-1"></div>
    </>
  );
};

export default Portfolio;
