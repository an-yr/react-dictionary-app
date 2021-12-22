import React, { useState } from "react";
import "./Dictionary.css";
import image_lupa from "./image_lupa.png";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentation: https://dictionaryapi.dev/

    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(api).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          className="input"
          type="search"
          placeholder="Search word..."
          autoFocus="on"
          onChange={handleKeywordChange}
        />
        <button type="submit" value="Search">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <img
        className="lupa"
        src={image_lupa}
        alt="Two girls on the phone reading"
      />
      <Results results={results} />
    </div>
  );
}
