import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards12 from "./cards12";

const YourComponent = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "31688f1d59mshd92eb1977e8cb10p199c91jsnebce3fbfba5e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setCoinData(response.data.coins);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {coinData.map((coin) => (
        <Cards12 key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default YourComponent;
