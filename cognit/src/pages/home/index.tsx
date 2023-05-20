/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Button from "next/link";

const Home = () => {
  return (
    <div className={"bgHome"}>
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 2%;
            left: 2%;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            font-family: "Domine", serif;
          `}
        >
          <h1
            css={css`
              color: black;
            `}
          >
            Weathering: Flow, Adapt, Overcome !
          </h1>
          <div
            css={css`
              width: 100%;
              height: 50vh;
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: repeat(2, 1fr);
              grid-gap: 10px;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 40vh;
              `}
            >
              <Button
                href={"/chairWork"}
                css={css`
                  width: 50%;
                  height: 40%;
                  background-color: azure;
                  border-radius: 10px;
                  border: 1px solid black;
                  text-align: center;
                `}
              >
                <h2>Cognit: virtual chair work</h2>
              </Button>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 40vh;
              `}
            >
              <h2>EeMotion: logging your mood</h2>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 40vh;
              `}
            >
              <h2>Easy Take: Just a simple note. Write anything.</h2>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 40vh;
              `}
            >
              <h2>4 Cirlces: Stabilize your breathing</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
