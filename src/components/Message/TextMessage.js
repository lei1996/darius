import React from "react";
import { css } from "linaria";

import { expressions } from "../../utils/expressions";
import { colors } from "../../styles/colors";

import { transparentImage } from "../../utils/const";

const baiduImage = "../../assets/images/baidu.png";

const contentStyle = css`
  font-size: 15px;
  color: ${colors.messageContentColor};
  user-select: text;

  & > a {
    color: ${colors.linkColor};
    user-select: text;
  }
`;

const baidu = css`
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  margin: 0 2px;
  background-size: 30px auto;
  background-image: url(${baiduImage});
  user-select: text;
`;

export const TextMessage = ({ content }) => {
  const text = content
    .replace(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
      (r) => `<a href="${r}" rel="noopener noreferrer" target="_blank">${r}</a>`
    )
    .replace(/#\(([\u4e00-\u9fa5a-z]+)\)/g, (r, e) => {
      const index = expressions.indexOf(e);
      if (index !== -1) {
        return `<img class="${baidu}" src="${transparentImage}" style="background-position: left ${
          -30 * index
        }px;" onerror="this.style.display='none'" alt="${r}">`;
      }
      return r;
    });

  return (
    <div className={contentStyle} dangerouslySetInnerHTML={{ __html: text }} />
  );
};
