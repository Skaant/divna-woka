import React, { useState } from "react";
import { CARTO_DATA } from "../data/carto.data";
import { Coords } from "../types/Coords";

const {
  LONG_MIN,
  LAT_MIN,
  MICRO_COORD_LONG_METERS,
  MICRO_COORD_LAT_METERS,
  PIXELS_BY_METER,
  WIDTH,
  HEIGHT,
  LAT_LONG_METERS_PERCENTS,
} = CARTO_DATA;

function Polygon({
  name,
  points,
  fill = "#888",
}: {
  name: string;
  points: Coords[];
  fill?: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <polygon
        points={points
          .map(
            ([lat, long]) =>
              `${
                (((long - LONG_MIN) *
                  1000000 *
                  MICRO_COORD_LONG_METERS *
                  PIXELS_BY_METER) /
                  WIDTH) *
                100
              }, ${
                LAT_LONG_METERS_PERCENTS -
                (((lat - LAT_MIN) *
                  1000000 *
                  MICRO_COORD_LAT_METERS *
                  PIXELS_BY_METER) /
                  HEIGHT) *
                  LAT_LONG_METERS_PERCENTS
              }`
          )
          .join(" ")}
        fill={hovered ? "#e55" : fill}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {hovered && (
        <text
          x={points.reduce((x, [long]) => x + long, 0) / points.length}
          y={points.reduce((y, [long]) => y + long, 0) / points.length}
          style={{ fontSize: 4, zIndex: 1000 }}
        >
          {name}
        </text>
      )}
    </>
  );
}

export default Polygon;
