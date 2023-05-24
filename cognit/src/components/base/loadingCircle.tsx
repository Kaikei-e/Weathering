/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const LoadingCircle = () => {
  return (
    <div
      css={css`
        display: inline-block;
        width: 24px;
        height: 24px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #72f552;
        border-radius: 50%;
        animation: spin 2s ease-in-out infinite;
        margin-right: 10px;

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
    ></div>
  );
};

export default LoadingCircle;
