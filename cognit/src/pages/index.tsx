/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Home = () => {
  return (
    <div className={"bgWrap"}>
      <h1
        css={css`
          position: absolute;
          top: 75%;
          left: 30%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 32px;
          text-align: center;
          text-shadow: 2px 2px 2px black;
          font-weight: 400;
          letter-spacing: 0.1rem;
          margin-bottom: 2%;
        `}
      >
        Weathering
      </h1>
      <div css={
        css`
        width: 40%;
          position: absolute;
          top: 85%;
          left: 30%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 20px;
          text-align: center;
          text-shadow: 2px 2px 2px black;
          font-weight: 300;
        `
      }>
        <p>
          Weathering is an application that helps you flow with, adapt to, and
          overcome the waves of your emotions.
        </p>
        <p>
          It assists you in regaining control and a sense of mastery over your
          feelings.
        </p>
      </div>
    </div>
  );
};

export default Home;
