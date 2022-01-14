import React from "react";
import "./Example.css";

export default function Exemple(props) {
  if (props.example) {
    return (
      <div className="Example ms-0 ms-sm-3 mb-1 mb-sm-3">
        <i>
          {" "}
          example:"
          {props.example}"
        </i>
      </div>
    );
  } else {
    return null;
  }
}
