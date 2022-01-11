import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics ms-2 d-flex mt-2">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="py-1 px-2 me-1 align-self-center"
      >
        Listen
      </a>
      <p className="p-0 m-0 align-self-center">{props.phonetic.text}</p>
    </div>
  );
}
