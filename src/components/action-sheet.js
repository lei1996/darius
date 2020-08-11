import React, { useRef } from "react";
import { useSpring, a, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import { css } from "linaria";

const items = ["save item", "open item", "share item", "delete item", "cancel"];
const height = items.length * 60 + 80;


const bg = css`
  & > img {
    width: 100%;
    margin: 0;
    display: block;
  }
`;
const actionBtn = css`
  position: fixed;
  z-index: 100;
  bottom: 80px;
  right: 40px;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: coral;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: " ";
    display: block;
    background: #fff;
    height: 20%;
    width: 20%;
    border-radius: 50%;
  }
`;
const sheet = css`
  z-index: 100;
  position: fixed;
  left: 2vw;
  height: calc(100vh + 100px);
  width: 96vw;
  border-radius: 12px 12px 0px;
  background: #fff;
  touch-action: none;

  & > div {
    height: 60px;
    border-bottom: 1px solid #eee;
    display: block;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    text-transform: capitalize;
  }
`;

export const ActionSheet = () => {
  const draggingRef = useRef(false);
  const [{ y }, set] = useSpring(() => ({ y: height }));
  let myPos = 0;

  const open = ({ canceled }) => {
    set({ y: myPos, config: canceled ? config.wobbly : config.stiff });
  };

  const close = (velocity = 0) => {
    set({ y: height, config: { ...config.stiff, velocity } });
  };

  const bind = useDrag(
    ({ first, last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
      if (first) draggingRef.current = true;
      else if (last) setTimeout(() => (draggingRef.current = false), 0);

      if (my < -70) cancel();
      if (last) my > height * 0.75 || vy > 0.5 ? open(vy) : close(vy);
      else set({ y: my, immediate: false, config: config.stiff });
    },
    {
      initial: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? "block" : "none"));

  const bgStyle = {
    transform: y.to(
      [0, height],
      ["translateY(-8%) scale(1.16)", "translateY(0px) scale(1)"]
    ),
    opacity: y.to([0, height], [0.4, 1], "clamp"),
  };

  return (
    <>
      <a.div className={bg} onClick={() => close()} style={bgStyle}>
        <img
          src="https://images.pexels.com/photos/1170831/pexels-photo-1170831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/1657110/pexels-photo-1657110.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=650&w=940"
          alt=""
        />
      </a.div>
      <div className={actionBtn} onClick={open} />
      <a.div
        className={sheet}
        {...bind()}
        style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
      >
        {items.map((entry) => (
          <div
            key={entry}
            onClick={() => !draggingRef.current && close()}
            children={entry}
          />
        ))}
      </a.div>
    </>
  );
};
