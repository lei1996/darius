import React, { useState } from "react";
import { css } from "linaria";
import { animated, useSpring } from "react-spring";

import { expressions } from "../../utils/expressions";
import { colors } from "../../styles/colors";

import { transparentImage } from "../../utils/const";
import { isMobile } from "../../utils/ua";

const baiduImage = "../../assets/images/baidu.png";

const ImageStyle = css`
  color: ${colors.messageContentColor};
  overflow: hidden;

  img {
    border-radius: 12px;
  }
`;

export const ImageMessage = ({ src, loading, percent }) => {
  const [loaded, setLoaded] = useState(false);
  const opacitySpring = useSpring({ opacity: loaded ? 1 : 0 });

  const loadImage = () => {
    setLoaded(true);
  };

  let imageSrc = src;
  const containerWidth = isMobile ? window.innerWidth - 50 : 450;
  const maxWidth = containerWidth - 100 > 500 ? 500 : containerWidth - 100;
  const maxHeight = 200;
  let width = 200;
  let height = 160;
  const parseResult = /width=([0-9]+)&height=([0-9]+)/.exec(src);
  if (parseResult) {
    const natureWidth = +parseResult[1];
    const naturehHeight = +parseResult[2];
    let scale = 1;
    if (natureWidth * scale > maxWidth) {
      scale = maxWidth / natureWidth;
    }
    if (naturehHeight * scale > maxHeight) {
      scale = maxHeight / naturehHeight;
    }
    width = natureWidth * scale;
    height = naturehHeight * scale;
    imageSrc = /^(blob|data):/.test(src)
      ? imageSrc.split("?")[0]
      : `${imageSrc}&imageView2/1/q/80/w/${Math.floor(
          width * 1.2
        )}/h/${Math.floor(height * 1.2)}`;
  }

  return (
    <div className={ImageStyle}>
      <animated.div style={opacitySpring}>
        <img src={imageSrc} width={width} height={height} onLoad={loadImage} />
      </animated.div>
      {/* <img src={src} onLoad={loadImage} /> */}
    </div>
  );
};
