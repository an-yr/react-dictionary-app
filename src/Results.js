import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <div className="result">
          <h2>{props.results.word}</h2>
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
