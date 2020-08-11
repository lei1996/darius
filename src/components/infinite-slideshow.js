import React, { useCallback, useRef } from "react";
import { useSprings, a } from "react-spring";
import { useGesture } from "react-use-gesture";
import { css } from "linaria";

const items = [
  {
    css:
      "url(https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 150,
  },
  {
    css:
      "url(https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
  },
  {
    css:
      "url(https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
  },
  {
    css:
      "url(https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
  },
  {
    css:
      "url(https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
  },
  {
    css:
      "url(https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
  },
  {
    css:
      "url(https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 200,
  },
  {
    css:
      "url(https://images.pexels.com/photos/227675/pexels-photo-227675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 300,
  },
  {
    css:
      "url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 200,
  },
  {
    css:
      "url(https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 400,
  },
  {
    css:
      "url(https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 200,
  },
  {
    css:
      "url(https://images.pexels.com/photos/249074/pexels-photo-249074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 150,
  },
  {
    css:
      "url(https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 400,
  },
  {
    css:
      "url(https://images.pexels.com/photos/380337/pexels-photo-380337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
    height: 200,
  },
];

const container = css`
  position: relative;
  height: 100%;
  width: 100%;
`;

const item = css`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const Main = css`
  height: 400px;
`;

const Content = css`
  width: 100%;
  height: 100%;
  padding: 70px 100px;
`;

const Marker = css`
  color: white;
  position: absolute;
  top: 0px;
  left: 140px;
  font-family: monospace;
`;

const Image = css`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
`;

function InfiniteSlider({ items, width = 600, visible = 4, children }) {
  const idx = useCallback((x, l = items.length) => (x < 0 ? x + l : x) % l, [
    items,
  ]);
  const getPos = useCallback(
    (i, firstVis, firstVisIdx) => idx(i - firstVis + firstVisIdx),
    [idx]
  );
  const [springs, set] = useSprings(items.length, (i) => ({
    x: (i < items.length - 1 ? i : -1) * width,
  }));
  const prev = useRef([0, 1]);

  const runSprings = useCallback(
    (y, vy) => {
      const firstVis = idx(Math.floor(y / width) % items.length);
      const firstVisIdx = vy < 0 ? items.length - visible - 1 : 1;
      set((i) => {
        const position = getPos(i, firstVis, firstVisIdx);
        const prevPosition = getPos(i, prev.current[0], prev.current[1]);
        const rank =
          firstVis - (y < 0 ? items.length : 0) + position - firstVisIdx;
        const configPos = vy > 0 ? position : items.length - position;
        return {
          x: (-y % (width * items.length)) + width * rank,
          immediate: vy < 0 ? prevPosition > position : prevPosition < position,
          config: {
            tension: (1 + items.length - configPos) * 100,
            friction: 30 + configPos * 40,
          },
        };
      });
      prev.current = [firstVis, firstVisIdx];
    },
    [idx, getPos, width, visible, set, items.length]
  );

  const wheelOffset = useRef(0);
  const dragOffset = useRef(0);
  const bind = useGesture({
    onDrag: ({ offset: [x], vxvy: [vx] }) =>
      vx &&
      ((dragOffset.current = -x), runSprings(wheelOffset.current + -x, -vx)),
    onWheel: ({ offset: [, y], vxvy: [, vy] }) =>
      vy && ((wheelOffset.current = y), runSprings(dragOffset.current + y, vy)),
  });

  return (
    <div {...bind()} className={container, item}>
      {springs.map(({ x, vel }, i) => (
        <a.div
          key={i}
          className={item}
          style={{ width, x }}
          children={children(items[i], i)}
        />
      ))}
    </div>
  );
}

export const Infinite = () => {
  return (
    <div className={Main}>
      <InfiniteSlider items={items} width={700} visible={3}>
        {({ css }, i) => (
          <div className={Content}>
            <div className={Marker}>{String(i).padStart(2, "0")}</div>
            <div className={Image} style={{ backgroundImage: css }} />
          </div>
        )}
      </InfiniteSlider>
    </div>
  );
};
