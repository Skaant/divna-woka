import React, { Dispatch, SetStateAction } from "react";
import { addFlora } from "../../helpers/addFlora";
import { Area } from "../../types/Area";
import { Flora } from "../../types/Flora";
import { Selection } from "../../types/Selection";
import CoordsScale from "./CoordsScale";

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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
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
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {(hover || selection) && (
          <div
            style={{
              marginBottom: "-1rem",
              padding: "1rem 1rem 2rem",
              boxShadow: "0 0 5px black",
              backgroundColor: "white",
              height: hover ? "max-content" : "100vh",
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
              {(hover || selection)?.name}
            </h2>
            {!hover &&
              ((selection as Area).flora || (selection as Area).contains) && (
                <div>
                  <h3 style={{ marginLeft: "8px" }}>Liste des plantes</h3>
                  <ul>
                    {Object.entries(
                      ((selection as Area).contains || []).reduce<Flora>(
                        (floraSum, shape) =>
                          (shape as Area).flora
                            ? addFlora(floraSum, (shape as Area).flora)
                            : floraSum,
                        (selection as Area).flora || {}
                      )
                    ).map(([plant, { count, individuals }]) => {
                      return (
                        <li>
                          <>
                            {plant} : {count}
                            {count && individuals && individuals.length
                              ? " et "
                              : ""}
                            {individuals?.map(({ name }) => name).join(", ")}
                          </>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            {!hover && (selection as Area).contains && (
              <div>
                <h3>Contiens</h3>
                <ul>
                  {(selection as Area).contains?.map((shape) => (
                    <li style={{ fontWeight: "bold" }}>
                      <button onClick={() => setSelection(shape)}>
                        {shape.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UI;
