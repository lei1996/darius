import React, { useRef } from "react";
import { useSpring, animated, config } from "react-spring";

import { css } from "linaria";
import { colors } from "../../styles/colors";
import { center } from "../../styles/global";

import { Avatar } from "../../components/avatar";
import { ReactComponent as Badge } from "../../assets/svg/badge.svg";
import { ReactComponent as UrendCount } from "../../assets/svg/search-background.svg";

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

    .avatar {
      position: relative;
      & > svg {
        position: absolute;
        transform: scale(1.5);
      }
    }
  }
`;

const linkmanContent = css`
  display: flex;
  flex-direction: column;
  flex: 1;

  .name {
    font-size: 14px;
    font-weight: bold;
    color: ${colors.nameColor};
    margin-bottom: 3px;
  }

  .messageBox {
    display: flex;

    justify-content: space-between;

    .message {
      flex: 1;
      font-size: 13px;
      color: ${colors.messageColor};

      max-width: 155px;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .tips {
      width: 36px;
      color: ${colors.messageColor};

      display: flex;
      justify-content: center;
      align-items: center;

      .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: ${colors.messageColor};
        margin-right: 4px;
      }

      .time {
        font-size: 11px;
      }
    }
  }
`;

export const LinkmanList = () => {
  return (
    <div className={linkmanItems}>
      <div className="linkmanItem">
        {/* 左右布局 */}
        <div className="avatar">
          <Badge />
          <Avatar url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
        </div>
        <div className={linkmanContent}>
          <div className="name">q111</div>
          <div className="messageBox">
            <div className="message">
              我说： 你们在干嘛?你们在干嘛?你们在干嘛?
            </div>
            <div className="tips">
              <div className="dot"></div>
              <div className="time">9: 15</div>
            </div>
          </div>
        </div>
      </div>
      <div className="linkmanItem">
        {/* 左右布局 */}
        <Avatar
          online={true}
          url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg"
        />
        <div className={linkmanContent}>
          <div className="name">q111</div>
          <div className="messageBox">
            <div className="message">
              我说： 你们在干嘛?你们在干嘛?你们在干嘛?
            </div>
            <div className="tips">
              <div className="dot"></div>
              <div className="time">9: 15</div>
            </div>
          </div>
        </div>
      </div>
      <div className="linkmanItem">
        {/* 左右布局 */}
        <Avatar url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg" />
        <div className={linkmanContent}>
          <div className="name">q111</div>
          <div className="messageBox">
            <div className="message">
              我说： 你们在干嘛?你们在干嘛?你们在干嘛?
            </div>
            <div className="tips">
              <div className="dot"></div>
              <div className="time">9: 15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
