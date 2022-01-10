import React from "react";
import "./Giphy.css";

export default function Giphy(props) {
  if (props.giphy) {
    return (
      <div className="Giphy">
        <div className="row">
          {props.giphy.data.map(function (giphy, idx) {
            return (
              <div className="col-3 p-0" key={idx}>
                <a
                  href={props.giphy.data[0].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={giphy.images.fixed_width.url}
                    alt="gifs"
                    className="my-3"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
