import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition mt-4">
      <p className="mb-1 mb-sm-2">
        {props.idx + 1}.{props.definition.definition}
      </p>
      <div className="example ms-0 ms-sm-3 mb-1 mb-sm-3">
        <i>
          {" "}
          example:"
          {props.definition.example}"
        </i>
      </div>
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
