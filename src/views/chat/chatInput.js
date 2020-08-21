import React, { useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { useDrag } from "react-use-gesture";

import { css } from "linaria";
import { colors } from "../../styles/colors";
import { center } from "../../styles/global";

import { expressions } from "../../utils/expressions";
const baidu = "../../assets/images/baidu.png";
import imageFile from "../../assets/png/image-file.png";
import beachUmbrella2 from "../../assets/png/beach-umbrella2.png";
import conflict from "../../assets/png/conflict.png";
import { ReactComponent as MessageSend } from "../../assets/svg/email-send.svg";

const chatInputStyle = css`
  height: 98px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  will-change: transform;
  background: ${colors.messagebgColor};
  position: relative;

  .ch_input {
    flex: 1;
    display: flex;
    width: 100%;
    max-height: 50px;

    .left {
      ${center};
      background: #1f2125;
      border-radius: 8px 0 0 8px;
      flex: 1;

      .expression {
        width: 50px;
        height: 50px;
        ${center};
        padding: 10px;
        cursor: pointer;
        transition: all 0.25s;

        &:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        & > img {
          height: 100%;
        }
      }

      & > input {
        background: transparent;
        padding: 0 14px;
        width: 100%;
        height: 100%;
        border-style: none;
        outline: none;
        color: #fff;
        font-size: 15px;
      }
    }

    .right {
      ${center};

      background: #1f2125;
      border-radius: 0 8px 8px 0;
      margin-left: 2px;

      .img {
        width: 50px;
        height: 100%;
        padding: 12px;
        ${center};
        cursor: pointer;
        transition: all 0.25s;

        &:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        &:first-child {
          padding: 10px;
        }

        & > img {
          height: 123%;
        }

        & > svg {
          height: 100%;
        }
      }
    }
  }
`;

const barLine = css`
  width: 120px;
  height: 8px;
  background: #595b61;
  border-radius: 8px;
  margin-top: 14px;
  transition: all 0.35s ease-in;
  cursor: pointer;
  z-index: 9999;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.35s ease-out;
  }
`;

const expression = css`
  width: 100%;
  max-height: 220px;
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  background: #17191d;

  .body {
    display: flex;
    flex-wrap: wrap;
  }
`;

const expressionItem = css`
  padding: 9px;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(222, 222, 222, 0.8);
    cursor: pointer;
  }

  .defaultExpressionItem {
    width: 47px;
    height: 47px;
    background-repeat: no-repeat;
    background-size: 47px auto;
    background-image: url(${baidu});
  }
`;

export const ChatInput = ({ y, setY, open, close }) => {
  const isOpen = (down, my) => {
    // diff > 0 open 状态
    // my > 196 禁止滑动 my < -50 开始增大阻尼
    // 往上滑是 负数 -220 是表情的最大高度
    console.log(my);
    if (down) {
      setY({ y: my < -270 ? -270 : my && my > 50 ? 50 : my });
      // set({ y: my });
    } else {
      // const diff = 98 - my;
      // -110 是  表情最大高度的一半 -220 / 2
      const diff = -110 - my;
      diff > 0 ? open() : close();
    }
  };

  const bind = useDrag(
    ({ down, movement: [, my] }) => {
      isOpen(down, my);
    },
    {
      initial: () => [0, y.get()],
    }
  );

  return (
    <animated.div className={chatInputStyle} style={{ y }}>
      <div className="ch_input">
        <div className="left">
          <div className="expression" onClick={open}>
            <img src={beachUmbrella2} />
          </div>
          <input placeholder="闲来无事吃个瓜ba~" />
        </div>
        <div className="right">
          <div className="img">
            <img src={imageFile} />
          </div>
          <div className="img">
            <img src={conflict} />
          </div>
          <div className="img">
            <MessageSend />
          </div>
        </div>
      </div>
      <div {...bind()} className={barLine}></div>
      <div className={expression}>
        {/* 这里是表情栏，可以 touch 滑动，可以搜索表情 */}
        {/* <div>{["favorite", "默认", "22"]}</div> */}
        <div>
          {/* <div {...bind2()}> */}
          <div>
            <div className="body">
              {expressions.map((ex, index) => {
                return (
                  <div key={index} className={expressionItem}>
                    <div
                      className="defaultExpressionItem"
                      style={{
                        backgroundPosition: `left ${-47 * index}px`,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
