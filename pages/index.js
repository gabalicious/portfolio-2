import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import { css } from "@emotion/core";
import { GridLoader } from "react-spinners";
import Meta from "../components/Meta";
import Config from "../config";

const Home = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const centerLoader = css`
    margin: auto;
    margin-top: 20%;
  `;

  return (
    <>
      <Meta />
      {isLoading ? (
        <div style={{ height: "640px" }}>
          <GridLoader css={centerLoader} size={38} />
        </div>
      ) : (
        <>
          <div className="container" style={{ overflow: "hidden" }}>
            <Profile Config={Config} />
            <Projects data={data} />
          </div>
          <style jsx>
            {`
          .container {
            display: flex;
            flex-direction: row;
            padding: 20px;
            overflow-x: hidden;
          }
          @media (max-width: 800px) {
            .container {
              flex-direction: column;
            }
        `}
          </style>
        </>
      )}
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    `https://api.github.com/users/${Config.GITHUB_USER_NAME}/repos?sort=created`
  );
  const data = await res.json();
  console.log("data", data.length);
  const filtered = data.filter((i) => i.description != null);
  return { data: filtered };
};

export default Home;
