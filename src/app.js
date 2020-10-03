import React, { useContext, useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import { useObserver, observer, useLocalStore } from "mobx-react-lite";
import F2 from "@antv/f2";

import { hot } from "react-hot-loader/root";

import { AppProvider, AppContext } from "./appStore";

import { Chart } from "./components/Chart";
import { DraggableList } from "./components/draggable-list";
import { Deck } from "./components/Deck";
import { ActionSheet } from "./components/action-sheet";
import { Infinite } from "./components/infinite-slideshow";
import { Chat } from "./views/chat/index";

import { css } from "linaria";
import { center } from "./styles/global";
import "./styles/global";

// 全局设置，所有的图表生效
F2.Global.pixelRatio = window.devicePixelRatio;

const navBar = css`
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 20px 60px;

  & > a {
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    padding: 0 14px;
    cursor: pointer;
  }
`;

const RouteNavs = () => {
  return (
    <div className={navBar}>
      <Link to="/">Home</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/dragList">DragList</Link>
      <Link to="/deck">Deck</Link>
      {/* <Link to="/action-sheet">action-sheet</Link> */}
      <Link to="/infinite">Infinite Slider</Link>
      <Link to="/chat">Chat</Link>
    </div>
  );
};

const inputStyle = css`
  width: 200px;
  height: 40px;
  ${center};

  position: relative;

  & > input {
    background: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    outline: none;
    border: none;

    &.hidden {
      opacity: 0;
    }
  }
`;

const Count = () => {
  const { counterProvider } = useContext(AppContext);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return useObserver(() => (
    <div style={{ paddingTop: 80 }}>
      <h2>Count: {counterProvider.count}</h2>
      <button onClick={counterProvider.increment}>+</button>
      <button onClick={counterProvider.decrement}>-</button>
      <Counter1 initialCount={111} />

      <div className={inputStyle}>
        <span>{value.substr(0, 3)} {value.substr(3, 4)} {value.substr(7, 4)}</span>
        <input className={value ? 'hidden' : ''} value={value} onChange={onChange} placeholder="sdsd" />
      </div>
    </div>
  ));
};

const data = [
  { genre: "Sports", sold: 275 },
  { genre: "Strategy", sold: 115 },
  { genre: "Action", sold: 120 },
  { genre: "Shooter", sold: 350 },
  { genre: "Other", sold: 150 },
];

const data1 = [
  { genre: "Sports", sold: 112 },
  { genre: "Strategy", sold: 12 },
  { genre: "Action", sold: 34 },
  { genre: "Shooter", sold: 1 },
  { genre: "Other", sold: 222 },
];

const Movie = () => {
  const { moviesProvider } = useContext(AppContext);

  return useObserver(() => (
    <div style={{ paddingTop: 80 }}>
      <h2>Movies: {moviesProvider.movies}</h2>
      <button onClick={moviesProvider.increment}>+</button>
      <button onClick={moviesProvider.decrement}>-</button>

      <Chart datas={data} />
    </div>
  ));
};

const DragList = () => {
  return <DraggableList items={"Lorem ipsum dolor sit".split(" ")} />;
};

const DeckComponent = () => {
  return <Deck />;
};

const ActionSheetComponent = () => {
  return <ActionSheet />;
};
const InfiniteComponent = () => {
  return <Infinite />;
};

const Messages = () => {
  const { messagesListProvider } = useContext(AppContext);

  useEffect(() => {
    messagesListProvider.addMessages("d111", {
      id: "1",
      content: "你是水水水水asd",
    });
  }, []);
  // messages
  // findMessages
  // addMessages
  // updateMessage
  // deleteMessage

  return useObserver(() => (
    <div>
      {messagesListProvider.findMessages("d111").map((m) => (
        <div key={m.id}>{m.content}</div>
      ))}
      {/* <button onClick={}>Send</button> */}
    </div>
  ));
};

export const Counter1 = observer((props) => {
  const store = useLocalStore(() => ({
    count: props.initialCount,
    inc() {
      store.count += 1;
    },
  }));

  return (
    <div>
      <span>{store.count}</span>
      <button onClick={store.inc}>Increment</button>
    </div>
  );
});

function App() {
  const store = AppProvider();

  return (
    // 全局注入context 就可以不用一层一层 传递store 里面的 属性 或 方法
    <AppContext.Provider value={store}>
      <RouteNavs />

      <Router>
        <Count path="/" />
        <Movie path="/movie" />
        <DragList path="/dragList" />
        <DeckComponent path="/deck" />
        <ActionSheetComponent path="/action-sheet" />
        <InfiniteComponent path="/infinite" />
        <Messages path="/messages" />
        <Chat path="/chat" />
      </Router>
    </AppContext.Provider>
  );
}

export default hot(App);
