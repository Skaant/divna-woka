import React from "react";
import { Selection } from "../../types/Selection";

function UI({ selection }: { selection: Selection }) {
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
      {selection && selection.name}
    </div>
  );
}

export default UI;
