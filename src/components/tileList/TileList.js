import React from "react";
import { Tile } from "./../tile/Tile.js";

export const TileList = (props) => {
  return (
    <div>
      {props.list.map((object, index) => (
        <Tile key={index} object={object} />
      ))}
    </div>
  );
};
