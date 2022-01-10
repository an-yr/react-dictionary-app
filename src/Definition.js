import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <p>
        {props.idx + 1}.{props.definition.definition}
      </p>
      <div className="exemple">
        <i>
          {" "}
          example:"
          {props.definition.example}"
        </i>
      </div>
      {props.definition.synonyms.map(function (synonym, idx) {
        if (idx < 10) {
          return (
            <div className="synonym-result" key={idx}>
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
