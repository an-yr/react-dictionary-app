import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="result d-flex">
          <h2 className="m-0">{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, idx) => (
            <div key={idx}>
              <Phonetics phonetic={phonetic} />
            </div>
          ))}
        </div>
        <div className="result">
          {props.results.meanings.map(function (meaning, idx) {
            return (
              <div key={idx}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return null;
}
