import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          color: "#e4e3e6",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
