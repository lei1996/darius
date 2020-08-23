import React, { useState } from "react";
import { css } from "linaria";
import { animated, useSpring } from "react-spring";

import { expressions } from "../../utils/expressions";
import { colors } from "../../styles/colors";

import { transparentImage } from "../../utils/const";
import { isMobile } from "../../utils/ua";

const VoiceStyle = css`
  color: ${colors.messageContentColor};
  background: #eee;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 12px;
  }
`;


// 后面引入 语音消息，  背景色作为一个进度条， 播放的时候，更改组件状态。
export const VoiceMessage = ({ src }) => {
  const [loaded, setLoaded] = useState(false);
  const widthSpring = useSpring({ width: 10 });

  const loadImage = () => {
    setLoaded(true);
  };

  return (
    <div className={VoiceStyle}>
      <animated.div style={widthSpring}>

      </animated.div>
    </div>
  );
};
