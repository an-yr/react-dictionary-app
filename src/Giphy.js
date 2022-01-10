import React from "react";

export default function Giphy(props) {
  return (
    <div className="Giphy">
      <div className="row">
        {props.giphy.data.map(function (giphy, idx) {
          return (
            <div className="col-4" key={idx}>
              <img
                src={giphy.images.fixed_height.url}
                alt="gifs"
                className=""
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
