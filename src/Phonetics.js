import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <div>
        <strong>Phonetic: </strong>
        {props.phonetic.text}
      </div>
    </div>
  );
}
