import React, { useRef } from "react";
import { useSpring, animated, config } from "react-spring";

import { css } from "linaria";
import { colors } from "../../styles/colors";
import { center } from "../../styles/global";

import { Avatar } from "../../components/avatar";
import { TextMessage } from "../../components/Message/TextMessage";

const container = css`
  .messageItem {
    display: flex;
    align-items: flex-end;
    padding: 12px 0;
    position: relative;
    will-change: transform;

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

export const MessageList = () => {
  const messageSpring = useSpring({
    from: {
      transform: "translate3d(0,100%,0)",
      opacity: 0,
    },
    to: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
  });

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
    <div className={container}>
      <animated.div style={messageSpring} className="messageItem">
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
      </animated.div>
      <animated.div style={messageSpring} className="messageItem">
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
      </animated.div>
      <animated.div style={messageSpring} className="messageItem">
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
      </animated.div>
      <animated.div style={messageSpring} className="messageItem self">
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
      </animated.div>
      <animated.div style={messageSpring} className="messageItem">
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
      </animated.div>
      <animated.div style={messageSpring} className="messageItem">
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
      </animated.div>
    </div>
  );
};
