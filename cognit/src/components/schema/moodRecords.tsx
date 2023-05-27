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
          return (
            <li
              key={`${sentence}`}
              css={css`
                border-radius: 5px;
                margin: 2%;
                background-color: aliceblue;
              `}
            >
              <text
                css={css`
                  font-size: 16px;
                  overflow: visible;
                  resize: none;
                  overflow-wrap: anywhere;
                  text-align: start;
                `}
              >
                {sentence ? sentence : "No sentence"}
              </text>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default MoodRecords;
