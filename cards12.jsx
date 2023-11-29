import React from "react";

function Cards12({ coin }) {
  return (
    <div>
      <p>Icon URL: {coin.iconUrl}</p>
      <p>Market Cap: {coin.marketCap}</p>
      <p>Price: {coin.price}</p>
      <p>Rank: {coin.rank}</p>
    </div>
  );
}

export default Cards12;
