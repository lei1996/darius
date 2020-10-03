import React, { useEffect, useRef } from "react";
import F2 from "@antv/f2";

// import { css } from "linaria";

export const Chart = ({ datas, style = {} }) => {
  const canvasRef = useRef(null);
  const { width = 500, height = 500 } = style || {};

  useEffect(() => {
    const chart = new F2.Chart({
      context: canvasRef.current.getContext("2d"),
      width: width,
      height: height,
      padding: "auto",
    });

    // Step 2: 载入数据源
    chart.changeData(datas);

    // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
    chart.interval().position("genre*sold").color("genre");

    // Step 4: 渲染图表
    chart.render();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};
