import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

// F2 核心库
// require('@antv/f2/lib/core');
// 加载全部图形
// require('@antv/f2/lib/geom/');

// require('@antv/f2/lib/geom/line'); // 只加载折线图
// require('@antv/f2/lib/geom/area'); // 只加载面积图
// require('@antv/f2/lib/geom/interval'); // 只加载柱状图
// require('@antv/f2/lib/geom/path'); // 只加载路径图
// require('@antv/f2/lib/geom/point'); // 只加载点图
// require('@antv/f2/lib/geom/polygon'); // 只加载色块图
// require('@antv/f2/lib/geom/schema'); // 只加载箱型图、股票图


// dev模式 会报warning
// https://github.com/mobxjs/mobx-react-lite/#observer-batching
import "mobx-react-lite/batchingForReactDom";

import config from "../config/client";

// 注册 Service Worker
if (window.location.protocol === "https:" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// 如果配置了前端监控, 动态加载并启动监控
if (config.frontendMonitorAppId) {
  // @ts-ignore
  import(/* webpackChunkName: "frontend-monitor" */ "wpk-reporter").then(
    (module) => {
      const WpkReporter = module.default;

      const __wpk = new WpkReporter({
        bid: config.frontendMonitorAppId,
        spa: true,
        rel: config.frontendMonitorVersion,
        uid: () => localStorage.getItem("username") || "",
        plugins: [],
      });

      __wpk.installAll();
    }
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
