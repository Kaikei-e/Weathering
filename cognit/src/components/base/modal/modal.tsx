/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  content: React.ReactNode;
};

const Modal: React.FC<Props> = ({ isOpen, closeModal, content }) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: ${isOpen ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
      `}
    >
      <div
        css={css`
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          max-width: 400px;
          text-align: center;
        `}
      >
        {content}

        <button
          css={css`
            background-color: #88f4f6;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 20px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;

            &:hover {
              background-color: #88f4f6;
            }
          `}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
