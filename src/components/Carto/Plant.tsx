import React, { Dispatch, SetStateAction } from "react";
import { CARTO_DATA } from "../../data/carto.data";
import { getLatLongToXY } from "../../helpers/getLatLongToXY";
import { Plant as PlantType } from "../../types/Plant";
import { Selection } from "../../types/Selection";

function Plant({
  plant,
  hover,
  setHover,
  selection,
  setSelection,
  fill = "#44b",
}: {
  plant: PlantType;
  hover: Selection;
  setHover: Dispatch<SetStateAction<Selection>>;
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
  fill?: string;
}) {
  const [x, y] = getLatLongToXY(plant.coords);
  const hovered = hover && plant.id === hover.id;
  const selected = selection && plant.id === selection.id;
  return (
    <circle
      cx={x}
      cy={y}
      r={0.4 * CARTO_DATA.PIXELS_BY_METER}
      fill={hovered ? "#a22" : selected ? "#e55" : fill}
      onClick={() => setSelection(plant)}
      onMouseEnter={() => setHover(plant)}
      onMouseLeave={() => setHover(undefined)}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Plant;
