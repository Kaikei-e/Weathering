/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import React from "react";

type Props = {
  title: string;
  description: string;
  cssProperties: SerializedStyles;
};

export const Schema: React.FC<Props> = (props: Props) => {
  return (
    <div css={props.cssProperties}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
