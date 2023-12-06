import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { Col, Row, Typography, Select } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Options } = Select;

function CryptoDetails() {
  const { coinId } = useParams();
  return <div>CryptoDetails {coinId}</div>;
}

export default CryptoDetails;
