import { css } from "linaria";

css`
  :global() {
    *,
    html,
    body {
      box-sizing: border-box;
      user-select: none;
      margin: 0;
      padding: 0;
    }
  }
`;

export const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};


export const common = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const topBottom = {
  ...common,
  flexDirection: "column",
};

export const leftRight = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};