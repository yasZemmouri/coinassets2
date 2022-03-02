import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { CoinCard } from "../components/CoinCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="coin-page">
      <div className="container">
        <div className="nav">
          <h1 className="heading">Watched Coins</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Coin" : "Coins"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="coin-grid">
            {watched.map((coin) => (
              <CoinCard coin={coin} key={coin.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-coins">No Coins in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
