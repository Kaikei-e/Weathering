/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type Props = {
  message: string;
  type: "success" | "error";
};

const Toast: React.FC<Props> = (props: Props) => {
  return (
    <div
      css={css`
        position: fixed;
        bottom: 20px;
        left: 20px;
        padding: 10px;
        background-color: ${props.type === "success" ? "#88c070" : "#e88787"};
        color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: 1.4;
        z-index: 9999;
        opacity: 0.9;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 1;
        }
      `}
    >
      {props.message}
    </div>
  );
};

export default Toast;
