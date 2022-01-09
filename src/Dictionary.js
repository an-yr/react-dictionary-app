import React, { useState } from "react";
import "./Dictionary.css";
import image_lupa from "./image_lupa.png";
import image_work from "./image_work.png";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // Documentation: https://dictionaryapi.dev/
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(api).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="search-background">
          <div className="container">
            <img src={image_work} className="work" alt="Girl working" />
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="search"
                  placeholder="Search word..."
                  autoFocus="on"
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                />
                <button type="submit" value="Search">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <p>Suggest words: environment, biodiversity, star,...</p>
            </div>
            <img
              className="lupa"
              src={image_lupa}
              alt="Two girls on the phone reading"
            />
          </div>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
