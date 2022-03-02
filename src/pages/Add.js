import React, { useState } from "react";
import { ResultCard } from "../components/ResultCard";
import axios from 'axios';

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cdb58e89ae831ae108ab8d4742fa6bbd&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    ).then(res=>{
          if (!res.errors) {
          setResults(res.data.results);
          console.log(res);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a coin"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((coin) => (
                <li key={coin.id}>
                  <ResultCard coin={coin} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
