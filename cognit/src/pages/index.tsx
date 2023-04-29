import axios from "axios";
import { useEffect } from "react";
import { css } from "@emotion/react";

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
        background-color: #1e3447;
      `}
    >
      <h1>Chair Work</h1>
      <p>
        Chair Work is a technique that helps you to understand your own thoughts
        and feelings by having a conversation with yourself.
      </p>
    </div>
  );
};

export default ChairWork;
