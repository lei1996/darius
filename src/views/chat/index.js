import React, { useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

import { css } from "linaria";
import { colors } from "../../styles/colors";

import { TextMessage } from "../../components/Message/TextMessage";
import { LinkmanList } from "./linkmanList";
import { MessageList } from "./messageList";
import { ChatInput } from "./chatInput";
import { Avatar } from "../../components/avatar";

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const common = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const topBottom = {
  ...common,
  flexDirection: "column",
};

const leftRight = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
};

const bg = css`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${colors.bgLeftTopColor} 0%,
    ${colors.bgRightBottomColor} 100%
  );
  ${center};
`;

const chat = css`
  /* width: 90vw; */
  width: 70vw;
  height: 76vh;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
`;

const sideNav = css`
  width: 90px;
  height: 100%;
  background: ${colors.sideNavbgColor};

  ${topBottom};
`;

const linkmans = css`
  width: 340px;
  height: 100%;
  background: ${colors.primaryColor};

  padding: 30px 24px 10px;

  display: flex;
  flex-direction: column;
`;

const search = css`
  width: 100%;
  height: 40px;
  background: ${colors.secondColor};
  margin-bottom: 20px;
  position: relative;

  & > input {
    background: transparent;
    padding: 0 14px 0 32px;
    width: 100%;
    height: 100%;
    border-style: none;
    border-radius: 8px;
    outline: none;
    color: #fff;
  }
`;

const chatRight = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: ${colors.messagebgColor};
  color: #fff;
  padding: 0 36px;
`;

const navBar = css`
  height: 78px;
  ${leftRight};
  background: ${colors.messagebgColor};
  color: #fff;
  padding-bottom: 5px;
  z-index: 10;

  .navBarLeft {
    font-weight: bold;
    display: flex;
    align-items: flex-end;

    & > img {
      width: 48px;
      width: 48px;
      border-radius: 50%;
    }

    & > span {
      font-weight: bold;
      font-size: 26px;
      margin-left: 18px;
    }
  }
`;

const chatContainer = css`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  will-change: transform;
  -webkit-overflow-scrolling: touch;
`;

export const Chat = () => {
  const $messageContainer = useRef(null);
  const [{ y }, setY] = useSpring(() => ({ y: 0 }));
  // const messageScroll = useSpring({ scroll: 100, from: { scroll: 0 } });

  useEffect(() => {
    $messageContainer.current.scrollTop =
      $messageContainer.current.scrollHeight;
    console.log($messageContainer.current.scrollHeight);
  }, []);

  const open = () => {
    setY({ y: -220 });
    console.log($messageContainer);
  };

  const close = () => {
    setY({ y: 0 });
  };

  return (
    <div className={bg}>
      <div className={chat}>
        <div className={sideNav}>
          <div>1</div>
          <div>2</div>
        </div>
        <div className={linkmans}>
          <div className={search}>
            <input placeholder="请输入关键字" />
          </div>
          <LinkmanList />
        </div>
        <div className={chatRight}>
          <div className={navBar}>
            <div className="navBarLeft">
              <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              <span>Darius</span>
            </div>
            <div>语音通话 视频通话</div>
          </div>
          <animated.div
            onClick={close}
            className={chatContainer}
            ref={$messageContainer}
            style={{ y }}
          >
            <MessageList />
          </animated.div>
          <ChatInput y={y} setY={setY} open={open} close={close} />
        </div>
      </div>
    </div>
  );
};
