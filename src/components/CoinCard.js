import React from "react";
import { CoinControls } from "./CoinControls";

export const CoinCard = ({ coin, type }) => {
  return (
    <div className="coin-card">
      <div className="overlay"></div>

      {/* <img
        src={`https://image.tmdb.org/t/p/w200${coin.poster_path}`}
        alt={`${coin.title} Poster`}
      /> */}
      <img
        src={coin.icon}
        alt={`${coin.title} Poster`}
      />



      <CoinControls type={type} coin={coin} />
    </div>
  );
};
