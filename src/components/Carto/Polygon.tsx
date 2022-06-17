import React, { Dispatch, SetStateAction } from "react";
import { getLatLongToXY } from "../../helpers/getLatLongToXY";
import { Area } from "../../types/Area";
import { Selection } from "../../types/Selection";

function Polygon({
  fill = "#888",
  hover,
  setHover,
  selection,
  setSelection,
  ...area
}: Area & {
  fill?: string;
  hover: Selection;
  setHover: Dispatch<SetStateAction<Selection>>;
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
}) {
  const { id, coords } = area;
  const hovered = hover && id === hover.id;
  const selected = selection && id === selection.id;
  return (
    <>
      <polygon
        points={coords
          .map((latLong) => `${getLatLongToXY(latLong).join(", ")}`)
          .join(" ")}
        fill={hovered ? "#a22" : selected ? "#e55" : fill}
        onMouseEnter={() => setHover(area)}
        onMouseLeave={() => setHover(undefined)}
        onClick={() => setSelection(area)}
        style={{ cursor: "pointer" }}
      />
    </>
  );
}

export default Polygon;
