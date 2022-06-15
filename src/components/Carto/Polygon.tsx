import React, { Dispatch, SetStateAction } from "react";
import { CARTO_DATA } from "../../data/carto.data";
import { Area } from "../../types/Area";
import { Selection } from "../../types/Selection";

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
  fill = "#888",
  selection,
  setSelection,
  ...area
}: Area & {
  fill?: string;
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
}) {
  const { id, coords } = area;
  const selected = id === selection?.id;
  return (
    <>
      <polygon
        points={coords
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
        fill={selected ? "#e55" : fill}
        onMouseEnter={() => setSelection(area)}
        onMouseLeave={() => setSelection(undefined)}
        style={{ cursor: "pointer" }}
      />
    </>
  );
}

export default Polygon;
