/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Home = () => {
  return (
    <div className={"bgWrap"}>
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          font-family: "Domine", serif;
        `}
      >
        <div
          css={css`
            flex-direction: column;
            width: 70%;
            height: 100%;
          `}
        >
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
          <div
            css={css`
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
            `}
          >
            <p>
              Weathering is an application that helps you flow with, adapt to,
              and overcome the waves of your emotions.
            </p>
            <p>
              It assists you in regaining control and a sense of mastery over
              your feelings.
            </p>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: flex-end;
            width: 30%;
            height: 100%;
            font-family: 'Domine', serif;
          `}
        >
          <button
            css={css`
              width: 32%;
              height: 4%;
              margin: 8%;
              border-radius: 8px;
              border: 2px solid white;
              background-color: transparent;
              text-decoration: none;
              color: white;
              cursor: pointer;
              transition: all 0.3s;
              :hover {
                background-color: white;
                color: black;
              }
            `}
          >
            <text
              css={css`
                font-size: 32px;
              `}
            >
              Departure
            </text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
