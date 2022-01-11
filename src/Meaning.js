import React from "react";
import Definition from "./Definition";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="pt-4 m-0">{props.meaning.partOfSpeech}</h4>
      <div>
        {props.meaning.definitions.map((definition, idx) => (
          <div key={idx}>
            <Definition definition={definition} idx={idx} />
          </div>
        ))}
      </div>
    </div>
  );
}
