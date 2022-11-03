import React from "react";

const CryptoDetails = ({
  image,
  name,
  symbol,
  volume,
  price,
  percent,
  cap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume}</p>

          {price < 0 ? (
            <p className="coin-percent red">{percent.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{percent.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">Mkt Cap: ${cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export { CryptoDetails };
