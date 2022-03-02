import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Watchlist } from "./pages/Watchlist";
import { Dashboard } from "./pages/Dashboard";
import { Assets } from "./pages/Assets";
import { Watched } from "./pages/Watched";
import { Add } from "./pages/Add";
import { Transactions } from "./pages/Transactions"
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Watchlist" element={<Watchlist/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/watched" element={<Watched/>} />
          <Route path="/assets" element={<Assets/>} />
          <Route path="/transactions" element={<Transactions/>} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
