import React, { Dispatch, SetStateAction } from "react";
import { Selection } from "../../types/Selection";
import CoordsScale from "./CoordsScale";
import FocusModal from "./FocusModal/FocusModal";
import SelectionModal from "./FocusModal/SelectionModal";

function UI({
  hover,
  selection,
  setSelection,
}: {
  hover: Selection;
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        height: "100vh",
        left: 0,
        width: "100vw",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ paddingLeft: "8px" }}>
          <h1 style={{ fontSize: "1rem", marginBottom: "4px" }}>
            Les Terrasses de la Flemme
          </h1>
          <p style={{ fontSize: "0.8rem", marginTop: "4px" }}>
            05140 St Pierre d'Argençon
          </p>
        </div>
        <CoordsScale />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {hover ? (
          <FocusModal focus={hover} />
        ) : (
          selection && (
            <SelectionModal selection={selection} setSelection={setSelection} />
          )
        )}
      </div>
    </div>
  );
}

export default UI;
