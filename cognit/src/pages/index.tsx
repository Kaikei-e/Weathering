import axios from "axios";
import { useEffect } from "react";
import { css } from "@emotion/react";

const ChairWork = () => {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #1e3447;
      `}
    >
      <h1>Weathering</h1>
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

export default ChairWork;
