import { css } from "linaria";

css`
  :global() {
    *, html, body {
      box-sizing: border-box;
      user-select: none;
      margin: 0;
      padding: 0;
    }
  }
`;
