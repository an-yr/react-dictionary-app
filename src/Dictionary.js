import React, { useState } from "react";
import "./Dictionary.css";
import image_lupa from "./image_lupa.png";
import image_work from "./image_work.png";
import giphy_logo from "./giphy_logo.png";
import axios from "axios";
import Results from "./Results";
import Giphy from "./Giphy";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [giphy, setGiphy] = useState();

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleGiphyResponse(response) {
    setGiphy(response.data);
  }

  function search() {
    // Documentation: https://dictionaryapi.dev/
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(api).then(handleResponse);

    let giphyApi = `https://api.giphy.com/v1/gifs/search?api_key=mzUhnle47A20ME1CXNjc3vX3CtXydElb&q=${keyword}}&limit=12&offset=0&rating=g&lang=en`;
    axios.get(giphyApi).then(handleGiphyResponse);
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
          <div className="d-flex">
            <img
              src={image_work}
              className="m-auto d-block"
              alt="Girl working"
            />
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
              <p className="p-0 m-0">
                i.e.: environment, biodiversity, star,...
              </p>
            </div>
            <img
              className="m-auto d-block"
              src={image_lupa}
              alt="Two girls on the phone reading"
            />
          </div>
        </div>
        <Results results={results} />
        <div className="result">
          <Giphy giphy={giphy} />
          <img
            src={giphy_logo}
            className="giphy-logo m-auto d-block"
            alt="Giphy logo"
          />
        </div>
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
