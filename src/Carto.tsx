import React from "react";
import Polygon from "./components/Polygon";
import { CARTO_DATA } from "./data/carto.data";
import { LAND_SHAPE_DATA } from "./data/shapes/land.shape.data";
import { SMALLIE_SHAPE_DATA } from "./data/shapes/smallie.shape.data";
import { STATIONS_SHAPES_DATA } from "./data/shapes/stations.shapes.data";

const {
  MICRO_COORD_LONG_METERS,
  MICRO_COORD_LAT_METERS,
  PIXELS_BY_METER,
  WIDTH,
  HEIGHT,
  LAT_LONG_METERS_PERCENTS,
} = CARTO_DATA;

const MICRO_COORD_LONG_VIEWPORT =
  MICRO_COORD_LONG_METERS * PIXELS_BY_METER * 1000 * (100 / WIDTH);
const MICRO_COORD_LAT_VIEWPORT =
  MICRO_COORD_LAT_METERS *
  PIXELS_BY_METER *
  1000 *
  (LAT_LONG_METERS_PERCENTS / HEIGHT);

function Carto() {
  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 100 ${LAT_LONG_METERS_PERCENTS}`}
    >
      <Polygon name="Grand terrain sauvage" points={LAND_SHAPE_DATA} />
      <Polygon name="Petit terrain agricole" points={SMALLIE_SHAPE_DATA} />
      {Object.entries(STATIONS_SHAPES_DATA).map(([station, coords]) => (
        <Polygon name={station} points={coords} fill={"#bb2"} />
      ))}
      <line
        x1={(100 - MICRO_COORD_LONG_VIEWPORT) / 2}
        y1={LAT_LONG_METERS_PERCENTS / 2}
        x2={MICRO_COORD_LONG_VIEWPORT + (100 - MICRO_COORD_LONG_VIEWPORT) / 2}
        y2={LAT_LONG_METERS_PERCENTS / 2}
        stroke="#aabbcc"
      />
      <line
        x1={50}
        y1={(LAT_LONG_METERS_PERCENTS - MICRO_COORD_LAT_VIEWPORT) / 2}
        x2={50}
        y2={
          MICRO_COORD_LAT_VIEWPORT +
          (LAT_LONG_METERS_PERCENTS - MICRO_COORD_LAT_VIEWPORT) / 2
        }
        stroke="#aabbcc"
      >
        {MICRO_COORD_LAT_METERS * PIXELS_BY_METER * 1000}
      </line>
    </svg>
  );
}

export default Carto;
