import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="result d-flex mx-2 my-3 mx-md-5 p-4">
          <h2 className="m-0">{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, idx) => (
            <div key={idx}>
              <Phonetics phonetic={phonetic} />
            </div>
          ))}
        </div>
        <div className="result mx-2 my-3 mx-md-5 p-4 pt-0">
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
