import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addCoinToWatchlist = (coin) => {
    dispatch({ type: "ADD_COIN_TO_WATCHLIST", payload: coin });
  };

  const removeCoinFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_COIN_FROM_WATCHLIST", payload: id });
  };

  const addCoinToWatched = (coin) => {
    dispatch({ type: "ADD_COIN_TO_WATCHED", payload: coin });
  };

  const moveToWatchlist = (coin) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: coin });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addCoinToWatchlist,
        removeCoinFromWatchlist,
        addCoinToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
