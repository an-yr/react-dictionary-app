import React, { useState } from "react";
import "./Dictionary.css";
import image_lupa from "./image_lupa.png";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

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
      {/* results */}
      {/* <div className="results">
        <div className="result">
          <h2>Word</h2>
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
          laborum. Unde praesentium, enim necessitatibus soluta sapiente modi
          quaerat. Totam temporibus et quo aliquam vitae, blanditiis labore.
          Minima earum laborum corrupti!
        </div>
        <div className="result">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque
          rem molestiae saepe maxime ipsam necessitatibus provident odio
          aspernatur, a odit laudantium quia architecto libero dignissimos
          assumenda eaque iure sed!
        </div>
        <div className="result">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque
          rem molestiae saepe maxime ipsam necessitatibus provident odio
          aspernatur, a odit laudantium quia architecto libero dignissimos
          assumenda eaque iure sed!
        </div>
      </div> */}
    </div>
  );
}
