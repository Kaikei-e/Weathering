/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

type Props = {
  moods: string[];
};

const MoodRecords = (props: Props) => {
  return (
    <div>
      <ol
        css={css`
          padding: 4%;
        `}
      >
        {props.moods.map((sentence) => {
          if (sentence !== "") {
            return (
              <li
                key={`${sentence}`}
                css={css`
                  border-radius: 5px;
                  margin: 4%;
                  background-color: aliceblue;
                `}
              >
                <p
                  key={`${sentence}`}
                  css={css`
                    font-size: 16px;
                    overflow: visible;
                    resize: none;
                    overflow-wrap: anywhere;
                    text-align: start;
                  `}
                >
                  {sentence ? sentence : "No sentence"}
                </p>
              </li>
            );
          }
        })}
      </ol>
    </div>
  );
};

export default MoodRecords;
