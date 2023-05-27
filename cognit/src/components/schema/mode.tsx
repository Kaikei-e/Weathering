/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import Modal from "../base/modal/modal";
import ModalButton from "../base/modal/modalButton";
import LoadingCircle from "@/components/base/loadingCircle";
import {
  adultSentenceAtom,
  childSentenceAtom,
  parentSentenceAtom,
} from "@/states/atoms/moodSentence";
import { PrimitiveAtom, useAtom } from "jotai";
import { ModeType, ModeUnion } from "@/pages/chairWork";
import MoodRecords from "@/components/schema/moodRecords";

type Props = {
  className?: string;
  title: string;
  modeStatement: React.ReactNode;
  whichMode: ModeUnion;
  inTheMode: boolean;
};

export const Schema: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adultSentences, setAdultSentences] = useAtom(adultSentenceAtom);
  const [childSentences, setChildSentences] = useAtom(childSentenceAtom);
  const [parentSentences, setParentSentences] = useAtom(parentSentenceAtom);
  const [writingSentence, setWritingSentence] = useState("");
  const openModal = () => {
    setIsOpen(true);
  };

  const stateSwitcher = (mode: ModeUnion): string[] => {
    switch (mode.mode) {
      case ModeType.HealthyAdult:
        return adultSentences;
      case ModeType.DysfunctionalChild:
        return childSentences;
      case ModeType.DysfunctionalParent:
        return parentSentences;
    }
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
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        {props.inTheMode ? <LoadingCircle /> : <div></div>}
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
          height: 100%;
          margin: 1%;
          border-radius: 10px;
          border: midnightblue solid 1px;
          display: flex;
          flex-direction: column;
          background-color: azure;
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }
        `}
        >
          {
              (() => {
                  switch (props.whichMode.mode) {
                      case ModeType.HealthyAdult:
                          return <MoodRecords moods={adultSentences} />;
                      case ModeType.DysfunctionalChild:
                          return <MoodRecords moods={childSentences} />;
                      case ModeType.DysfunctionalParent:
                          return <MoodRecords moods={parentSentences} />;
                      default:
                          return null;
                  }
              })()
          }






          <div
          css={css`
            width: 100%;
            height: 20%;
            border-radius: 10px;
            margin-top: 2%;
            background-color: aliceblue;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          `}
        >
          {props.inTheMode && (
            <div
              css={css`
                width: 90%;
                height: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              `}
            >
              <input
                type="text"
                css={css`
                  width: 100%;
                  height: 100%;
                  border-radius: 5px;
                  padding: 1%;
                  background-color: #d4faa6;
                `}
                onChange={(e) => {
                  setWritingSentence(e.target.value);
                }}
              />
              <button
                css={css`
                  width: 60%;
                  height: 50%;
                  border-radius: 5px;
                  margin-top: 1%;
                  color: white;
                  font-size: 20px;
                  background-color: #689fcf;
                `}
                onClick={() => {
                  console.log(writingSentence);
                  switch (props.whichMode.mode) {
                    case ModeType.HealthyAdult:
                      setAdultSentences([...adultSentences, writingSentence]);
                      return;
                    case ModeType.DysfunctionalChild:
                      setChildSentences([...childSentences, writingSentence]);
                      return;
                    case ModeType.DysfunctionalParent:
                      setParentSentences([...parentSentences, writingSentence]);
                      return;
                  }
                }}
              >
                {" "}
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
