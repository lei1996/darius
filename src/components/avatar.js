import React from "react";
import { useSpring, animated } from "react-spring";

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
  const onlineSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return (
    <div
      className={avatar}
      style={{
        width: size,
        height: size,
      }}
    >
      <img src={url} />
      {online ? <animated.div style={onlineSpring} className="online" /> : null}
    </div>
  );
};
