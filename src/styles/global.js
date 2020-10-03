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

    #root {
      width: 100vw;
      height: 100vh;
      background: linear-gradient(135deg, #e1e1e9 0%, #8e8f93 100%);
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
