/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import { SerializedStyles } from "@emotion/react";
import React, { useState } from "react";
import Toast from "../base/toast";
import Modal from "../base/modal/modal";
import ModalButton from "../base/modal/modalButton";

type Props = {
  title: string;
  description: string;
  cssProperties: SerializedStyles;
  modeStatement: React.ReactNode;
};

export const Schema: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div css={props.cssProperties}>
      <h1
        css={css`
          text-align: center;
        `}
      >
        {props.title}
      </h1>
      <p>{props.description}</p>
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
      {/* <Toast message={"error !!!"} type={"error"} /> */}
    </div>
  );
};
