import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition mt-4">
      <p className="mb-1 mb-sm-2">
        {props.idx + 1}.{props.definition.definition}
      </p>
      <Example example={props.definition.example} />

      {props.definition.synonyms.map(function (synonym, idx) {
        if (idx < 10) {
          return (
            <div className="synonym-result px-2 py-1" key={idx}>
              <Synonyms synonyms={synonym} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
