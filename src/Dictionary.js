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
      <div className="Dictionary container">
        <div className="search-background mx-2 my-3 mx-md-5 p-4 p-sm-0">
          <div className="d-flex">
            <img
              src={image_work}
              className="m-auto d-sm-block d-none"
              alt="Girl working"
            />
            <div>
              <form className="m-0 ms-3 ms-sm-0" onSubmit={handleSubmit}>
                <input
                  className="input px-3 py-1 m-0 mt-sm-5 mb-sm-1 "
                  type="search"
                  placeholder="Search word..."
                  autoFocus="on"
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                />
                <button className="ms-2 px-2 py-1" type="submit" value="Search">
                  <i className="fas fa-search"></i>
                </button>
                <p className="ms-4 m-0">
                  i.e.: environment, biodiversity, star,...
                </p>
              </form>
            </div>
            <img
              className="m-auto d-sm-block d-none"
              src={image_lupa}
              alt="Two girls on the phone reading"
            />
          </div>
        </div>
        <Results results={results} />
        <div className="result mx-2 my-3 mx-md-5 py-3">
          <div className="ps-5">
            <Giphy giphy={giphy} />
          </div>
          <img
            src={giphy_logo}
            className="giphy-logo m-auto d-block "
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
