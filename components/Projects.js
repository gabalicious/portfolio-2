import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import RepoIcon from "../public/icons/repo";
import Tags from "./Tags";

export default ({ data }) => {
  return (
    <div className="projects">
      <ul className="project-cards">
        {data
          // push repos w/ demo links to top of page
          .sort((a, b) => String(b.homepage).length - String(a.homepage).length)
          .map((i, index) => (
            <Fade bottom duration={1500} delay={100 * index} key={i.id}>
              <li className="project-card">
                <div className="about">
                  <p>
                    <RepoIcon /> <span className="project-title">{i.name}</span>
                  </p>
                  <p>{i.description}</p>
                </div>
                <div style={{ marginBottom: "70px" }}>
                  {/* <Tags name={i.name}></Tags> */}
                </div>
                <div className="buttons" style={{ marginBottom: "20px" }}>
                  <span>
                    <a href={i.html_url} target="_blank" className="btn">
                      Repo
                    </a>
                  </span>
                  <span>
                    {String(i.homepage).length > 4 ? (
                      <a
                        href={i.homepage}
                        target="_blank"
                        className="btn btn-success"
                      >
                        Demo
                      </a>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </li>
            </Fade>
          ))}
      </ul>
      <style jsx>{`
        .projects {
          margin-left: 190px;
        }
        .project-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: 20px;
          grid-column-gap: 20px;
          list-style: none;
          position: relative;
          margin-top: 2px;
        }
        .project-card {
          position: relative;
          z-index: 0;
          border-radius: 10px;
          font-size: 1rem;
          padding: 10px 20px;
          box-shadow: 0 0px 15px -3px rgba(0, 0, 0, 0.1),
            0 0px 6px -2px rgba(0, 0, 0, 0.05);
          width: 22vw;
          word-wrap: break-word;
          background: #fff;
          cursor: context-menu;
          transition: all 0.6s;
        }
        .project-card:hover {
          transform: scale(1.09) !important;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
          z-index: 1;
        }
        .project-title {
          margin-left: 10px;
          font-weight: 600;
          font-size: 1.1rem;
        }
        .project-card > p:last-child {
          position: absolute;
          bottom: 10px;
        }
        .buttons {
          position: absolute;
          bottom: 10px;
          left: 0;
          width: 100%;
        }
        .buttons > span {
          text-align: center;
          display: inline-block;
          width: 50%;
        }
        .buttons > span > .btn {
          text-decoration: none;
          color: #fff;
          background: #ed0000b8;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          padding: 5px 20px;
        }
        .project-card > p:last-child > span {
          margin: 10px;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .dot {
          height: 10px;
          width: 10px;
          background-color: #0070f399;
          border-radius: 50%;
          display: inline-block;
        }

        @media (max-width: 1265px) {
          .project-card > p:last-child > span {
            margin: 0;
            padding: 5px 5px;
          }
        }

        @media (max-width: 800px) {
          .projects {
            margin-left: 0;
          }
          .project-cards {
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 10px;
            margin-top: 50px;
            padding: 0;
          }
          .project-card {
            width: 100%;
            padding: 0;
          }
          .about {
            padding-left: 20px;
          }
          .project-card > p:last-child {
            width: 100%;
            text-align: center;
          }
          .project-card > p:last-child > span {
            margin: 0;
            margin-right: 10px;
          }
        }
        @media (max-width: 580px) {
          .project-card > p:last-child > span {
            margin: 0;
          }
        }
        @media (max-width: 480px) {
          .project-cards {
            grid-template-columns: repeat(1, 1fr);
            grid-column-gap: 0px;
          }
          .project-card > p:last-child > span {
            margin: 10px;
          }
        }
      `}</style>
    </div>
  );
};
