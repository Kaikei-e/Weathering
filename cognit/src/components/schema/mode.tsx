/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Modal from "../base/modal/modal";
import ModalButton from "../base/modal/modalButton";

type Props = {
  className?: string;
  title: string;
  modeStatement: React.ReactNode;
};

export const Schema: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={props.className}>
      <h1
        css={css`
          text-align: center;
        `}
      >
        {props.title}
      </h1>
      <ModalButton onClick={openModal}>About this mode</ModalButton>
      {
        <Modal
          isOpen={isOpen}
          closeModal={() => {
            setIsOpen(false);
          }}
          content={props.modeStatement}
        />
      }
      <div
        css={css`
          width: 90%;
          height: 80%;
          margin-top: 4%;
          border-radius: 10px;
          border: midnightblue solid 1px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          background-color: azure;
        `}
      >
        <text>test</text>
      </div>
    </div>
  );
};
