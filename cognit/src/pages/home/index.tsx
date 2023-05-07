/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const Home = () => {
  return (
    <div className={"bgWrap"}>
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 4%;
            left: 4%;
            display: flex;
            flex-direction: row;
            font-family: "Domine", serif;
          `}
        >
          <h1
            css={css`
              color: white;
            `}
          >
            Weathering: Flow, Adapt, Overcome !
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
