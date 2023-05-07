/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Home = () => {
  return (
    <div className={"bgWrap"}>
      <h1
        css={css`
          position: absolute;
          top: 80%;
          left: 20%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 32px;
          text-align: center;
          text-shadow: 2px 2px 2px black;
          font-family: "Roboto", sans-serif;
          font-weight: 300;
          letter-spacing: 0.1rem;
        `}
      >
        Weathering
      </h1>
      <p>
        Weathering is an application that helps you flow with, adapt to, and
        overcome the waves of your emotions.
      </p>
      <p>
        It assists you in regaining control and a sense of mastery over your
        feelings.
      </p>
    </div>
  );
};

export default Home;
