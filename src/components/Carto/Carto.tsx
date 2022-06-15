import React, { Dispatch, SetStateAction } from "react";
import Polygon from "../Polygon";
import { CARTO_DATA } from "../../data/carto.data";
import { LEVEL_0_AREAS } from "../../data/areas/level-0";
import { LEVEL_1_AREAS } from "../../data/areas/level-1";
import { LEVEL_2_AREAS } from "../../data/areas/level-2";
import { Selection } from "../../types/Selection";

const {
  MICRO_COORD_LAT_METERS,
  PIXELS_BY_METER,
  WIDTH,
  HEIGHT,
  LAT_LONG_METERS_PERCENTS,
  MICRO_COORD_LONG_VIEWPORT,
  MICRO_COORD_LAT_VIEWPORT,
} = CARTO_DATA;

const LEVELS_COLOR = ["#888", "#8aa", "#8cc"];

function Carto({
  selection,
  setSelection,
}: {
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
}) {
  return (
    <svg
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 100 ${LAT_LONG_METERS_PERCENTS}`}
    >
      {[LEVEL_0_AREAS, LEVEL_1_AREAS, LEVEL_2_AREAS].map((areas, index) =>
        areas.map((area) => (
          <Polygon
            key={area.id}
            {...area}
            fill={LEVELS_COLOR[index]}
            selection={selection}
            setSelection={setSelection}
          />
        ))
      )}
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
