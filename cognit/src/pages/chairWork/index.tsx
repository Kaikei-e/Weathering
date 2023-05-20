/** @jsxImportSource @emotion/react */

import axios from "axios";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { Schema } from "@/components/schema/mode";
import StatementParagraph from "@/components/base/modal/statementParagraph";

const ChairWork = () => {
  useEffect(() => {
    axios
      .get("/api/system/ping")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  });

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
        <h1
          css={css`
            margin: 1%;
          `}
        >
          Chair Work
        </h1>
        <div
          css={css`
            margin: 1%;
            font-size: 20px;
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
          flex-direction: row;
          width: 100%;
          height: 80vh;
          justify-content: center;
          overflow: auto;
        `}
      >
        <Schema
          title={"Healthy Adult"}
          cssProperties={cssProperties}
          modeStatement={
            <StatementParagraph
              fontSize={24}
              color={"black"}
              statement={healthyAdultModeStatement}
            />
          }
        />
        <Schema
          title={"Dysfunctional Child"}
          cssProperties={cssProperties}
          modeStatement={
            <StatementParagraph
              fontSize={24}
              color={"black"}
              statement={dysfunctionalChildModeStatement}
            />
          }
        />
        <Schema
          title={"Dysfunctional Parent"}
          cssProperties={cssProperties}
          modeStatement={<div>This is the Dysfunctional Parent Mode.</div>}
        />
      </div>
    </div>
  );
};

const healthyAdultModeStatement = `This is the Healthy Adult Mode. 
The gardian of your inner mind. 
In this mode, Envision an absolute protector, 
and actively, with a touch of humor, 
focus on the facts to rebut the thoughts of other modes.`;

const dysfunctionalChildModeStatement = `This Dysfunctional child mode represents the primal emotions in your heart, 
such as 'fear', 'sadness', and 'loneliness'. 
Here, please be honest with the raw emotions welling up from within you and express them. 
For example, 'I'm so anxious about the job interview tomorrow'.`;

const cssProperties = css`
  width: 28%;
  height: 90%;
  margin: 1%;
  border-radius: 12px;
  border: white 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #689fcf;
`;

export default ChairWork;
