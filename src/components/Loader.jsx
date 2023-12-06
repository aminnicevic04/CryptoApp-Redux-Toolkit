import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = () => (
  <>
    <div
      className="loader"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1 style={{ marginBottom: "30px", color: " rgb(0, 21, 80)" }}>
        Error fatching data
      </h1>
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      />{" "}
    </div>
  </>
);

export default Loader;
