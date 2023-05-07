/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

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
            width: inherit;
            height: inherit;
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
              display: flex;
              flex-direction: row;
              width: 100%;
              height: 100vh;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: row;
                width: 30%;
                height: 90vh;
              `}
            >
              <h2>Cognit: virtual chair work</h2>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: row;
                width: 30%;
                height: 90vh;
              `}
            >
              <h2>EeMotion: logging your mood</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
