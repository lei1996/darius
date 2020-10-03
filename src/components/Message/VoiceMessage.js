import React, { useState, useRef } from "react";
import { css } from "linaria";
import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";

import { expressions } from "../../utils/expressions";
import { colors } from "../../styles/colors";
import { center } from "../../styles/global";

import { ReactComponent as Badge } from "../../assets/svg/badge.svg";
import { ReactComponent as Play } from "../../assets/svg/play.svg";
import { ReactComponent as Pause } from "../../assets/svg/pause.svg";

import { transparentImage } from "../../utils/const";
import { isMobile } from "../../utils/ua";

const VoiceStyle = css`
  color: ${colors.messageContentColor};
  background: #eee;
  overflow: hidden;
  position: relative;
  height: 72px;
  min-width: 258px;
  border-radius: 14px;

  .bg {
    height: 100%;
    background: rgba(222, 111, 231, 0.8);
  }

  img {
    border-radius: 12px;
  }

  .content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    .svg {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      position: relative;
      ${center};

      & > svg {
        position: absolute;
      }

      .btn {
        width: 100%;
        height: 100%;
        ${center};
        z-index: 6;

        & > svg {
          fill: #fff;
          position: absolute;
          width: 43%;
          cursor: pointer;
        }
      }
    }
  }
`;

// 后面引入 语音消息，  背景色作为一个进度条， 播放的时候，更改组件状态。
export const VoiceMessage = ({ src }) => {
  const [{ x }, setX] = useSpring(() => ({ x: 0 }));
  const [isplay, setIsplay] = useState(false);
  const $voiceRef = useRef(null);
  const currentSong =
    "https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3";

  const bind = useDrag(
    ({ down, movement: [mx] }) => {
      setX({ x: mx });
    },
    {
      initial: () => [x.get(), 0],
    }
  );

  const playVoice = () => {
    // time = setInterval(() => {
    //   setX({ x: x.get() + 1 });
    // }, 1000);
    $voiceRef.current.play();
    console.log($voiceRef.current.src);
    setIsplay(true);
  };

  const pauseVoice = () => {
    // clearInterval(time);
    $voiceRef.current.pause();
    setIsplay(false);
  };

  const handle = () => {
    isplay ? pauseVoice() : playVoice();
  };

  return (
    <div className={VoiceStyle}>
      <animated.div
        {...bind()}
        className="bg"
        style={{ width: x }}
      ></animated.div>
      <div className="content">
        <div className="svg">
          <Badge />
          <div className="btn" onClick={() => handle()}>
            <audio ref={$voiceRef} src={currentSong} />
            {isplay ? <Pause /> : <Play />}
          </div>
        </div>
      </div>
    </div>
  );
};
