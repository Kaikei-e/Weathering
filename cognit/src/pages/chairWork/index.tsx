/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Schema } from "@/components/schema/mode";
import StatementParagraph from "@/components/base/modal/statementParagraph";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {
  adultSentenceAtom,
  childSentenceAtom,
  parentSentenceAtom,
} from "@/states/atoms/moodSentence";

export type ModeUnion = HealthyAdult | DysfunctionalChild | DysfunctionalParent;

export const enum ModeType {
  HealthyAdult = 0,
  DysfunctionalChild = 1,
  DysfunctionalParent = 2,
}

export type HealthyAdult = {
  mode: ModeType.HealthyAdult;
  sentences: string[];
};

export type DysfunctionalChild = {
  mode: ModeType.DysfunctionalChild;
  sentences: string[];
};

export type DysfunctionalParent = {
  mode: ModeType.DysfunctionalParent;
  sentences: string[];
};

const enum modeColor {
  HealthyAdult = "#d4faa6",
  DysfunctionalChild = "#fdf48c",
  DysfunctionalParent = "#fdb7cb",
}

function colorSwitcher(mode: ModeType): string {
  switch (mode) {
    case ModeType.HealthyAdult:
      return modeColor.HealthyAdult;
    case ModeType.DysfunctionalChild:
      return modeColor.DysfunctionalChild;
    case ModeType.DysfunctionalParent:
      return modeColor.DysfunctionalParent;
  }
  return "skyblue";
}

function modeResetter(mode: number) {
  if (mode > 2) {
    return 0;
  }
  return mode;
}

const ChairWork = () => {
  const [modeType, setModeType] = useState(ModeType.HealthyAdult);
  const [adultSentence, setAdultSentence] = useAtom(adultSentenceAtom);
  const [childSentence, setChildSentence] = useAtom(childSentenceAtom);
  const [parentSentence, setParentSentence] = useAtom(parentSentenceAtom);

  const [selectedMode, setSelectedMode] = useState<ModeUnion>({
    mode: ModeType.HealthyAdult,
    sentences: [],
  });

  const modeSwitcher = (mode: ModeType) => {
    switch (mode) {
      case ModeType.HealthyAdult:
        return {
          mode: ModeType.HealthyAdult,
          sentences: adultSentence,
        };
      case ModeType.DysfunctionalChild:
        return {
          mode: ModeType.DysfunctionalChild,
          sentences: childSentence,
        };
      case ModeType.DysfunctionalParent:
        return {
          mode: ModeType.DysfunctionalParent,
          sentences: parentSentence,
        };
    }
  };

  const handleModeChange = (
    modeUnion: HealthyAdult | DysfunctionalChild | DysfunctionalParent
  ) => {
    switch (modeUnion.mode) {
      case ModeType.HealthyAdult:
        setAdultSentence(modeUnion.sentences);
        break;
      case ModeType.DysfunctionalChild:
        setChildSentence(modeUnion.sentences);
        break;
      case ModeType.DysfunctionalParent:
        setParentSentence(modeUnion.sentences);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setModeType(modeType);
  }, [modeType]);

  const modeStyle = css`
    width: 28%;
    height: 95%;
    margin: 1%;
    border-radius: 12px;
    border: black 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colorSwitcher(modeType)};
  `;

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
        <h1 css={css``}>Chair Work</h1>
        <div
          css={css`
            display: flex;
            font-size: 20px;
            margin: 0;
          `}
        >
          <p>
            Chair Work is a technique that helps you to understand your own
            thoughts
          </p>
          <p>and feelings by having a conversation with yourself.</p>
        </div>
      </div>
      <h2
        css={css`
          text-align: center;
        `}
      >
        Each mode
      </h2>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 80vh;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 90%;
            justify-content: center;
            overflow: auto;
          `}
        >
          <Schema
            title={"Healthy Adult"}
            whichMode={selectedMode}
            sentences={adultSentence}
            modeStatement={
              <StatementParagraph
                fontSize={24}
                color={"black"}
                statement={healthyAdultModeStatement}
              />
            }
            inTheMode={ModeType.HealthyAdult === modeType}
            css={[
              modeStyle,
              css`
                background-color: ${colorSwitcher(ModeType.HealthyAdult)};
              `,
            ]}
          />
          <Schema
            title={"Dysfunctional Child"}
            whichMode={selectedMode}
            sentences={childSentence}
            modeStatement={
              <StatementParagraph
                fontSize={24}
                color={"black"}
                statement={dysfunctionalChildModeStatement}
              />
            }
            inTheMode={ModeType.DysfunctionalChild === modeType}
            css={[
              modeStyle,
              css`
                background-color: ${colorSwitcher(ModeType.DysfunctionalChild)};
              `,
            ]}
          />
          <Schema
            title={"Dysfunctional Parent"}
            whichMode={selectedMode}
            sentences={parentSentence}
            modeStatement={
              <StatementParagraph
                fontSize={24}
                color={"black"}
                statement={dysfunctionalParentModeStatement}
              />
            }
            inTheMode={ModeType.DysfunctionalParent === modeType}
            css={[
              modeStyle,
              css`
                background-color: ${colorSwitcher(
                  ModeType.DysfunctionalParent
                )};
              `,
            ]}
          />
        </div>
        <button
          css={css`
            width: 20%;
            height: 6%;
            border-radius: 10px;
            border: midnightblue solid 1px;
            background-color: azure;
            font-size: 24px;
            font-family: "Domine", serif;
            &:hover {
              background-color: #f1f3e6;
              cursor: pointer;
            }
            transition: background-color 0.3s ease;
          `}
          onClick={() => {
            setModeType(modeResetter(modeType + 1));
            handleModeChange(modeSwitcher(modeType));
          }}
        >
          Switch Mode !!
        </button>
      </div>
    </div>
  );
};

const healthyAdultModeStatement = `This is the Healthy Adult Mode. 
The guardian of your inner mind. 
In this mode, Envision an absolute protector, 
and actively, with a touch of humor, 
focus on the facts to rebut the thoughts of other modes.`;

const dysfunctionalChildModeStatement = `This Dysfunctional child mode represents the primal emotions in your heart, 
such as 'fear', 'sadness', and 'loneliness'. 
Here, please be honest with the raw emotions welling up from within you and express them. 
For example, 'I'm so anxious about the job interview tomorrow'.`;

const dysfunctionalParentModeStatement = `This is the Dysfunctional Parent Mode.
This dysfunctional parent mode represents the critical thoughts in your mind. 
Consider it as a collection of critical thoughts about yourself, not actual parents. 
These thoughts speak to you like, 'You're an adult, so you should do X', 
'You are the eldest son, so you should protect your family', 
'Aren't you ashamed as a woman?'. 
These set limitations on your actions and thoughts. 
However, please write them down as they are here. 
Then, you're going to break them down in a healthy adult mode.
`;

export default ChairWork;
