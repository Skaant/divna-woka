import React from "react";
import { CARTO_DATA } from "../../data/carto.data";

const { PIXELS_BY_METER } = CARTO_DATA;

function CoordsScale() {
  return (
    <div
      style={{
        marginTop: "8px",
        marginRight: "24px",
        height: PIXELS_BY_METER * 100,
        width: PIXELS_BY_METER * 100,
        borderTop: "solid 1px black",
        borderRight: "solid 1px black",
      }}
    >
      100m
    </div>
  );
}

export default CoordsScale;
