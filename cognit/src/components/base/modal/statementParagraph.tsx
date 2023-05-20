/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

type Props = {
  fontSize: number;
  color: string;
  statement: string;
};

const StatementParagraph: React.FC<Props> = (props: Props) => {
  return (
    <p
      css={css`
        font-size: ${props.fontSize}px;
        color: ${props.color};
        font-family: Domine serif;
        text-align: center;
      `}
    >
      {props.statement}
    </p>
  );
};

export default StatementParagraph;
