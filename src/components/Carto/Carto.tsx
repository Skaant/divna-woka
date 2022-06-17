import React, { Dispatch, SetStateAction } from "react";
import Polygon from "./Polygon";
import { CARTO_DATA } from "../../data/carto.data";
import { LEVEL_0_AREAS } from "../../data/areas/level-0";
import { LEVEL_1_AREAS } from "../../data/areas/level-1";
import { LEVEL_2_AREAS } from "../../data/areas/level-2";
import { Selection } from "../../types/Selection";
import { Flora } from "../../types/Flora";
import { SPECIES } from "../../data/species/species.enum";
import Plant from "./Plant";

const { WIDTH, HEIGHT, LAT_LONG_METERS_PERCENTS } = CARTO_DATA;

const LEVELS_COLOR = ["#888", "#8aa", "#8cc"];

function Carto({
  hover,
  setHover,
  selection,
  setSelection,
}: {
  hover: Selection;
  setHover: Dispatch<SetStateAction<Selection>>;
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
            hover={hover}
            setHover={setHover}
            selection={selection}
            setSelection={setSelection}
          />
        ))
      )}
      {[LEVEL_0_AREAS, LEVEL_1_AREAS, LEVEL_2_AREAS].map((areas) =>
        areas
          .filter((area) => area.flora)
          .map(({ flora }) =>
            Object.entries(flora as Flora).map(([species, { individuals }]) =>
              individuals?.map(({ coords, ...plantData }) => {
                const plant = {
                  ...plantData,
                  coords,
                  species: species as SPECIES,
                };
                return (
                  <Plant
                    plant={plant}
                    hover={hover}
                    setHover={setHover}
                    selection={selection}
                    setSelection={setSelection}
                  />
                );
              })
            )
          )
      )}
    </svg>
  );
}

export default Carto;
