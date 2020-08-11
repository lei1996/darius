const data = {
  // 已完成
  user: {userId: 'xxx', token: 'xxx', avator: 'jpg', tag: '萌新', },
  // 已完成
  messageList: {
    id: [messages],
    // Map 数据结构
    // 可以往 message 里面 添加height 属性，用于滚动条移动的高度(动态规划)
  },
  // 差一个 正在发送消息 的队列
  messageQueue: [
    // message 列表
  ],
  // 已完成 联系人列表
  LinkmanList: [
    { id: "xxx", to: "会话Id", lastMessage: "xxx", lastMessageTime: "xxxx" },
  ],
  // 已完成 草稿的文本， 存会话id，value 为文本 text
  draft: {
    id: "text 草稿文本",
    id: "text 草稿文本",
    id: "text 草稿文本",
  },
  // 已完成 单主题 商店
  // 如果需要扩展 文本自定义文字大小啥的， 可以做成Map/Array 的数据结构，扩展消息类型，再注入进Store
  themeStore: {
    backgroundColor: "xxx",
  },
};
