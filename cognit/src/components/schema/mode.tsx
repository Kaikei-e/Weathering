/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import Modal from "../base/modal/modal";
import ModalButton from "../base/modal/modalButton";
import LoadingCircle from "@/components/base/loadingCircle";

type Props = {
  className?: string;
  title: string;
  modeStatement: React.ReactNode;
  moodSentences: string[];
  inTheMode: boolean;
};

export const Schema: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThisMode, setIsThisMode] = useState(false);
  const [sentences, setSentences] = useState<string[]>([]);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setSentences(props.moodSentences);
  }, [props.moodSentences]);

  return (
    <div className={props.className}>
      <h1
        css={css`
          text-align: center;
        `}
      >
        {props.title}
      </h1>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        {props.inTheMode ? (
          <LoadingCircle />
        ) : (
          <p
            css={css`
              margin-right: 10px;
            `}
          >
            Next
          </p>
        )}
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
      </div>
      <div
        css={css`
          width: 90%;
          height: 80%;
          margin-top: 4%;
          border-radius: 10px;
          border: midnightblue solid 1px;
          display: flex;
          flex-direction: column;
          text-align: center;
          background-color: azure;
        `}
      >
        <ul>
          {sentences.map((sentence, index) => {
            return (
              <li
                key={index}
                css={css`
                  width: 90%;
                  height: 20%;
                  border-radius: 10px;
                  margin-top: 2%;
                  background-color: aliceblue;
                `}
              >
                {sentence ? sentence : "No sentence"}
              </li>
            );
          })}
        </ul>
        {(() => {
          if (isThisMode) {
            return (
              <div>
                <p>このモードです</p>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};
