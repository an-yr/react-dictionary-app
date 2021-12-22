import React from "react";

export default function Meaning(props) {
  return (
    <div className="result">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definitions[0].definition}</p>
    </div>
  );
}
