import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState } from "react";

function CryptoCurencies() {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  console.log();

  return <div>CryptoCurencies</div>;
}

export default CryptoCurencies;
