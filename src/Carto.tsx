import React from "react";
import { CARTO_DATA } from "./data/carto.data";

const {
  LONG_MIN,
  LONG_MAX,
  LAT_MIN,
  LAT_MAX,
  MICRO_COORD_LONG_METERS,
  MICRO_COORD_LAT_METERS,
  PIXELS_BY_METER,
} = CARTO_DATA;
const WIDTH =
  (LONG_MAX - LONG_MIN) * 1000000 * MICRO_COORD_LONG_METERS * PIXELS_BY_METER;
const HEIGHT =
  (LAT_MAX - LAT_MIN) * 1000000 * MICRO_COORD_LAT_METERS * PIXELS_BY_METER;
const LAT_LONG_RATIO = (LAT_MAX - LAT_MIN) / (LONG_MAX - LONG_MIN);

function Carto() {
  const POINTS: [number, number][] = [
    [44.518349, 5.675629],
    [44.518978, 5.675117],
    [44.519094, 5.675377],
    [44.51939, 5.675862],
  ];
  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 100 ${LAT_LONG_RATIO * 100}`}
    >
      {POINTS.map(([lat, long], index) => {
        return (
          <circle
            cx={
              (((long - LONG_MIN) *
                1000000 *
                MICRO_COORD_LONG_METERS *
                PIXELS_BY_METER) /
                WIDTH) *
              100
            }
            cy={
              100 -
              (((lat - LAT_MIN) *
                1000000 *
                MICRO_COORD_LAT_METERS *
                PIXELS_BY_METER) /
                HEIGHT) *
                100
            }
            r={1}
            fill="#ccbbaa"
          >
            {lat} {LAT_MIN} {long} {LONG_MIN}
          </circle>
        );
      })}
    </svg>
  );
}

export default Carto;
