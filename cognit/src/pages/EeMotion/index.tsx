/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const EeMotion = () => {
  return (
    <div>
      <h1
        css={css`
          text-align: center;
        `}
      >
        EeMotion
      </h1>
      <div
        css={css`
          width: 90%;
          height: 100%;
          margin: 1%;
          padding: 1%;
          border: 1px solid #689fcf;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      ></div>
    </div>
  );
};

export default EeMotion;
