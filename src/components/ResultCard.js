import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ coin }) => {
  const {
    addCoinToWatchlist,
    addCoinToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedCoin = watchlist.find((o) => o.id === coin.id);
  let storedCoinWatched = watched.find((o) => o.id === coin.id);

  const watchlistDisabled = storedCoin
    ? true
    : storedCoinWatched
    ? true
    : false;

  const watchedDisabled = storedCoinWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {coin.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${coin.poster_path}`}
            alt={`${coin.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="nav">
          <h3 className="title">{coin.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{coin.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addCoinToWatchlist(coin)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addCoinToWatched(coin)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
