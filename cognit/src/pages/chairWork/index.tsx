/** @jsxImportSource @emotion/react */

import axios from "axios";
import { useEffect } from "react";
import { css } from "@emotion/react";

const ChairWork = () => {
  useEffect(() => {
    axios
      .get("/api/system/ping")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div
      css={css`
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #f1f3e6;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          font-family: "Domine", serif;
          text-align: center;
          justify-content: center;
          align-items: center;
          padding: 1%;
        `}
      >
        <h1
          css={css`
            margin: 1%;
          `}
        >
          Chair Work
        </h1>
        <div
          css={css`
            margin: 1%;
            font-size: 20px;
          `}
        >
          <p>
            Chair Work is a technique that helps you to understand your own
            thoughts
          </p>
          <p>and feelings by having a conversation with yourself.</p>
        </div>
      </div>
    </div>
  );
};

export default ChairWork;
