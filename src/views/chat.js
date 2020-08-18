import React, { useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { useDrag } from "react-use-gesture";

import { css } from "linaria";
import { colors } from "../styles/colors";

import { expressions } from "../utils/expressions";
const baidu = "../assets/images/baidu.png";

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
`;

const linkmanItem = css`
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
`;

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
`;

const online = css`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${colors.onlineColor};

  position: absolute;
  right: -3px;
  bottom: 2px;
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
`;

const navBarLeft = css`
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

    &.self {
      flex-flow: row-reverse;

      .message {
        margin: 0 12px 0 0;
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
      border-radius: 12px 12px 12px 0;
      padding: 8px 14px;
      margin-left: 12px;

      .head {
        display: flex;
        margin-bottom: 20px;

        .name {
          font-size: 12px;
          color: #fcfbff;
          font-weight: bold;
        }
        .time {
          font-size: 11px;
          color: #fcfbff;
          margin-left: 20px;
        }
      }
      .content {
        font-size: 14px;
        color: ${colors.messageContentColor};
      }
    }
  }
`;

const chatInput = css`
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
      width: 192px;
      ${center};

      background: #1f2125;
      border-radius: 0 8px 8px 0;
      margin-left: 2px;
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
  padding: 10px;
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

export const Chat = () => {
  const isOpenRef = useRef(false);
  const [{ y }, set] = useSpring(() => ({ y: 0 }));
  let myPos = 0;

  const open = () => {
    set({ y: -220 });
  };

  const close = () => {
    set({ y: 0 });
  };

  const isOpen = (down, my) => {
    // diff > 0 open 状态
    // my > 196 禁止滑动 my < -50 开始增大阻尼
    // 往上滑是 负数 -220 是表情的最大高度
    console.log(my);
    if (down) {
      set({ y: my < -270 ? -270 : my && my > 50 ? 50 : my });
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
            <div className={linkmanItem}>
              {/* 左右布局 */}
              <div className={avatar}>
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
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
            <div className={linkmanItem}>
              {/* 左右布局 */}
              <div className={avatar}>
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
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
            <div className={linkmanItem}>
              {/* 左右布局 */}
              <div className={avatar}>
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
                <div className={online}></div>
              </div>
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
            <div className={navBarLeft}>
              <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              <span>Darius</span>
            </div>
            <div>33333</div>
          </div>
          <animated.div onClick={close} className={chatContainer} style={{ y }}>
            <div className="messageItem">
              <div className="avatar">
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <div className="avatar">
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <div className="avatar">
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <div className="avatar">
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <div className="avatar">
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem">
              <div className="avatar">
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
            <div className="messageItem self">
              <div className="avatar">
                <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
              </div>
              <div className="message">
                <div className="head">
                  <div className="name">q111</div>
                  <div className="time">14: 12</div>
                </div>
                <div className="content">你们觉得 今天的天气怎么样？</div>
              </div>
            </div>
          </animated.div>
          <animated.div className={chatInput} style={{ y }}>
            <div className="ch_input">
              <div className="left">
                <div className="expression"></div>
                <input placeholder="闲来无事吃个瓜ba~" />
              </div>
              <div className="right">
                <div>发送图片</div>
                <div>发送文件</div>
                <div>发送消息</div>
              </div>
            </div>
            <div {...bind()} className={barLine}></div>
            <div className={expression}>
              {/* 这里是表情栏，可以 touch 滑动，可以搜索表情 */}
              <div>{["favorite", "默认", "22"]}</div>
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
          </animated.div>
        </div>
      </div>
    </div>
  );
};
