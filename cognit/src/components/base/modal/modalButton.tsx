/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const ModalButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      css={css`
        background-color: #b2feb2;
        color: #0c0a0a;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
        font-size: 16px;
        font-weight: bold;

        &:hover {
          background-color: #f1f3e6;
        }
      `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ModalButton;
