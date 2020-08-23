import React, { useRef } from "react";
import { useSpring, animated, config } from "react-spring";

import { css } from "linaria";
import { colors } from "../../styles/colors";
import { center } from "../../styles/global";

import { Avatar } from "../../components/avatar";
import { TextMessage } from "../../components/Message/TextMessage";
import { ImageMessage } from "../../components/Message/ImageMessage";
import { VoiceMessage } from "../../components/Message/VoiceMessage";

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
          font-size: 15px;
          color: ${colors.linkColor};
          font-weight: bold;
        }
        .time {
          font-size: 13px;
          color: #a9a6b1;
          margin-left: 6px;
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
    // 后面引入 语音消息，  背景色作为一个进度条， 播放的时候，更改组件状态。
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
            <div className="name">碎碎酱</div>
            <div className="time">14: 12</div>
          </div>
          <TextMessage content="你们觉得 今天的天气怎么样？" />
        </div>
      </animated.div>
      <animated.div style={messageSpring} className="messageItem">
        <Avatar
          url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
          online={true}
        />
        <div className="message">
          <div className="head">
            <div className="name">shulan</div>
            <div className="time">14: 12</div>
          </div>
          <TextMessage content="你们觉得#(阴险) 今天的天https://www.baidu.com/ 气怎么样？你们觉得" />
        </div>
      </animated.div>
      <animated.div style={messageSpring} className="messageItem">
        <Avatar
          url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
          online={true}
        />
        <div className="message">
          <div className="head">
            <div className="name">大鱼</div>
            <div className="time">14: 12</div>
          </div>
          <TextMessage
            content="你们觉得 今天的天气怎么样？你们觉得 今天的天气怎么样？你们觉得
            今天的天气怎么样？你们觉得 今天的天气怎么样？你们觉得
            今天的天气怎么样？你们觉得 今天的天气怎么样？"
          />
        </div>
      </animated.div>
      <animated.div style={messageSpring} className="messageItem self">
        <Avatar
          url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
          online={true}
        />
        <div className="message">
          <div className="head">
            <div className="name">222222</div>
            <div className="time">14: 12</div>
          </div>
          <VoiceMessage src="http://www.bxc.com/" />
        </div>
      </animated.div>
      <animated.div style={messageSpring} className="messageItem">
        <Avatar
          url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
          online={true}
        />
        <div className="message">
          <div className="head">
            <div className="name">mdzz</div>
            <div className="time">14: 12</div>
          </div>
          <ImageMessage src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1598107210&di=edaa94e17d79d8d252dea5ac2fc729a7&src=http://g.hiphotos.baidu.com/zhidao/pic/item/bba1cd11728b4710b7e37b59c5cec3fdfd032352.jpg" />
        </div>
      </animated.div>
    </div>
  );
};
