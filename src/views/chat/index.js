import React, { useRef } from "react";
import { useSpring, animated, config } from "react-spring";

import { css } from "linaria";
import { colors } from "../../styles/colors";

import { TextMessage } from "../../components/Message/TextMessage";
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

const linkmanItems = css`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  .linkmanItem {
    width: 100%;
    height: 70px;
    padding: 0 16px;

    display: flex;
    align-items: center;

    cursor: pointer;
    transition: all 0.25s ease-in;

    &:hover {
      /* background: linear-gradient(135deg, #f6d365 0%, #fda085 100%); */
      background: rgba(222, 222, 222, 0.1);
      /* transition: all 0.25s ease-out; */
    }
  }
`;

const linkmanContent = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const name = css`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.nameColor};
  margin-bottom: 3px;
`;

const messageBox = css`
  display: flex;

  justify-content: space-between;
`;

const message = css`
  flex: 1;
  font-size: 13px;
  color: ${colors.messageColor};

  max-width: 155px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const tips = css`
  width: 36px;
  color: ${colors.messageColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const dot = css`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${colors.messageColor};
  margin-right: 4px;
`;
const time = css`
  font-size: 11px;
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

  .messageItem {
    display: flex;
    align-items: flex-end;
    padding: 12px 0;

    &.self {
      flex-flow: row-reverse;

      .message {
        margin-right: 16px;
        border-radius: 12px 12px 0 12px;
      }
    }

    .avatar {
      width: 50px;
      height: 50px;
      background: rgba(222, 222, 221, 0.8);
      border-radius: 50%;

      & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .message {
      max-width: 450px;
      background-color: ${colors.messageContentBgColor};
      padding: 12px 18px;
      border-radius: 12px 12px 12px 0;

      .head {
        display: flex;
        align-items: flex-end;
        margin-bottom: 12px;

        .name {
          font-size: 14px;
          color: #fcfbff;
          font-weight: bold;
        }
        .time {
          font-size: 11px;
          color: #bcb9c3;
          margin-left: 16px;
        }
      }
      .content {
        font-size: 15px;
        color: ${colors.messageContentColor};
        user-select: text;
      }
    }
  }
`;

export const Chat = () => {
  const [{ y }, setY] = useSpring(() => ({ y: 0 }));

  const open = () => {
    setY({ y: -220 });
  };

  const close = () => {
    setY({ y: 0 });
  };

  const renderContent = (message) => {
    switch (type) {
      case "text": {
        // return <TextMessage content={content} />;
      }
      case "image": {
        // return (
        //   <ImageMessage src={content} loading={loading} percent={percent} />
        // );
      }
      case "code": {
        // return <CodeMessage code={content} />;
      }
      case "url": {
        // return <UrlMessage url={content} />;
      }
      case "invite": {
        // return <InviteMessage inviteInfo={content} />;
      }
      case "system": {
        // return <SystemMessage message={content} username={originUsername} />;
      }
      default:
        return <div className="unknown">不支持的消息类型</div>;
    }
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
          <div className={linkmanItems}>
            <div className="linkmanItem">
              {/* 左右布局 */}
              {/* <div className={avatar}>
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div> */}
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
              />
              <div className={linkmanContent}>
                <div className={name}>q111</div>
                <div className={messageBox}>
                  <div className={message}>
                    我说： 你们在干嘛?你们在干嘛?你们在干嘛?
                  </div>
                  <div className={tips}>
                    <div className={dot}></div>
                    <div className={time}>9: 15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="linkmanItem">
              {/* 左右布局 */}
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
              />
              <div className={linkmanContent}>
                <div className={name}>q111</div>
                <div className={messageBox}>
                  <div className={message}>
                    我说： 你们在干嘛?你们在干嘛?你们在干嘛?
                  </div>
                  <div className={tips}>
                    <div className={dot}></div>
                    <div className={time}>9: 15</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="linkmanItem">
              {/* 左右布局 */}
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className={linkmanContent}>
                <div className={name}>q111</div>
                <div className={messageBox}>
                  <div className={message}>
                    我说： 你们在干嘛?你们在干嘛?你们在干嘛?
                  </div>
                  <div className={tips}>
                    <div className={dot}></div>
                    <div className={time}>9: 15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={chatRight}>
          <div className={navBar}>
            <div className="navBarLeft">
              <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              <span>Darius</span>
            </div>
            <div>33333</div>
          </div>
          <animated.div onClick={close} className={chatContainer} style={{ y }}>
            <div className="messageItem">
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <TextMessage content="你们觉得#(阴险) 今天的天气怎么样？你们觉得" />
              </div>
            </div>
            <div className="messageItem">
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">
                  你们觉得 今天的天气怎么样？你们觉得 今天的天气怎么样？你们觉得
                  今天的天气怎么样？你们觉得 今天的天气怎么样？你们觉得
                  今天的天气怎么样？你们觉得 今天的天气怎么样？
                </div>
              </div>
            </div>
            <div className="messageItem">
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem self">
              <Avatar
                url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
                online={true}
              />
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
          </animated.div>
          <ChatInput y={y} setY={setY} open={open} close={close} />
        </div>
      </div>
    </div>
  );
};
