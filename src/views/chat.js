import React from "react";

import { css } from "linaria";
import { colors } from "../styles/colors";

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
  ...common,
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
    background: rgba(222, 222, 222, 0.4);
    transition: all 0.25s ease-out;
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

const navBar = css`
  flex: 1;
  height: 60px;
  ${leftRight};
`;

export const Chat = () => {
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
          </div>
        </div>
        <div className={navBar}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};
