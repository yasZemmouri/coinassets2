import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { CoinCard } from "../components/CoinCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="coin-page">
      <div className="container">
        <div className="nav">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Coin" : "Coins"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="coin-grid">
            {watchlist.map((coin) => (
              <CoinCard coin={coin} key={coin.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-coins">No coins in your watchlist! Add some!</h2>
        )}
      </div>
    </div>
  );
};
