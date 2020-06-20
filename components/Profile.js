import React from "react";
import Fade from "react-reveal/Fade";

const checkUrls = (obj) => {
  switch (obj.name) {
    case "github":
      return `https://github.com/${obj.userName}`;
    case "twitter":
      return `https://twitter.com/${obj.userName}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${obj.userName}`;
    case "instagram":
      return `https://www.instagram.com/${obj.userName}`;
    default:
      return null;
  }
};

export default ({
  Config: {
    GITHUB_USER_NAME,
    NAME,
    ROLE,
    EMAIL,
    TECH_STACK,
    SOCIAL_MEDIA,
    LOCATION,
  },
}) => {
  return (
    <Fade duration={2000}>
      <div className="profile">
        <img
          src={`https://avatars1.githubusercontent.com/${GITHUB_USER_NAME}`}
        />
        <div className="info">
          <h3>{NAME}</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            {`${LOCATION.state}, ${LOCATION.country}`}
          </p>
          <p className="email">
            <i className="fas fa-envelope"></i> {EMAIL}
          </p>
          <p>{ROLE}</p>

          <div className="tech-stack">
            {TECH_STACK.map((i, index) => (
              <p key={index + "techstack"}>
                <span className="dot"></span> {i}
              </p>
            ))}
          </div>
        </div>
        <ul className="social">
          {SOCIAL_MEDIA.map((i, index) => (
            <li key={index + "social"}>
              <a href={checkUrls(i)} target="blank">
                <i className={`fab fa-${i.name}`}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .profile {
          position: fixed;
          z-index: 1;
          padding: 10px;
          font-size: 0.9rem;
          text-align: center;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
          background: #fff;
          width: 190px;
          height: 600px;
          border-radius: 10px;
        }
        .tech-stack {
          text-align: left;
        }

        .location > i {
          color: #000;
        }
        .email > i {
          color: #000;
        }
        .tech-stack > p {
          margin: 10px;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
          background: #fdfdfd;
        }
        .dot {
          height: 10px;
          width: 10px;
          background-color: #0070f399;
          border-radius: 50%;
          display: inline-block;
          margin-right: 20px;
        }
        img {
          height: 180px;
          border-radius: 10px;
        }
        .social {
          list-style: none;
          padding: 0;
        }
        .social > li {
          display: inline-block;
          margin-right: 10px;
          background: #ed0000b8;
          padding: 8px 10px;
          border-radius: 50%;
          box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
        }
        .social > li > a {
          color: #fff;
        }
        .info {
          text-align: left;
          padding: 10px;
        }
        @media (max-width: 800px) {
          .profile {
            position: relative;
            z-index: 0;
            width: 100%;
            height: 100%;
            padding: 0;
          }
          img {
            height: 120px;
            float: left;
            padding: 10px;
          }
          .info {
            text-align: left;
            padding: 0;
            margin: 0;
          }
          .info > h3 {
            margin-top: 6px;
          }
          .social {
            padding-bottom: 20px;
          }
        }
      `}</style>
    </Fade>
  );
};
