import React from "react";
import { Spring } from "react-spring";

import { css } from "linaria";
import { colors } from "../styles/colors";

const avatar = css`
  width: 44px;
  height: 44px;
  margin-right: 16px;

  position: relative;

  & > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .online {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${colors.onlineColor};

    position: absolute;
    right: -3px;
    bottom: 2px;
  }
`;

export const Avatar = ({ url, online = false, size = 44, style }) => {
  return (
    <div
      className={avatar}
      style={{
        width: size,
        height: size,
      }}
    >
      <img src={url} />
      {online ? (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <div style={props}>
              <div className="online" />
            </div>
          )}
        </Spring>
      ) : null}
    </div>
  );
};
