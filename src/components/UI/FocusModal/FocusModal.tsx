import React, { ReactElement } from "react";
import { Selection } from "../../../types/Selection";

function FocusModal({
  focus,
  children,
}: {
  focus: Selection;
  children?: ReactElement;
}) {
  return (
    <div
      style={{
        marginBottom: "-1rem",
        padding: "1rem 1rem 2rem",
        boxShadow: "0 0 5px black",
        backgroundColor: "white",
        height: "max-content",
        maxHeight: "60vh",
        overflowY: "auto",
        width: "50%",
        borderRadius: "1rem",
        pointerEvents: "all",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        {focus?.name}
      </h2>
      {children}
    </div>
  );
}

export default FocusModal;
