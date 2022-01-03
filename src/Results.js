import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <div className="result">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, idx) => (
            <div key={idx}>
              <Phonetics phonetic={phonetic} />
            </div>
          ))}
        </div>
        {props.results.meanings.map(function (meaning, idx) {
          return (
            <div key={idx}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
