import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definitions[0].definition}
      </p>
      <p>
        <i>
          {" "}
          example:"
          {props.meaning.definitions[0].example}"
        </i>
      </p>
      <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
  );
}
