import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { CryptoDetails } from "./cryptoDetails";

const CryptoList = () => {
  const { store, actions } = useContext(Context);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    actions.getCrypto();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = store.basic.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCoins.map((basic, idx) => {
        return (
          <CryptoDetails
            key={basic.id}
            name={basic.name}
            price={basic.current_price}
            symbol={basic.symbol}
            cap={basic.total_volume}
            volume={basic.market_cap}
            image={basic.image}
            percent={basic.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};
export { CryptoList };
