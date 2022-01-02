import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="result">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definitions[0].definition}
      </p>
      <p>
        <strong>Example: </strong>
        {props.meaning.definitions[0].example}
      </p>
      <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
  );
}
